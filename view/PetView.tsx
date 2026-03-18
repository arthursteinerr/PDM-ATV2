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
import styles from "../styles/PetStylers";

export const PetView: React.FC = () => {
  const { Pets, dialogVisible, addPet, openDialog, closeDialog, deletePet } =
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

  const renderPet = ({ item }: { item: Pet }) => (
    <View style={styles.petItem}>
      <Text style={styles.petName}>{item.name}</Text>
      <Text style={styles.petDescription}>{item.description}</Text>

      <TouchableOpacity
        onPress={() => deletePet(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButton}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Petshop Favorito!</Text>
      <TouchableOpacity onPress={openDialog} style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar Pet</Text>
      </TouchableOpacity>

      <FlatList
        data={Pets}
        renderItem={renderPet}
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
