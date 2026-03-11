import { Pet } from "../models/Pet";
import { Alert } from "react-native";

class PetService {
  private Pets: Pet[] = [
    { id: "1", name: "Pet 1", description: "Bonito" },
    { id: "2", name: "Pet 2", description: "Não é tão bonito" },
  ];

  getAllPets(): Pet[] {
    return this.Pets;
  }

  addPet(name: string, description: string): void {
    const newPet: Pet = {
      id: Date.now().toString(),
      name: name,
      description: description,
    };

    if (name.length < 2 || description.length < 2) {
      Alert.alert(
        "Erro",
        "O nome e a descrição devem conter pelo menos 2 caracteres.",
      );
    } else if (
      this.Pets.some(
        (pet) => pet.name === name && pet.description === description,
      )
    ) {
      Alert.alert("Erro", "O nome e a descrição devem ser únicos.");
    } else {
      this.Pets.push(newPet);
    }
  }
}

export default new PetService();
