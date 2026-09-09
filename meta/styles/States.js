import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    paddingHorizontal: 40,
  },

  iconContainer: {
    width: 70,
    height: 70,

    borderRadius: 35,

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: "#EDE9FE",

    marginBottom: 18,
  },

  icon: {
    fontSize: 30,

    color: "#4F46E5",
  },

  title: {
    fontSize: 18,

    fontWeight: "700",

    color: "#111827",
  },

  subtitle: {
    marginTop: 7,

    fontSize: 13,

    lineHeight: 19,

    textAlign: "center",

    color: "#6B7280",
  },
});
