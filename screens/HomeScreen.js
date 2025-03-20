import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bem-Vindo ao seu app de sorriso saudável</Text>
            <Button title="Tirar Foto" onPress={() => navigation.navigate('Resultados')}/>
            <Button title="Ver Historico" onPress={()=> navigation.navigate('Historico')} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
      title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
      },
})

export default HomeScreen;