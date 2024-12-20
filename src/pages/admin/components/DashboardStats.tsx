import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { Users, Award, TrendingUp, Hotel, Calendar, CreditCard } from 'lucide-react';

const StatsCard = ({ icon, title, value, trend }: any) => (
  <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
    <Box sx={{ color: 'primary.main' }}>{icon}</Box>
    <Box>
      <Typography variant="h6" gutterBottom>{value}</Typography>
      <Typography variant="body2" color="text.secondary">{title}</Typography>
      {trend && (
        <Typography variant="caption" color={trend.type === 'up' ? 'success.main' : 'error.main'}>
          {trend.value}% {trend.type === 'up' ? '↑' : '↓'} depuis le mois dernier
        </Typography>
      )}
    </Box>
  </Paper>
);

const DashboardStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <StatsCard
          icon={<Users size={24} />}
          title="Membres Fans"
          value="1,234"
          trend={{ type: 'up', value: 12 }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatsCard
          icon={<Hotel size={24} />}
          title="Taux d'occupation"
          value="85%"
          trend={{ type: 'up', value: 5 }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatsCard
          icon={<CreditCard size={24} />}
          title="Revenu mensuel"
          value="€125,000"
          trend={{ type: 'up', value: 8 }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatsCard
          icon={<Calendar size={24} />}
          title="Réservations du mois"
          value="256"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatsCard
          icon={<Award size={24} />}
          title="Satisfaction client"
          value="4.8/5"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatsCard
          icon={<TrendingUp size={24} />}
          title="Taux de conversion"
          value="12%"
          trend={{ type: 'up', value: 3 }}
        />
      </Grid>
    </Grid>
  );
};

export default DashboardStats;