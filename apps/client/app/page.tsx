'use client';

import React from 'react';
import { Container, Typography, Box, Divider, Grid, Stack } from '@mui/material';
import styled from 'styled-components';
import { HighlightCard } from 'shared-ui';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const HeaderBox = styled(Box)`
  background-color: #FAF6F3;
  padding: 48px 24px;
  text-align: center;
  border-bottom: 2px solid #E8A798;
  margin-bottom: 40px;
`;

const MOCK_DATA = {
  activeClient: { id: '1', clientName: 'Ana Clara Souza', serviceName: 'Corte, Coloração e Hidratação' },
  waitingList: [
    { id: '2', clientName: 'Mariana Fernandes', serviceName: 'Manicure e Pedicure' },
    { id: '3', clientName: 'Beatriz Lima', serviceName: 'Limpeza de Pele' },
    { id: '4', clientName: 'Juliana Castro', serviceName: 'Design de Sobrancelhas' },
  ]
};

export default function WaitingRoomPage() {
  return (
    <Box minHeight="100vh" bgcolor="background.default">
      <HeaderBox>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb={1}>
          <VolunteerActivismIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h3" color="primary.main">
            Projeto Por Elas
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          Acompanhe sua vez no painel
        </Typography>
      </HeaderBox>

      <Container maxWidth="md">
        <Box mb={6}>
          <Typography variant="subtitle1" color="text.primary" mb={2} textAlign="center">
            EM ATENDIMENTO AGORA
          </Typography>
          <HighlightCard 
            clientName={MOCK_DATA.activeClient.clientName}
            serviceName={MOCK_DATA.activeClient.serviceName}
            isActive={true}
          />
        </Box>

        <Divider sx={{ borderColor: '#E8A798', mb: 4, opacity: 0.5 }} />

        <Box pb={6}>
          <Typography variant="h6" color="text.primary" mb={3}>
            Próximas da Fila
          </Typography>
          
          <Grid container spacing={2}>
            {MOCK_DATA.waitingList.map((client) => (
              <Grid item xs={12} key={client.id}>
                <HighlightCard 
                  clientName={client.clientName}
                  serviceName={client.serviceName}
                  isActive={false}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}