import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Avatar } from "../Avatar/Avatar";
import { urlAvatarDefault } from "../../assets/default-avatar";

import { styles } from "./itemStyles";
import { appTheme } from "../../global/styles/theme";

export function BudgetItem(props) {
	const { 
		seller, 
		value, 
		customer, 
		description,
		handlePress 
	} = props;

	return (
			<TouchableOpacity
				activeOpacity={0.75}
				style={styles.container}
				onPress={() => handlePress(description)}
			>
				<Avatar urlImage={urlAvatarDefault} />
				<View>
					<Text style={styles.seller}>{seller}</Text>
					<Text style={styles.client}>Cliente: {customer}</Text>
				</View>
				<Text>{value}</Text>
				<AntDesign name="right" size={15} color={appTheme.colors.border70} />
			</TouchableOpacity>
	);
}
