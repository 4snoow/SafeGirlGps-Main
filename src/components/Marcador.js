import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, {Heatmap, Marker} from 'react-native-maps';

export default class Marcador extends Component{
    render(){
        return(
         
          <Marker
          coordinate={{
              latitude:-12.28373837933043,
              longitude:-38.95734753522077,
            }}
            title ="Modulo policial da praça do tomba"
            description ="R. Papa João XXIII"
            icon = {{
              uri: "https://img.icons8.com/color/110/police"
            }}
            
          />
         
          

          
        
          

          
        );
    }
}