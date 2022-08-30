import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
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
    <Box
      display={'flex'}
      w={'full'}
      h="100vh"
      flexDirection={'row'}
      justify="center"
      position={'relative'}
    >
      <VStack
        h="full"
        w="full"
        justify={'center'}
        bg="gray.100"
        flexGrow={1}
        px="5rem"
      >
        <FormControl w="full" display={'flex'} flexFlow="column" gap="0.5rem">
          <Heading mb="1rem">Contact Us</Heading>
          <Box>
            <FormLabel>First name</FormLabel>
            <Input borderColor={'black'} type={'text'} />
          </Box>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input borderColor={'black'} type={'email'} />
            <FormHelperText>We wont share your email</FormHelperText>
          </Box>
          <Box>
            <FormLabel>Message</FormLabel>
            <Textarea borderColor={'black'} resize={'none'} />
            <Button my="0.5rem" variant={'solid'} colorScheme="purple">
              Send
            </Button>
          </Box>
        </FormControl>
      </VStack>

      <VStack
        flexGrow={1}
        w="full"
        backgroundImage={ContactImg}
        backgroundSize="cover"
      ></VStack>
    </Box>
  );
};

export default ContactUs;
