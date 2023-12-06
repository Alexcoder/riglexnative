import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    plug_result_cont :{
    flex: 1,
    display: "flex",
    // flexDirection: "column",
    height: '100%',
    width: "100%",

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: -1,
    right: -1,
    bottom: 0,
    backgroundColor: "rgba(0.6, 0.6, 0.6, 0.6)",
    zIndex: 200,
},
 plug_result_cont2 : {
    backgroundColor: "aliceblue",
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    padding: 20,
    textAlign: "start",
    borderRadius: 2,
    boxShadow: "1 1 5 1 gray",
    // marginTop: 8,
    // marginBottom: 8,
}
})