// src/components/SeatSelection.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Button,
  Flex,
  Spacer,
  VStack,
} from '@chakra-ui/react';

const SeatSelection = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Handle seat selection
  const handleSeatSelection = (seat) => {
    // Add or remove the selected seat based on the current state
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  // Render seat selection UI
  return (
    <VStack spacing={4} align="center" p={4}>
      <Heading as="h1" size="xl">
        Seat Selection for Movie {id}
      </Heading>
      <Box>
        {['A1', 'A2', 'A3', 'B1', 'B2', 'B3'].map((seat) => (
          <Button
            key={seat}
            onClick={() => handleSeatSelection(seat)}
            colorScheme={selectedSeats.includes(seat) ? 'red' : 'green'}
          >
            {seat}
          </Button>
        ))}
      </Box>
      <Flex>
        <Spacer />
        <Link to={`/movie/${id}/purchase`}>
          <Button colorScheme="teal" size="lg">
            Next: Booking Confirmation
          </Button>
        </Link>
      </Flex>
    </VStack>
  );
};

export default SeatSelection;
