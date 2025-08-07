// src/components/sections/MissionVisionSection.tsx
'use client'

import { Box, SimpleGrid, Heading, Text, Flex } from '@chakra-ui/react';
import { FaCrosshairs, FaEye } from 'react-icons/fa'; // Icons for visual appeal

const MissionCard = ({ icon: Icon, title, children }: any) => {
  return (
    <Box>
      <Flex align="center" mb={4}>
        <Flex
          w={12} h={12} align="center" justify="center"
          rounded="full" bg="accent" color="white" mr={4}
        >
          <Icon size="1.5rem" />
        </Flex>
        <Heading as="h3" size="lg" color="primary">{title}</Heading>
      </Flex>
      <Text color="body_text">{children}</Text>
    </Box>
  )
}

export const MissionVisionSection = () => {
  return (
    <Box as="section" bg="page_bg" py={{ base: 16, md: 24 }} px={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} maxW="6xl" mx="auto">
        <MissionCard icon={FaCrosshairs} title="Our Mission">
          To provide a secure and stimulating learning environment that combines rigorous academics with modern, practical skills, empowering every student to become a confident, lifelong learner and a responsible global citizen.
        </MissionCard>
        <MissionCard icon={FaEye} title="Our Vision">
          To be a leading educational institution in the region, recognized for our innovative approach to education, our commitment to excellence, and our success in nurturing the curious minds that will shape the future.
        </MissionCard>
      </SimpleGrid>
    </Box>
  );
};