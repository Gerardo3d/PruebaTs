import { Text, Button, View } from 'react-native'
import React from 'react'

type Props = {
	titulo: string,
	back: any,
}

const AppHeader = ({titulo, back}:Props) => {
  return (
    <>
      <Text>{titulo}</Text>
      {back ? (
      		<Button 
            title='Atras'
            onPress={back}
          ></Button>
      	) : null }      
    </>
	
  )
}



export default AppHeader;