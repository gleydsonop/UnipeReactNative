import React, {Component} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import Api from '../services/Api';
import Card from '../components/Card';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      loading: true,
    };
  }

  componentDidMount() {
    Api.get('/api/todos').then(resposta => {
      this.setState({todos: resposta.data, loading: false});
    });
  }

  render() {
    const listaDeTodos = this.state.todos.map(todo => (
      <Card key={todo._id} description={todo.description} done={todo.done} />
    ));

    return (
      <ScrollView>
        <View>
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
