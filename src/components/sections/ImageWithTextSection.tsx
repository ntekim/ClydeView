// src/components/sections/ImageWithTextSection.tsx
'use client'

import { Box, SimpleGrid, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import Image from 'next/image';

interface ImageWithTextProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  children: React.ReactNode;
}

export const ImageWithTextSection = ({ imageSrc, imageAlt, title, children }: ImageWithTextProps) => {
  return (
    <Box as="section" bg="page_bg" py={{ base: 16, md: 24 }} px={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} maxW="6xl" mx="auto" alignItems="center">
        <Flex>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            style={{ borderRadius: '15px', objectFit: 'cover' }}
          />
        </Flex>
        <Stack gap={5}>
          <Heading as="h2" size="xl" color="primary">
            {title}
          </Heading>
          <Box color="body_text" fontSize="lg" className="prose">
            {children}
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};