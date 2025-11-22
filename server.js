#!/usr/bin/env node
const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} = require("@modelcontextprotocol/sdk/types.js");
const { transformNode } = require("./transform.js");
const { muiPrompts } = require("./mui-prompts.js");

const server = new Server(
  {
    name: "Muiscan",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
      prompts: {},
    },
  }
);

// List available prompts
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: [
      {
        name: "mui-component-guide",
        description: "Guide for converting UI to MUI web components",
      },
    ],
  };
});

// Get prompt content
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  if (request.params.name === "mui-component-guide") {
    return {
      messages: muiPrompts,
    };
  }
  throw new Error(`Unknown prompt: ${request.params.name}`);
});

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "translate_muiscan",
        description: "Transform muiscan JSON to web components",
        inputSchema: {
          type: "object",
          properties: {
            json: {
              type: "string",
              description: "The muiscan JSON to transform",
            },
          },
          required: ["json"],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "translate_muiscan") {
    const json = request.params.arguments.json;
    const output = transformNode(json);

    return {
      content: [
        {
          type: "text",
          text: output,
        },
      ],
    };
  }

  throw new Error(`Unknown tool: ${request.params.name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
