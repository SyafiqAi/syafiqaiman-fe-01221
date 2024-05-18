// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    yellow: '#fed530ff'
  },
})

export default function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

