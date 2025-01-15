"use client"

import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ReactNode } from "react"

export function Provider(props: { children: ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
     <Box bgColor="#030711" minH="100vh" width="100%" color={'white'}>
      {props.children}
      </Box>
    </ChakraProvider>
  )
}
