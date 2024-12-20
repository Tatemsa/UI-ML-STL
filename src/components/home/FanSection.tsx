import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FanSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 8,
        mt: 8,
      }}
    >
      <Container>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Rejoignez notre Club Privilège
        </Typography>
        <Typography variant="h6" textAlign="center" paragraph>
          Devenez membre pour profiter d'avantages exclusifs
        </Typography>
        <Typography variant="body1" textAlign="center" paragraph>
          • Réductions exclusives sur vos séjours
          • Accès prioritaire aux événements
          • Offres spéciales restaurant et spa
          • Newsletter mensuelle
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/register')}
          >
            Devenir Membre
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FanSection;