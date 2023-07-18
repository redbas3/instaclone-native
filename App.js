import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Image, useColorScheme } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import Entypo from "@expo/vector-icons/Entypo";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "./styles";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar } from "./apollo";
import LoggedInNav from "./navigators/LoggedInNav";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const isDark = useColorScheme() === "dark";
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    async function prepare() {
      try {
        const fonts = loadFonts([Ionicons.font, Entypo.font]);
        // await Font.loadAsync(Entypo.font);
        // await Font.loadAsync(Ionicons.font);

        const images = loadImages([
          require("./assets/logo.png"),
          "https://reactnative.dev/docs/assets/GettingStartedCongratulations.png",
        ]);
        // await Asset.loadAsync(require('./1600x800_1.jpeg'));
        // await Image.prefetch("https://reactnative.dev/docs/assets/GettingStartedCongratulations.png")

        await Promise.all([...fonts, ...images]);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // console.log(Appearance.getColorScheme());

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer onLayout={onLayoutRootView}>
          {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}
