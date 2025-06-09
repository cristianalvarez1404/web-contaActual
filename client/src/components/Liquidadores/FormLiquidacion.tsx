import React, { useEffect } from "react";
import { useLiquidacion, useStore } from "../../store";

const FormLiquidacion = () => {
  const fechaInicial = useStore((state: any) => state.fechaInicial);
  const fechaFinal = useStore((state: any) => state.fechaFinal);
  const salario = useStore((state: any) => state.salario);
  const auxilioTransporte = useStore((state: any) => state.auxilioTransporte);
  const vacacionesDisfrutadas = useStore(
    (state: any) => state.vacacionesDisfrutadas
  );
  const dias = useStore((state: any) => state.totalDias);
  const diasPrestaciones = useLiquidacion(
    (state: any) => state.totalDiasPrestaciones
  );
  const diasVacaciones = useLiquidacion(
    (state: any) => state.totalDiasVacaciones
  );
  const valorCesantias = useLiquidacion(
    (state: any) => state.totalValorCesantias
  );
  const valorIntereses = useLiquidacion(
    (state: any) => state.totalValorIntereses
  );
  const valorPrima = useLiquidacion(
    (state: any) => state.totalValorPrimaServicios
  );
  const valorVacaciones = useLiquidacion(
    (state: any) => state.totalValorVacaciones
  );
  const valorLiquidacion = useLiquidacion(
    (state: any) => state.totalLiquidacion
  );

  const setFechaInial = useStore((state: any) => state.setFechaInicial);
  const setFechaFinal = useStore((state: any) => state.setFechaFinal);
  const setCalculoDiasTotales = useStore((state: any) => state.setDiasTotales);
  const setVacacionesDisfrutadas = useStore(
    (state: any) => state.setVacacionesDisfrutadas
  );
  const setSalario = useStore((state: any) => state.setSalario);
  const setAuxilioTransporte = useStore(
    (state: any) => state.setAuxilioTransporte
  );

  const setTotalDiasPrestaciones = useLiquidacion(
    (state: any) => state.setTotalDiasPrestaciones
  );
  const setTotalDiasVacaciones = useLiquidacion(
    (state: any) => state.setTotalDiasVacaciones
  );
  const setTotalCesantias = useLiquidacion(
    (state: any) => state.setTotalCesantias
  );
  const setTotalIntereses = useLiquidacion(
    (state: any) => state.setTotalIntereses
  );
  const setTotalPrima = useLiquidacion((state: any) => state.setTotalPrima);

  const setTotalVacaciones = useLiquidacion(
    (state: any) => state.setTotalVacaciones
  );

  const setTotalLiquidacion = useLiquidacion(
    (state: any) => state.setTotalLiquidacion
  );

  useEffect(() => {
    if (fechaInicial && fechaFinal) {
      setCalculoDiasTotales();
      setTotalDiasPrestaciones(fechaInicial, fechaFinal);
      setTotalDiasVacaciones(fechaInicial, fechaFinal);
      setTotalCesantias(salario, auxilioTransporte);
      setTotalIntereses();
      setTotalPrima(salario, auxilioTransporte);
      setTotalVacaciones({
        salario,
        vacacionesDisfrutadas: vacacionesDisfrutadas || 0,
      });
      setTotalLiquidacion();
    }
  }, [fechaInicial, fechaFinal]);

  useEffect(() => {
    console.log(salario);
    console.log("Días para prestaciones:", diasPrestaciones);
    console.log("Días para vacaciones:", diasVacaciones);
    console.log("Total para cesantias:", valorCesantias);
    console.log("Total para interes:", valorIntereses);
    console.log("Total para prima:", valorPrima);
    console.log("Total para vacaciones:", valorVacaciones);
  }, [diasPrestaciones]);

  const convertToPeso = (valor: any) => {
    const formatoCOP = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(valor);
    return formatoCOP;
  };

  return (
    <div className="w-[90%] min-h-[50vh] m-auto p-5">
      <h2 className="text-xl text-blue-800 font-bold mb-5">
        Liquidador de contrato laboral
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
              onClick={setCalculoDiasTotales}
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
              onChange={(e) => setFechaInial(e.target.value)}
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
              onChange={(e) => setFechaFinal(e.target.value)}
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
              value={vacacionesDisfrutadas}
              className="border border-gray-400 p-2 rounded-xl"
              onChange={(e) => setVacacionesDisfrutadas(e.target.value)}
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
              value={salario}
              className="border border-gray-400 p-2 rounded-xl"
              onChange={(e) => setSalario(e.target.value)}
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
              value={auxilioTransporte}
              className="border border-gray-400 p-2 rounded-xl"
              onChange={(e) => setAuxilioTransporte(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-2">
          <h2 className="text-blue-800 mb-5">Liquidador</h2>
          <div className="flex flex-col gap-5 border border-gray-400 p-5 rounded-2xl">
            <div className="border-b-2 border-gray-300 border-dashed p-2">
              <h3 className="font-medium">Total días laborados:</h3>
              <p>{fechaInicial && fechaFinal ? dias : 0}</p>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="flex-1">
                <h3 className="font-medium">Total días Cesantias:</h3>
                <p>{diasPrestaciones && diasPrestaciones} días</p>
              </div>
              <div className="mt-2 flex-1">
                <h3 className="font-medium">Valor cesantias:</h3>
                <p>{valorCesantias ? convertToPeso(valorCesantias) : 0}</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="flex-1">
                <h3 className="font-medium">Total días Intereses Cesantias:</h3>
                <p>{diasPrestaciones && diasPrestaciones} días</p>
              </div>
              <div className="mt-2 flex-1">
                <h3 className="font-medium">Valor Intereses cesantias:</h3>
                <p>{valorIntereses ? convertToPeso(valorIntereses) : 0}</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="flex-1">
                <h3 className="font-medium">Total días prima de servicios:</h3>
                <p>{diasPrestaciones && diasPrestaciones} días</p>
              </div>
              <div className="mt-2 flex-1">
                <h3 className="font-medium">Valor prima de servicios:</h3>
                <p>{valorPrima ? convertToPeso(valorPrima) : 0}</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="flex-1">
                <h3 className="font-medium">Total días vacaciones:</h3>
                <p>{diasVacaciones && diasVacaciones} días</p>
              </div>
              <div className="mt-2 flex-1">
                <h3 className="font-medium">Valor vacaciones:</h3>
                <p>{valorVacaciones ? convertToPeso(valorVacaciones) : 0}</p>
              </div>
            </div>
            <div className="flex items-center border-b-2 border-gray-300 border-dashed p-2">
              <div className="mt-2 flex items-center gap-2">
                <h3 className="font-medium text-3xl">Total liquidación:</h3>
                <p className="text-xl font-thin">
                  {convertToPeso(valorLiquidacion)}
                </p>
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
