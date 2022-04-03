import React, { useContext, useState } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import {styles} from '../styles/style'


const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const image = require('../images/mainPic.jpg');
    const [inpstyle, setInpStyle] = useState(styles.input);
    const [err, setErr] = useState(false);

    const onClick = () => {
        let validPassword = new RegExp('^[0-9a-zA-Z]{8,}$');
        let validEmail = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');

        if (!validPassword.test(password) || !validEmail.test(email)) {
            setErr(true);
            setInpStyle(styles.wronInput);
            } else {
                navigation.navigate('Home')}
    }
   

    return ( <>
            <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>    
            <View style={styles.box}>
            <Text style={styles.header1}>Добро пожаловать в</Text>
            <Text style={styles.header2}>Simple Hotel Check</Text>
            <View style={styles.wrapper}> 
                <TextInput 
                    style={inpstyle}  
                    value={name}
                    placeholder='Имя' 
                    onChangeText={text => setName(text)}/>
                     <TextInput 
                    style={inpstyle}  
                    value={email}
                    placeholder='Email' 
                    onChangeText={text => setEmail(text)}/>
                <TextInput 
                    style={inpstyle} 
                    value={password}
                    placeholder='Пароль' 
                    secureTextEntry = {true}
                    onChangeText={text => setPassword(text)}/>
                    {err == true ? 
                <Text style={styles.wron}>Неверный логин или пароль. Повторите попытку</Text>:
                <Text></Text>
                }
                <View style = {styles.btncont} >
                <TouchableOpacity onPress={() => onClick()}>
                    <View style={styles.button}>
                    <Text style={styles.btnTitle}>Войти</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View style = {{flexDirection:"row", marginTop:20,justifyContent:'center'}}>
                    <Text style={{color: 'white'}}>Уже есть аккаунт? </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login');}}>
                        <Text style={{color: '#5AC8FA'}}>Войти</Text>
                    </TouchableOpacity>
                    </View>
            </View>  
        </View>
        </ImageBackground>   
    </View>
        </>
    )
}

export default RegisterScreen;