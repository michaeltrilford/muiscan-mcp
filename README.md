# Muiscan MCP Server

Translate Figma files to MUI Design System components via the Model Context Protocol (MCP).

## What is Muiscan?

Muiscan converts Figma designs into production-ready MUI (Michael UI) web components via the Model Context Protocol.

## Getting Started with MUI Design System

Before using Muiscan, set up your MUI project:

### Create Mui App

Get started quickly with the official MUI starter template:

**[Create Mui App](https://github.com/michaeltrilford/create-mui-app)**

A lightweight starter template for building accessible, fast-loading interfaces using Mui Web Components.

```bash
# Clone the starter template
git clone https://github.com/michaeltrilford/create-mui-app.git
cd create-mui-app
npm install
npm start
```

Once you have your MUI project set up, you can use Muiscan to convert Figma designs directly into MUI components.

## Installation

1. **Clone or download this repository**

   ```bash
   git clone https://github.com/yourusername/muiscan-mcp.git
   cd muiscan-mcp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Claude Desktop**
   Add the Muiscan server to your Claude Desktop configuration file:

   **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
   **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

   Add this configuration (update the path to match your installation):

   ```json
   {
     "mcpServers": {
       "muiscan": {
         "command": "node",
         "args": ["/Users/AddYourPath/muiscan-mcp/server.js"]
       }
     }
   }
   ```

4. **Restart Claude Desktop**
   After saving the configuration, restart Claude Desktop for the changes to take effect.

## Usage

Once installed, Muiscan provides:

### Tools

- **`translate_muiscan`**: Transform muiscan JSON to web components

### Prompts

- **`mui-component-guide`**: Guide for converting UI to MUI web components

### In Claude Desktop

1. Open Claude Desktop
2. Go to **Settings** → **Tools and MCP**
3. Verify that "Muiscan" appears in your MCP servers list
4. **Export from Figma**:
   - Open your design in Figma
   - Select the frame/component you want to convert
   - Run the Muiscan Figma Plugin to copy the layout
5. **Convert in Cursor or play.muibook.com**:
   - Paste the scanned layout into your prompt
   - Ask the model/prompt to convert it to MUI web components
   - The MCP will use the component guide to generate the code

## Complete Workflow

```
Figma Design
    ↓
Muiscan Figma Plugin (Export)
    ↓
MUISON JSON (Copy to clipboard)
    ↓
Paste into Cursor or play.muibook.com
    ↓
Muiscan MCP (Transform)
    ↓
MUI Web Components
```

## Supported Components

Muiscan supports a comprehensive set of MUI components including:

- **Inputs**: field, checkbox, input, select, switch, file-upload, progress
- **Content**: accordion, heading, body, code, dialog, drawer, quote, slat, smart-card, table, image, list
- **Layout**: card, container, responsive, rule, v-stack, h-stack, grid
- **Feedback**: alert, badge, message, loader
- **Actions**: button, button-group, chip, dropdown, link
- **Navigation**: carousel-controller, stepper, tab-controller, tab-bar

## Project Structure

```
muiscan-mcp/
├── server.js           # Main MCP server
├── mui-prompts.js      # Component guide and examples
├── transform.js        # JSON transformation logic
├── mcp.json            # Server configuration
├── package.json        # Node.js dependencies
└── README.md           # This file
```

## Development

To test the server locally:

```bash
npm start
```

## Troubleshooting

### Server not appearing in Claude Desktop

1. Check that the path in `claude_desktop_config.json` is correct
2. Verify Node.js is installed: `node --version`
3. Restart Claude Desktop completely
4. Check Claude Desktop logs for errors

### Changes not taking effect

1. Save all configuration files
2. Fully quit and restart Claude Desktop (not just close the window)
3. Clear any cached MCP connections

## License

MIT

## Contributing

Contributions welcome! Please open an issue or submit a pull request.
