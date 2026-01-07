import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
  activeColor: string;
}

export default function TabButton({ title, isActive, onPress, activeColor }: TabButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        isActive && {
          backgroundColor: activeColor,
          ...styles.activeTab,
        }
      ]}
      activeOpacity={0.7}
    >
      <Text style={[styles.title, isActive && styles.activeTabText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  activeTab: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "grey",
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
});
