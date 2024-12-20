import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RoomModal from '../components/modals/RoomModal';
import { Room } from '../types/room';

const rooms: Room[] = [
  {
    id: 1,
    title: 'Chambre Deluxe',
    description: 'Profitez d\'un séjour luxueux dans notre chambre Deluxe. Avec une vue imprenable sur la ville et des équipements haut de gamme, cette chambre spacieuse offre un confort optimal pour votre séjour.',
    price: '200€',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    amenities: ['wifi', 'minibar', 'tv', 'climatisation', 'salleDeBain'],
    capacity: 2,
    size: 35,
    bedType: 'King Size'
  },
  {
    id: 2,
    title: 'Suite Junior',
    description: 'Notre Suite Junior allie élégance et confort avec un espace de vie séparé. Parfaite pour les longs séjours ou les voyageurs exigeants.',
    price: '350€',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    amenities: ['wifi', 'minibar', 'tv', 'climatisation', 'salleDeBain'],
    capacity: 3,
    size: 45,
    view: 'Vue Mer',
    bedType: 'King Size + Canapé-lit'
  },
  {
    id: 3,
    title: 'Suite Présidentielle',
    description: 'Le summum du luxe avec une vue panoramique exceptionnelle. Cette suite spacieuse offre des prestations exclusives et un service personnalisé.',
    price: '500€',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    amenities: ['wifi', 'minibar', 'tv', 'climatisation', 'salleDeBain'],
    capacity: 4,
    size: 80,
    view: 'Vue Panoramique',
    bedType: 'King Size + Chambre séparée'
  }
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (room: Room) => {
    setSelectedRoom(room);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRoom(null);
  };

  const handleBookRoom = (room: Room) => {
    navigate('/booking', { state: { selectedRoom: room } });
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom textAlign="center">
        Nos Chambres
      </Typography>
      <Grid container spacing={4}>
        {rooms.map((room) => (
          <Grid item xs={12} md={4} key={room.id}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={room.image}
                alt={room.title}
                sx={{ cursor: 'pointer' }}
                onClick={() => handleOpenModal(room)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {room.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {room.description.substring(0, 100)}...
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  À partir de {room.price}/nuit
                </Typography>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => handleOpenModal(room)}
                >
                  Voir les détails
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <RoomModal
        room={selectedRoom}
        open={modalOpen}
        onClose={handleCloseModal}
        onBook={handleBookRoom}
      />
    </Container>
  );
};

export default Rooms;