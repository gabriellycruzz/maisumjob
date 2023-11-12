import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email ou Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Entrar"
            onPress={() => navigation.navigate('ProfissionalListScreen')}
            color="#800000"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Cadastrar"
            onPress={() => navigation.navigate('CadastroScreen')}
            color="#800000"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20, 
  },
  buttonWrapper: {
    flex: 1,
    margin: 4, 
  },
});

export default LoginScreen;
