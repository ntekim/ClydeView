// src/app/academics/early-years/page.tsx
'use client'

import { Box, Text } from '@chakra-ui/react';
import { PageHero } from '@/components/sections/PageHero';
import { ImageWithTextSection } from '@/components/sections/ImageWithTextSection';
import { KeyFocusSection } from '@/components/sections/KeyFocusSection';
import { EnquiryFormSection } from '@/components/sections/EnquiryFormSection'; // Let's add a CTA

export default function EarlyYearsPage() {
  return (
    <Box>
      <PageHero 
        title="Early Years Program"
        subtitle="Where the journey of lifelong learning begins with curiosity, creativity, and care."
      />

      <ImageWithTextSection
        imageSrc="https://images.unsplash.com/photo-1503919545826-54a3a3d13773?q=80&w=1887&auto=format&fit=crop"
        imageAlt="Children playing with educational toys"
        title="A Foundation for a Bright Future"
      >
        <Text mb={4}>
          Our Early Years program is designed for children from 3 months to 5 years old. We provide a safe, nurturing, and stimulating environment where young learners can thrive. 
        </Text>
        <Text>
          Using a blend of the Montessori method and play-based learning, we focus on the holistic development of each child—nurturing their social, emotional, physical, and cognitive growth.
        </Text>
      </ImageWithTextSection>

      <KeyFocusSection />
      
      {/* It's always a good idea to have a call to action on these pages */}
      <EnquiryFormSection />
    </Box>
  );
}