// src/app/admissions/page.tsx
'use client'

import { Box } from '@chakra-ui/react';
import { PageHero } from '@/components/sections/PageHero';
import { AdmissionsProcessSection } from '@/components/sections/AdmissionsProcessSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { EnquiryFormSection } from '@/components/sections/EnquiryFormSection'; // Import the form section

export default function AdmissionsPage() {
  return (
    <Box>
      <PageHero 
        title="Admissions"
        subtitle="Join the Clydeview family. Here you'll find everything you need to know about our straightforward admissions process."
      />
      <AdmissionsProcessSection />
      <FaqSection />
      <EnquiryFormSection />
    </Box>
  );
}