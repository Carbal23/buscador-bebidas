import React, { createContext, useEffect, useState } from "react";

export const CategoriasContext = createContext();

export const CategoriasProvider = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const peticion = await fetch(url);
      const resultado = await peticion.json();
      setCategorias(resultado.drinks);
    };
    consultarApi();
  }, []);

  return (
    <CategoriasContext.Provider value={{categorias}}>
      {props.children}
    </CategoriasContext.Provider>
  );
};
