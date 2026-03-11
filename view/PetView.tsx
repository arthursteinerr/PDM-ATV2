import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { Pet } from "../models/Pet";
import { usePetController } from "../controllers/PetController";

export const PetView: React.FC = () => {
  const {
    Pets,
    dialogVisible,
    addPet,
    addDescription,
    openDialog,
    closeDialog,
  } = usePetController();
  const [inputName, setInputName] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");

  const handleAddPet = () => {
    if (inputName.trim()) {
      addPet(inputName.trim(), inputDescription.trim());
      setInputName("");
      setInputDescription("");
    } else {
      Alert.alert("Erro", "Digite um nome para o Pet");
    }
  };

  const renderPet = ({ Pet }: { Pet: Pet }) => (
    <View
      style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    >
      <Text>{Pet.name}</Text>
      <Text>{Pet.description}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity
        onPress={openDialog}
        style={{
          backgroundColor: "#084f18aa",
          padding: 12,
          borderRadius: 4,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Adicionar Pet
        </Text>
      </TouchableOpacity>

      <FlatList
        data={Pets}
        renderItem={({ item }) => renderPet({ Pet: item })}
        keyExtractor={(Pet) => Pet.id}
        style={{ flex: 1, borderWidth: 1, borderColor: "#ccccccb7", borderRadius: 4 }}
      />

      <Modal visible={dialogVisible} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: 300,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 16, textAlign: "center" }}>
              Adicionar Pet
            </Text>

            <TextInput
              value={inputName}
              onChangeText={setInputName}
              placeholder="Nome do Pet"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 8,
                marginBottom: 16,
                borderRadius: 4,
                opacity: 0.8,
              }}
            />

            <TextInput
              value={inputDescription}
              onChangeText={setInputDescription}
              placeholder="Descrição do Pet"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 8,
                marginBottom: 16,
                borderRadius: 4,
                opacity: 0.8,
              }}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={closeDialog}
                style={{
                  padding: 12,
                  backgroundColor: "#ccc",
                  borderRadius: 4,
                  flex: 0.45,
                }}
              >
                <Text style={{ textAlign: "center" }}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleAddPet}
                style={{
                  padding: 12,
                  backgroundColor: "#084f18aa",
                  borderRadius: 4,
                  flex: 0.45,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Adicionar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
