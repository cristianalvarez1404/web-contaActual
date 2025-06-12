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
    set(() => {
      const [year, month, day] = fecha.split("-").map(Number);
      return {
        fechaInicial: new Date(year, month - 1, day),
      };
    }),

  setFechaFinal: (fecha: any) =>
    set(() => {
      const [year, month, day] = fecha.split("-").map(Number);
      return {
        fechaFinal: new Date(year, month - 1, day),
      };
    }),

  setDiasTotales: () =>
    set((state: any) => {
      const diferencia =
        state.fechaFinal && state.fechaInicial
          ? state.fechaFinal.getTime() - state.fechaInicial.getTime()
          : 0;
      const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24)) + 1;

      const mesInicial = Number(state.fechaInicial.getMonth() + 1);
      const mesFinal = Number(state.fechaFinal.getMonth() + 1);
      const diaInicial = Number(state.fechaInicial.getDate());
      const diaFinal = Number(state.fechaFinal.getDate());

      const mesesIrregulares: any = {
        1: -1, // Enero - 31 días
        2: 3, // Febrero - 28 días
        3: -1, // Marzo - 31 días
        4: 0, // Abril - 30 días
        5: -1, // Mayo - 31 días
        6: 0, // Junio - 30 días
        7: -1, // Julio - 31 días
        8: -1, // Agosto - 31 días
        9: 0, // Septiembre - 30 días
        10: -1, // Octubre - 31 días
        11: 0, // Noviembre - 30 días
        12: -1, // Diciembre - 31 días
      };

      let diasARestar = 0;

      for (const i in mesesIrregulares) {
        // console.log(diaFinal);
        // console.log(typeof diaFinal);
        if (Number(i) < mesFinal) {
          diasARestar += mesesIrregulares[i];
        }

        if (diaFinal === 31 && Number(i) === mesFinal) {
          diasARestar += -1;
        }

        if (diaFinal === 28 && Number(i) === mesFinal) {
          console.log("Estoy aqui");
          diasARestar += 3;
        }
      }
      console.log(diasARestar);

      return {
        totalDias: dias + diasARestar,
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
