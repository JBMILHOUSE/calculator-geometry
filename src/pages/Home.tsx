const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="mb-6 text-center">
      <h1 className="text-lg font-semibold">{"Paulo Hyago da Silveira Yamanaca - 22331".toUpperCase()}</h1>
      <h1 className="text-lg font-semibold">{"Christopher de Oliveira Alexandre - 23322".toUpperCase()}</h1>
      </div>
      <div className="text-center p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-6x1 font-bold mb-4">Cálculo Geométrico</h1>
        <p className="text-lg">
          Escolha uma forma geométrica no menu acima para calcular seus
          parâmetros.
        </p>
      </div>
    </div>
  );
};

export default Home;
