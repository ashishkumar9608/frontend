// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Spinner,
  Button,
  Link as ChakraLink, // Alias Link to ChakraLink
} from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to fetch data (replace with your API call)
    setTimeout(() => {
      // Replace this with your actual API fetch code
      const sampleMovie = {
        id: 1, // Use the correct movie id here
        title: 'Movie 1',
        releaseYear: 2022,
        posterUrl: 'https://via.placeholder.com/200',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      };
      setMovie(sampleMovie);
      setLoading(false);
    }, 2000); // Simulated 2-second delay
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <>
          <Box display="flex" alignItems="center" mb={4}>
            <Image src={movie.posterUrl} alt={movie.title} boxSize={200} mr={4} />
            <Heading as="h1" size="xl">
              {movie.title}
            </Heading>
          </Box>
          <Text fontSize="lg" mb={4}>
            Released: {movie.releaseYear}
          </Text>
          <Text fontSize="lg" mb={6}>
            {movie.description}
          </Text>
          <ChakraLink as={Link} to={`/movie/${movie.id}/book`}>
            {/* Use the dynamic link based on the movie's id */}
            <Button colorScheme="teal" size="lg">
              Book Tickets
            </Button>
          </ChakraLink>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
