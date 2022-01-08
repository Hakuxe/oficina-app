import React from "react";
import { Text, View } from "react-native";

import { styles } from "./listStyles";
import data from "../../../db.json";
import { BudgetItem } from "../BudgetItem/BudgetItem";

export function BudgetList() {
	//const { id, seller, value, description, customer } = data[0];
	return (
		<View style={styles.container}>
			{data.map((item) => {
				//const { id, seller, value, description, customer } = item;
				return (
					<BudgetItem
						key={item.id}
						seller={item.seller}
						value={item.value}
						customer={item.customer}
					/>
				);
			})}

		</View>
	);
}
