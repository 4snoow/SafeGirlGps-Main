import React from 'react';
import { View, ImageBackground, StyleSheet, Linking } from 'react-native';
import {Text} from 'react-native-elements'
import bgImage from '../../assets/background2.png'

export default function Assistente(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
                <Text onPress={()=>{Linking.openURL('tel:180');}} style={styles.funcNavText}>180</Text>
                <Text h4 style={styles.title}>Central de Atendimento à Mulher</Text>
                <Text style={styles.text}>
                    Presta uma escuta e acolhida qualificada às mulheres em situação 
                    de violência. O serviço registra e encaminha denúncias de violência contra a mulher aos órgão 
                    competentes, bem como reclamações, sugestões ou elogios sobre o funcionamento dos serviços de 
                    atendimento.
                </Text>
                <Text style={styles.text}>
                    O serviço também fornece informações sobre os direitos da mulher, como os locais de atendimento 
                    mais próximos e apropriados para cada caso: Casa da Mulher Brasileira, Centros de Referências, 
                    Delegacias de Atendimento à Mulher (Deam), Defensorias Públicas, Núcleos Integrados de Atendimento 
                    às Mulheres, entre outros.
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
    funcNavText:{
        backgroundColor: 'rgb(198,48,41)',
        borderRadius: 60,
        padding: 30,
        color: 'white',
        fontSize:16,
    },
    title:{
        margin:10
    },
    text:{
        marginBottom: 5,
        marginLeft: 9,
        marginRight: 9,
        textAlign: 'justify',
        fontSize: 14,
    }
  });