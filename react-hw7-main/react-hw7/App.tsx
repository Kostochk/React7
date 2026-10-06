import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useMediaPicker } from "./src/hooks/useMediaPicker";
import { MediaPreview } from "./src/components/MediaPreview";
import { ControlButtons } from "./src/components/ControlButtons";

export default function App() {
  
  const { selectedMedia, pickFromGallery, takePhoto, clearMedia } = useMediaPicker();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Media Picker🎥</Text>
        <MediaPreview media={selectedMedia} onClear={clearMedia} />
        <ControlButtons
          onPickGallary={pickFromGallery}
          onTakePhoto={takePhoto}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa", 
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 24,
    textAlign: "center",
  },
});