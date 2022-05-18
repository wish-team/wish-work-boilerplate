import React from 'react'

type Props = {
  condition: Boolean
  wrapper: Function
  children: React.ReactElement
}

const ConditionalWrapper = ({ condition, wrapper, children }: Props) =>
  condition ? wrapper(children) : children

// Export default
export default ConditionalWrapper
