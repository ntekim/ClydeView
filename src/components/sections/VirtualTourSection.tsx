// src/components/sections/VirtualTourSection.tsx
'use client'

// Make sure Flex is imported
import { Flex, Heading, Text, Button, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export const VirtualTourSection = () => {
  return (
    <Flex
      as="section"
      id="virtual-tour" // This ID is important for the button link in the hero
      w={'full'}
      py={{ base: 20, md: 28 }}
      px={8}
      backgroundImage={'url(https://plus.unsplash.com/premium_photo-1724026586504-6bb95f9453f3?w=400&auto=format&fit=crop)'}
      backgroundSize={'cover'}
      backgroundAttachment={'fixed'} // This creates the parallax effect
      backgroundPosition={'center'}
    >
      <Flex
        w={'full'}
        h={'full'}
        justify={'center'}
        align={'center'}
        bgGradient="linear(to-r, blackAlpha.800, blackAlpha.600)" // Dark gradient for readability
      >
        {/* --- CORRECTION START --- */}
        <Flex
          direction="column" // Replaces Stack's default direction
          gap={6} // Replaces the 'spacing' prop
          maxW={'3xl'}
          mx="auto"
          align={'center'}
          textAlign="center"
        >
          <Heading as="h2" size="xl" color="accent">
            Words Can't Say It All
          </Heading>
          <Text color="accent" fontSize="lg">
            Step into our world from the comfort of your home. Take a 360° virtual tour to experience our campus, classrooms, and facilities firsthand.
          </Text>
          <ChakraLink
            as={NextLink}
            href="/virtual-tour"
            bg={'accent'}
            color={'white'}
            rounded={'full'}
            px={8}
            h={'56px'}           // Sets the height of the button
            minW={'56px'}        // Sets the minimum width
            fontSize={'lg'}
            _hover={{
              opacity: 0.9,
            }}
          >
            Start Virtual Tour
          </ChakraLink>
        </Flex>
        {/* --- CORRECTION END --- */}
      </Flex>
    </Flex>
  );
};