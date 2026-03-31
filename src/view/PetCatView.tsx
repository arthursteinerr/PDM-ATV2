import { View, Image, Text, FlatList, ListRenderItem } from "react-native";
import styles from "../styles/PetStylers";

interface Cat {
  id: string;
  title: string;
  uri: string;
}

const cats: Cat[] = [
  {
    id: "1",
    title: "Gato Comemorando 5 anos",
    uri: "https://media.supervasco.com/photo/2022/07/thumbs/gato-comemorando-seus-5-anos.jpg.800x0_q70_crop.webp",
  },
  {
    id: "2",
    title: "Gato Branco e Cinza",
    uri: "https://tse1.mm.bing.net/th/id/OIP.-b7YwOrXeXoYsfUDiJD5UAHaNK?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: "3",
    title: "Gato Lindo",
    uri: "https://i.ytimg.com/vi/FXEGM_M0Wd8/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBaRW4otac5e9XHej5PP7p3746v-Q",
  },
];

export default function PetCatView() {
  const renderItem: ListRenderItem<Cat> = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}