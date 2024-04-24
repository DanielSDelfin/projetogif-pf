import { Text,ImageBackground,StyleSheet,View,Keyboard,FlatList,Image,Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from 'react'
import axios from "axios";
import Cabecalho from "../components/Cabecalho";
import API_KEY from "../API_KEY";

const{width} = Dimensions.get('window')
const IMAGE_WIDTH = width

const TelaResultado = ({route,navigation}) =>{
    const escolha = route.params.escolha;
    const link = `https://api.giphy.com/v1/${escolha}/search`
    const[text,setText]=useState("")
    const[data,setData]=useState([])

    
    const solicitar = async (text) =>{
        Keyboard.dismiss()
        try{
            const resultados = await axios.get(link,{
                params:{
                    api_key:API_KEY,
                    q:text,
                    lang:'pt'
                }
            })

            console.log(resultados.data.data)
            setData(resultados.data.data)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <ImageBackground
            source={require('../../assets/BG.png')}
            style={estilo.container}
        >
            <SafeAreaView>
                <Cabecalho 
                    navigation={navigation}
                    text={text}
                    setText={setText}
                    solicitar={solicitar}
                />

                <FlatList 
                    data={data}
                    numColumns={2}
                    renderItem={({item})=>{
                        return(
                           <Image 
                                source={{uri:item.images.preview_gif.url}}
                                style={estilo.image}
                           />
                        )
                    }}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width:IMAGE_WIDTH/2,
        height:IMAGE_WIDTH/2
    }
})
export default TelaResultado
