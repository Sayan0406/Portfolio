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
            value: { _light: "#0f172a", _dark: "#E1E7EF" }, 
          },
          SECONDARY : {
            value : { _light: "#7f8EA3", _dark: "#7f8EA3"}
          },
          SUBTLE: {
            value : { _light: "#0f172a", _dark: "colors.gray.200"}
          },
          MUTED: {
            value: { _light: "#f1f5f9", _dark: "#384252" }, 
          },
          EMPHASIZED: {
            value: { _light: "colors.gray.300", _dark: "colors.gray.700" }, 
          }
        },
        
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

