import { Stack } from "expo-router";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="details"
        options={{
          title: "Details",
          headerBackButtonDisplayMode: "minimal",

          /// if i want to modal must be this styles
          // presentation: "formSheet",
          // sheetAllowedDetents: [0.3, 0.7, 1],
          // sheetGrabberVisible: true,
           
        }}
      />
    </Stack>
  );
}
