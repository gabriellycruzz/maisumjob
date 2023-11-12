import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const profissionaisFicticios = [
  {
    nome: 'Fulano de Tal',
    descricao: 'Pedreiro com mais de 10 anos de experiência.',
    categoria: 'Construção',
  },
  {
    nome: 'Fulana de Tal',
    descricao: 'Advogada especialista em direito do trabalho.',
    categoria: 'Jurídico',
  },
  {
    nome: 'Fulana',
    descricao: 'Tatuadora especialista em tatuagens old school.',
    categoria: 'Outros',
  },
];

const ProfissionalListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('ProfissionalDetails', { profissional: item });
      }}
    >
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.description}>{item.descricao}</Text>
      <Text style={styles.category}>{item.categoria}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./src/img/logo.png')} 
      />
      <FlatList
        data={profissionaisFicticios}
        renderItem={renderItem}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', 
  },
  item: {
    backgroundColor: '#800000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    width: '90%', 
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  category: {
    fontSize: 12,
    color: 'white',
  },
  logo: {
    width: 200, 
    height: 200, 
    marginBottom: 20,
  },
});

export default ProfissionalListScreen;
