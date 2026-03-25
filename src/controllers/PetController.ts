import { useState, useCallback } from "react";
import { Pet } from "../models/Pet";
import PetService, { PetResult } from "../services/PetService";
import { Alert } from "react-native";

export const usePetController = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  const refreshPets = useCallback(() => {
    setPets([...PetService.getAllPets()]);
  }, []);

  const addPet = useCallback((name: string, description: string) => {
    const result = PetService.addPet(name, description);

    if (!result.success) {
      Alert.alert("Erro", result.message);
      return;
    }

    refreshPets();
  }, [refreshPets]);

  const updateDescription = useCallback(
    (id: string, description: string): PetResult => {
      const result = PetService.updateDescription(id, description);

      if (result.success) {
        refreshPets();
      } else {
        Alert.alert("Erro", result.message);
      }

      return result;
    },
    [refreshPets]
  );

  const deletePet = useCallback(
    (id: string) => {
      const result = PetService.deletePet(id);

      if (result.success) {
        refreshPets();
      } else {
        Alert.alert("Erro", result.message);
      }
    },
    [refreshPets]
  );

  return {
    pets,
    addPet,
    updateDescription,
    deletePet,
    refreshPets,
  };
};