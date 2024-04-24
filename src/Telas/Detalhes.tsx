import React from "react";
import {Text,View,ImageBackground, StyleSheet, Image} from 'react-native'
import {Ionicons} from 'react-native-vector-icons'
import { SafeAreaView } from "react-native-safe-area-context";


const TelaDetalhes = (props)=>{
    console.log(props)
    const data = props.routes.parms.item
    return(
        <ImageBackground 
            source={require('../../assets/BG.png')}
            style={estilo.container}
        >
            <SafeAreaView>
                <View style = {{flexDirection:'row', alignItems:'center' }}>
                    <Ionicons name='chevron-back' size={40} color='white' 
                        onPress ={()=>props.navigation.goBack("TelaResultado")}
                    />
                    <Text style={estilo.texto} >Resultados</Text>
                </View>

                <Image
                source={{uri:data.images.origianl.url}}
                style={{flex:1}}
                />
                <Text style={estilo.texto}>{data.title}</Text>
                <Ionicons name='globe' color='white' size={40} />
            </SafeAreaView>

        </ImageBackground>
    )
}
const estilo = StyleSheet.create({
    container:{
        flex:1
    },
    texto:{
        fontSize: 25,
        color: '#fff'
    }
})


export default TelaDetalhes