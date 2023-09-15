import { SafeAreaView, ScrollView, View, Text, TextInput, Button } from 'react-native'

import React, { useState } from 'react'
import useAppNavigation from '../../utils/useAppNavigation'
import AppHeader from '../../components/AppHeader';

const Login = () => {
  const navigation = useAppNavigation();
  const [nombre, setNombre] = useState()
  
  return (
    <SafeAreaView>
      <ScrollView >
        <View>
          {/* Header */}
          {/*<AppHeader titulo='Inicio sesion 123' back={() => navigation.navigate("Onboarding", {screen: "Menu",})}/>*/}
          
          
          <TextInput 
              placeholder='Nombre'
              keyboardType='default'
              editable 
              maxLength={20} 
              value={nombre} 
              style={{padding: 10}}
          />
          <TextInput 
              placeholder='Contraseña'
              keyboardType='default'
              secureTextEntry
              editable 
              maxLength={20} 
              value={nombre} 
              style={{padding: 10}}
          />
        </View>
        <View>
          <Button title="Inicio" onPress={() => navigation.navigate("Onboarding", {screen: "Inicio"})}></Button>
        </View>
      </ScrollView >
    </SafeAreaView>
    
  )
}

export default Login