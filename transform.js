// transform.js
function transformNode(input) {
  // Here, 'input' is whatever text / muiscan snippet you paste in
  // The MCP uses your prompt to generate the proper <mui-*> output

  // For now, we just return the input directly,
  // because your MCP prompt contains all the rules
  return input;
}

module.exports = { transformNode };
