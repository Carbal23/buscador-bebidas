import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListaRecetas } from "./components/ListaRecetas";
import { CategoriasProvider } from "./context/categoriasContext";
import { ModalContext, ModalProvider } from "./context/modalContext";
import { RecetasProvider } from "./context/recetasContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
