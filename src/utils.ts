// Função para formatar números
export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
  }).format(number);
};