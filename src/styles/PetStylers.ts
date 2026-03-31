import { StyleSheet } from "react-native";
const COLORS = {
  primary: "#084f18aa",
  background: "#FFF8F0",
  textPrimary: "#222",
  textSecondary: "#555",
  border: "#C8D6C1",
  white: "#FFF",
  danger: "#D11A2A",
  lightGray: "#EEE",
};

const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },

  list: {
    flex: 1,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: SPACING.sm,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: SPACING.lg,
  },

  label: {
    fontSize: 14,
    color: "#111",
    marginBottom: 4,
    fontWeight: "500",
  },

  petName: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },

  petDescription: {
    marginTop: SPACING.xs,
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 15,
    color: COLORS.textSecondary,
  },

  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: SPACING.md,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  addButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },

  deleteButton: {
    marginTop: SPACING.sm,
    alignSelf: "flex-end",
  },

  deleteText: {
    color: COLORS.danger,
    fontWeight: "600",
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: SPACING.sm,
  },

  cancelButton: {
    flex: 1,
    padding: SPACING.md,
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    alignItems: "center",
  },

  confirmButton: {
    flex: 1,
    padding: SPACING.md,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    alignItems: "center",
  },

  cancelText: {
    color: COLORS.textPrimary,
    fontWeight: "500",
  },

  confirmText: {
    color: COLORS.white,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    fontSize: 15,
    color: "#1A1A1A",
  },

  petItem: {
    padding: SPACING.md,
    borderRadius: 10,
    marginBottom: SPACING.sm,
    backgroundColor: COLORS.white,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },

card: {
  backgroundColor: "#ffffff",
  borderRadius: 16,
  marginBottom: 20,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 }, 
  shadowOpacity: 0.1,       
  shadowRadius: 10,
  elevation: 6,
  borderWidth: 1,
  borderColor: "#f0f0f0", 
},

image: {
  width: "100%",
  height: 220,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  resizeMode: "cover",
},

});

export default styles;
