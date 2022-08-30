import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

// IMAGES
import ContactImg from '../assets/photos/contactus.jpg';

const ContactUs = () => {
  return (
    <Container minW="100%" minH={'100vh'} m={0} p="0" position={'relative'}>
      <HStack w={'full'} h="full" justify={'center'} align={'center'} gap={0}>
        {/* form */}
        <VStack
          h="full"
          bg={'purple.800'}
          align="center"
          textAlign={'left'}
          justify="center"
          p="0"
          m="0"
          w="max-content"
        >
          <FormControl color="white" p="5rem">
            <Heading my="2rem">Contact Us</Heading>
            <FormLabel>First name</FormLabel>
            <Input type="text" />
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel mt="1rem">Message</FormLabel>
            <Textarea placeholder="Your message..." size="sm" resize={'none'} />
          </FormControl>
        </VStack>
        <Box h="full" display={'flex'} w="">
          <Image src={ContactImg} w="20rem" p="0" m="0" h="full" />
        </Box>
      </HStack>
    </Container>
  );
};

export default ContactUs;
