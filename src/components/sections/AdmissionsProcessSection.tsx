// src/components/sections/AdmissionsProcessSection.tsx
'use client'

import { Box, Heading, Text, VStack, HStack, Circle } from '@chakra-ui/react';

// A helper component for each step in the process
const ProcessStep = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => {
  return (
    <HStack align="start" w="full" gap={6}>
      <Circle
        size="48px"
        bg="accent"
        color="white"
        fontSize="xl"
        fontWeight="bold"
      >
        {number}
      </Circle>
      <VStack align="start" gap={1}>
        <Heading as="h3" size="md" color="primary">{title}</Heading>
        <Text color="body_text">{children}</Text>
      </VStack>
    </HStack>
  );
};

export const AdmissionsProcessSection = () => {
  return (
    <Box as="section" bg="page_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="4xl" mx="auto">
        <Heading as="h2" size="xl" color="primary" textAlign="center" mb={12}>
          Our Admissions Process
        </Heading>
        <VStack gap={10} align="start">
          <ProcessStep number={1} title="Submit an Enquiry">
            Fill out our online enquiry form below or visit the school to express your interest. Our admissions team will get in touch to guide you through the next steps.
          </ProcessStep>
          <ProcessStep number={2} title="School Tour & Meeting">
            We invite prospective families to tour our campus and meet with our admissions officer to learn more about our curriculum and facilities.
          </ProcessStep>
          <ProcessStep number={3} title="Application & Assessment">
            Complete the application form and submit the required documents. An age-appropriate assessment or interview will be scheduled for your child.
          </ProcessStep>
          <ProcessStep number={4} title="Offer of Admission">
            Successful candidates will receive an official offer of admission. Upon acceptance and payment of fees, your child's place at Clydeview Academy is secured.
          </ProcessStep>
        </VStack>
      </Box>
    </Box>
  );
};