// src/app/academics/page.tsx
'use client'

import { Box } from '@chakra-ui/react';
import { PageHero } from '@/components/sections/PageHero';
import { AcademicProgramsSection } from '@/components/sections/AcademicProgramsSection';
import { SignatureProgramsSection } from '@/components/sections/SignatureProgramsSection';

export default function AcademicsPage() {
  return (
    <Box>
      <PageHero 
        title="Our Curriculum"
        subtitle="A forward-thinking educational framework designed to build foundational knowledge, inspire creativity, and prepare students for the future."
      />
      
      {/* 
        We can reuse the section from our homepage perfectly here. It serves as the main
        navigation for this part of the site.
      */}
      <AcademicProgramsSection />

      <SignatureProgramsSection />
    </Box>
  );
}