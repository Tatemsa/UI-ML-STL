import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Grid } from '@mui/material';
import { Service } from '../../types/service';

interface ServiceModalProps {
  service: Service | null;
  open: boolean;
  onClose: () => void;
  onBook?: (service: Service) => void;
}

const ServiceModal = ({ service, open, onClose, onBook }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{service.title}</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <img
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Description</Typography>
            <Typography paragraph>{service.description}</Typography>
          </Grid>
          {service.details && (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Détails du service</Typography>
              <Typography paragraph>{service.details}</Typography>
            </Grid>
          )}
          {service.schedule && (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Horaires</Typography>
              <Typography paragraph>{service.schedule}</Typography>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Fermer</Button>
        {onBook && (
          <Button variant="contained" onClick={() => onBook(service)}>
            Réserver
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ServiceModal;