import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const AboutSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h2" gutterBottom>
            Qui sommes-nous ?
          </Typography>
          <Typography variant="body1" paragraph>
            Niché au cœur de la ville, le Luxury Hotel incarne l'élégance et le raffinement depuis plus de 50 ans. Notre établissement 5 étoiles combine le charme de l'architecture classique avec des équipements modernes pour offrir une expérience unique.
          </Typography>
          <Typography variant="body1">
            Chaque détail a été pensé pour créer des moments inoubliables, de notre service personnalisé à notre cuisine gastronomique, en passant par nos suites luxueuses et notre spa de renommée mondiale.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Luxury Hotel Facade"
            sx={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;