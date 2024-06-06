import React, { useState } from "react";
import { calculateCone } from "../api/api";

const ConeForm: React.FC = () => {
  const [radius, setRadius] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();
  const [result, setResult] = useState<{ surfaceArea: number, volume: number | null }>();

  const handleCalculateCone = async () => {

    if (radius !== undefined && height !== undefined) {
      try {

        const dadosCone = await calculateCone(radius, height);
        setResult(dadosCone)

      } catch (error) {
        console.error(error)
      }
    } else {
      alert('Por favor, preencha todos os campos')
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2x1 font-bold mb-4 text-center">Cone</h2>
      <div>
        <label className="block mb-2">Raio:</label>
        <input
          type="number"
          value={radius || ''}
          onChange={(e) => setRadius(parseFloat(e.target.value))}
          placeholder="Raio"
          className="border p-2 mb-4 w-full rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-4">Altura:</label>
        <input
          type="number"
          value={height || ''}
          placeholder="Altura"
          onChange={(e) => setHeight(parseFloat(e.target.value))}
          className="border p-2 mb-4 w-full rounded" />
      </div>
      <button
        className="bg-blue-500 text-white p-2 w-full rounded"
        onClick={handleCalculateCone}
      >
        Calcular
      </button>
      {result && (
        <div className="mt-4 text-center">
          <p>Área da superfície: {result?.surfaceArea}</p>
          <p>Volume: {result?.volume}</p>
        </div>
      )}
    </div>
  );
};

export default ConeForm;