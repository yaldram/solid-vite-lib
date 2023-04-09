import { cva, VariantProps } from 'class-variance-authority'

/* spacing tokens */
const spacing = {
  0: '0rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '2.25rem',
  '2xl': '3rem',
  '3xl': '5rem',
  '4xl': '10rem',
  '5xl': '14rem',
  '6xl': '18rem',
  '7xl': '24rem',
  '8xl': '32rem',
  '9xl': '40rem',

  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',

  screen: '100vw',
  full: '100%',
  px: '1px',

  1: '0.125rem',
  2: '0.25rem',
  3: '0.375rem',
  4: '0.5rem',
  5: '0.625rem',
  6: '0.75rem',
  7: '0.875rem',
  8: '1rem',
  9: '1.25rem',
  10: '1.5rem',
  11: '1.75rem',
  12: '2rem',
  13: '2.25rem',
  14: '2.5rem',
  15: '2.75rem',
  16: '3rem',
  17: '3.5rem',
  18: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
}

type SpacingMap = Record<keyof typeof spacing, string>

/**
 * generate cva variants for paddings, margins
 * @classPrefix property eg. p, pt, m, mt, gap, etc.
 * @returns a map of color variants
 * eg -{ xs: pt-xs } or { lg: gap-lg }
 */
function generateSpacingMap(classPrefix: string) {
  return Object.keys(spacing).reduce(
    (accumulator, token) => ({
      ...accumulator,
      [token]: `${classPrefix}-${token}` // xs : p-xs
    }),
    {} as SpacingMap
  )
}

/**
 * Will contain all padding variants
 * eg: p: { xxs: p-xxs, xs: p-xs, ... } &
 * pt: { xxs: pt-xxs, xs: pt-xxs, ... }
 */
export const padding = cva([], {
  variants: {
    p: generateSpacingMap('p'),
    px: generateSpacingMap('px'),
    py: generateSpacingMap('py'),
    pt: generateSpacingMap('pt'),
    pr: generateSpacingMap('pr'),
    pb: generateSpacingMap('pb'),
    pl: generateSpacingMap('pl')
  }
})

export type PaddingVariants = VariantProps<typeof padding>

/**
 * Will contain all margin variants
 * eg: m: { xxs: m-xxs, xs: m-xs, ... }
 * mt: { xxs: mt-xxs, xs: mt-xxs, ... }
 */
export const margin = cva([], {
  variants: {
    m: generateSpacingMap('m'),
    mt: generateSpacingMap('mt'),
    mx: generateSpacingMap('mx'),
    my: generateSpacingMap('my'),
    mr: generateSpacingMap('mr'),
    mb: generateSpacingMap('mb'),
    ml: generateSpacingMap('ml')
  }
})

export type MarginVariants = VariantProps<typeof margin>

/**
 * Will contain all margin variants
 * eg: gap: { xxs: gap-xxs, xs: gap-xs, ... }
 */
export const flexGap = cva([], {
  variants: {
    gap: generateSpacingMap('gap')
  }
})

export type FlexGapVariants = VariantProps<typeof flexGap>

/**
 * Used for storybook controls returns -
 * options: ['xxs', 'xs', 'sm', ...]
 * labels: { xxs: xxs (0.6rem), xs: xs (0.8rem), ... }
 */
export function spacingControls() {
  const spacingOptions = Object.keys(spacing)
  const spacingLabels = Object.entries(spacing).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `${key} (${value})`
    }),
    {}
  )

  return { spacingOptions, spacingLabels }
}
