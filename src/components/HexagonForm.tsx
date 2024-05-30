
const HexagonForm: React.FC = () => {
    return(
      <div className="p-4">
         <h2 className="text-2x1 font-bold mb-4">Hexagono</h2> 
          <div className="mb-4">
           <label className="block mb-2">Lado:</label>
           <input 
             type="number" 
             placeholder="Lado"
             className="border p-2 mb-4 w-full"/>
           </div>
         
         <button className="bg-blue-500 text-white p-2 w-full rounded">Calcular</button>

         <div className="mt-4">
           <p>Perimeter:</p>
           <p>Area:</p>   
         </div> 
      </div>

    )
}

export default HexagonForm;