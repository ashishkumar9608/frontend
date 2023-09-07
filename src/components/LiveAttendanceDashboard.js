import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Spinner,
  Button,
  Link,
  useInterval,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client'; // Import the socket.io client library

const LiveAttendance = () => {
  const [attendance, setAttendance] = useState(0);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // Create a socket instance and connect to the server
  const socket = io('http://localhost:3000'); // Replace with your server URL

  useEffect(() => {
    // When the component mounts, listen for live attendance updates from the server
    socket.on('liveAttendance', (data) => {
      setAttendance(data.attendance);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  // Function to handle joining the movie screening
  const handleJoinScreening = () => {
    // Emit a 'joinScreening' event to the server
    socket.emit('joinScreening', { movieId: id });

    // Disable the join button after joining
    // Optionally, you can also handle rejoining prevention
    // by checking if the user has already joined the screening
    // and enabling/disabling the button accordingly.
  };

  // Use useInterval to periodically update attendance
  useInterval(() => {
    // Fetch attendance from the server (replace with your API call)
    // For example, you can make a GET request to your backend API
    // to fetch the latest attendance data.
    // Update the 'attendance' state with the fetched data.

    // Example:
    // fetch(`http://localhost:3000/api/movies/${id}/attendance`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setAttendance(data.attendance);
    //   });

    // Simulating attendance increase for demonstration purposes
    // In a real-world scenario, this would come from your server.
    setAttendance((prevAttendance) => prevAttendance + 1);
  }, 5000); // Update every 5 seconds

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={4}>
        Live Attendance
      </Heading>
      <Text fontSize="lg" mb={4}>
        Attendance: {attendance} viewers
      </Text>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={handleJoinScreening}
          >
            Join Movie Screening
          </Button>
        </>
      )}
    </Container>
  );
};

export default LiveAttendance;
