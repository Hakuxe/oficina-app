import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { styles } from "./listStyles";
import { BudgetItem } from "../../components/BudgetItem/BudgetItem";
import { budgetListApi } from "../../services/api";
import { Header } from "../../components/Header/Header";
import { DescriptionModal } from "../../components/DescriptionModal/DescriptionModal";

export function BudgetList() {
	const [list, setList] = useState([]);
	const [errorApi, setErrorApi] = useState(true);

	const [modalVisible, setModalVisible] = useState(false);
	const [description, setDescription] = useState("");

	useEffect(() => {
		budgetListApi
			.get()
			.then((response) => {
				setList(response.data);
				setErrorApi(false);
			})
			.catch((erro) => {
				if (erro.status != "200") {
					setErrorApi(true);
				}
				console.error("Erro ao recuperar dados da api de orçamentos", erro);
			});
	}, []);

	function toggleModal(description) {
		setModalVisible(!modalVisible);
		setDescription(description);
	}

	return (
		<View style={styles.container}>
			<Header />
				<Text style={errorApi ? { display: "flex" } : { display: "none" }}>
					Erro ao carregaros dados!!{"\n"}
					Tente novamente mais tarde
				</Text>
			<ScrollView>
				<View style={styles.content}>
					{list.map((item) => {
						return (
							<BudgetItem
								key={item.id}
								seller={item.seller}
								value={item.value}
								customer={item.customer}
								description={item.description}
								handlePress={toggleModal}
							/>
						);
					})}

					<DescriptionModal
						modalVisible={modalVisible}
						toggleModal={toggleModal}
						descrition={description}
						titleModal={"Descrição"}
					/>
				</View>
			</ScrollView>
		</View>
	);
}
