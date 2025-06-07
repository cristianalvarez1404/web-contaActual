import React from "react";
import { useStore } from "../../store";

const FormLiquidacion = () => {
  const dias = useStore((state: any) => state.diasTotales);
  const calcularDiasTotales = useStore((state: any) => state.totalDias);
  const calcularTotalDiasCesantias = useStore(
    (state: any) => state.totalDiasCesantias
  );
  const calcularTotalDiasIntereses = useStore(
    (state: any) => state.totalDiasIntereses
  );
  const calcularTotalDiasPrima = useStore((state: any) => state.totalDiasPrima);
  const calcularTotalDiasVacaciones = useStore(
    (state: any) => state.totalDiasVacaciones
  );

  console.log(calcularDiasTotales);
  return (
    <div className="w-[90%] min-h-[50vh] m-auto p-5">
      <h2 className="text-xl text-blue-800 font-bold mb-5">
        Liquidador de contrato laboral {dias}
      </h2>
      <form className="flex gap-5">
        <div className="flex-1">
          <h2 className="text-blue-800">Información básica</h2>
          <div className="p-2 flex flex-col">
            <label htmlFor="name" className="mb-2">
              Nombre empleado:
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-400 p-2 rounded-xl"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="cedula" className="mb-2">
              Cédula empleado:
            </label>
            <input
              type="text"
              id="cedula"
              className="border border-gray-400 p-2 rounded-xl"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="contrato" className="mb-2">
              Tipo de contrato:
            </label>
            <select
              name=""
              id="contrato"
              className="border border-gray-400 p-2 rounded-xl"
            >
              <option disabled selected>
                Elige tipo de contrato
              </option>
              <option value="">Fijo</option>
              <option value="">Indefinido</option>
              <option value="">Obra u labor</option>
            </select>
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="" className="mb-2">
              Fecha inicio
            </label>
            <input
              type="date"
              id=""
              className="border border-gray-400 p-2 rounded-xl"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="" className="mb-2">
              Fecha final:
            </label>
            <input
              type="date"
              id=""
              className="border border-gray-400 p-2 rounded-xl"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="" className="mb-2">
              Días de vacaciones disfrutados:
            </label>
            <input
              type="number"
              id=""
              min={0}
              defaultValue={0}
              className="border border-gray-400 p-2 rounded-xl"
              onChange={(e) =>
                calcularTotalDiasVacaciones(Number(e.target.value))
              }
            />
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="" className="mb-2">
              Salario mensual:
            </label>
            <input
              type="number"
              id=""
              min={0}
              defaultValue={0}
              className="border border-gray-400 p-2 rounded-xl"
            />
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="" className="mb-2">
              Auxilio de transporte mensual:
            </label>
            <input
              type="number"
              id=""
              min={0}
              defaultValue={0}
              className="border border-gray-400 p-2 rounded-xl"
            />
          </div>
        </div>
        <div className="flex-2">
          <h2 className="text-blue-800 mb-5">Liquidador</h2>
          <div className="flex flex-col gap-5 border border-gray-400 p-5 rounded-2xl">
            <div className="border-b-2 border-gray-300 border-dashed p-2">
              <h3 className="font-medium">Total días laborados:</h3>
              <p>210 días</p>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="flex-1">
                <h3 className="font-medium">Total días Cesantias:</h3>
                <p>180 días</p>
              </div>
              <div className="mt-2 flex-1">
                <h3 className="font-medium">Valor cesantias:</h3>
                <p>$5.000.000</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="flex-1">
                <h3 className="font-medium">Total días Intereses Cesantias:</h3>
                <p>180 días</p>
              </div>
              <div className="mt-2 flex-1">
                <h3 className="font-medium">Valor Intereses cesantias:</h3>
                <p>$800.000</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="flex-1">
                <h3 className="font-medium">Total días prima de servicios:</h3>
                <p>60 días</p>
              </div>
              <div className="mt-2 flex-1">
                <h3 className="font-medium">Valor prima de servicios:</h3>
                <p>$910.000</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="flex-1">
                <h3 className="font-medium">Total días vacaciones:</h3>
                <p>60 días</p>
              </div>
              <div className="mt-2 flex-1">
                <h3 className="font-medium">Valor vacaciones:</h3>
                <p>$480.000</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="mt-2 flex items-center gap-2">
                <h3 className="font-medium text-3xl">Total liquidación:</h3>
                <p className="text-xl font-thin">$17.000.000</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default FormLiquidacion;
