import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoricoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Análises</Text>
      <Text>Data: 20/03/2025 | Pontuação: 85%</Text>
      <Text>Data: 19/03/2025 | Pontuação: 80%</Text>
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

export default HistoricoScreen;