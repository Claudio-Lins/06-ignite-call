import { Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('div', {
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - (100vw - 1160px)/2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  gap: '$20',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`>${Heading}`]: {
    '@media (max-width: 768px)': {
      fontSize: '$6xl',
    },
  },

  [`>${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})
