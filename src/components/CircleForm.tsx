import { useState } from 'react';

const CircleForm: React.FC = () => {
  const [radius, setRadius] = useState<number>();
  const [circunference, setCircunference] = useState<number>();
  const [area, setArea] = useState<number>();

  const calculateCircle = () => {
   console.log('calculo')
  };

  return (
    <div className="p-4">
      <h2 className="text-2x1 font-bold mb-4">Círculo</h2>
      <div>
        <label className="block mb-2">Raio</label>
        <input
         type="number"
         value={radius}
         onChange={(e) => setRadius(Number(e.target.value))}
         placeholder="Raio"
         className="border p-2 mb-4 w-full rounded"
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 w-full rounded"
        onClick={calculateCircle}
      >
        Calcular
      </button>
      <div className="mt-4">
        <p>Circunferência: {circunference} </p>
        <p>Área: {area}</p>
      </div>
    </div>
  );
};

export default CircleForm;
