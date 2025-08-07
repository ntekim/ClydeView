// src/components/sections/FacultySection.tsx
'use client'

import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import { FacultyCard } from '../ui/FacultyCard';

// This is placeholder data. We can replace this with a real API call later.
const facultyMembers = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Head of School',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
  },
  {
    name: 'Mr. Samuel Chen',
    title: 'Head of Sciences',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Mrs. Aisha Bello',
    title: 'Head of Early Years',
    imageUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Mr. David Grant',
    title: 'Lead Robotics Instructor',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
  },
];

export const FacultySection = () => {
  return (
    <Box as="section" bg="card_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="6xl" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="primary" mb={12}>
          Meet Our Leadership
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={12}>
          {facultyMembers.map((member) => (
            <FacultyCard
              key={member.name}
              name={member.name}
              title={member.title}
              imageUrl={member.imageUrl}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};