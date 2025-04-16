import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import SecondHeader from "../components/SecondHeader";
import Icon from "react-native-vector-icons/Ionicons";

const SettingsScreen = ({ navigation }) => {
  const handlePress = (setting) => {
    console.log(`${setting} tıklandı`);
  };

  return (
    <View style={styles.container}>
      <SecondHeader onPress={() => navigation.goBack()} pageName="Ayarlar" />

      <View style={styles.optionsContainer}>
        <Pressable
          style={styles.option}
          onPress={() => handlePress("Bildirimler")}
        >
          <Icon
            name="notifications-outline"
            size={22}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Bildirimler</Text>
        </Pressable>

        <Pressable style={styles.option} onPress={() => handlePress("Tema")}>
          <Icon
            name="color-palette-outline"
            size={22}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Tema</Text>
        </Pressable>

        <Pressable style={styles.option} onPress={() => handlePress("Dil")}>
          <Icon
            name="language-outline"
            size={22}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.optionText}>Dil</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C",
  },
  optionsContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    gap: 16,
  },
  option: {
    backgroundColor: "#444",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#666",
    borderWidth: 1,
  },
  icon: {
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
  },
  logout: {
    backgroundColor: "#aa2525",
    borderColor: "#aa2525",
  },
});
