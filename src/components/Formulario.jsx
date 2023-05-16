import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/categoriasContext";
import { RecetasContext } from "../context/recetasContext";

export const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const {setBuscarReceta, setConsulta} = useContext(RecetasContext);

  const [inputValue, setInputValue] = useState({
    nombre: "",
    categoria: "",
  });

  const handleOnChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e =>{
    e.preventDefault();
    setBuscarReceta(inputValue);
    setConsulta(true);
  }

  return (
    <form 
    onSubmit={handleSubmit}
    className="col-md-12"
    >
      <fieldset className="text-center">
        <legend>Buscar bebida por categoria o ingredientes</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={handleOnChange}
            value={inputValue.nombre}
          />
        </div>
        <div className="col-md-4">
          <select 
          className="form-control" 
          name="categoria"
          onChange={handleOnChange}
          value={inputValue.categoria}
          >
            <option value="">--Seleccione categoria--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="buscar bebidas"
          />
        </div>
      </div>
    </form>
  );
};
