import { useState } from 'react';

const SquareForm: React.FC = () => {
  const [side, setSide] = useState<number>(0);
  const [perimeter, setPerimeter] = useState<number>();
  const [area, setArea] = useState<number>();

  const calculateSquare = () => {
    setPerimeter(4 * side);
    setArea(side * side);
  };

  return (
    <div className="p-4">
      <h2 className="text-2x1 mb-4">Quadrado</h2>
      <input
        type="number"
        value={side}
        onChange={(e) => setSide(Number(e.target.value))}
        placeholder="Lado"
        className="border p-2 mb-4 w-full"
      />
      <button
        className="bg-blue-500 text-white p-2 w-full"
        onClick={calculateSquare}
      >
        Calcular
      </button>
      <div className="mt-4">
        <p>Perímetro: {perimeter}</p>
        <p>Área: {area} </p>
      </div>
    </div>
  );
};

export default SquareForm;
