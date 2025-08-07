// src/app/contact/page.tsx
'use client'

import { Box } from '@chakra-ui/react';
import { PageHero } from '@/components/sections/PageHero';
import { ContactDetailsSection } from '@/components/sections/ContactDetailsSection';
import { EnquiryFormSection } from '@/components/sections/EnquiryFormSection';

export default function ContactPage() {
  return (
    <Box>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out to us with any questions, or plan a visit to see our campus."
      />
      <ContactDetailsSection />
      <EnquiryFormSection />
    </Box>
  );
}