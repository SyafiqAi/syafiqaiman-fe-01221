// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: {
      'darkGray': '#1e1e1eff',
      'gold': '#525252ff',
    },
    secondary: {
      'yellow': '#fed530ff',
      'mediumGray': '#3d3d3dff'
    },
    text: {
      'title': '#2e2e2eff',
    },
    other: {
      'gray': '#2e2e2eff',
      'imagePlaceholder': '#333333'
    }
  },
})

export default function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

