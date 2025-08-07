// src/components/sections/FaqSection.tsx
'use client'

import { 
  Box, 
  Heading
} from '@chakra-ui/react';

import {  
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/accordion';

const faqData = [
  {
    question: 'What is the age requirement for Early Years?',
    answer: 'For our Early Years 1 (Creche), children can be admitted from 3 months old. For Nursery 1, the child should be at least 2 years old by September of the academic year.'
  },
  {
    question: 'What documents are required for application?',
    answer: 'You will need a completed application form, two recent passport photographs of the child, a copy of the child\'s birth certificate, and the child\'s most recent academic report from their previous school.'
  },
  {
    question: 'Are there any sibling discounts?',
    answer: 'Yes, we offer a tuition fee discount for families with three or more children enrolled at Clydeview Academy. Please contact the admissions office for more details.'
  },
  {
    question: 'What are the school hours?',
    answer: 'The school day runs from 8:00 AM to 3:00 PM, Monday to Friday. After-school activities run from 3:15 PM to 4:30 PM.'
  }
];

export const FaqSection = () => {
  return (
    <Box as="section" bg="card_bg" py={{ base: 16, md: 24 }} px={8}>
      <Box maxW="4xl" mx="auto">
        <Heading as="h2" size="xl" color="primary" textAlign="center" mb={12}>
          Frequently Asked Questions
        </Heading>
        <Accordion allowMultiple>
          {faqData.map((item, index) => (
            <AccordionItem key={index} borderTopWidth="1px" borderColor="gray.200" _dark={{ borderColor: 'gray.600' }}>
              <h2>
                <AccordionButton py={4}>
                  <Box as="span" flex="1" textAlign="left" fontWeight="semibold" color="primary">
                    {item.question}
                  </Box>
                  <AccordionIcon color="accent" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="body_text">
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};