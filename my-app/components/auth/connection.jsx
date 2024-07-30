import React from 'react';
import {StyleSheet, TextInput, View, Text,Alert,Pressable} from 'react-native';

const Connection = ({navigation}) =>{

    return(
        <View style={styles.container_Flex}>
            <Text  aria-label="title" nativeID="title" style={styles.title}>Me connecter</Text>
            <Text style={styles.label} aria-label="email" nativeID="email">Email</Text>
            <TextInput
                style={styles.border}
                placeholder='Email'
                aria-label="email"
                aria-labelledby="email"
            />
            <Text style={styles.label} aria-label="mdp" nativeID="mdp">Mot de passe</Text>
            <TextInput
                style={styles.border}
                placeholder='Mot de passe'
                aria-label="mdp" 
                aria-labelledby="mdp"
            />
            <Text style={styles.link} onPress={() => navigation.navigate('Inscription')}>
                Pas encore parmis nous ?
            </Text>
            <Pressable style={styles.button}
                onPress={() => Alert.alert('Simple Button pressed')}
            >
                <Text style={styles.text}>Me connecter</Text>
            </Pressable>
            </View>
    )
}
const styles = StyleSheet.create({
    container_Flex:{
            flex: 1,
            paddingTop: 20
        },
    border:{
            borderWidth: 1,
            alignItems: 'center',
            textAlign: 'center',
            minWidth: 50,
            backgroundColor: 'white',
            height: 45,
            borderRadius: 10,
            marginHorizontal: 15,
    },
    title:{
        fontSize: '45%',
        paddingBottom: '2.5%',
        textAlign: 'center',
    },
    label:{
        paddingBottom: '1.5%',
        paddingTop: '1.5%',
        marginHorizontal: 15,
    },
    link:{
        paddingBottom: '1.5%',
        paddingTop: '1.5%',
        marginHorizontal: 15,
        color: 'blue',
    },
    button:{
        fontSize: 25,
        marginHorizontal: 15,
        marginTop:25,
        paddingBottom: '1.5%',
        paddingTop: '1.5%',
        alignItems:'center',
        color: 'blue',
        backgroundColor:'grey',
        borderWidth: .5,
        borderRadius: 10,
    },
    link:{
        paddingBottom: '1.5%',
        paddingTop: '5%',
        marginHorizontal: 15,
        color: 'blue',
        alignItems: 'end',
    },
    text:{
        fontSize: 25,
        color: 'white',
    }
})
export default Connection;