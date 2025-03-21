import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ResultadosScreen = ({ route, navigation }) => {
  const[analiseData, setAnaliseData] = useState(null);
  const {photoUri} = route.params

  useEffect(()=>{
    const fetchAnaliseData = async () =>{
      try {
        const response = await axios.post('http://localhost:5000/sorrisos/1')
        setAnaliseData(response.data)
    } catch (error){
      console.error('Erro ao buscar analise', error)
    }
  }
  fetchAnaliseData()
  }, []); 


  if(!analiseData){
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados da Análise</Text>
      <Text>Pontuação do Sorriso: {analiseData.pontuacao}%</Text>
      <Text>Dicas: {analiseData.recomendacao}</Text>
      <Button title="Voltar para Captura" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

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
});

export default ResultadosScreen;