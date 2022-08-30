import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// ICONS
import { FaFontAwesome } from 'react-icons/fa';

import { ColorModeSwitcher } from '../ColorModeSwitcher';

// link data
export const linkdata = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/Services' },
  { title: 'About', path: '/About' },
  { title: 'Contact us', path: '/Contactus' },
];

const HeaderComponent = () => {
  return (
    <>
      <Box h="4rem" px={'5rem'} bg="purple.900">
        <Flex align="center" h={'100%'} color="white">
          <Icon as={FaFontAwesome} />
          HIRING EXPRESS
          <Spacer />
          {linkdata.map((links, index) => {
            return (
              <Link key={index} mx={'1rem'} as={RouterLink} to={links.path}>
                {links.title}
              </Link>
            );
          })}
          <Spacer />
          <ColorModeSwitcher />
        </Flex>
      </Box>
    </>
  );
};

export default HeaderComponent;
