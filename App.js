import React, {Component} from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, ImageBackground, StyleSheet, ScrollView, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import Modal from "react-native-modal";
import * as Font from 'expo-font';

import bancoDados from './src/data.json'

const response = bancoDados;


class App extends React.Component {
  state = {
    modalVisible: false,
    data:null,
    like: false
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible, data: null});
  }

  setData(data){
    this.setState({data: data});
  }

  setLike(){
    this.setState({like:true});
  }



   _renderModal() {
     console.log(this.state.data);
    return (
          <Modal style={{borderRadius:20}}  isVisible={this.state.modalVisible}>          
            <ImageBackground style={{width:'100%', height:"100%", borderRadius:20, display:"flex", justifyContent:"space-between"}} source={{uri:this.state.data[0]}}>              
             
             <View style={styles.headerButons}>
                <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                  <Text><AntDesign name="left" size={40} color="#fff"></AntDesign></Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.setLike()}}>
                  <Text><AntDesign name="heart" size={40} color={this.state.like ? "#f93939": "#fff"}></AntDesign></Text>
                </TouchableOpacity>

             </View>


              <View style={{backgroundColor:"#fff", marginTop:0, height:"100%", borderRadius:20}}>
                <View style={{width:"100%", alignItems:"center", margin:5, marginTop:-15}}>
                      <Image style={{height:30, width:30, borderRadius:15}} source={{uri:'https://s3-sa-east-1.amazonaws.com/imgs.iarremate/artistas/art-13234/imagens/5Zfc0dW2.jpg'}}/>
    <Text style={{fontWeight:'bold', color:"#666", fontSize:12 }}>{this.state.data[1]}</Text>
                </View>
                <ScrollView>
                  <View style={{width:"100%", alignItems:"center", margin:5}}>
                    <Text style={{fontWeight:'bold',fontSize:25 }}>{this.state.data[2]}</Text>
                  </View>
                              
                  <Text style={{ margin:10, marginBottom:300}}>
                    {this.state.data[3]}
                  </Text>

                </ScrollView>
              </View>
            </ImageBackground>
          </Modal>
    )
  }


  render() {
    return (
      <>

      {/*HEADER_START*/}
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
         {/*HEADER_END*/}

        <ScrollView>
          <View style={styles.containerCards}>

          {/*CARDS_START*/}

            {response.map((item)=>{
              return(
                <View style={styles.card}>
                  <TouchableOpacity  onPress={() => {
                    this.setModalVisible(true);
                    this.setData([item.url,item.autor,item.name, item.conteudo])
                  }}>
                    <Image style={{height:200, borderRadius:10}} source={{uri:item.url}} />
                  </TouchableOpacity>
                  </View>
              )
            })}

           {/*CARDS_END*/}

          </View>
        </ScrollView>


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
    width:"40%",
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
    marginLeft:15,
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
    borderRadius:10,
    margin:0
  },
  headerButons:{
    marginTop:5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    height:250
  },
})


export default App; 