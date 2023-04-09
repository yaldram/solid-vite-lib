import { Component, ComponentProps, splitProps } from 'solid-js'
import { cva, cx } from 'class-variance-authority'

import {
  colors,
  ColorVariants,
  bgColors,
  BgColorVariants,
  padding,
  PaddingVariants,
  margin,
  MarginVariants
} from '../../../../cva-utils'

import './box.scss'

const box = cva(['box'])

export type BoxProps = ColorVariants &
  BgColorVariants &
  PaddingVariants &
  MarginVariants &
  ComponentProps<'div'>

export const Box: Component<BoxProps> = (props) => {
  const [colorClasses, paddingClasses, marginClasses, className, delegated] =
    splitProps(
      props,
      ['color', 'bg'],
      ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'],
      ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'],
      ['class']
    )

  return (
    <div
      class={cx(
        colors({ color: colorClasses.color }),
        bgColors({ bg: colorClasses.bg }),
        padding({ ...paddingClasses }),
        margin({ ...marginClasses }),
        box({ className: className.class })
      )}
      {...delegated}
    />
  )
}
