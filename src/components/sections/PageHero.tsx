// src/components/sections/PageHero.tsx
'use client'

import { Flex, Heading, Text } from '@chakra-ui/react';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      justify="center"
      bg="card_bg" // Use our theme's light card background
      py={{ base: 12, md: 16 }}
      textAlign="center"
    >
      <Heading as="h1" size="2xl" color="primary" mb={2}>
        {title}
      </Heading>
      <Text fontSize="lg" color="body_text" maxW="2xl">
        {subtitle}
      </Text>
    </Flex>
  );
};