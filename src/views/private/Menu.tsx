import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useAppNavigation from '../../utils/useAppNavigation'

const Menu = () => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>
          <Text>Menu</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding", {screen: "Inicio",})}>
            <Text>Ir al inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Atras</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});