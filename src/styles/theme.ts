import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
     colors : {
        100 : {value : "#030711"},
      },
    },
  },
})

export const system = createSystem(defaultBaseConfig, customConfig)