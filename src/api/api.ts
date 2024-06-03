import axios from 'axios'

// Configuração do axios
const api = axios.create({
   baseURL: 'http://localhost:8080',
   headers: {
    'Content-Type': 'application/json',
   },
});

// função para calcular as propriedades do cone
export const calculateCone = async (radius: number, height: number) => {

    try {

      const response = await api.get('/geometric/cone', { 
        params: { radius, height }
    });
      return response.data

    } catch (error) {
      console.error('Erro ao calcular o cone:', error)
      throw error;
    }

};

// função para calcular as propriedades do quadrado
export const calculateSquare = async (side: number) => {

    try {

      const response = await api.get('/geometric/square', { 
        params: { side }
    });
      return response.data

    } catch (error) {
      console.error('Erro ao calcular o quadrado:', error)
      throw error;
    }

};

// função para calcular as propriedades do círculo
export const calculateCircle = async (radius: number) => {

    try {

      const response = await api.get('/geometric/circle', { 
        params: { radius }
    });
      return response.data

    } catch (error) {
      console.error('Erro ao calcular o círculo:', error)
      throw error;
    }

};

// função para calcular as propriedades do Hexágono
export const calculateHexagon = async (side: number) => {

    try {

      const response = await api.get('/geometric/hexagon', { 
        params: { side }
    });
      return response.data

    } catch (error) {
      console.error('Erro ao calcular hexágono:', error)
      throw error;
    }

};

export default api;
