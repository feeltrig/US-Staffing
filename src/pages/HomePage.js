import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

import React from 'react';

// ICONS AND PHOTOS
import Recruitment from '../assets/photos/recruitment.jpg';
import { FaCheckCircle } from 'react-icons/fa';
import Goal from '../assets/photos/goal.png';

const HomePage = () => {
  return (
    <>
      <Container minW="100%" m={0} p="0" position={'relative'}>
        {/* hero section */}
        <Image
          src={Recruitment}
          position="absolute"
          zIndex="-1"
          h={'calc(100vh - 4rem)'}
          w="full"
          objectFit={'cover'}
        />
        <VStack
          zIndex={'3'}
          backgroundImage={Recruitment}
          bgGradient="linear(to-r,black,black,rgba(0,0,0,0.6))"
          h={'calc(100vh - 4rem)'}
          alignItems="flex-start"
          justifyContent={'center'}
        >
          <Box ml="5rem">
            <Text color={'yellow'}>WELCOME TO HIRINGEXPRESS</Text>
            <Heading as={'h1'} size="3xl" color={'white'}>
              Get hired in best companies
            </Heading>
            <Heading as={'h1'} size="3xl" color={'white'}>
              worldwide
            </Heading>
            <Button my="1rem" variant={'outline'} colorScheme="linkedin">
              Get Started
            </Button>
          </Box>
        </VStack>

        {/* How we work */}
        <HStack
          alignItems="center"
          gap="2rem"
          mx="5rem"
          h="100vh"
          // border="2px solid yellow"
          justify={'space-around'}
        >
          <VStack gap="1rem" alignItems={'flex-start'}>
            <Box>
              <Text as={'i'}>HOW WE WORK</Text>
              <Heading as={'h1'} size="3xl">
                Learn How to Achieve
              </Heading>
              <Heading as={'h1'} size="3xl">
                Your Goal
              </Heading>
            </Box>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </VStack>

          {/* image */}
          <Image src={Goal} w="20rem" objectFit={'cover'} h="auto" />
        </HStack>
      </Container>
    </>
  );
};

export default HomePage;
