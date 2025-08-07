// src/components/layout/Footer.tsx
'use client'

import { Box, Container, SimpleGrid, Stack, Text, Link as ChakraLink, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

// A small component for the social media buttons
const SocialButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <ChakraLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      bg="blackAlpha.300"
      color="white"
      w={8}
      h={8}
      rounded="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: 'accent',
      }}
    >
      {children}
    </ChakraLink>
  );
};

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'600'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
        bg="#0A2540"
        color="gray.200"
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          gap={8}
        >
          <Stack gap={6}>
            <Box>
              {/* Replace with your actual logo component if you create one */}
              <Text fontSize="2xl" fontWeight="bold" color="white">Clydeview Academy</Text>
            </Box>
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} Clydeview Academy. All rights reserved.
            </Text>
            <Stack direction={'row'} gap={6}>
              <SocialButton href={'#'}><FaFacebook /></SocialButton>
              <SocialButton href={'#'}><FaTwitter /></SocialButton>
              <SocialButton href={'#'}><FaYoutube /></SocialButton>
              <SocialButton href={'#'}><FaInstagram /></SocialButton>
            </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Academics</ListHeader>
            <ChakraLink as={NextLink} color="white" href={'/academics/early-years'}>Early Years</ChakraLink>
            <ChakraLink as={NextLink} color="white" href={'/academics/basic'}>Basic Education</ChakraLink>
            <ChakraLink as={NextLink} color="white" href={'/academics/secondary'}>Secondary Education</ChakraLink>
            <ChakraLink as={NextLink} color="white" href={'/academics/programs'}>Signature Programs</ChakraLink>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>About Us</ListHeader>
            <ChakraLink as={NextLink} color="white" href={'/about'}>Our Mission</ChakraLink>
            <ChakraLink as={NextLink} color="white" href={'/about#faculty'}>Our Faculty</ChakraLink>
            <ChakraLink as={NextLink} color="white" href={'/admissions'}>Admissions</ChakraLink>
            <ChakraLink as={NextLink} color="white" href={'/contact'}>Contact Us</ChakraLink>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <Text>#32 Amadi Ejekwu, Rumuagholu</Text>
            <Text>0904 444 0005</Text>
            <Text>0916 000 9708</Text>
            <Text>info@clydeview.com</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};