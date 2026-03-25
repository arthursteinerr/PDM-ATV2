import { NavigationContainer } from "@react-navigation/native";
import { PetStack } from "./src/navigation/PetStack";

export default function App() {
  return (
    <NavigationContainer>
      <PetStack />
    </NavigationContainer>
  );
}