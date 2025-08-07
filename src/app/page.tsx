// src/app/page.tsx
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { AcademicProgramsSection } from '@/components/sections/AcademicProgramsSection';
import { VirtualTourSection } from '@/components/sections/VirtualTourSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';


export default function HomePage() {
  return (
    <Box>
      {/* We will add the other homepage sections here soon! */}
      <HeroSection />
      <WhyChooseUsSection />
      <AcademicProgramsSection />
      <VirtualTourSection /> {/* Add tour section */}
      <TestimonialsSection />
      <Box as="main" p={8}>
        <Heading>Welcome to the Future Clydeview Academy Website!</Heading>
      </Box>
    </Box>
  )
}