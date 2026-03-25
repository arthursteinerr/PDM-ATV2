import { Pet } from "../models/Pet";

export type PetResult = {
  success: boolean;
  message?: string;
};

class PetService {
  private pets: Pet[] = [
    { id: "1", name: "Pet 1", description: "Bonito" },
    { id: "2", name: "Pet 2", description: "Não é tão bonito" },
  ];

  getAllPets(): Pet[] {
    return this.pets;
  }

  addPet(name: string, description: string): PetResult {
    if (name.trim().length < 2) {
      return {
        success: false,
        message: "O nome deve ter pelo menos 2 caracteres.",
      };
    }

    if (description.trim().length < 2) {
      return {
        success: false,
        message: "A descrição deve ter pelo menos 2 caracteres.",
      };
    }

    const alreadyExists = this.pets.some(
      (pet) =>
        pet.name.toLowerCase() === name.toLowerCase() &&
        pet.description.toLowerCase() === description.toLowerCase()
    );

    if (alreadyExists) {
      return {
        success: false,
        message: "Já existe um pet com esse nome e descrição.",
      };
    }

    const newPet: Pet = {
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
    };

    this.pets.push(newPet);

    return { success: true };
  }

  updateDescription(id: string, description: string): PetResult {
    if (description.trim().length < 2) {
      return {
        success: false,
        message: "A descrição deve ter pelo menos 2 caracteres.",
      };
    }

    const index = this.pets.findIndex((pet) => pet.id === id);

    if (index === -1) {
      return {
        success: false,
        message: "Pet não encontrado.",
      };
    }

    this.pets[index].description = description.trim();

    return { success: true };
  }

  deletePet(id: string): PetResult {
    const exists = this.pets.some((pet) => pet.id === id);

    if (!exists) {
      return {
        success: false,
        message: "Pet não encontrado.",
      };
    }

    this.pets = this.pets.filter((pet) => pet.id !== id);

    return { success: true };
  }
}

export default new PetService();