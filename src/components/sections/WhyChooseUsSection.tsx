// src/components/sections/WhyChooseUsSection.tsx
'use client'

import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { FeatureCard } from '../ui/FeatureCard';
// Importing specific icons
import { FiShield, FiCpu, FiHome } from 'react-icons/fi';

export const WhyChooseUsSection = () => {
  return (
    <Box as="section" bg="white" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="6xl" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="primary" mb={4}>
          The Clydeview Advantage
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={12}>
          We provide a balanced education that prepares students for the future.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          <FeatureCard
            icon={FiShield}
            title="Unmatched Security"
            text="A safe and nurturing environment where students can learn and grow with peace of mind."
          />
          <FeatureCard
            icon={FiCpu}
            title="Future-Ready Curriculum"
            text="Integrating core academics with vital skills like Coding & Robotics to prepare students for tomorrow's world."
          />
          <FeatureCard
            icon={FiHome}
            title="State-of-the-Art Facilities"
            text="Modern classrooms, advanced labs, and ample recreational spaces that foster a rich learning experience."
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};