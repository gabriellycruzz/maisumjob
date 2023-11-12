
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfissionalDetailsScreen = ({ route }) => {
  const { profissional } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Profissional</Text>
      <Text style={styles.label}>Nome: {profissional.nome}</Text>
      <Text style={styles.label}>Email: {profissional.email}</Text>
      <Text style={styles.label}>Descrição: {profissional.descricao}</Text>
      <Text style={styles.label}>Cidade: {profissional.cidade}</Text>
      <Text style={styles.label}>CEP: {profissional.cep}</Text>
      <Text style={styles.label}>Endereço: {profissional.endereco}</Text>
      <Text style={styles.label}>Número: {profissional.numero}</Text>
      {profissional.possuiRegistroClasse === 'sim' && (
        <Text style={styles.label}>Número da Classe: {profissional.numeroClasse}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'left',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
  },
});

export default ProfissionalDetailsScreen;
