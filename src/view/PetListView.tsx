import React, { useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { Pet } from "../models/Pet";
import { usePetController } from "../controllers/PetController";
import styles from "../styles/PetStylers";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export const PetListScreen: React.FC = () => {
  const { pets, deletePet, refreshPets } = usePetController();
  const navigation = useNavigation<any>();

  useFocusEffect(
    useCallback(() => {
      refreshPets();
    }, [refreshPets]),
  );

  const handleDelete = useCallback(
    (id: string, name: string) => {
      Alert.alert(
        "Confirmar exclusão",
        `Tem certeza que deseja excluir o pet "${name}"?`,
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Excluir",
            style: "destructive",
            onPress: () => deletePet(id),
          },
        ],
      );
    },
    [deletePet],
  );

  const renderItem = useCallback(
    ({ item }: { item: Pet }) => (
      <View style={styles.petItem}>
        <Text style={styles.petName}>🐾 {item.name}</Text>
        <Text style={styles.petDescription}>
          {item.description || "Sem descrição informada"}
        </Text>
        <TouchableOpacity
          onPress={() => handleDelete(item.id, item.name)}
          style={styles.deleteButton}
        >
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    ),
    [handleDelete],
  );

  const keyExtractor = useCallback((item: Pet) => item.id, []);

  const renderEmpty = () => (
    <View style={{ marginTop: 40, alignItems: "center" }}>
      <Text style={{ fontSize: 16, color: "#777", textAlign: "center" }}>
        Nenhum pet cadastrado ainda 🐾
      </Text>
      <Text
        style={{ fontSize: 13, color: "#999", marginTop: 5, textAlign: "center" }}
      >
        Toque em "Adicionar novo pet" para começar.
      </Text>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        { flex: 1, justifyContent: "center", padding: 20 },
      ]}
    >
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={styles.title}>🐶 Meu Petshop</Text>
        <Text
          style={{
            fontSize: 14,
            color: "#555",
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          Gerencie seus pets cadastrados de forma simples.
        </Text>
      </View>

      {/* Action */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddPet")}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+ Adicionar novo pet</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={pets}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
};

//aaa