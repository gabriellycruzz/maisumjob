import React from 'react';
import { View, Text, Picker, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClienteScreen = () => {
  const navigation = useNavigation();

  const handleEncontrarProfissional = () => {
    navigation.navigate('ProfissionalListScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./src/img/logo.png')} 
      />
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={null} 
          onValueChange={(itemValue) => {}}
          style={styles.picker}
        >
          <Picker.Item label="Exibir Todos" value="todos" /> 
          <Picker.Item label="Saúde" value="saude" />
          <Picker.Item label="Jurídico" value="juridico" />
          <Picker.Item label="Beleza" value="beleza" />
          <Picker.Item label="Construção" value="construcao" />
          <Picker.Item label="Outros" value="outros" />
        </Picker>
        <View style={styles.spacing} />
        <Button
        title="Encontrar Profissional"
        onPress={() => navigation.navigate('ProfissionalListScreen')}
        color="#800000"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: '70%',
    alignItems: 'center',
  },
  picker: {
    width: '100%',
  },
  spacing: {
    height: 20,
  },
  button: {
    width: '100%',
    borderRadius: 5,
  },
  logo: {
    width: 200,
    height: 200, 
    marginBottom: 20,
  },
});

export default ClienteScreen;
