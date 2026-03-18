import { useState } from "react";
import { Pet } from "../models/Pet";
import PetService from "../services/PetService";
import { Alert } from "react-native";

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

  const deletePet = (id: string) => {
    Alert.alert(
      "Confirmação de exclusão",
      "Tem certeza que deseja excluir este Pet?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            const updatedPets = PetService.deletePet(id);
            setPets(updatedPets);
          },
        },
      ],
    );
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
    deletePet,
  };
};
