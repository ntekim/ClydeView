// src/app/academics/secondary/page.tsx
'use client'

import { Box, Text } from '@chakra-ui/react';
import { PageHero } from '@/components/sections/PageHero';
import { ImageWithTextSection } from '@/components/sections/ImageWithTextSection';
import { SecondaryKeyFocusSection } from '@/components/sections/SecondaryKeyFocusSection';
import { EnquiryFormSection } from '@/components/sections/EnquiryFormSection';
// import {
// //   List,
//   ListItem,
// //   ListIcon,
// //   OrderedList,
//   UnorderedList,
// } from '@chakra-ui/layout'


export default function SecondaryEducationPage() {
  return (
    <Box>
      <PageHero 
        title="Secondary Education"
        subtitle="Empowering young adults with the knowledge, skills, and confidence to excel in a dynamic world."
      />

      <ImageWithTextSection
        imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
        imageAlt="High school students in a classroom"
        title="Shaping Future Leaders"
      >
        <Text mb={4}>
          Our Secondary School program provides a comprehensive and challenging education for students aged 12 and above. We focus on academic rigor, character development, and preparation for tertiary education and beyond.
        </Text>
        <Text mb={4}>
          Students are guided through a broad curriculum that allows for specialization in either the Arts, Sciences, or Technology, ensuring they are well-prepared for their chosen career paths. Our dedicated faculty provides the support needed to navigate this critical phase of their education.
        </Text>
      </ImageWithTextSection>

      <SecondaryKeyFocusSection />
      
      <EnquiryFormSection />
    </Box>
  );
}