import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainTabNavigator } from "./src/presentation/navigation/MainTabNavigator";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Mantém a splash screen nativa visível
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Simule um carregamento demorado (ex: buscar fontes, checar login, etc.)
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Avise que o app está pronto para ser renderizado
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Esconde a splash screen nativa assim que a primeira tela do app for renderizada
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    // Se o app não estiver pronto, não renderize nada. A splash screen nativa
    // continuará visível por causa do 'preventAutoHideAsync'.
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <NavigationContainer>
            <StatusBar style="auto" />
            <MainTabNavigator />
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </View>
  );
}
