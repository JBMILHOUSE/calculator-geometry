const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-5x1 font-bold mb-4">Cálculo Geométrico</h1>
        <p className="text-lg">
          Escolha uma forma geométrica no menu acima para calcular seus
          parâmetros.
        </p>
      </div>
    </div>
  );
};

export default Home;
