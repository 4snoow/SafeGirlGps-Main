import React, {useEffect, useState} from 'react';
import { View, ImageBackground, StyleSheet, Linking, Text, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {Button} from 'react-native-elements'
import bgImage from '../../assets/menu.png'

export default function Login(props){

    const [coordinate, setCoordinate] = useState({
        latitude:"",
        longitude: ""
    })

    useEffect(()=>{
        (async function(){
          const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        let {coords} = await Location.getCurrentPositionAsync({enableHighAcurracy:true});
        console.log(coords.latitude, coords.longitude)
        setCoordinate({
            latitude: coords.latitude,
            longitude: coords.longitude
        })
      } else {
        throw new Error('Localização não garantida');
      }
    
        })();
      }, []);

    function EnviarMensagem(){
        Linking.openURL('whatsapp://send?text=' + `⚠️ Estou em perigo, SOCORRO! *Essa é uma mensagem rápida de alerta do aplicativo Safe Girl Gps*.⚠️

*Minhas coordenadas:* 
Latitude: ${JSON.stringify(coordinate.latitude)}, 
Longitude: ${JSON.stringify(coordinate.longitude)}

*Veja como chegar até mim:*
https://www.google.com.br/maps/dir/-12.2715286,-38.9551938/${JSON.stringify(coordinate.latitude)},${JSON.stringify(coordinate.longitude)}/@${JSON.stringify(coordinate.latitude)},${JSON.stringify(coordinate.longitude)},16.78z ` +  '&phone=55' + '75992112551')
        Linking.sendIntent;
    }

    return(
      <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
      <Button
          buttonStyle={styles.button}
          title=''
          onPress={() => EnviarMensagem()}>
      </Button>
      <View style={styles.container2}>
      <Button
          buttonStyle={styles.buttons}
          title=''
          onPress={()=>props.navigation.navigate('Mapa')}>
      </Button>
      <Button
          buttonStyle={styles.buttons}
          title=''
          onPress={()=>props.navigation.navigate('Policia')}>
      </Button>
      <Button
          buttonStyle={styles.buttons}
          title=''
          onPress={()=>props.navigation.navigate('Assistente')}>
      </Button>
      </View>
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
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,  
  },
  backgroundImage:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover',
      height: null,
      width:'100%',
  },
  button:{
      backgroundColor: 'rgba(198,48,41,0.0)',
      borderRadius: 120,
      padding: 115,
      marginTop: 230,      
  },
  buttons:{
      backgroundColor: 'rgba(198,48,41,0.0)',
      borderRadius: 80,
      padding: 60,      
      marginLeft: 30,
      marginRight: 30,
      marginTop: 200,      
  }
  });