import React, { useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import * as Font from "expo-font";
import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";

import Routes from "./src/routes";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Jost_400Regular,
          Jost_600SemiBold,
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
      } finally {
        setAppIsReady(true);

        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    // Escutando notificação
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );
    return () => subscription.remove();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return <Routes />;
}
