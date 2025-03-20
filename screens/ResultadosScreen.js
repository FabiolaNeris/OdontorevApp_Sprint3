import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultadosScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados da Análise</Text>
      <Text>Pontuação do Sorriso: 85%</Text>
      <Text>Dicas: Continue cuidando da higiene dental!</Text>
      <Button title="Agendar Consulta" onPress={() => {/* Navegar para agendamento */}} />
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