// src/components/sections/BasicKeyFocusSection.tsx
'use client'

import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { FeatureCard } from '../ui/FeatureCard';
// Icons relevant to core subjects and skills
import { FaCalculator, FaBookOpen, FaFlask } from 'react-icons/fa'; 

export const BasicKeyFocusSection = () => {
  return (
    <Box as="section" bg="card_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="6xl" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="primary" mb={12}>
          Core Learning Pillars
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          <FeatureCard
            icon={FaBookOpen}
            title="Literacy & Communication"
            text="Developing strong reading, writing, and public speaking skills to ensure confident and effective communication."
          />
          <FeatureCard
            icon={FaCalculator}
            title="Numeracy & Problem Solving"
            text="Building a solid foundation in mathematics and applying logical reasoning to solve real-world problems."
          />
          <FeatureCard
            icon={FaFlask}
            title="Scientific Inquiry"
            text="Fostering curiosity about the natural world through hands-on experiments and an inquiry-based science curriculum."
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};