import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container
      maxW="container.xl"
      py={12}
      textAlign="center"
      backgroundColor="teal.100"
      borderRadius="lg"
      boxShadow="md"
    >
      <Image
        src="https://via.placeholder.com/150"
        alt="Cinema Club Logo"
        boxSize={100}
        mx="auto"
        mb={6}
      />
      <Heading as="h1" size="xl" mb={4} color="teal.800">
        Welcome to Cinema Club at IIT Roorkee
      </Heading>
      <Text fontSize="lg" mb={6} color="teal.600">
        <i>Bringing Movie Magic to IIT Roorkee</i>
      </Text>
      <Text fontSize="xl" mb={8} color="teal.800">
        Join us every weekend for an unforgettable cinematic experience.
      </Text>
      <Link to="/movielistings">
        <Button
          colorScheme="teal"
          size="lg"
          _hover={{ backgroundColor: 'teal.600' }}
        >
          Explore Our Movie Schedule
        </Button>
      </Link>
    </Container>
  );
};

export default HomePage;
