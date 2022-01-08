import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { styles } from "./listStyles";
import { BudgetItem } from "../../components/BudgetItem/BudgetItem";
import { budgetListApi } from "../../services/api";
import data from "../../../db.json";

export function BudgetList() {
	//const { id, seller, value, description, customer } = data[0];

	const [list, setList] = useState([]);

	budgetListApi.get()
		.then((response) => {
			setList(response.data);
	}).catch(erro =>{
		console.error("Erro ao recuperar dados da api de orçamentos", erro)
	});

	return (
		<ScrollView>
			
			<View style={styles.container}>
				{list.map((item) => {
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
		</ScrollView>
	);
}