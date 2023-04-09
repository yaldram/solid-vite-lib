import { cva, VariantProps } from 'class-variance-authority'
import { Component, ComponentProps, mergeProps, splitProps } from 'solid-js'

import { ColorScheme } from '../../../cva-utils'

import './badge.scss'

const badge = cva(['badge'], {
  variants: {
    size: {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl'
    },
    enableShadow: {
      true: 'enable-shadow'
    },
    bordered: {
      true: 'is-bordered'
    },
    isFlat: {
      true: 'is-flat'
    },
    isSquared: {
      true: 'is-squared'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type BadgeProps = VariantProps<typeof badge> &
  ComponentProps<'span'> & {
    colorScheme?: ColorScheme
  }

export const Badge: Component<BadgeProps> = (props) => {
  const mergedProps = mergeProps({ colorScheme: 'neutral' }, props)

  const [variants, colorScheme, delegated] = splitProps(
    mergedProps,
    ['size', 'enableShadow', 'bordered', 'isFlat', 'isSquared'],
    ['colorScheme']
  )

  return (
    <span
      class={badge({
        size: variants.size,
        enableShadow: variants.enableShadow,
        bordered: variants.bordered,
        isFlat: variants.isFlat,
        isSquared: variants.isSquared,
        className: colorScheme.colorScheme
      })}
      {...delegated}
    />
  )
}
