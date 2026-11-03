import { HighlightCard } from './HighlightCard';

const meta = {
  title: 'Components/HighlightCard',
  component: HighlightCard,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    clientName: 'Maria Silva',
    serviceName: 'Manicure & Pedicure',
    isActive: false,
  },
};

export const ActiveTreatment = {
  args: {
    clientName: 'Ana Clara',
    serviceName: 'Corte e Hidratação',
    isActive: true,
  },
};