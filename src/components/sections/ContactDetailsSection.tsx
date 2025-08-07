// src/components/sections/ContactDetailsSection.tsx
'use client'

import { AspectRatio, Box, SimpleGrid, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactInfo = ({ icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => {
  return (
    <VStack gap={3} align="flex-start">
      <Icon as={icon} boxSize={8} color="accent" />
      <Heading as="h3" size="md" color="primary">{title}</Heading>
      <Box color="body_text">{children}</Box>
    </VStack>
  );
};

export const ContactDetailsSection = () => {
  return (
    <Box as="section" bg="page_bg" py={{ base: 16, md: 24 }} px={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} maxW="6xl" mx="auto">
        <VStack gap={8} align="flex-start">
          <Heading as="h2" size="xl" color="primary">Contact Information</Heading>
          <ContactInfo icon={FiMapPin} title="Our Address">
            <Text>#32 Amadi Ejekwu, Beside CTU Barracks</Text>
            <Text>Rumuagholu, Port Harcourt</Text>
          </ContactInfo>
          <ContactInfo icon={FiPhone} title="Call Us">
            <Text>Admissions: 0904 444 0005</Text>
            <Text>Office: 0916 000 9708</Text>
          </ContactInfo>
          <ContactInfo icon={FiMail} title="Email Us">
            <Text>info@clydeview.com</Text>
            <Text>admissions@clydeview.com</Text>
          </ContactInfo>
        </VStack>

        {/* This is the map section */}
        <AspectRatio maxW="560px" ratio={16 / 9}>
            <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5562919864223!2d6.983995374971408!3d4.846506995166649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea487c53d55%3A0x7d25163351939884!2sRumuagholu!5e0!3m2!1sen!2sng!4v1715865231792!5m2!1sen!2sng"
            width="100%"
            height="100%"
            minH="450px"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Clydeview Academy Location"
            ></Box>
        </AspectRatio>
      </SimpleGrid>
    </Box>
  );
};