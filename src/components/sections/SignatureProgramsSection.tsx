// src/components/sections/SignatureProgramsSection.tsx
'use client'

import { Box, SimpleGrid, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { FaCogs, FaRobot } from 'react-icons/fa'; // Tech-related icons

const Feature = ({ text, icon }: { text: string; icon: React.ReactElement }) => {
  return (
    <Stack direction={'row'} align={'center'} gap={3}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={'accent'} color={'white'}>
        {icon}
      </Flex>
      <Text fontWeight={600} color="body_text">{text}</Text>
    </Stack>
  );
};


export const SignatureProgramsSection = () => {
  return (
    <Box as="section" bg="card_bg" py={{ base: 16, md: 24 }} px={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} maxW="6xl" mx="auto" alignItems="center">
        <Stack gap={6}>
          <Heading as="h2" size="xl" color="primary">
            Leading the Way with Future-Ready Skills
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            At Clydeview, we believe in an education that goes beyond textbooks. Our signature programs are designed to equip students with the practical, in-demand skills they need to thrive in the 21st century.
          </Text>
          <Stack gap={4}>
            <Feature
              icon={<FaRobot />}
              text={'Hands-On Robotics Training'}
            />
            <Feature
              icon={<FaCogs />}
              text={'Creative Coding & Problem Solving'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            src="https://images.unsplash.com/photo-1678846395201-9f0a51922579?q=80&w=1887&auto=format&fit=crop" // A great robotics/tech image
            alt="Students working on robotics"
            width={500}
            height={400}
            style={{ borderRadius: '15px', objectFit: 'cover' }}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};