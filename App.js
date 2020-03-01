import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput, Image, ImageBackground, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import * as Font from 'expo-font';

class App extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible, data: null});
  }
  setData(data){
    this.setState({data: data});
  }

   _renderModal() {
    return (
      <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}>

      <View style={{marginTop: 22}}>
        <View>
          <Text>{this.state.data}</Text>

          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    )
  }


  render() {
    return (
      <>
      <View style={styles.headerInput}>
          <TextInput  style={styles.input}/>

          <TouchableOpacity style={styles.buttonSearch} onPress={() => {}} >
             <Text>
                <AntDesign name="search1" size={32} /> 
              </Text>
          </TouchableOpacity>
        </View>

        <View style={{width:"100%"}}>
            <Text style={{fontSize:50, color:"#000", margin:5}}>Pinturas</Text>
        </View>

        <View style={{marginTop: 22}}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
              this.setData("Teste1")
            }}>
            <Text>Show Modal1</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 22}}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
              this.setData("Teste2")
            }}>
            <Text>Show Modal2</Text>
          </TouchableOpacity>
        </View>

        {this.state.modalVisible ? this._renderModal() : null}
      </>
    );
  }
}


const styles = StyleSheet.create({
  containerCards:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"#fff",
    marginTop:5,
    flexWrap:"wrap",
    justifyContent:"center"
  },
  card:{
    backgroundColor:"#fff",
    margin:10,
    minHeight:150,
    maxHeight:250,
    minWidth:150,
    maxWidth:150,
    borderRadius:10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
  },
  headerInput:{
    height:50,
    marginTop:30,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  input:{
    flex:1,
    margin:5,
    borderRadius:5,
    borderWidth:1,
    borderColor:"#eee",
    fontSize:20
  },
  buttonSearch:{
    width:40,
    margin:5
  },
  cardModal:{
    flex:1,
    backgroundColor:"#fff",
    borderRadius:10
  }
})


export default App; 