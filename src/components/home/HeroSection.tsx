import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '80vh',
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, color: 'white' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenue au Luxury Hotel
        </Typography>
        <Typography variant="h5" paragraph>
          Une expérience unique de luxe et de raffinement
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/booking')}
          sx={{ mt: 2 }}
        >
          Réserver maintenant
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;