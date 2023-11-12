import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [possuiRegistroClasse, setPossuiRegistroClasse] = useState('nao');
  const [numeroClasse, setNumeroClasse] = useState('');
  const [categoria, setCategoria] = useState('saude');

  const handleCadastro = () => {
    if (
      !nome ||
      !email ||
      !senha ||
      !descricao ||
      !cidade ||
      !cep ||
      !endereco ||
      !numero ||
      !categoria
    ) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios');
      return;
    }
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./src/img/logo.png')} />
      </View>

      <Text style={styles.title}>Cadastre-se!</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Text style={styles.label}>Descrição do Serviço</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />

      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={setCep}
      />

      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.label}>Número</Text>
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={numero}
        onChangeText={setNumero}
      />

      <Text style={styles.label}>Categoria</Text>
      <Picker 
        selectedValue={categoria}
        onValueChange={(itemValue) => setCategoria(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Saúde" value="saude" />
        <Picker.Item label="Jurídico" value="juridico" />
        <Picker.Item label="Beleza" value="beleza" />
        <Picker.Item label="Construção" value="construcao" />
        <Picker.Item label="Outros" value="outros" />
      </Picker>

      <Text style={styles.label}>Possui registro de classe?</Text>
      <Picker
        selectedValue={possuiRegistroClasse}
        onValueChange={(itemValue) => setPossuiRegistroClasse(itemValue)}
        style={styles.picker}
      >

        <Picker.Item label="Sim" value="sim" />
        <Picker.Item label="Não" value="nao" />
      </Picker>

      {possuiRegistroClasse === 'sim' && (
        <View>
          <Text style={styles.label}>Número da Classe</Text>
          <TextInput
            style={styles.input}
            placeholder="Número da Classe"
            value={numeroClasse}
            onChangeText={setNumeroClasse}
          />
        </View>
      )  
    }

      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('LoginScreen')}
        color="#800000"
        style={styles.button}
      />

      <View style={styles.footer}>
        <Text style={styles.developers}>
          BIG D.O.G CORPORATION © 2023
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 5,
  },
  picker: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 5,
  },
  button: {
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  developers: {
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
  },
});

export default CadastroScreen;
