import React,{useState,useEffect,useRef} from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, {Heatmap, Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions';
import {data} from '../components/datamarkers'
import {points} from '../views/Points'

export default function Mapa() {


  /*Solicitar localização*/ 
  const [origin, setOrigin] = useState( null);
  const [destination, setDestination] = useState( null);

  useEffect(()=>{
    (async function(){
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    let {coords} = await Location.getCurrentPositionAsync({enableHighAcurracy:true});
    // console.log(coords.latitude, coords.longitude)
  } else {
    throw new Error('Localização não garantida');
  }

    })();
  }, []);
  /*Solicitar localização*/ 


  return (
    <View style={styles.container}>      

      <MapView
      // provider={AIzaSyCDVjbFSS6m2Lm1I_NqsI8P1uBequPjmM4}
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
     
      {/* <MapViewDirections
      
      /> */}

      {/* Trazer os markers do mapa em datamarkers */}
      {data.map((item,index) => {
        return(
          <Marker 
            key={index}
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
      <Heatmap
            points={points}
            radius={40}
            opacity={0.7}
            gradient={{
              colors: ["#d63031", "#ff7675", "#d63031", "#d63031", "#d63031"],
              startPoints: Platform.OS === 'ios' ? [0.01, 0.04, 0.1, 0.45, 0.5] :
                [0.1, 0.25, 0.5, 0.75, 1],
              colorMapSize: 2000
            }}
          >
          </Heatmap>

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
