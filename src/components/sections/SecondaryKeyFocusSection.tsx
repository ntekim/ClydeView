// src/components/sections/SecondaryKeyFocusSection.tsx
'use client'

import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { FeatureCard } from '../ui/FeatureCard';
// Icons relevant to advanced learning and career prep
import { FaUserGraduate, FaBriefcase, FaLightbulb } from 'react-icons/fa'; 

export const SecondaryKeyFocusSection = () => {
  return (
    <Box as="section" bg="card_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="6xl" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="primary" mb={12}>
          Preparing for a Successful Future
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          <FeatureCard
            icon={FaUserGraduate}
            title="Academic Excellence"
            text="A rigorous curriculum designed to excel in national and international examinations (e.g., WAEC, NECO, IGCSE) and gain admission to top universities."
          />
          <FeatureCard
            icon={FaBriefcase}
            title="Career & University Guidance"
            text="Dedicated counseling to help students identify their strengths, choose a career path, and navigate the university application process."
          />
          <FeatureCard
            icon={FaLightbulb}
            title="Leadership & Innovation"
            text="Fostering critical thinking, leadership skills, and an innovative mindset through our advanced vocational and robotics programs."
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};