import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen name="home" options={{headerShown:false}} />
      <Stack.Screen name="messaging" options={{headerShown:false}} />

    </Stack>
  );
}
