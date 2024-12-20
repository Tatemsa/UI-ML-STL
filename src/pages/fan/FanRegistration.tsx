import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Box
} from '@mui/material';

const FanRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    nationality: '',
    preferences: {
      roomTypes: [],
      interests: [],
      dietaryRestrictions: []
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement fan registration logic
    console.log('Fan registration:', formData);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Rejoignez le Club Privilège
        </Typography>
        
        <Typography variant="body1" paragraph textAlign="center" color="text.secondary">
          Devenez membre pour profiter d'avantages exclusifs et de réductions spéciales
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Prénom"
                required
                name="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nom"
                required
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Téléphone"
                required
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Nationalité</InputLabel>
                <Select
                  value={formData.nationality}
                  label="Nationalité"
                  onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                >
                  <MenuItem value="FR">France</MenuItem>
                  <MenuItem value="BE">Belgique</MenuItem>
                  <MenuItem value="CH">Suisse</MenuItem>
                  {/* Add more countries */}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Vos Préférences
              </Typography>
              <FormGroup>
                <Typography variant="subtitle2" gutterBottom>
                  Types de chambres préférés
                </Typography>
                <Grid container>
                  {['Standard', 'Deluxe', 'Suite', 'Présidentielle'].map((type) => (
                    <Grid item xs={6} key={type}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={type}
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ minWidth: 200 }}
                >
                  Devenir Membre
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default FanRegistration;