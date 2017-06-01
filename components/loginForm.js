import React from 'react';
import { Text, ListView } from 'react-native';
import firebase from 'firebase';
import { Button , Card, CardSection, Input, Spinner } from './common';

import List from './list';

export class LoginForm extends React.Component{
    constructor(){
        super()
        this.onDelete = this.onDelete.bind(this);
    }

    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
        tasks: ['react', 'ios', 'python']
    };
    onButtonPress(){
        this.setState({email: ''})
        let task = this.state.tasks.slice();
        task.push(this.state.email);
        this.setState({tasks: task});
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                        +
                    </Button>
                    )
        }
    }

    onDelete(rowID){
        console.log(this.state);
        var array = this.state.tasks;
        array.splice(rowID, 1);
        this.setState({tasks: array });
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    placeholder="Task"
                    secureTextEntry={false}
                    value = {this.state.email}
                    onChangeText={email => this.setState ({ email })}
                    />
                    {this.renderButton()}                  
                </CardSection>
                <CardSection>
                    <List list={this.state.tasks} onPressDelete={this.onDelete} />
                </CardSection>             
                
            </Card>
        )
    }
}

const styles = {
    Error: {
        color: 'red',
        textAlign: 'center'
    }
}