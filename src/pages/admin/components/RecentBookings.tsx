import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip
} from '@mui/material';

const bookings = [
  {
    id: 'B001',
    guest: 'Jean Dupont',
    room: 'Suite Présidentielle',
    checkIn: '2024-03-15',
    checkOut: '2024-03-18',
    status: 'confirmed',
    amount: '€1,500'
  },
  // Add more mock data here
];

const RecentBookings = () => {
  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Réservations Récentes
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Chambre</TableCell>
              <TableCell>Arrivée</TableCell>
              <TableCell>Départ</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell align="right">Montant</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.guest}</TableCell>
                <TableCell>{booking.room}</TableCell>
                <TableCell>{booking.checkIn}</TableCell>
                <TableCell>{booking.checkOut}</TableCell>
                <TableCell>
                  <Chip
                    label={booking.status}
                    color={booking.status === 'confirmed' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">{booking.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentBookings;