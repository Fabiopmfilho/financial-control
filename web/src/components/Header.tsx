interface Props {
  input: number;
  output: number;
  total: number;
}

export const Header = ({ input, output, total }: Props) => {
  return (
    <div className="bg-teal-600 w-full h-40">
      <p className="text-white text-4xl text-center font-bold">
        Controle Financeiro
      </p>
      <div className="flex gap-4 justify-center content-center mt-16">
        <div className="bg-white w-52 text-lg p-4 rounded shadow-lg">
          <p className="text-black flex justify-between">
            Entradas <span>⬆</span>
          </p>
          <p className="text-black font-bold text-xl text-center">R$ {input}</p>
        </div>

        <div className="bg-white w-52 text-lg p-4 rounded shadow-lg">
          <p className="text-black flex justify-between">
            Saídas <span>⬇</span>
          </p>
          <p className="text-black font-bold text-xl text-center">
            R$ {output}
          </p>
        </div>
        
        <div className="bg-white w-52 text-lg p-4 rounded shadow-lg">
          <p className="text-black flex justify-between">
            Total <span>💲</span>
          </p>
          <p className="text-black font-bold text-xl text-center">R$ {total}</p>
        </div>

      </div>
    </div>
  );
};
