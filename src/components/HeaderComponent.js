import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';

const HeaderComponent = () => {
  return (
    <>
      <Box h="4rem" px={'5rem'} bg={'gray.500'}>
        <Flex align="center" h={'100%'} color="white">
          <div className="navitem">Logo</div>
          <Spacer />
        </Flex>
      </Box>
    </>
  );
};

export default HeaderComponent;
