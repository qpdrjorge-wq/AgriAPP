import { Stack } from "expo-router";
import SafeScreen from "../component/ScreenSafe";

export default function RootLayout() {
  return (
    <SafeScreen>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="editProfile" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="setupShop" />
        <Stack.Screen name="aboutUs" />
      </Stack>
    </SafeScreen>
  );
}