// src/components/layout/Header.tsx
'use client'

import { ColorModeButton, useMounted } from '@/lib/color-mode'
import { Box, Flex, Heading, Button, Link as ChakraLink, Spacer } from '@chakra-ui/react'
import NextLink from 'next/link'

const Logo = () => {
  return (
    // Use the theme color!
    <Heading as="h1" size="md" color="primary"> 
      Clydeview Academy
    </Heading>
  )
}

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  // Use the theme color for the hover effect
  return (
    <ChakraLink as={NextLink} href={href} fontWeight="medium" _hover={{ textDecoration: 'none', color: 'accent' }} mx={4}>
      {children}
    </ChakraLink>
  )
}

export const Header = () => {
  const mounted = useMounted();
  return (
    <Box as="header" bg="white" py={4} px={8} boxShadow="sm" position="sticky" top={0} zIndex="banner">
      <Flex alignItems="center">
        <Logo />
        <Spacer />
        <Box as="nav">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/academics">Academics</NavLink>
          <NavLink href="/admissions">Admissions</NavLink>
          {/* <NavLink href="/campus-life">Campus Life</NavLink> */}
        </Box>
        <Spacer />
        {/* {mounted && <ColorModeButton />} */}
        <ChakraLink
          as={NextLink}
          href="/contact"
          bg="accent"
          color="white"
          px={4}
          py={2}
          rounded="md"
          _hover={{ opacity: 0.9 }}
        >
          Contact Us
        </ChakraLink>
      </Flex>
    </Box>
  )
}