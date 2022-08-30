import React from 'react';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Container p="5rem" minW="100%" minH={'100vh'} m={0} position={'relative'}>
      <Stack gap={'2rem'} textAlign={'left'} direction={'column'}>
        <Heading>About</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          nihil nisi, neque veritatis tenetur expedita vitae qui hic a est enim
          illo nam earum blanditiis. Animi minus id numquam blanditiis labore
          impedit veniam deserunt eaque. Sapiente fugit repellendus explicabo
          repudiandae?
        </Text>
      </Stack>
    </Container>
  );
};

export default About;
