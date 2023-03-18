const template = ({ imports, interfaces, componentName, jsx, exports }, { tpl }) => {
  jsx.openingElement.name.name = 'SvgIcon'
  jsx.closingElement.name.name = 'SvgIcon'

  jsx.openingElement.attributes.push({
    type: 'JSXAttribute',
    name: { type: 'JSXIdentifier', name: 'preserveAspectRatio' },
    value: { type: 'StringLiteral', value: 'xMidYMid meet' },
  })


    jsx.openingElement.attributes.push({
      type: "JSXAttribute",
      name: { type: "JSXIdentifier", name: "sx" },
      value: {
        type: "JSXExpressionContainer",
        expression: {
          type: "ObjectExpression",
          properties: [
            {
              type: "SpreadElement",
              argument: {
                type: "Identifier",
                name: "sx",
              },
            },
            {
              type: "ObjectProperty",
              key: { type: "Identifier", name: "fill" },
              value: { type: "StringLiteral", value: jsx.openingElement.attributes.find((attr) => attr.name.name === 'fill')?.value?.value || "none" },
            },
          ],
        },
      },
    });

  jsx.openingElement.attributes.push({
    type: "JSXSpreadAttribute",
    argument: {
      type: "Identifier",
      name: "other",
    },
  });

  return tpl`
    import { SvgIcon } from "@mui/material";
    ${imports};

    ${interfaces};
    
    const ${componentName} = (props) => {
      const { sx, ...other } = props;
      return (
        ${jsx}
      );
    };
     
    ${exports};
  `
}
  
  module.exports = template