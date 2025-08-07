// src/components/sections/KeyFocusSection.tsx
'use client'

import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { FeatureCard } from '../ui/FeatureCard';
import { FaChild, FaPalette, FaLanguage } from 'react-icons/fa'; // Relevant icons

export const KeyFocusSection = () => {
  return (
    <Box as="section" bg="card_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="6xl" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="primary" mb={12}>
          Our Areas of Focus
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          <FeatureCard
            icon={FaChild}
            title="Play-Based Learning"
            text="We believe children learn best through play. Our activities are designed to be fun, engaging, and educational."
          />
          <FeatureCard
            icon={FaPalette}
            title="Creative Expression"
            text="From arts and crafts to music and movement, we encourage children to express themselves and explore their creativity."
          />
          <FeatureCard
            icon={FaLanguage}
            title="Early Literacy & Numeracy"
            text="Introducing foundational concepts of letters, sounds, and numbers in an interactive and age-appropriate manner."
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};