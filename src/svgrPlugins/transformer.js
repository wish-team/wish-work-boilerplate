// eslint-disable-next-line @typescript-eslint/no-var-requires
const { types: t } = require('@babel/core')

const addJSXAttribute = () => {
  return {
    visitor: {
      JSXOpeningElement(path) {
        path.get('attributes').forEach((attribute) => {
          if (t.isJSXAttribute(attribute.node) && t.isJSXIdentifier(attribute.node.name)) {
            if (['width', 'height'].includes(attribute.node.name.name)) {
              attribute.remove()
            } else if (
              attribute.node.name.name === 'fill' &&
              attribute.node.value.value !== 'none'
            ) {
              attribute.node.value = t.stringLiteral('currentColor')
            } else if (
              attribute.node.name.name === 'stroke' &&
              attribute.node.value.value !== 'none'
            ) {
              attribute.node.value = t.stringLiteral('currentColor')
            }
          }
        })
      },
    },
  }
}

module.exports = addJSXAttribute
