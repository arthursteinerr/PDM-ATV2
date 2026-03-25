import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PetListScreen } from "../view/PetListView";
import AddPetScreen from "../view/PetAddView"; // ✅ CORRETO

const Stack = createNativeStackNavigator();

export function PetStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PetList"
        component={PetListScreen}
        options={{ title: "Pets" }}
      />

      <Stack.Screen
        name="AddPet"
        component={AddPetScreen}
        options={{ title: "Adicionar Pet" }}
      />
    </Stack.Navigator>
  );
}