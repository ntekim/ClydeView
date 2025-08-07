// src/app/academics/basic/page.tsx
'use client'

import { Box, Text } from '@chakra-ui/react';
import { PageHero } from '@/components/sections/PageHero';
import { ImageWithTextSection } from '@/components/sections/ImageWithTextSection';
import { BasicKeyFocusSection } from '@/components/sections/BasicKeyFocusSection';
import { EnquiryFormSection } from '@/components/sections/EnquiryFormSection';
import {
//   List,
  ListItem,
//   ListIcon,
//   OrderedList,
  UnorderedList,
} from '@chakra-ui/layout'

export default function BasicEducationPage() {
  return (
    <Box>
      <PageHero 
        title="Basic Education"
        subtitle="Building a solid foundation of knowledge, critical thinking, and character."
      />

      <ImageWithTextSection
        imageSrc="https://images.unsplash.com/photo-1594409852234-922c01934d40?q=80&w=1887&auto=format&fit=crop"
        imageAlt="Students in a primary school classroom"
        title="Fostering Growth and Understanding"
      >
        <Text mb={4}>
          Our Basic Education program, for students aged 6 to 11, focuses on providing a robust and well-rounded education. We transition from play-based learning to a more structured curriculum that encourages deep understanding and academic excellence.
        </Text>
        <Text mb={4}>Our curriculum covers key areas including:</Text>
        <UnorderedList spacing={2}>
          <ListItem>English Language and Literature</ListItem>
          <ListItem>Mathematics</ListItem>
          <ListItem>Basic Science and Technology</ListItem>
          <ListItem>Social Studies and National Values</ListItem>
          <ListItem>Creative and Vocational Arts</ListItem>
        </UnorderedList>
      </ImageWithTextSection>

      <BasicKeyFocusSection />
      
      <EnquiryFormSection />
    </Box>
  );
}