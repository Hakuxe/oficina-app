import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { appTheme } from "./src/global/styles/theme";

import { BudgetList } from "./src/screens/BudgetList/BudgetList";

export default function App() {
	return (
		<View>
			<StatusBar barStyle={"dark-content"} backgroundColor={appTheme.colors.statusBar} />
			<BudgetList />
		</View>
	);
}
