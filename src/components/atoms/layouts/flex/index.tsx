import { Component, splitProps } from 'solid-js'
import { cva, cx, VariantProps } from 'class-variance-authority'

import { flexGap, FlexGapVariants } from '../../../../cva-utils'
import { Box, BoxProps } from '../box'

import './flex.scss'

const flex = cva(['flex'], {
  variants: {
    direction: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse'
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    },
    align: {
      start: 'align-start',
      end: 'align-end',
      center: 'align-center',
      baseline: 'align-baseline',
      stretch: 'align-stretch'
    },
    wrap: {
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
      nowrap: 'flex-nowrap'
    }
  },
  defaultVariants: {
    direction: 'row'
  }
})

export type FlexProps = VariantProps<typeof flex> & FlexGapVariants & BoxProps

export const Flex: Component<FlexProps> = (props) => {
  const [variants, className, delegated] = splitProps(
    props,
    ['direction', 'justify', 'align', 'gap', 'wrap'],
    ['class']
  )

  return (
    <Box
      class={cx(
        flexGap({ gap: variants.gap }),
        flex({
          direction: variants.direction,
          justify: variants.justify,
          align: variants.align,
          wrap: variants.wrap,
          className: className.class
        })
      )}
      {...delegated}
    />
  )
}

export interface SpacerProps extends BoxProps {}

export const Spacer: Component<SpacerProps> = (props) => {
  return <Box class='spacer' {...props} />
}
