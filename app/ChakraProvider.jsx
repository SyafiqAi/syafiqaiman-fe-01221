// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "red",
      // ...
      900: "#1a202c",
    },
  },
})

export default function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

