import React, { createContext, useEffect, useState } from "react";

export const RecetasContext = createContext();

export const RecetasProvider = (props) => {
  const [consuta, setConsulta] = useState(false);
  const [recetas, setRecetas] = useState([]);
  const [buscarReceta, setBuscarReceta] = useState({
    nombre: "",
    categoria: "",
  });

  useEffect(() => {
    const consultarRecetasApi = async () => {
      if (consuta) {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${buscarReceta.nombre}&c=${buscarReceta.categoria}`;
        const peticion = await fetch(url);
        const resultado = await peticion.json();
        setRecetas(resultado.drinks);
      }
      setConsulta(false);
    };
    consultarRecetasApi();
  }, [buscarReceta]);
  return (
    <RecetasContext.Provider
      value={{
        recetas,
        setBuscarReceta,
        setConsulta,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};
