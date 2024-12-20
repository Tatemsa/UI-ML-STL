import React from 'react';
import { Box, Button, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Hotel } from '@mui/icons-material';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import GastronomyCarousel from '../components/home/GastronomyCarousel';
import FeaturedRooms from '../components/home/FeaturedRooms';
import FanSection from '../components/home/FanSection';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <GastronomyCarousel />
      <FeaturedRooms />
      <FanSection />
      
      <Fab
        color="primary"
        variant="extended"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
        }}
        onClick={() => navigate('/booking')}
      >
        <Hotel sx={{ mr: 1 }} />
        Réserver maintenant
      </Fab>
    </Box>
  );
};

export default Home;