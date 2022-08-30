import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

// IMPORTS
import { linkdata } from '../components/HeaderComponent';

const FooterComponent = () => {
  // INITIALIZATIONS
  const gridStack = [
    {
      title: 'Quicklinks',
      links: linkdata,
    },
  ];

  return (
    <Box color={'white'} as="footer" w={'100%'} bg={'purple.900'} h="auto">
      <HStack my="5rem" mx="5rem">
        {gridStack.map((items, index) => {
          return (
            <VStack key={index} gap="1rem" alignItems="flex-start">
              <Heading>{items.title}</Heading>
              <VStack align={'flex-start'}>
                {items.links.map((linksprovided, index) => {
                  return (
                    <Text as={Link} key={index} to={linksprovided.path}>
                      {linksprovided.title}
                    </Text>
                  );
                })}
              </VStack>
            </VStack>
          );
        })}
      </HStack>
    </Box>
  );
};

export default FooterComponent;
