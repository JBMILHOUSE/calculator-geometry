import { useState } from 'react';
import { calculateCircle } from '../api/api';
import { formatNumber } from '../utils';

const CircleForm: React.FC = () => {
  const [radius, setRadius] = useState<number>();
  const [result, setResult] = useState<{ perimeter: number, area: number } | null>();

  const handleCalculateCircle = async () => {

    if (radius !== undefined) {
      try {

        const dadosCirculo = await calculateCircle(radius);
        setResult(dadosCirculo)

      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Por favor, preencha todos os campos')
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded-lg">
      <h2 className="text-2x1 font-bold mb-4">Círculo</h2>
      <div>
        <label className="block mb-2">Raio:</label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
          placeholder="Raio"
          className="border p-2 mb-4 w-full rounded"
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 w-full rounded"
        onClick={handleCalculateCircle}
      >
        Calcular
      </button>
      {result && (
        <div className="mt-4">
          <p>Circunferência: {result?.perimeter.toFixed(2)} </p>
          <p>Área: {formatNumber(result.area)}</p>
        </div>
      )}
    </div>
  );
};

export default CircleForm;
