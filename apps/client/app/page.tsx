'use client';

import React from 'react';
import { Container, Typography, Box, Divider, Stack } from '@mui/material';
import styled from 'styled-components';
import { HighlightCard, THEME_COLORS, WaitingListState } from 'shared-ui';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const HeaderBox = styled(Box)`
  background-color: ${THEME_COLORS.background};
  padding: 48px 24px;
  text-align: center;
  border-bottom: 2px solid ${THEME_COLORS.secondary};
  margin-bottom: 40px;
`;

const MOCK_DATA: WaitingListState = {
  activeClient: { id: '1', clientName: 'Ana Clara Souza', serviceName: 'Corte, Coloração e Hidratação' },
  waitingList: [
    { id: '2', clientName: 'Mariana Fernandes', serviceName: 'Manicure e Pedicure' },
    { id: '3', clientName: 'Beatriz Lima', serviceName: 'Limpeza de Pele' },
    { id: '4', clientName: 'Juliana Castro', serviceName: 'Design de Sobrancelhas' },
  ]
};

export default function WaitingRoomPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <HeaderBox>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', mb: 1 }}>
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
        <Box sx={{ mb: 6 }}>
          <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2, textAlign: 'center' }}>
            EM ATENDIMENTO AGORA
          </Typography>
          {MOCK_DATA.activeClient && (
            <HighlightCard 
              clientName={MOCK_DATA.activeClient.clientName}
              serviceName={MOCK_DATA.activeClient.serviceName}
              isActive={true}
            />
          )}
        </Box>

        <Divider sx={{ borderColor: THEME_COLORS.secondary, mb: 4, opacity: 0.5 }} />

        <Box sx={{ pb: 6 }}>
          <Typography variant="h6" color="text.primary" sx={{ mb: 3 }}>
            Próximas da Fila
          </Typography>
          
          <Stack spacing={2}>
            {MOCK_DATA.waitingList.map((client) => (
              <HighlightCard 
                key={client.id}
                clientName={client.clientName}
                serviceName={client.serviceName}
                isActive={false}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}