import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.

const RootLayout = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;
