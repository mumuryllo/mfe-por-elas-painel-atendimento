'use client';

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Divider, Stack, Dialog, DialogContent, Avatar, Zoom } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { HighlightCard, THEME_COLORS, MulherAtendimento } from 'shared-ui';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CampaignIcon from '@mui/icons-material/Campaign';

// 1. Animação de entrada suave para a lista
const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

// 2. Animação de "Pulso" para chamar a atenção no Modal
const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(140, 90, 64, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(140, 90, 64, 0); }
  100% { box-shadow: 0 0 0 0 rgba(140, 90, 64, 0); }
`;

const AnimatedCardWrapper = styled(Box)`
  animation: ${fadeSlideUp} 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
`;

const PulsingAvatar = styled(Avatar)`
  animation: ${pulseGlow} 2s infinite;
  background-color: ${THEME_COLORS.primary} !important;
  width: 96px !important;
  height: 96px !important;
  margin: 0 auto 16px auto;
`;

const HeaderBox = styled(Box)`
  background-color: ${THEME_COLORS.background};
  padding: 48px 24px;
  text-align: center;
  border-bottom: 2px solid ${THEME_COLORS.secondary};
  margin-bottom: 40px;
`;

const INITIAL_ACTIVE: MulherAtendimento[] = [
  { id: '1', eventoId: 'evt-1', nome: 'Ana Clara Souza', servicos: ['Corte', 'Coloração'], status: 'Atendida' }
];

const INITIAL_WAITING: MulherAtendimento[] = [
  { id: '2', eventoId: 'evt-1', nome: 'Mariana Fernandes', servicos: ['Manicure e Pedicure'], status: 'Aguardando atendimento' },
  { id: '3', eventoId: 'evt-1', nome: 'Beatriz Lima', servicos: ['Limpeza de Pele'], status: 'Aguardando atendimento' },
];

export default function WaitingRoomPage() {
  const [activeClients, setActiveClients] = useState<MulherAtendimento[]>(INITIAL_ACTIVE);
  const [waitingList, setWaitingList] = useState<MulherAtendimento[]>(INITIAL_WAITING);
  
  // Estado para controlar quem está sendo chamada no telão AGORA
  const [chamadaAtual, setChamadaAtual] = useState<MulherAtendimento | null>(null);

  useEffect(() => {
    // Simula chamar a próxima da fila após 5 segundos
    const timerEntrada = setTimeout(() => {
      setWaitingList(prev => {
        if (prev.length === 0) return prev;
        const nextClient = prev[0];
        
        // 1. Aciona o Alerta Visual no Telão
        setChamadaAtual(nextClient);
        
        // 2. Já coloca ela na lista de atendidas por baixo do alerta
        setActiveClients(ativos => [...ativos, { ...nextClient, status: 'Atendida' }]);
        
        return prev.slice(1);
      });
    }, 5000);

    return () => clearTimeout(timerEntrada);
  }, []);

  // Controla o tempo que o Modal de Alerta fica na tela (6 segundos)
  useEffect(() => {
    if (chamadaAtual) {
      const timerAlerta = setTimeout(() => {
        setChamadaAtual(null);
      }, 6000);
      return () => clearTimeout(timerAlerta);
    }
  }, [chamadaAtual]);

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
          <Typography variant="subtitle1" color="text.primary" sx={{ mb: 3, textAlign: 'center', letterSpacing: 1 }}>
            EM ATENDIMENTO AGORA
          </Typography>
          
          <Stack spacing={2}>
            {activeClients.length > 0 ? (
              activeClients.map((client) => (
                <AnimatedCardWrapper key={`active-${client.id}`}>
                  <HighlightCard 
                    clientName={client.nome}
                    serviceName={client.servicos.join(', ')}
                    isActive={true}
                  />
                </AnimatedCardWrapper>
              ))
            ) : (
              <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
                Nenhum atendimento no momento.
              </Typography>
            )}
          </Stack>
        </Box>

        <Divider sx={{ borderColor: THEME_COLORS.secondary, mb: 4, opacity: 0.5 }} />

        <Box sx={{ pb: 6 }}>
          <Typography variant="h6" color="text.primary" sx={{ mb: 3 }}>
            Próximas da Fila
          </Typography>
          
          <Stack spacing={2}>
            {waitingList.length > 0 ? (
              waitingList.map((client) => (
                <AnimatedCardWrapper key={`waiting-${client.id}`}>
                  <HighlightCard 
                    clientName={client.nome}
                    serviceName={client.servicos.join(', ')}
                    isActive={false}
                  />
                </AnimatedCardWrapper>
              ))
            ) : (
              <Typography color="text.secondary">A fila está vazia no momento.</Typography>
            )}
          </Stack>
        </Box>
      </Container>

      {/* MODAL DE DESTAQUE - AVISA QUEM FOI CHAMADA */}
      <Dialog 
        open={!!chamadaAtual} 
        slots={{ transition: Zoom }}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 4,
              p: 4,
              textAlign: 'center',
              border: `4px solid ${THEME_COLORS.primary}`,
              bgcolor: THEME_COLORS.background
            }
          }
        }}
      >
        <DialogContent>
          <PulsingAvatar>
            <CampaignIcon sx={{ fontSize: 48, color: '#FFF' }} />
          </PulsingAvatar>
          
          <Typography variant="h4" color="primary.main" sx={{ mb: 1, fontWeight: 'bold' }}>
            CHEGOU SUA VEZ!
          </Typography>
          
          {chamadaAtual && (
            <>
              <Typography variant="h3" color="text.primary" sx={{ my: 3 }}>
                {chamadaAtual.nome}
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ p: 2, bgcolor: THEME_COLORS.paper, borderRadius: 2 }}>
                Por favor, dirija-se ao local de:<br/>
                <strong>{chamadaAtual.servicos.join(', ')}</strong>
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}