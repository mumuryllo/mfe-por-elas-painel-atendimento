import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Stack } from '@mui/material';
import styled from 'styled-components';
import Face3Icon from '@mui/icons-material/Face3';
import SpaIcon from '@mui/icons-material/Spa';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const StyledCard = styled(Card)<{ $isActive: boolean }>`
  border-left: 8px solid ${props => props.$isActive ? '#8C5A40' : '#E8A798'};
  margin-bottom: 16px;
  border-radius: 16px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(140, 90, 64, 0.1);
  }
`;

export interface HighlightCardProps {
  clientName: string;
  serviceName: string;
  isActive?: boolean;
}

export const HighlightCard = ({ clientName, serviceName, isActive = false }: HighlightCardProps) => {
  return (
    <StyledCard elevation={isActive ? 3 : 1} $isActive={isActive}>
      <CardContent sx={{ p: isActive ? 3 : 2, '&:last-child': { pb: isActive ? 3 : 2 } }}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar 
            sx={{ 
              bgcolor: isActive ? 'primary.main' : 'secondary.main', 
              width: isActive ? 72 : 56, 
              height: isActive ? 72 : 56 
            }}
          >
            <Face3Icon sx={{ fontSize: isActive ? 40 : 32, color: isActive ? '#FFF' : '#4A2F21' }} />
          </Avatar>
          
          <Box flex={1}>
            <Typography variant={isActive ? "h4" : "h6"} color="text.primary">
              {clientName}
            </Typography>
            
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
              <SpaIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body1" color="text.secondary">
                {serviceName}
              </Typography>
            </Stack>

            {isActive && (
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
                <AutoAwesomeIcon sx={{ fontSize: 20, color: 'success.main' }} />
                <Typography variant="button" sx={{ color: 'success.main' }}>
                  EM ATENDIMENTO
                </Typography>
              </Stack>
            )}
          </Box>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};