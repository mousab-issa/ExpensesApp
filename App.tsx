import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
// Navigation 
import Navigator from './src/navigation/navigator'
// commn 
import { getAsyncItem } from "./src/helpers/common";
import langauges from "./src/common/langauges";
// Redux
import store from './src/redux/store'
import { theme } from "./src/common/theme/theme";



const App = () => {
  useEffect(() => {
    InitApp();
  }, []);

  const InitApp = async () => {
    // If I added langauges Support Later one 
    try {
      const Item = await getAsyncItem('Lang');
      if (Item) {
        langauges.setLanguage(Item);
      }

    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.Colors.primary}
        barStyle={'dark-content'}
      />
      <View style={styles.app}>
        <SafeAreaProvider>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </SafeAreaProvider>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "white"
  }
})

export default App;