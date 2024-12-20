import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Wifi, Coffee, Tv, AirVent, Bath } from 'lucide-react';
import { Room } from '../../types/room';

interface RoomModalProps {
  room: Room | null;
  open: boolean;
  onClose: () => void;
  onBook: (room: Room) => void;
}

const amenityIcons = {
  wifi: <Wifi size={20} />,
  minibar: <Coffee size={20} />,
  tv: <Tv size={20} />,
  climatisation: <AirVent size={20} />,
  salleDeBain: <Bath size={20} />
};

const RoomModal = ({ room, open, onClose, onBook }: RoomModalProps) => {
  if (!room) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{room.title}</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <img
            src={room.image}
            alt={room.title}
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>Description</Typography>
            <Typography paragraph>{room.description}</Typography>
            
            <Typography variant="h6" gutterBottom>Équipements</Typography>
            <List>
              {room.amenities.map((amenity, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    {amenityIcons[amenity as keyof typeof amenityIcons]}
                  </ListItemIcon>
                  <ListItemText primary={amenity} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>Tarifs</Typography>
              <Typography variant="h4" color="primary" gutterBottom>
                {room.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                par nuit
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fermer</Button>
        <Button variant="contained" onClick={() => onBook(room)}>
          Réserver maintenant
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RoomModal;