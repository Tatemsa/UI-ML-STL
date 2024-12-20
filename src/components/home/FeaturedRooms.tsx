import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const featuredRooms = [
  {
    id: 1,
    title: 'Suite Présidentielle',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    description: 'Le summum du luxe avec vue panoramique',
    price: '500€'
  },
  {
    id: 2,
    title: 'Suite Junior',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description: 'Élégance et confort pour votre séjour',
    price: '350€'
  }
];

const FeaturedRooms = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom textAlign="center">
        Nos Chambres d'Exception
      </Typography>
      <Grid container spacing={4}>
        {featuredRooms.map((room) => (
          <Grid item xs={12} md={6} key={room.id}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={room.image}
                alt={room.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {room.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {room.description}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  À partir de {room.price}/nuit
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedRooms;