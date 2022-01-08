import React from "react";
import { Image } from "react-native";

import { styles } from "./avatarStyles";

export function Avatar(props) {
	const { urlImage } = props;

	return (
			<Image style={styles.avatar} source={{uri: urlImage}} />
	);
}
