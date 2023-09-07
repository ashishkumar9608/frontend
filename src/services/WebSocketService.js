import { io } from 'socket.io-client';

// Define your server's WebSocket URL
const socketServerURL = 'http://localhost:5000'; // Replace with your actual server URL

// Create a WebSocket connection
const socket = io(socketServerURL, {
  transports: ['websocket'], // Use WebSocket transport
});

// Define WebSocket event listeners
socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});

// Export the socket instance for use in your components
export default socket;
