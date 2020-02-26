//IMPORTACIONES
import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon, Header, Left, Right, Title } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Registro from './registro'

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nombre:'',
      contraseña:''
    } }

  render(){
    const navegar = this.props.navigation;
    return (
      <Container>
      <Content padder contentContainerStyle={styles.content}>

        <Card>
          <CardItem header bordered>
            <Text style={styles.textCenter}>Bienvenido</Text>
          </CardItem>

          <CardItem bordered>
            <Body>
              <Item inlineLabel>
                <Icon type='FontAwesome' name='user' />
                  <Input placeholder='Usuario' value={this.state.nombre} onChangeText={(nombre)=> this.setState({nombre}) }/>
                </Item>

                <Item inlineLabel last>
                  <Icon type='FontAwesome' name='lock' />
                  <Input placeholder='Contraseña' secureTextEntry={true} value={this.state.contraseña}onChangeText={(contraseña)=> this.setState({contraseña}) }/>
                </Item>
            </Body>
          </CardItem>

          <CardItem footer bordered>
            <Button primary style={styles.boton}
            onPress={() => {
              navegar.navigate('Datos', {
                titulo: 'Bienvenid@',
                nombre: this.state.nombre,
                contraseña: this.state.contraseña
              });
            }}>
              <Text> Iniciar Sesión </Text></Button>
          </CardItem>

            <Button success style={{justifyContent:'center', marginLeft: '28%', width: 140}}
            onPress={() => navegar.navigate('Registro', { 
              titulo: 'Registro de usuario'
              }) }>
              <Text>Registrar</Text></Button>
        </Card>
      </Content>

        <Header>
          <Left/>
          <Body>
            <Title> Max Montero </Title>
          </Body>
          <Right />
        </Header>

    </Container>
    ); 
  } 
} 

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D4EBF3',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%'
  },
  boton: {
    marginLeft: '26%',
  }
});


export default Login;
