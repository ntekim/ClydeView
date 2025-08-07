// src/components/ui/ProgramCard.tsx
'use client'

import { Box, Heading, Text, Button, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';

interface ProgramCardProps {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
}

export const ProgramCard = ({ href, imageUrl, title, description }: ProgramCardProps) => {
  return (
    <Box
      bg="card_bg" // Using our semantic token for the background
      rounded="lg"
      boxShadow="lg"
      overflow="hidden" // This is important to contain the image's rounded corners
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}
    >
      <Box position="relative" h="200px" w="full">
        <Image
          src={imageUrl}
          alt={`Image for ${title}`}
          fill // The 'fill' prop makes the image fill its parent container
          style={{ objectFit: 'cover' }} // Ensures the image covers the area without distortion
        />
      </Box>
      <Box p={6}>
        <Heading as="h3" size="md" color="primary" mb={3}>
          {title}
        </Heading>
        <Text 
            mb={4} 
            color="body_text" 
            css={{
                display: '-webkit-box',
                WebkitLineClamp: 3, // Use a number for unitless values
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
          >
          {description}
        </Text>
        <ChakraLink as={NextLink} href={href} colorScheme="green" borderColor="accent" color="accent">
            Learn More
        </ChakraLink>
      </Box>
    </Box>
  );
};