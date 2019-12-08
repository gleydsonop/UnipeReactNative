import React, {Component} from 'react';
import {View, Text, ActivityIndicator, ScrollView, Button} from 'react-native';
import Api from '../services/Api';
import Card from '../components/Card';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      loading: true,
    };
  }

  componentDidMount() {
    Api.get().then(resposta => {
      this.setState({pets: resposta.data, loading: false});
    }).catch(erro => {      
      alert(erro);
    });
  }

  

  render() {
    const listaDePets = this.state.pets.map(pet => (
      <Card key={pet._id} petID={pet._id} nome={pet.name} raca={pet.raca} />
    ));

    return (
      <ScrollView>
        <View>          
        <Button
          color="green"
          title="Recarregar"         
          onPress={() => Actions.home()}          
        />       
          {this.state.loading && (
            <ActivityIndicator size="large"></ActivityIndicator>
          )}
          <Text>Logado como: {this.props.usuarioLogado}</Text>
          {listaDePets}          
          
        </View>
      </ScrollView>
    );
  }
}
