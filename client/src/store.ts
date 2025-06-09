import { create } from "zustand";

export const useStore = create((set) => ({
  diasVacacionesDisfrutados: 0,
  salario: 0,
  auxilioTransporte: 0,
  fechaInicial: 0,
  fechaFinal: 0,
  totalDias: 0,
  setVacacionesDisfrutadas: (dias: any) =>
    set(() => ({ diasVacacionesDisfrutados: Number(dias) })),

  setSalario: (valorSalario: any) =>
    set(() => ({ salario: Number(valorSalario) })),

  setAuxilioTransporte: (valorAuxilio: any) =>
    set(() => ({ auxilioTransporte: Number(valorAuxilio) })),

  setFechaInicial: (fecha: any) =>
    set(() => ({ fechaInicial: new Date(fecha) })),

  setFechaFinal: (fecha: any) => set(() => ({ fechaFinal: new Date(fecha) })),

  setDiasTotales: () =>
    set((state: any) => {
      console.log(state);
      const diferencia =
        state.fechaFinal && state.fechaInicial
          ? state.fechaFinal.getTime() - state.fechaInicial.getTime()
          : 0;
      const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24)) + 1;
      return {
        totalDias: dias,
      };
    }),
}));

export const useLiquidacion = create((set) => ({
  totalDiasPrestaciones: 0,
  totalDiasVacaciones: 0,
  totalValorCesantias: 0,
  totalValorIntereses: 0,
  totalValorPrimaServicios: 0,
  totalValorVacaciones: 0,
  totalLiquidacion: 0,

  setTotalDiasPrestaciones: (fechaInicial: any, fechaFinal: any) =>
    set(() => {
      if (!fechaInicial || !fechaFinal) return { totalDiasPrestaciones: 0 };

      const añoActual = new Date().getFullYear();
      const añoInicial = fechaInicial.getFullYear();
      const añoFinal = fechaFinal.getFullYear();
      const fechaInicialCalculo = new Date(añoActual, 0, 1);
      let diasPrestaciones = 0;

      if (añoFinal === añoActual && añoInicial < añoActual) {
        diasPrestaciones = fechaFinal.getTime() - fechaInicialCalculo.getTime();
      } else if (añoFinal === añoActual && añoInicial === añoActual) {
        diasPrestaciones = fechaFinal.getTime() - fechaInicial.getTime();
      }

      diasPrestaciones = Math.ceil(
        diasPrestaciones / (1000 * 60 * 60 * 24) + 1
      );
      return { totalDiasPrestaciones: diasPrestaciones };
    }),

  setTotalDiasVacaciones: (fechaInicial: any, fechaFinal: any) =>
    set(() => {
      const ms = fechaFinal.getTime() - fechaInicial.getTime();
      const diasTrabajados = Math.ceil(ms / (1000 * 60 * 60 * 24));
      const diasVacaciones = ((diasTrabajados / 360) * 15).toFixed(2);
      return { totalDiasVacaciones: diasVacaciones };
    }),

  setTotalCesantias: (salario: any, auxilio: any) =>
    set((state: any) => {
      if (!salario) return { totalValorCesantias: 0 };
      return {
        totalValorCesantias: Math.round(
          ((salario + auxilio) * state.totalDiasPrestaciones) / 360
        ),
      };
    }),

  setTotalIntereses: () =>
    set((state: any) => {
      return {
        totalValorIntereses: Math.round(
          (state.totalValorCesantias * 0.12 * state.totalDiasPrestaciones) / 360
        ),
      };
    }),

  setTotalPrima: (salario: any, auxilio: any) =>
    set((state: any) => {
      if (!salario) return { totalValorPrimaServicios: 0 };
      return {
        totalValorPrimaServicios: Math.round(
          ((salario + auxilio) * state.totalDiasPrestaciones) / 360
        ),
      };
    }),

  setTotalVacaciones: (info: any) =>
    set((state: any) => {
      // if (!info.salario) return { totalValorVacaciones: 0 };
      return {
        totalValorVacaciones: Math.round(
          (info.salario * state.totalDiasVacaciones) / 30 -
            info.vacacionesDisfrutadas
        ),
      };
    }),

  setTotalLiquidacion: () =>
    set((state: any) => ({
      totalLiquidacion:
        state.totalValorCesantias +
        state.totalValorIntereses +
        state.totalValorPrimaServicios +
        state.totalValorVacaciones,
    })),
}));
