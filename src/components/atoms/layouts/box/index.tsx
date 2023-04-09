import { Component, ComponentProps } from 'solid-js'

export type BoxProps = ComponentProps<'div'>

export const Box: Component<BoxProps> = (props) => {
  return <div {...props} />
}
