'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import styled from 'styled-components';
import { THEME_COLORS, THEME_SIZES } from 'shared-ui';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Face3Icon from '@mui/icons-material/Face3';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const MenuCard = styled(Paper)`
  padding: 32px;
  border-radius: ${THEME_SIZES.borderRadius}px;
  border-top: ${THEME_SIZES.cardBorderWidth} solid ${THEME_COLORS.primary};
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(140, 90, 64, 0.15);
  }
`;

export default function DashboardPage() {
  const router = useRouter();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" color="primary.main" sx={{ mb: 6, textAlign: 'center' }}>
          Painel de Gestão - Por Elas
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <MenuCard elevation={2} onClick={() => router.push('/evento')}>
              <EventAvailableIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h6" color="text.primary">Novo Evento</Typography>
            </MenuCard>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 4 }}>
            <MenuCard elevation={2} onClick={() => router.push('/cadastro')}>
              <Face3Icon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h6" color="text.primary">Cadastrar Mulher</Typography>
            </MenuCard>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <MenuCard elevation={2} onClick={() => router.push('/lista')}>
              <FormatListBulletedIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h6" color="text.primary">Gerenciar Fila</Typography>
            </MenuCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}