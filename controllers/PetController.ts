import { useState } from "react";
import { Pet } from "../models/Pet";
import PetService from "../services/PetService";

export const usePetController = () => {
  const [Pets, setPets] = useState<Pet[]>(PetService.getAllPets());
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const addPet = (name: string, description: string) => {
    PetService.addPet(name, description);
    setPets(PetService.getAllPets());
    setDialogVisible(false);
  };

  const addDescription = (id: string, description: string) => {
    setPets(Pets.map((pet) => (pet.id === id ? { ...pet, description } : pet)));
  };

  const openDialog = () => setDialogVisible(true);
  const closeDialog = () => setDialogVisible(false);

  return {
    Pets,
    dialogVisible,
    addPet,
    addDescription,
    openDialog,
    closeDialog,
  };
};
