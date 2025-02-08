import { BoxProps, Container, ContainerProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props extends ContainerProps {
  boxProps?: BoxProps
  children: ReactNode
}

export const MyContainer = ({ children, ...props }: Props) => {
  return (
    <Container px={{ base: 2, md: 4 }} maxW={'5xl'} mx={'auto'} {...props}>
      {children}
    </Container>
  )
}
