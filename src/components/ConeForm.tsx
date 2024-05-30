import { useState } from "react";

const ConeForm: React.FC = () => {
    const [radius, setRadius] = useState<number>();
    const [height, setHeight] = useState<number>();
    const [result, setResult] = useState<number>();
  
    const calculateCone = () => {
      console.log("calculou")
    };
  
    return (
      <div className="p-4">
        <h2 className="text-2x1 font-bold mb-4">Cone</h2>
        <div>
         <label className="block mb-2">Raio:</label>
         <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          placeholder="Raio"
          className="border p-2 mb-4 w-full rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block mb-4">Altura:</label>
        <input 
            type="number"
            value={height}
            placeholder="Altura"
            onClick={(e) => setHeight(Number(e.target))}
            className="border p-2 mb-4 w-full rounded"/>
        </div>
        <button
          className="bg-blue-500 text-white p-2 w-full rounded"
          onClick={calculateCone}
        >
          Calcular
        </button>
        <div className="mt-4">
          <p>Surface Area: </p>
          <p>Volume: </p>
        </div>
      </div>
    );
  };
  
  export default ConeForm;