import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,

    paddingTop: 18,
    paddingBottom: 18,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  title: {
    fontSize: 30,

    fontWeight: "700",

    color: "#111827",
  },

  subtitle: {
    marginTop: 4,

    fontSize: 14,

    color: "#6B7280",
  },

  countContainer: {
    alignItems: "flex-end",
  },

  count: {
    fontSize: 25,

    fontWeight: "700",

    color: "#111827",
  },

  countLabel: {
    marginTop: 1,

    fontSize: 10,

    fontWeight: "700",

    letterSpacing: 1,

    color: "#9CA3AF",
  },
});
