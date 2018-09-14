import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class HistoryScreen extends React.Component {
    static navigationOptions = {title: 'History',};
    render() {
        const { params } = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <Text>History</Text>
                <FlatList data={params.calcHistory} 
                    renderItem={({item}) => <Text>{item.key}</Text>} />
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });