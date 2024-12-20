import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Luxury Hotel
            </Typography>
            <Typography variant="body2">
              Une expérience unique de luxe et de raffinement au cœur de la ville.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone size={20} style={{ marginRight: '8px' }} />
              <Typography variant="body2">+33 1 23 45 67 89</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Mail size={20} style={{ marginRight: '8px' }} />
              <Typography variant="body2">contact@luxuryhotel.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MapPin size={20} style={{ marginRight: '8px' }} />
              <Typography variant="body2">123 Avenue du Luxe, 75008 Paris</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Liens Rapides
            </Typography>
            <Link href="/rooms" color="inherit" display="block" sx={{ mb: 1 }}>
              Nos Chambres
            </Link>
            <Link href="/services" color="inherit" display="block" sx={{ mb: 1 }}>
              Services
            </Link>
            <Link href="/blog" color="inherit" display="block" sx={{ mb: 1 }}>
              Blog
            </Link>
            <Link href="/contact" color="inherit" display="block">
              Contact
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
          © {new Date().getFullYear()} Luxury Hotel. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;