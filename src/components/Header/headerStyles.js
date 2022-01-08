import { StyleSheet } from "react-native";
import { appTheme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: appTheme.colors.primary,
		paddingHorizontal: 15,
		paddingVertical: 15,
	},
	title: {
		color: appTheme.colors.title,
		fontSize: 18,
		fontWeight: "700",
	},
});
