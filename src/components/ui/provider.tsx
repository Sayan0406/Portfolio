'use client'

import {
  ChakraProvider,
  createSystem,
  defaultConfig
} from '@chakra-ui/react'
import { ColorModeProvider, ColorModeProviderProps } from './color-mode'


export const system = createSystem(defaultConfig, {
  globalCss: {
    'html , body' : {
      lineHeight :"1",
      scrollBehavior : "smooth",
      // bg : "#030711",
      // color : "white",
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
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.white}", _dark: "#030711" }, 
          },
        },
        brand: {
          DEFAULT: {
            value: { _light: "#030711", _dark: "white" }, 
          },
          MUTED: {
            value: { _light: "gray.500", _dark: "gray.700" }, 
          },
        },
        border: {
          DEFAULT: {
            value: { _light: "gray.300", _dark: "gray.900" }, 
          },
        }
      }
    }
  }

  
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}

