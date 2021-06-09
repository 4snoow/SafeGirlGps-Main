import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableWithoutFeedback, Animated, Alert,Button} from 'react-native';
import { AntDesign, Entypo} from '@expo/vector-icons';

export default class MapButton extends Component{
    render(){
        return(
            <View style={[StyleSheet.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style= {[styles.button, styles.menu]}>
                        <AntDesign name="back" size= {50} color="#000" />
                    </Animated.View>
                </TouchableWithoutFeedback>


            </View>

           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },

    button:{
        position:'absolute',
        width:60,
        height:60,
        borderRadius:60/2,
        justifyContent:'center',
        shadowRadius:10,
        shadowColor:'#e84393',
        shadowOpacity:0.3,
        shadowOffset:{
            height:10,
        },
        zIndex:5
        
        
    },
    menu:{
        backgroundColor:'#e84393',
        opacity:0.7
    }
})