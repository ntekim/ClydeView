// src/app/about/page.tsx
'use client'

import { Box } from '@chakra-ui/react';
import { PageHero } from '@/components/sections/PageHero';
import { MissionVisionSection } from '@/components/sections/MissionVisionSection';
import { FacultySection } from '@/components/sections/FacultySection';

export default function AboutPage() {
  return (
    <Box>
      <PageHero 
        title="About Clydeview Academy"
        subtitle="Discover the mission, vision, and people dedicated to nurturing curiosity and fostering excellence in every student."
      />
      <MissionVisionSection />
      <FacultySection />
    </Box>
  );
}