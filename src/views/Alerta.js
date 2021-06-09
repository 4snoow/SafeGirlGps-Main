import React from 'react';
import { Text, View, ImageBackground, StyleSheet, Linking } from 'react-native';
import bgImage from '../../assets/background.png'

export default function Alerta(props){

    function EnviarMensagem(){
        Linking.openURL('whatsapp://send?text=' + 'Estou em perigo' + '&phone=55' + '75992112551')
        Linking.sendIntent;
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
            <Text onPress= {() => EnviarMensagem() } style={styles.funcNavText} >Alertar</Text>
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
    funcNavText:{
        backgroundColor: 'rgb(198,48,41)',
        borderRadius: 60,
        padding: 30,
        color: 'white',
        fontSize:16,
    }
  });