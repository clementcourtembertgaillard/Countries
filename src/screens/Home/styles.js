import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  slider: {
    width: "15%",
    marginRight: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#282c34",
    borderRadius: 10,
    height: 40,
  },
  gridWrapper: {
    spacing: "15",
    display: "inline",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    padding: "auto"
  }
}));
