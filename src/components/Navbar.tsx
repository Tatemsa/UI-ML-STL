import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ 
          flexGrow: 1, 
          textDecoration: 'none', 
          color: 'inherit' 
        }}>
          Luxury Hotel
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Accueil
          </Button>
          <Button color="inherit" component={Link} to="/rooms">
            Chambres
          </Button>
          <Button color="inherit" component={Link} to="/services">
            Services
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/login"
            variant="outlined"
            sx={{ borderColor: 'white' }}
          >
            Connexion
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;