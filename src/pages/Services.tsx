import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button } from '@mui/material';
import { Spa, Restaurant, Pool, FitnessCenter, LocalBar, DirectionsCar } from '@mui/icons-material';
import ServiceModal from '../components/modals/ServiceModal';
import { Service } from '../types/service';

const services: Service[] = [
  {
    id: 1,
    icon: <Spa fontSize="large" />,
    title: 'Spa & Bien-être',
    description: 'Profitez de nos massages et soins relaxants dans notre spa luxueux',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
    details: 'Notre spa propose une gamme complète de soins incluant massages, soins du visage, et thérapies holistiques. Profitez également de notre espace bien-être avec sauna, hammam et bain à remous.',
    schedule: 'Ouvert tous les jours de 9h à 20h'
  },
  {
    id: 2,
    icon: <Restaurant fontSize="large" />,
    title: 'Restaurant Gastronomique',
    description: 'Savourez une cuisine raffinée préparée par nos chefs étoilés',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    details: 'Notre restaurant étoilé propose une cuisine gastronomique française moderne, élaborée avec les meilleurs produits locaux et de saison.',
    schedule: 'Déjeuner: 12h-14h30 | Dîner: 19h-22h30'
  },
  {
    id: 3,
    icon: <Pool fontSize="large" />,
    title: 'Piscine Infinity',
    description: 'Nagez dans notre piscine à débordement avec vue panoramique',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    details: 'Piscine chauffée à débordement offrant une vue imprenable sur la ville. Chaises longues et service de bar disponibles.',
    schedule: 'Ouvert de 7h à 22h'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom textAlign="center">
        Nos Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} md={4} key={service.id}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={service.image}
                alt={service.title}
                sx={{ cursor: 'pointer' }}
                onClick={() => handleOpenModal(service)}
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {service.icon}
                  <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {service.description}
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => handleOpenModal(service)}
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ServiceModal
        service={selectedService}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default Services;