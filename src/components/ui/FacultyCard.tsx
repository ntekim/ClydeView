// src/components/ui/FacultyCard.tsx
'use client'

import { Box, Flex, Text } from '@chakra-ui/react';
import { Avatar } from '@/lib/avatar';

interface FacultyCardProps {
  name: string;
  title: string;
  imageUrl: string;
}

export const FacultyCard = ({ name, title, imageUrl }: FacultyCardProps) => {
  return (
    <Flex direction="column" align="center" textAlign="center">
      <Avatar size="2xl" name={name} src={imageUrl} mb={4} />
      <Text fontWeight="bold" color="primary">{name}</Text>
      <Text fontSize="sm" color="accent">{title}</Text>
    </Flex>
  );
};