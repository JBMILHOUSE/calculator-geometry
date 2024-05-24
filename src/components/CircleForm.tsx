import { useState } from 'react';

const CircleForm: React.FC = () => {
  const [radius, setRadius] = useState<number>(0);
  const [circunference, setCircunference] = useState<number>();
  const [area, setArea] = useState<number>();

  const calculateCircle = () => {
    setCircunference(2 * Math.PI * radius);
    setArea(Math.PI * radius * radius);
  };

  return (
    <div className="p-4">
      <h2 className="text-2x1 mb-4">Círculo</h2>
      <input
        type="number"
        value={radius}
        onChange={(e) => setRadius(Number(e.target.value))}
        placeholder="Raio"
        className="border p-2 mb-4 w-full"
      />
      <button
        className="bg-blue-500 text-white p-2 w-full"
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
