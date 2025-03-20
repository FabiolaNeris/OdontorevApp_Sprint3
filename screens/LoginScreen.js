import React from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const LoginScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <Button title="Login" onPress={() => navigation.navigate('Home')} />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    input:{
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 10,
    },
});

export default LoginScreen;