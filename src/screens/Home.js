import React, {Component} from 'react';
import {View, Text, ActivityIndicator, ScrollView, Button} from 'react-native';
import Api from '../services/Api';
import Card from '../components/Card';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      produtos: [],
      loading: true,
    };
  }

  componentDidMount() {
    Api.get('produtos').then(resposta => {
      this.setState({produtos: resposta.data, loading: false});
    });
  }

  

  render() {
    const listaDeTodos = this.state.produtos.map(produto => (
      <Card key={produto.id} produtoId={produto.id} descricao={produto.descricao} nome={produto.nome} preco={produto.preco} />
    ));

    return (
      <ScrollView>
        <View>
        <Button
         
          title="Novo Produto"         
          onPress={() => Actions.login()}          
        />   
        <Button
          color="green"
          title="Recarregar"         
          onPress={() => Actions.home()}          
        />       
          {this.state.loading && (
            <ActivityIndicator size="large"></ActivityIndicator>
          )}
          <Text>Home</Text>
          {listaDeTodos}          
          
        </View>
      </ScrollView>
    );
  }
}
