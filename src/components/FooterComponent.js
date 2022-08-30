import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';

const FooterComponent = () => {
  return (
    <Box as="footer" w={'100%'} bgGradient={'linear(to-b,gray.900,black)'}>
      <Flex
        gap={'1rem'}
        color={'white'}
        mx={'5rem'}
        h={'100%'}
        align={'center'}
      >
        <div className="footerItem">Time</div>
        <div className="footerItem">Aboutme</div>
        <Spacer />
        <div className="footerItem">Task 1</div>
        <div className="footerItem">Kira Intrilogy</div>
      </Flex>
    </Box>
  );
};

export default FooterComponent;
