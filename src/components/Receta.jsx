import React, { useContext, useState } from "react";
import { ModalContext } from "../context/modalContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Receta = ({ receta }) => {
  const { setIdReceta, infoReceta, setInfoReceta } = useContext(ModalContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIdReceta(null);
    setInfoReceta({});
  };

  const mostrarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={informacion.strDrink}>
            {`${informacion[`strIngredient${i}`]} cant: ${informacion[`strMeasure${i}`]}`}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          src={receta.strDrinkThumb}
          alt={receta.strDrink}
          className="card-img-top"
        />
        <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={() => {
              setIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver receta
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {infoReceta.strDrink}
              </Typography>
              <h5>Instrucciones:</h5>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {infoReceta.strInstructions}
              </Typography>
              <img
                src={infoReceta.strDrinkThumb}
                alt={infoReceta.strDrink}
                className="img-fluid my-4"
              />
              <h6>Ingredientes y cantidades:</h6>
              <ul>{mostrarIngredientes(infoReceta)}</ul>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};
