import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Api from '../services/Api';
import {Actions} from 'react-native-router-flux';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.done ? 'Feito' : 'Não feito',
    };
  }

  handleClick = () => {
    Api.delete(`produto/${this.props.produtoId}`).then(() => {
      alert('Removido com sucesso. Recarregue para ver o resultado.');
      
      
    });
  };

  handleClickEditar = () => {
    Actions.editar({produtoId: this.props.produtoId});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>ID: {this.props.petID} </Text>
        <Text>Nome: {this.props.nome} </Text>
        <Text>Raca: {this.props.raca}</Text>               
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderBottomWidth: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#d6d7da',    
    marginBottom: 5,
  },
});
