// store.ts

import { create } from "zustand";

type DateStore = {
  date: string | undefined;
  newDate: any[] | undefined; // Nouvelle variable pour stocker newdate
  rechercheTag: string; // Ajout de rechercheTag au type DateStore
  setDate: (newDate: string) => void;
  setNewDate: (newData: any[]) => void; // Fonction pour mettre à jour newDate
  setRechercheTag: (tag: string) => void; // Fonction pour mettre à jour rechercheTag
};

export const useDateStore = create<DateStore>((set) => ({
  date: undefined,
  newDate: undefined,
  rechercheTag: "", // Initialisation de rechercheTag
  setDate: (newDate) => set({ date: newDate }),
  setNewDate: (newData) => set({ newDate: newData }), // Implémentation de la fonction pour mettre à jour newDate
  setRechercheTag: (tag) => set({ rechercheTag: tag }), // Implémentation de la fonction pour mettre à jour rechercheTag
}));
