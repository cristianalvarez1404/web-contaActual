import { create } from "zustand";

export const useStore = create((set) => ({
  diasTotales: 0,
  cesantias: 0,
  intereses: 0,
  prima: 0,
  totalDias: (dias: any) => set((state: any) => ({ diasTotales: dias })),
  totalDiasCesantias: (dias: any) => set((state: any) => ({ cesantias: dias })),
  totalDiasIntereses: (dias: any) => set((state: any) => ({ intereses: dias })),
  totalDiasPrima: (dias: any) => set((state: any) => ({ prima: dias })),
  totalDiasVacaciones: (dias: any) =>
    set((state: any) => ({ vacaciones: dias })),
}));
