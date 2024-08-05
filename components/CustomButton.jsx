import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";

const CustomButton = ({ title, handlePress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    height: "2.5rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  button: {
    backgroundColor: "#FF8343", // blue-500 color in Tailwind
    borderRadius: 15, // equivalent to rounded-xl
    minHeight: 62,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#ffffff", // text-white
    fontSize: 18, // text-lg
    fontWeight: "600", // font-semibold
  },
});

export default CustomButton;
