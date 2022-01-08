import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { BudgetList } from './src/components/BudgetList/BudgetList';

export default function App() {
  return (
    <View >
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={'#0cf'}
      />
      <BudgetList />
    </View>
  );
}


