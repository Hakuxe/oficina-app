import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../Avatar/Avatar";

import { styles } from "./itemStyles";

export function BudgetItem(props) {
	const { seller, value, customer } = props;
   const  urlAvatarFake =  "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/18/2014/07/24025147/6BaVde_t20_VKbpQ7-e1527130375674.jpg"

	return (
		<View style={styles.container}>
          <Avatar urlImage={urlAvatarFake}/>
			<View>
				<Text style={styles.seller}>{seller}</Text>
				<Text style={styles.client}>Cliente: {customer}</Text>
			</View>
			<Text>{value} a </Text>
		</View>
	);
}
