import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.centeredContainer}>
        <Image
          style={styles.img}
          source={require('./src/img/logo.png')} 
        />
        <View style={styles.spacing} />
        <View style={styles.buttonContainer}>
          <Button
            title="Sou Cliente"
            onPress={() => navigation.navigate('ClienteScreen')}
            color="#800000"
          />
        </View>
        <View style={styles.spacing} />
        <View style={styles.buttonContainer}>
          <Button
            title="Sou Profissional"
            onPress={() => navigation.navigate('LoginScreen')}
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
    alignItems: 'center',  
    justifyContent: 'center',  
  },
  centeredContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
    marginBottom: 5,  
  },
  spacing: {
    height: 20,
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default HomeScreen;
