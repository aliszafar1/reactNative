import React from 'react';
import { ListView, Text, View } from 'react-native';


class TodoList extends React.Component{
    constructor() {
        // console.log(this.props);
    // super();
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //     dataSource: ds.cloneWithRows(['this.props.tasks'])
    // };
  }

  render(){
      return(
        //   <ListView
        //         dataSource={this.state.dataSource}
        //         renderRow={(rowData) => <Text>{rowData}</Text>}
        //         />
        <View>
            <Text>Hello</Text>
        </View>
      )
  }
}

module.exports = TodoList;