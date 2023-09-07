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
import { Link } from 'react-router-dom'; // Import Link component

const MovieListings = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to fetch data (replace with your API call)
    setTimeout(() => {
      // Replace this with your actual API fetch code
      const sampleMovies = [
        {
          id: "64f8a0311a082cc4c9f1c28b",
          title: 'Movie 1',
          releaseYear: 2022,
          posterUrl: 'https://via.placeholder.com/150',
        },
        {
          id: "64f8a0311a082cc4c9f1c28b",
          title: 'Movie 2',
          releaseYear: 2023,
          posterUrl: 'https://via.placeholder.com/150',
        },
        {
          id: "64f8a0311a082cc4c9f1c28b",
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
            // Wrap each movie box in a Link component
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={movie.posterUrl} alt={movie.title} />
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2}>
                    {movie.title}
                  </Heading>
                  <Text>Released: {movie.releaseYear}</Text>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default MovieListings;
