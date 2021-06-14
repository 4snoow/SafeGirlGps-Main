import React, {useEffect, useState} from 'react';
import { View, ImageBackground, StyleSheet, Linking, Text, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {Button} from 'react-native-elements'
import bgImage from '../../assets/bgc.png'

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
            {/* <Image source={bgImage} style={styles.backgroundImage}></Image> */}
            
            
            
            <View>
                <Button
                 buttonStyle={styles.box1} 
                 onPress={()=>props.navigation.navigate('Mapa')} 
                 icon={{
                    name: 'place',
                     size: 100,
                     color: 'white'
                }}/>
                <Text style={styles.textStyle}>Mapa</Text>
            </View>
            <View>
                <Button
                 buttonStyle={styles.box1} 
                 onPress={()=>props.navigation.navigate('Policia')} 
                 icon={{
                    name: 'local-police', 
                    size: 100,
                    color: 'white'
                }}/>
                <Text style={styles.textStyle}>Polícia</Text>
            </View>
            <View>
                <Button
                 buttonStyle={styles.box1} 
                 onPress={()=>props.navigation.navigate('Assistente')} 
                 icon={{
                    name: 'face', 
                    size: 100,
                    color: 'white'
                }}/>
                <Text style={styles.textStyle}>Assistente</Text>
            </View>
            <View>
                <Button
                 buttonStyle={styles.box2} 
                 onPress={() => EnviarMensagem()} 
                 icon={{
                    name: 'warning', 
                    size: 100,
                    color: 'white'
                }}/>
                <Text style={styles.textStyle}>Alerta</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',  
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
      paddingBottom: 90,
    //   flexWrap: 'wrap'
    },
    backgroundImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height: null,
        width:'100%',
    },
    box1: {
      width: 150,
      height: 150,
      borderRadius: 70,
      backgroundColor: 'rgb(175, 53, 99)',
    },
    box2: {
      width: 150,
      height: 150,
      borderRadius: 70,
      backgroundColor: 'rgb(175, 53, 9)',
      marginTop: 140
    },
    textStyle: {
      color: 'black',
      alignSelf: 'center',
      margin: 20,
      fontSize: 20,
    }
  });