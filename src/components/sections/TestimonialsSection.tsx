// src/components/sections/TestimonialsSection.tsx
'use client'

import { Avatar } from '@/lib/avatar';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

export const TestimonialsSection = () => {
  return (
    <Box as="section" bg="page_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="4xl" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="primary" mb={12}>
          What Our Parents Say
        </Heading>
        <Flex direction="column" align="center">
          <Text
            fontSize={{ base: 'lg', md: '2xl' }}
            fontStyle="italic"
            color="body_text"
            maxW="3xl"
            mb={6}
          >
            "Choosing Clydeview was the best decision we made for our daughter. The focus on both strong academics and practical skills like robotics is phenomenal. We've seen her confidence and curiosity grow immensely."
          </Text>
          <Flex align="center" mt={4}>
            <Avatar
              size="lg"
              name="Amina Johnson"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" // Placeholder avatar
              mr={4}
            />
            <Box textAlign="left">
              <Text fontWeight="bold" color="primary">
                Amina Johnson
              </Text>
              <Text fontSize="sm" color="gray.500">
                Parent of a Basic 4 Student
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};