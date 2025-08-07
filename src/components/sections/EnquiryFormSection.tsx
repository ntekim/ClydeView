// src/components/sections/EnquiryFormSection.tsx
'use client'

import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  SimpleGrid
} from '@chakra-ui/react';

import {
  FormControl,
  FormLabel,
//   FormErrorMessage,
//   FormHelperText,
} from '@chakra-ui/form-control'

export const EnquiryFormSection = () => {
  return (
    <Box as="section" bg="card_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="4xl" mx="auto">
        <Heading as="h2" size="xl" color="primary" textAlign="center" mb={2}>
          Have a Question? Get in Touch!
        </Heading>
        <Text textAlign="center" color="body_text" mb={12}>
          Fill out the form below and our admissions team will contact you shortly.
        </Text>
        
        <Box as="form" 
          // We can add onSubmit logic here later
        >
          <VStack gap={5}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} w="full">
              <FormControl isRequired>
                <FormLabel htmlFor="parent-name">Parent's Name</FormLabel>
                <Input id="parent-name" placeholder="e.g., John Doe" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" type="email" placeholder="e.g., john.doe@example.com" />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} w="full">
              <FormControl isRequired>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="child-name">Child's Name</FormLabel>
                <Input id="child-name" placeholder="e.g., Jane Doe" />
              </FormControl>
            </SimpleGrid>
            
            <FormControl>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <Textarea id="message" placeholder="Please enter your questions here..." rows={6} />
            </FormControl>
            
            <Button
              type="submit"
              bg="accent"
              color="white"
              size="lg"
              px={8}
              _hover={{ opacity: 0.9 }}
            >
              Send Enquiry
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};