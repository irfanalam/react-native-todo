import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

const TodoItem = styled.View`
	position: relative;
	padding: 20px;
	padding-right: 100px;
	border-bottom-width: 2px;
	borderBottomColor: #ededed;
`;
const TodoText = styled.Text`
	padding-left: 20px;
	border-left-width: 5px;
	border-left-color: #E91E63;
	font-size: 18px;
`;
const DelBtn = styled.TouchableOpacity`
	position: absolute;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	padding: 10px;
	top: 10px;
	bottom: 10px;
	right: 10px;
`;

export default class Note extends Component {
    render() {
        return (
			<TodoItem key={this.props.keyval} >
				<TodoText>{this.props.val.note}</TodoText>
				<DelBtn onPress={this.props.deleteMethod}>
					<Text>
						<Icon
							name='archive'
							size={18}
							color='#252525'
						/>
					</Text>
				</DelBtn>
			</TodoItem>
        );
    }
}
