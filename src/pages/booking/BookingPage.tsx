import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BookingPage = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: null,
    checkOut: null,
    roomType: '',
    adults: 1,
    children: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de réservation à implémenter
    console.log('Booking attempt:', bookingData);
  };

  const handleChange = (field: string) => (value: any) => {
    setBookingData({
      ...bookingData,
      [field]: value
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Réservation
        </Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DatePicker
                  label="Date d'arrivée"
                  value={bookingData.checkIn}
                  onChange={handleChange('checkIn')}
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DatePicker
                  label="Date de départ"
                  value={bookingData.checkOut}
                  onChange={handleChange('checkOut')}
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Type de chambre</InputLabel>
                  <Select
                    value={bookingData.roomType}
                    label="Type de chambre"
                    onChange={(e) => handleChange('roomType')(e.target.value)}
                  >
                    <MenuItem value="deluxe">Chambre Deluxe</MenuItem>
                    <MenuItem value="junior">Suite Junior</MenuItem>
                    <MenuItem value="presidential">Suite Présidentielle</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Adultes</InputLabel>
                  <Select
                    value={bookingData.adults}
                    label="Adultes"
                    onChange={(e) => handleChange('adults')(e.target.value)}
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Enfants</InputLabel>
                  <Select
                    value={bookingData.children}
                    label="Enfants"
                    onChange={(e) => handleChange('children')(e.target.value)}
                  >
                    {[0, 1, 2, 3].map((num) => (
                      <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Réserver maintenant
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
};

export default BookingPage;