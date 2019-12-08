import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,  
  StyleSheet,
  Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      senha: ''      
    };
  }

  static navigationOptions = {
    header: null
  }

  handleNome = (nome) => {
    this.setState({ nome: nome })
 }
 handleDescricao = (descricao) => {
    this.setState({ descricao: descricao })
 } 

  handleClick = () => {
    Actions.home({usuarioLogado: this.state.nome});

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Unipê - React Native</Text>

        <Text style={styles.textLabel}>Usuário:</Text>

        <TextInput
          value={this.state.nome}
          placeholder="Nome do usuário"
          style={styles.input}          
          autoCorrect={false}
          onChangeText={this.handleNome}></TextInput>

        <Text style={styles.textLabel}>Senha:</Text>
        <TextInput
          value={this.state.descricao}
          placeholder="Informe a senha"
          style={styles.input}          
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={this.handleDescricao}
          ></TextInput>         
        <Button title="Login" onPress={this.handleClick}>          
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
