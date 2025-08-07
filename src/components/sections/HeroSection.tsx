// src/components/sections/HeroSection.tsx
'use client'

import { Box, Button, Flex, Heading,  Link as ChakraLink, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const HeroSection = () => {
  return (
    <Flex
      as="section"
      w={'full'}
      h={'90vh'} // Sets the height to 90% of the viewport height
      backgroundImage={
        // This is our placeholder image. We can swap the URL later.
        'url(https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <Flex
        w={'full'}
        h={'full'}
        justify={'center'}
        align={'center'}
        // This adds a dark overlay so the white text is readable
        bg={'rgba(0, 0, 0, 0.5)'}
      >
        <Flex
          direction="column" // Explicitly set the direction to vertical
          gap={6} // Use 'gap' instead of 'spacing'
          maxW={'2xl'}
          mx="auto"
          px={4}
          align={'center'}
        >
          <Heading
            color={'white'}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            textAlign="center"
          >
            Nurturing Curiosity. <br />
            <Text as={'span'} color={'accent'}>
              Fostering Excellence.
            </Text>
          </Heading>
          <Text color={'gray.200'} maxW={'3xl'} textAlign="center" fontSize={{ base: 'md', lg: 'lg' }}>
            A secure, modern environment where advanced academics and future-ready skills ignite your child's potential.
          </Text>
          {/* REPLACEMENT START: Replaced Stack with Flex for the buttons */}
          <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
            <ChakraLink
              as={NextLink}
              href="/academics"
              bg={'accent'}
              color={'white'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500', // A slightly different green on hover
              }}
            >
              Explore Our Programs
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="#virtual-tour" // We'll link to a section ID later
              bg={'transparent'}
              color={'white'}
              rounded={'full'}
              border={'1px solid white'}
              px={6}
              _hover={{
                bg: 'whiteAlpha.300',
              }}
            >
              Book a Campus Tour
            </ChakraLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};