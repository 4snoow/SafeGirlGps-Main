import React,{useState,useEffect,useRef} from 'react';
import { Button, Dimensions, StyleSheet, Text, View,Alert } from 'react-native';
import MapView, {Heatmap, Marker} from 'react-native-maps';
import MapButton from '../components/MapButton';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions';
import {data} from '../components/datamarkers'


export default function Mapa() {


  /*Solicitar localização*/ 
  const [origin, setOrigin] = useState( null);
  const [destination, setDestination] = useState( null);

  useEffect(()=>{
    (async function(){
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    let {coords} = await Location.getCurrentPositionAsync({enableHighAcurracy:true});
    console.log(coords.latitude, coords.longitude)
  } else {
    throw new Error('Localização não garantida');
  }

    })();
  }, []);
  /*Solicitar localização*/ 


  return (
    <View style={styles.container}>
    
      {/* <MapButton
        style ={{top:40, right:180}}
      /> */}

      <MapView
      showsUserLocation={true}
      zoomEnabled={true}
      followsUserLocation={true}
      style={styles.mapStyle}
          initialRegion={{
            latitude: -12.255476525161434,
            longitude: -38.96073387038091,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          
      >
     
      <MapViewDirections
      
      />

      {/* Trazer os markers do mapa em datamarkers */}
      {data.map(item => {
        return(
          <Marker 
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.title}
            description={item.description}
            icon = {{
              uri: item.uri
            }}
          />
        )
      })}
      


        </MapView>

        
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e84393',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  mapStyle: {
    width:Dimensions.get('window').width,
    height:'90%',

    marginTop:10,
    zIndex:1
    
  },
  
});
