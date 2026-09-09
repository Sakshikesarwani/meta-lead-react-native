import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    padding: 17,
    marginBottom: 13,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 48,
    height: 48,

    borderRadius: 24,

    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#FFFFFF",

    fontSize: 16,
    fontWeight: "700",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",

    color: "#111827",
  },

  email: {
    marginTop: 4,

    fontSize: 13,

    color: "#6B7280",
  },

  time: {
    alignSelf: "flex-start",

    marginTop: 2,

    fontSize: 11,

    color: "#9CA3AF",
  },

  bottomRow: {
    marginTop: 15,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  sourceBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 8,

    borderWidth: 1,

    backgroundColor: "#F5F3FF",
  },

  sourceText: {
    fontSize: 11,

    fontWeight: "600",

    color: "#4F46E5",
  },

  newBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 8,

    backgroundColor: "#DCFCE7",
  },

  newText: {
    fontSize: 11,

    fontWeight: "600",

    color: "#15803D",
  },
});
