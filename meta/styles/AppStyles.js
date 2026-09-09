import { StyleSheet } from "react-native";

import { BG, PRIMARY } from "../constant/color";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
  },

  listContent: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 110,
  },

  fab: {
    position: "absolute",

    right: 22,
    bottom: 28,

    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: PRIMARY,

    alignItems: "center",
    justifyContent: "center",

    elevation: 7,
  },

  fabIcon: {
    color: "#FFFFFF",

    fontSize: 31,
    fontWeight: "300",

    marginTop: -2,
  },
});
