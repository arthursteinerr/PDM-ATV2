import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { usePetController } from "../controllers/PetController";
import styles from "../styles/PetStylers";

const AddPetScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { addPet } = usePetController();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const isValid = name.trim().length > 0;

  const handleSave = () => {
    if (!isValid) {
      Alert.alert("Erro", "O nome do pet é obrigatório!");
      return;
    }

    addPet(name.trim(), description.trim());
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View>
        <Text style={styles.title}>🐾 Novo Pet</Text>
      </View>

<View>
  <Text style={{ fontSize: 14, color: "#111", marginBottom: 4, fontWeight: "500" }}>
    Nome
  </Text>
  <TextInput
    placeholder="Digite o nome do pet"
    placeholderTextColor="#999"
    value={name}
    onChangeText={setName}
    style={{
      borderWidth: 1,
      borderColor: "#C8D6C1",
      padding: 12,
      marginBottom: 12,
      borderRadius: 8,
      backgroundColor: "#FFF",
      fontSize: 15,
      color: "#111", 
    }}
    returnKeyType="next"
  />

  <Text style={{ fontSize: 14, color: "#111", marginBottom: 4, fontWeight: "500" }}>
    Descrição
  </Text>
  <TextInput
    placeholder="Opcional"
    placeholderTextColor="#999"
    value={description}
    onChangeText={setDescription}
    style={{
      borderWidth: 1,
      borderColor: "#C8D6C1",
      padding: 12,
      marginBottom: 12,
      borderRadius: 8,
      backgroundColor: "#FFF",
      fontSize: 15,
      color: "#111",
      height: 100,
      textAlignVertical: "top",
    }}
    multiline
    blurOnSubmit
  />
</View>

      <View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleSave}
          disabled={!isValid}
        >
          <Text style={styles.addButtonText}>
            {isValid ? "Salvar" : "Preencha o nome"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddPetScreen;