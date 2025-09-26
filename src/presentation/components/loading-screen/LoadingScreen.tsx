import React from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image
        // 👇 CORREÇÃO AQUI: O arquivo agora se chama 'splash.png'
        // O caminho relativo a partir deste arquivo é '../' para sair de 'loading-screen',
        // '../' para sair de 'components', '../' para sair de 'presentation', e então 'assets/'
        source={require("../../../assets/splash.png")}
        style={styles.logo}
      />
      <ActivityIndicator size="large" color="#FFFFFF" style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A", // Use a mesma cor do app.json
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  spinner: {
    marginTop: 40,
  },
});
