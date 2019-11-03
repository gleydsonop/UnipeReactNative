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
import Api from '../services/Api';

export default class Editar extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      descricao: '',
      preco: '',
      id: ''
      
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
 handlePreco = (preco) => {
   this.setState({preco: preco})
 }

 componentDidMount() {
  Api.get(`produto/${this.props.produtoId}`).then(resposta => {
    //alert(JSON.stringify(resposta.data.preco))
    this.setState({nome: resposta.data.nome, descricao: resposta.data.descricao, preco: resposta.data.preco.toString(), id: resposta.data.id.toString()});
  });
}

  handleClick = () => {
    alert(JSON.stringify(this.state.id))
    Api.put(`produto/${parseInt(this.state.id)}`,  
    {nome: this.state.nome , descricao: this.state.descricao, preco: this.state.preco, id: parseInt(this.state.id)})
    .then(() => alert("Atualizado com sucesso. Recarregue para ver o resultado."))
    .catch(error => {
      alert(JSON.stringify(error.response))
  })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Unipê - React Native</Text>

        <Text style={styles.textLabel}>Nome:</Text>

        <TextInput
          value={this.state.nome}
          placeholder="Nome do Produto"
          style={styles.input}
          //onChange={this.mudarLogin}
          autoCorrect={false}
          onChangeText={this.handleNome}></TextInput>

        <Text style={styles.textLabel}>Descrição:</Text>
        <TextInput
          value={this.state.descricao}
          placeholder="Informe a descrição"
          style={styles.input}
          //onChange={this.mudarSenha}
          autoCorrect={false}
          onChangeText={this.handleDescricao}
          ></TextInput>
          <Text style={styles.textLabel}>Preço:</Text>
        <TextInput
          value={this.state.preco}
          placeholder="Informe o preço"
          style={styles.input}
          //onChange={this.mudarPreco}
          keyboardType="number-pad"
          autoCorrect={false}
          onChangeText={this.handlePreco}
          ></TextInput>

        <Button title="Salvar" onPress={this.handleClick}>          
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
