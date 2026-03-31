import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/navigation/PetTab";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}