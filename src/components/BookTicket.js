import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Button,
} from '@chakra-ui/react';

const TicketBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to handle seat selection
  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // If seat is already selected, remove it
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // If seat is not selected, add it
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  // Function to calculate total price based on seat count
  const calculateTotalPrice = () => {
    const seatPrice = 10; // Replace with your seat price
    return selectedSeats.length * seatPrice;
  };

  // Function to handle booking submission
  const handleBookingSubmit = () => {
    // Replace with your booking submission logic
    alert('Booking submitted successfully!');
  };

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={4}>
        Ticket Booking
      </Heading>
      <Text fontSize="lg" mb={6}>
        Select your seats and proceed to book tickets for the movie.
      </Text>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">
          Select Seats:
        </Heading>
        <HStack spacing={2}>
          {Array.from({ length: 10 }, (_, index) => (
            <Button
              key={index}
              size="sm"
              variant={selectedSeats.includes(index + 1) ? 'solid' : 'outline'}
              colorScheme="teal"
              onClick={() => handleSeatSelection(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </VStack>
      <Box mt={6}>
        <Text fontSize="lg" mb={2}>
          Selected Seats: {selectedSeats.join(', ')}
        </Text>
        <Text fontSize="lg">Total Price: ${calculateTotalPrice()}</Text>
      </Box>
      <Button
        colorScheme="teal"
        size="lg"
        mt={6}
        onClick={handleBookingSubmit}
        disabled={selectedSeats.length === 0}
      >
        Book Tickets
      </Button>
    </Container>
  );
};

export default TicketBooking;
