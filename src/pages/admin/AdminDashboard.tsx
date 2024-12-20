import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import DashboardStats from './components/DashboardStats';
import RecentBookings from './components/RecentBookings';
import { BarChart, LineChart } from './components/Charts';

const AdminDashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Tableau de Bord Administrateur
      </Typography>

      <DashboardStats />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8}>
          <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              Revenus Mensuels
            </Typography>
            <LineChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              Distribution des Membres
            </Typography>
            <BarChart />
          </Box>
        </Grid>
      </Grid>

      <RecentBookings />
    </Container>
  );
};

export default AdminDashboard;