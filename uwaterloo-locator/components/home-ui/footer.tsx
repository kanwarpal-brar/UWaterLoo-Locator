import { View, StyleSheet } from "react-native";
import ActionPanel from "../map/map-ui/action-panel";
import CustomPin from "../map/custom-pin/custom-pin";

export default function Footer() {
  return (
    <View style={{ ...styles.footer }}>
      <View style={styles.actionContainer}>
        <CustomPin
          icon={"toilet"}
          fill="#292929"
          stroke="black"
          strokeWidth={0.5}
        />
        <ActionPanel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    zIndex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "12%",
    padding: 10,
    overflow: "hidden",
  },
  actionContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
