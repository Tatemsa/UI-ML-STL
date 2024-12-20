import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';

const dishes = [
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    title: 'Cuisine Gastronomique',
    description: 'Des plats raffinés préparés par notre Chef étoilé'
  },
  {
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    title: 'Produits Locaux',
    description: 'Une sélection minutieuse des meilleurs produits régionaux'
  },
  {
    image: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5',
    title: 'Cave à Vins',
    description: 'Une collection exceptionnelle des meilleurs crus'
  }
];

const GastronomyCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % dishes.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + dishes.length) % dishes.length);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom textAlign="center">
        Notre Gastronomie
      </Typography>
      <Box sx={{ position: 'relative', width: '100%', height: 500 }}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={setActiveStep}
          enableMouseEvents
        >
          {dishes.map((dish, index) => (
            <Box key={index} sx={{ position: 'relative' }}>
              <Box
                component="img"
                src={dish.image}
                alt={dish.title}
                sx={{
                  width: '100%',
                  height: 500,
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  p: 3,
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>{dish.title}</Typography>
                <Typography variant="body1">{dish.description}</Typography>
              </Box>
            </Box>
          ))}
        </SwipeableViews>
        <IconButton
          onClick={handleBack}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.8)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.8)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Container>
  );
};

export default GastronomyCarousel;