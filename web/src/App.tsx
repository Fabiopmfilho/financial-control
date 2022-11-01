import { Header } from "./components/Header";

interface Props {
  input: number;
  output: number;
  total: number;
}

function App({ input, output, total }: Props) {
  return (
    <div>
      <header>
        <Header input={2000} output={1600} total={400} />
      </header>

      <main className="mt-14 flex justify-center">
        <div className="content-center px-[2.80rem] py-4 rounded shadow-lg">
          <form action="" className="flex flex-row gap-4">
            <div className="flex flex-col">
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                name="description"
                id="description"
                className="border "
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="valor">Valor</label>
              <input
                type="number"
                min={0}
                name="valor"
                id="valor"
                className="border appearance-none "
              />
            </div>

            <div className="mt-4">
              <input type="radio" name="type" id="input" value="input" className="accent-teal-600 mr-1" />
              <label htmlFor="input" className="mr-4">Entrada</label>

              <input type="radio" name="type" id="output" value="output" className="accent-teal-600" />
              <label htmlFor="output">Saida</label>
            </div>

            <button className="bg-teal-800 text-white p-2 rounded hover:bg-teal-700">Adicionar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
