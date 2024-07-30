import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    tinyLogo: {
        width:'100%',
        height: '100%',
    },
    text:{
        fontFamily: 'Courier',
        color: 'white',
        fontSize: 65,
        position: 'absolute', top: 450, 
        justifyContent: 'center', alignItems: 'center'
    }
});

const Splashscrenn = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../img/plouf.jpg')}
            />
            <Text style= {styles.text}>
                SnapfeetS charge, oublie pas tes personne !
            </Text>
        </View>
    )
}
export default Splashscrenn