import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  Image,
  Text,
} from '@chakra-ui/react';

const MovieListings = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to fetch data (replace with your API call)
    setTimeout(() => {
      // Replace this with your actual API fetch code
      const sampleMovies = [
        {
          id: 1,
          title: 'Movie 1',
          releaseYear: 2022,
          posterUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Movie 2',
          releaseYear: 2023,
          posterUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          title: 'Movie 3',
          releaseYear: 2021,
          posterUrl: 'https://via.placeholder.com/150',
        },
      ];
      setMovies(sampleMovies);
      setLoading(false);
    }, 2000); // Simulated 2-second delay
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="xl" mb={4}>
        Movie Listings
      </Heading>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {movies.map((movie) => (
            <Box key={movie.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={movie.posterUrl} alt={movie.title} />
              <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                  {movie.title}
                </Heading>
                <Text>Released: {movie.releaseYear}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default MovieListings;
