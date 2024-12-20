import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardHeader, Avatar } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'Soirée Jazz au Lounge Bar',
    date: '15 Mars 2024',
    author: 'Marie Dubois',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    content: 'Rejoignez-nous pour une soirée exceptionnelle avec notre nouveau quartet de jazz...'
  },
  {
    id: 2,
    title: 'Nouveau Menu Gastronomique',
    date: '10 Mars 2024',
    author: 'Chef Pierre Martin',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    content: 'Découvrez notre nouvelle carte d\'été élaborée avec des produits locaux...'
  },
  {
    id: 3,
    title: 'Spa : Nouveaux Soins Disponibles',
    date: '5 Mars 2024',
    author: 'Sophie Laurent',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
    content: 'Notre spa s\'enrichit de nouveaux soins signature pour votre bien-être...'
  }
];

const Blog = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom textAlign="center">
        Blog & Actualités
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardHeader
                avatar={
                  <Avatar aria-label="author">
                    {post.author.charAt(0)}
                  </Avatar>
                }
                title={post.title}
                subheader={post.date}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;