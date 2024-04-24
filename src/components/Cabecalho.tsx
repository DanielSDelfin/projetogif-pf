import React from "react"
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

const Cabecalho = ({navigation,text,setText,solicitar}) => {
    return (
        <View style={estilo.cabecalho}>
            <Ionicons
                name="chevron-back"
                size={40}
                color='white'
                onPress={() => navigation.goBack()}
            />
            <TextInput
                placeholder="Pesquisar"
                style={estilo.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={text}
                onChangeText={(value) => setText(value)}
                onSubmitEditing={() => solicitar(text)}

            />
            <Ionicons
                name='search'
                size={40}
                color='white'
                onPress={() => solicitar(text)}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    cabecalho:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15
    },
    input:{
        backgroundColor:'white',
        flex:1,
        borderRadius:25
    }
})

export default Cabecalho