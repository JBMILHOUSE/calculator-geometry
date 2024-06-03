import { useState } from 'react';
import { calculateSquare } from '../api/api';

const SquareForm: React.FC = () => {
  const [side, setSide] = useState<number>(0);
  const [result, setResult] = useState<{ perimeter: number, area: number } | null>();

  const handleCalculateSquare = async () => {
    
    if(side !== undefined) {
      try {
        
        const dadosSquare = await calculateSquare(side);
        setResult(dadosSquare)

      } catch (error) {
        console.error(error)
      }
     } else {
       alert('Por favor, preencha todos os campos')
     }
  };

  return (
    <div className="p-4">
      <h2 className="text-2x1 font-bold mb-4">Quadrado</h2>
      <div>
        <label className="block mb-2">Lado:</label>
        <input
        type="number"
        value={side}
        onChange={(e) => setSide(parseFloat(e.target.value))}
        placeholder="Lado"
        className="border p-2 mb-4 w-full rounded"
      />
      </div>
      <button
        className="bg-blue-500 text-white p-2 w-full rounded"
        onClick={handleCalculateSquare}
      >
        Calcular
      </button>
      {result && (
        <div className="mt-4">
          <p>Perímetro: {result?.perimeter}</p>
          <p>Área: {result?.area} </p>
       </div>
      )}
    </div>
  );
};

export default SquareForm;
