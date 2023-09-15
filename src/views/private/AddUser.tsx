import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import useAppNavigation from '../../utils/useAppNavigation'

import { db } from '../../../database/firebase'
import { addDoc, collection,setDoc, doc} from 'firebase/firestore'

const AddUser = () => {
  const navigation = useAppNavigation()

  const [user, setUser] = useState({
    nombre:'',
    edad: '',
    contraseña:'',
    fecha: new Date,
  })

  const handleChangeText = (name:string, value:any) => {
    setUser({ ...user, [name]: value });
  };

  const saveUser = async () => {
    try{
      console.log("Iniciando")
      await addDoc(collection(db, "usuarios"), user)
      //await setDoc(doc(db, "usuarios"), user)
      navigation.navigate("Onboarding", {screen: "ListaUser"})
    } catch(error){
        console.log(error)
    }
  }

  return (
    <ScrollView>
      {/* Nombre */}
      <View style={styles.container}>
      <TextInput
      placeholder='Nombre'
      onChangeText={(value) => setUser({...user, nombre:value})}
      />
      </View>
      {/* Edad */}
      <View style={styles.container}>
      <TextInput
      keyboardType='numeric'
      placeholder='Edad'
      onChangeText={(value) => handleChangeText('edad', value)}
      />
      </View>
      {/* Contraseña */}
      <View style={styles.container}>
      <TextInput
      placeholder='Contraseña'
      secureTextEntry
      onChangeText={(value) => handleChangeText('contraseña', value)}
      />
      </View>
      <View style={styles.boton}>
        <Button title='Añadir' onPress={ saveUser }></Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'flex-start',
      margin: 10,
    },
    boton: {
      alignItems:'center',
    },
});


export default AddUser