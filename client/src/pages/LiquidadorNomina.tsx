import React from "react";
import FormNom from "../components/Liquidadores/FormNom";
import FormLiquidacion from "../components/Liquidadores/FormLiquidacion";

const LiquidadorNomina = () => {
  return (
    <div className="w-full">
      <FormNom />
      <br />
      <hr />
      <FormLiquidacion />
    </div>
  );
};

export default LiquidadorNomina;
