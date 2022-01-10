import { StyleSheet } from "react-native";
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { appTheme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: appTheme.colors.primary,
		paddingHorizontal: 15,
		paddingVertical: 15,
		marginTop:getStatusBarHeight() 
	},
	title: {
		color: appTheme.colors.title,
		fontSize: 18,
		fontWeight: "700",
	},
});
