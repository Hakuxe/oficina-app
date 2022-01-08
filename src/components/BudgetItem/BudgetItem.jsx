import React from "react";
import { Text, View, Image } from "react-native";

import { Avatar } from "../Avatar/Avatar";
import { urlAvatarDefault } from "../../assets/default-avatar";

import { styles } from "./itemStyles";

export function BudgetItem(props) {
	const { seller, value, customer } = props;

	return (
		<View style={styles.container}>
			<Avatar urlImage={urlAvatarDefault} />
			<View>
				<Text style={styles.seller}>{seller}</Text>
				<Text style={styles.client}>Cliente: {customer}</Text>
			</View>
			<Text>{value}</Text>
		</View>
	);
}
