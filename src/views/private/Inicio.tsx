import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import useAppNavigation from '../../utils/useAppNavigation'

const Inicio = () => {
  const navigation = useAppNavigation();
  console.log("Pantalla de Inicio")
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>
          <Text>Inicio</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding", {screen: "Menu",})}>
            <Text>Ir al menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding", {screen: "AddUser",})}>
            <Text>Añadir usuario</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding", {screen: "ListaUser",})}>
            <Text>Lista usuario</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});