// src/components/sections/AcademicProgramsSection.tsx
'use client'

import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import { ProgramCard } from '../ui/ProgramCard';

export const AcademicProgramsSection = () => {
  return (
    <Box as="section" bg="page_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="6xl" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="primary" mb={4}>
          Our Academic Programs
        </Heading>
        <Text fontSize="lg" color="body_text" mb={12}>
          Tailored learning journeys for every stage of development.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          <ProgramCard
            href="/academics/early-years"
            imageUrl="https://plus.unsplash.com/premium_photo-1723874488991-6a4bcd380644?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image
            title="Early Years"
            description="Fostering curiosity through play-based learning and Montessori principles in a nurturing environment."
          />
          <ProgramCard
            href="/academics/basic"
            imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" // Placeholder image
            title="Basic Education"
            description="Building strong foundations in core subjects while encouraging critical thinking and collaboration."
          />
          <ProgramCard
            href="/academics/secondary"
            imageUrl="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" // Placeholder image
            title="Secondary Education"
            description="Preparing students for higher education and future careers with an advanced curriculum and vocational training."
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};