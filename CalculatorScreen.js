import React from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

export default class CalculatorScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text1: '', text2: '', result: 0, history: []};
    }

    static navigationOptions = {title: 'Calculator',};

    buttonPlus = () => {
        const newResult = parseInt(this.state.text1) + parseInt(this.state.text2);
        const historyItem = this.state.text1 + ' + ' + this.state.text2 + ' = ' + newResult;
        this.setState({result : newResult, history: [...this.state.history, {key: historyItem}], text2: '', text1: ''});    
    }
    
    buttonMinus = () => {
        const newResult = parseInt(this.state.text1) - parseInt(this.state.text2);
        const historyItem = this.state.text1 + ' - ' + this.state.text2 + ' = ' + newResult;
        this.setState({result : newResult, history: [...this.state.history, {key: historyItem}], text2: '', text1: ''});  
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
          <Text>Result: {this.state.result}</Text>
          <TextInput style={{width: 100, borderColor: 'gray', borderWidth: 1}} 
          onChangeText={(text1) => this.setState({text1})} value={this.state.text1} />  
          <TextInput style={{width: 100, borderColor: 'gray', borderWidth: 1}} 
          onChangeText={(text2) => this.setState({text2})} value={this.state.text2} />     
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <Button title=" + " onPress={this.buttonPlus} />
          <Button title=" - " onPress={this.buttonMinus} />
          <Button title="History" onPress={() => navigate('History', {calcHistory: this.state.history})} />
        </View>
        
      </View>
      
        );
    }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    }
  })


  

 