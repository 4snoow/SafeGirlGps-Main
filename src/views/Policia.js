import React from 'react';
import { View, ImageBackground, StyleSheet, Linking } from 'react-native';
import {Text} from 'react-native-elements'
import bgImage from '../../assets/background.png'

export default function Policia(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
            <Text onPress={()=>{Linking.openURL('tel:190');}} style={styles.emergencyButton}>190</Text>
            <Text h4 style={styles.title}>Polícia Militar</Text>
            <Text style={styles.text}>
            É o telefone de emergência da Polícia Militar por meio do qual podem ser repassadas/relatadas 
            situações de furto, roubo, homicídio, violência doméstica, agressão, depredação do patrimônio público, 
            invasão de domicílio, entre outros delitos que imponham o cidadão ao risco iminente de um ilícito penal 
            ou no momento em que estas situações estejam ocorrendo.
            </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height: null,
        width:'100%',
    },
    emergencyButton:{
        backgroundColor: 'rgb(198,48,41)',
        borderRadius: 60,
        padding: 35,
        color: 'white',
        fontSize: 20,
        marginTop: 180
    },
    title:{
        marginTop: 15,
        marginBottom: 30
    },
    text:{
        marginBottom: 5,
        marginLeft: 9,
        marginRight: 9,
        textAlign: 'justify',
        fontSize: 20,
        backgroundColor: '#AF3563',
        color: 'white',
        padding: 15,
        borderRadius: 15
    }
  });