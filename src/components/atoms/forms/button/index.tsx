import { Component, ComponentProps, splitProps } from 'solid-js'
import { cva, VariantProps } from 'class-variance-authority'

import { ColorScheme } from '../../../../cva-utils'

import './button.scss'

const button = cva(['button'], {
  variants: {
    size: {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl'
    },
    isRounded: {
      true: 'is-rounded'
    },
    isAuto: {
      true: 'is-auto'
    },
    isShadow: {
      true: 'is-shadow'
    },
    variant: {
      solid: 'solid',
      ghost: 'ghost',
      flat: 'flat',
      light: 'light',
      bordered: 'bordered'
    }
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md'
  }
})

export type ButtonProps = VariantProps<typeof button> &
  ComponentProps<'button'> & {
    colorScheme?: Exclude<ColorScheme, 'neutral'> | 'gradient'
  }

export const Button: Component<ButtonProps> = (props) => {
  const [variants, colorScheme, children, delegated] = splitProps(
    props,
    ['size', 'isRounded', 'isAuto', 'isShadow', 'variant'],
    ['colorScheme'],
    ['children']
  )

  return (
    <button
      class={button({
        isAuto: variants.isAuto,
        size: variants.size,
        isRounded: variants.isRounded,
        isShadow: variants.isShadow,
        variant: variants.variant,
        className: colorScheme.colorScheme || 'primary'
      })}
      {...delegated}
    >
      <div class='button-text'>{children.children}</div>
    </button>
  )
}
