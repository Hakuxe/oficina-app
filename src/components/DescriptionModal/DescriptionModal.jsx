import React from "react";
import { View, Text, Button, Modal } from "react-native";
import { styles } from "./styles";

export function DescriptionModal({ modalVisible, toggleModal, descrition, titleModal }) {
	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.modal}>
						<Text style={styles.titleModal}>{titleModal}</Text>
						<Text style={styles.message}>{descrition}</Text>
					</View>
              
                  <Text style={styles.button} onPress={toggleModal}>Fechar</Text>

				</View>
			</View>
		</Modal>
	);
}
