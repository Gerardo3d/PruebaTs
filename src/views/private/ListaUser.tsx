import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../../../database/firebase';

const ListaUser = () => {
  const [users, setUsers] = useState<{ id: string; nombre: string; }[]>([])

  useEffect(() => {
    const collectionRef = collection(db, "usuarios");
    const q = query(collectionRef, orderBy("nombre", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.data().nombre,
        }))
      );
    });
    return unsubscribe; 
  }, []);


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Lista de User</Text>
        {users.map((user) => (
          <Text>{user.id}: {user.nombre} </Text>
        ))}
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

export default ListaUser