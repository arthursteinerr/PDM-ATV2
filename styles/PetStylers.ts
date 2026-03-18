import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF8F0",
    justifyContent: "space-between",
  },

  addButton: {
    backgroundColor: "#084f18aa",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    marginTop: 4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#084f18aa",
    borderRadius: 12,
    marginBottom: 12,
    textAlign: "center",
    padding: 12,
  },

  list: {
    flex: 1,
    marginTop: 4,
  },

  petItem: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 2,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },

  petName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3A3A3A",
  },

  petDescription: {
    marginTop: 6,
    fontSize: 16,
    color: "#777",
  },

  deleteButton: {
    borderRadius: 8,
    alignItems: "flex-end",
    marginTop: 5,
    color: "red",
    fontSize: 18,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  modalBox: {
    width: 350,
    padding: 22,
    backgroundColor: "white",
    borderRadius: 14,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 18,
    textAlign: "center",
    color: "#084f18aa",
  },

  input: {
    borderWidth: 1,
    borderColor: "#8caf85b5",
    padding: 12,
    marginBottom: 14,
    borderRadius: 10,
    backgroundColor: "#FFF",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  cancelButton: {
    padding: 12,
    backgroundColor: "#ECECEC",
    borderRadius: 8,
    flex: 0.48,
  },

  confirmButton: {
    padding: 12,
    backgroundColor: "#084f18aa",
    borderRadius: 8,
    flex: 0.48,
  },

  cancelText: {
    textAlign: "center",
    fontWeight: "500",
  },

  confirmText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});

export default styles;
