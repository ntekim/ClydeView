// src/components/ui/FeatureCard.tsx
'use client'

import { Flex, Heading, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@/lib/color-mode';
import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  text: string;
}

export const FeatureCard = ({ icon: Icon, title, text }: FeatureCardProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      textAlign="center"
      p={6}
      bg={useColorModeValue('gray.50', 'gray.700')} // Light gray background
      rounded="lg"
      boxShadow="md"
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'accent'} // Use our brand green for the icon background
        mb={4}
      >
        <Icon size="2.5rem" />
      </Flex>
      <Heading as="h3" size="md" color="primary" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">
        {text}
      </Text>
    </Flex>
  );
};