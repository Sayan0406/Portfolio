'use client'

import {
  Box,
  ChakraProvider,
  createSystem,
  defaultConfig,
} from '@chakra-ui/react'
import { ReactNode } from 'react'


export const system = createSystem(defaultConfig, {
  globalCss: {
    'html , body' : {
      lineHeight :"1",
      scrollBehavior : "smooth",
      bg : "#030711",
      color : "white",
    },
   '::-webkit-scrollbar': {
      width: '10px',
      zIndex : "1"
    },
   

    /* Track */
    '::-webkit-scrollbar-track': {
      bg: 'gray.950',
    },
    /* Handle */
    '::-webkit-scrollbar-thumb': {
      bg: 'gray.700',
      borderRadius: '10px',
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      bg: 'white',
    },
  },

  
})

export function Provider(props: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <Box >{props.children}</Box>
    </ChakraProvider>
  )
}
