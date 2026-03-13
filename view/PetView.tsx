import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Pet } from "../models/Pet";
import { usePetController } from "../controllers/PetController";

export const PetView: React.FC = () => {
  const { Pets, dialogVisible, addPet, openDialog, closeDialog } =
    usePetController();

  const [inputName, setInputName] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");

  const handleAddPet = () => {
    if (inputName.trim()) {
      addPet(inputName.trim(), inputDescription.trim());
      setInputName("");
      setInputDescription("");
      closeDialog();
    } else {
      Alert.alert("Erro", "Digite um nome para o Pet");
    }
  };

  const renderPet = ({ Pet }: { Pet: Pet }) => (
    <View style={styles.petItem}>
      <Text style={styles.petName}>{Pet.name}</Text>
      <Text style={styles.petDescription}>{Pet.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDialog} style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar Pet</Text>
      </TouchableOpacity>

      <FlatList
        data={Pets}
        renderItem={({ item }) => renderPet({ Pet: item })}
        keyExtractor={(Pet) => Pet.id}
        style={styles.list}
      />

      <Modal visible={dialogVisible} transparent animationType="fade">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalOverlay}
        >
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Adicionar Pet</Text>

            <TextInput
              value={inputName}
              onChangeText={setInputName}
              placeholder="Nome do Pet"
              style={styles.input}
            />

            <TextInput
              value={inputDescription}
              onChangeText={setInputDescription}
              placeholder="Descrição do Pet"
              style={styles.input}
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity
                onPress={closeDialog}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleAddPet}
                style={styles.confirmButton}
              >
                <Text style={styles.confirmText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF8F0",
  },

  addButton: {
    backgroundColor: "#084f18aa",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  list: {
    flex: 1,
  },

  petItem: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  petName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3A3A3A",
  },

  petDescription: {
    marginTop: 6,
    fontSize: 14,
    color: "#777",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  modalBox: {
    width: 300,
    padding: 22,
    backgroundColor: "white",
    borderRadius: 14,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 18,
    textAlign: "center",
    color: "#084f18aa",
  },

  input: {
    borderWidth: 1,
    borderColor: "#8caf85b5",
    padding: 12,
    marginBottom: 14,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cancelButton: {
    padding: 12,
    backgroundColor: "#ECECEC",
    borderRadius: 8,
    flex: 0.45,
  },

  confirmButton: {
    padding: 12,
    backgroundColor: "#084f18aa",
    borderRadius: 8,
    flex: 0.45,
  },

  cancelText: {
    textAlign: "center",
    fontWeight: "500",
  },

  confirmText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
