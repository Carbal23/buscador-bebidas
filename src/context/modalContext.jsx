import React, { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = useState("");
  const [infoReceta, setInfoReceta] = useState({});

  useEffect(() => {
    const consultarInfoApi = async () => {
        if(!idReceta)return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const peticion = await fetch(url);
      const resultado = await peticion.json();
      setInfoReceta(resultado.drinks[0]);
    };
    consultarInfoApi();
  },[idReceta]);
  return (
    <ModalContext.Provider
      value={{
        infoReceta,
        setIdReceta,
        setInfoReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
