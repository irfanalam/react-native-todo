import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import Note from './app/components/Note';

const Conatiner = styled.View`
  flex: 1;
`;
const Header = styled.View`
  background-color: #009688;
  align-items: center;
  justify-content: center;
  border-bottom-width: 10px;
  border-bottom-color: #ddd;
`;
const HeaderText = styled.Text`
  color: #fff;
  font-size: 26px;
  padding: 36px;
`;
const ListOfTodos = styled.ScrollView`
  flex: 1;
  margin-bottom: 100px;
`;
const Footer = styled.View`
  position: absolute;
  align-items: center;
  bottom:0;
  left:0;
  right:0;
`;
const AddBtn = styled.TouchableOpacity`
  backgroundColor: #E91E63;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border-color: #ccc;
  align-items: center;
  justify-content: center;
  elevation: 8px;
  margin-bottom: -35px;
  z-index: 10;
`;
const Task = styled.TextInput`
  align-self: stretch;
  color: #fff;
  padding: 20px;
  padding-top: 45px;
  background-color: #252525;
  border-top-width: 2px;
  border-top-color: #ededed;
  font-size: 18px;
`;


export default class App extends Component {

  state={
    noteArray:[],
    noteText:'',
  }

  render() {

    let notes = this.state.noteArray.map((val, key)=>{
      return <Note key={key} keyval={key} val={val} deleteMethod={ ()=>this.deleteNote(key) } />
    });

    return (
      <Conatiner>
        <Header>
          <HeaderText> Todo List </HeaderText>
        </Header>
        <ListOfTodos>
          {notes}
        </ListOfTodos>
        <Footer>
        <AddBtn onPress={this.addNote.bind(this)} >
            <Icon
              name='plus'
              size={36}
              color='white'
            />
        </AddBtn>
          <Task 
            onChangeText={ (noteText) => this.setState({noteText}) } 
            value={this.state.noteText}
            placeholder= 'Add task'
            placeholderTextColor= 'white'
            underlineColorAndroid='transparent'
          />
        </Footer>
      </Conatiner>
    );
  }

  addNote() {
    if(this.state.noteText){
      this.state.noteArray.push({ 'note':this.state.noteText } )
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: ''})
    }
  }

  deleteNote(key){
    this.state.noteArray.splice(key, 1)
    this.setState({ noteArray: this.state.noteArray })
  }

}