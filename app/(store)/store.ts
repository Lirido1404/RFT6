// store.ts

import { create } from "zustand";

type DateStore = {
  date: string | undefined;
  newDate: any[] | undefined; // Nouvelle variable pour stocker newdate
  setDate: (newDate: string) => void;
  setNewDate: (newData: any[]) => void; // Fonction pour mettre à jour newDate
};

export const useDateStore = create<DateStore>((set) => ({
  date: undefined,
  newDate: undefined,
  setDate: (newDate) => set({ date: newDate }),
  setNewDate: (newData) => set({ newDate: newData }), // Implémentation de la fonction pour mettre à jour newDate
}));
