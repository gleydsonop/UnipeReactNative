import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,  
  StyleSheet,
  Button,
  ToastAndroid, 
  Platform
} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      senha: ''
      
    };
  }

  static navigationOptions = {
    header: null
  }

  mudarSenha = e => {
    this.setState({
      senha: e.target.value,
    });
  };

  handleClick = () => {
    Actions.home();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Unipê - React Native</Text>

        <Text style={styles.textLabel}>Login:</Text>

        <TextInput
          value={this.state.login}
          placeholder="Informe o login"
          style={styles.input}
          onChange={this.mudarLogin}
          autoCorrect={false}
          onChangeText={(login) => this.setState({login})}></TextInput>

        <Text style={styles.textLabel}>Senha:</Text>
        <TextInput
          value={this.state.senha}
          placeholder="Informe a senha"
          style={styles.input}
          onChange={this.mudarSenha}
          autoCorrect={false}
          onChangeText={(senha) => this.setState({senha})}
          secureTextEntry></TextInput>

        <Button title="CLICA LppOGOss" onPress={this.handleClick}>          
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center'
  },
  textLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  input: {
    backgroundColor: 'white',
  },

  container: {
    backgroundColor: '#202020',
    height: '100%',
    display: 'flex',
  },
});
