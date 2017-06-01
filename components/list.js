import React from 'react';
import { Button } from './common';
import { View, Text, ListView, TextInput } from 'react-native';

export default class List extends React.Component{
    constructor(){
        super()
        this.onClick = this.onClick.bind(this);
        this.changeStateData = this.changeStateData.bind(this);
    }
        state = {
            editState: null
        }
    
componentWillMount() {
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

changeStateData(index, data){
    index = index - 1;
     console.log('rowID.....' +  index + '  Data...' + data)
}

    listItem(rowID, rowData){
        rowID = parseInt(rowID) + 1;
        if(rowID === this.state.editState){
        console.log('ddddddd', rowID);
            return(
                <View>
                    <TextInput value={rowData} onChangeText={(rowData) => this.changeStateData(rowID, rowData) }/>
      
                </View>
            )
        } else {
            return(
                <View>
                <Text onPress={()=>this.onClick(rowID)}>{rowData}</Text>
                    { // <Text onPress={()=>this.onClick(rowID)} onChangeText={(rowData)=> console.log(rowData)}>{rowData}</Text>
                }
                </View>
            )
        }
    }

    onClick(data){
        console.log('Event', data);
        this.setState({editState: data});
    }
    render(){
        var ds = this.dataSource.cloneWithRows(this.props.list)
        return(
            <View>
                <ListView
          dataSource={ds}
          renderRow={(rowData, sectionID, rowID) =>
                this.listItem(rowID, rowData)} />
            </View>
        )
    }
}