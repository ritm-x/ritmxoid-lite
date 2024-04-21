import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { Slot } from 'expo-router'

function Screen () {
  const insets = useSafeAreaInsets();
  return (
    <View style={ [styles.screen, { marginTop: insets.top }] }>
      <Slot/>
    </View>
  );
}

export default function Layout () {
  return (
    <SafeAreaProvider style={ styles.background }>
      <Screen/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
