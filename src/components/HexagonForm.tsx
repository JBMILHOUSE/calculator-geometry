import { useState } from "react";
import { calculateHexagon } from "../api/api";

const HexagonForm: React.FC = () => {
  const [side, setSide] = useState<number>();
  const [result, setResult] = useState<{ perimeter: number, area: number } | null>();

  const handleCalculateHexagon = async () => {
    
    if(side !== undefined) {
      try {
        
        const dadosHexagono = await calculateHexagon(side);
        setResult(dadosHexagono)

      } catch (error) {
        console.error(error)
      }
     } else {
       alert('Por favor, preencha todos os campos')
     }
  };

  return(
    <div className="p-4">
      <h2 className="text-2x1 font-bold mb-4">Hexágono</h2> 
        <div className="mb-4">
          <label className="block mb-2">Lado:</label>
          <input 
            type="number" 
            value={side}
            onChange={(e) => setSide(parseFloat(e.target.value))}
            placeholder="Lado"
            className="border p-2 mb-4 w-full"/>
        </div>
         
      <button 
        onClick={handleCalculateHexagon} 
        className="bg-blue-500 text-white p-2 w-full rounded"
      >
        Calcular
      </button>

      {result && (
        <div className="mt-4">
          <p>Perímetro: {result?.perimeter}</p>
          <p>Área: {result?.area.toFixed(1)}</p>   
        </div>
      )} 
    </div>
  )
}

export default HexagonForm;