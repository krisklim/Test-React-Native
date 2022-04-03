import React, {  useState } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import { getName, getPassword, validSign } from '../redux/actions/actionCreator';

import {styles} from '../styles/style'

const LoginScreen = ({navigation}) => {

    //const log = useSelector(store => store?.login?.inputName);
    //const pas = useSelector(store => store?.login?.inputPassword)
    //const signIn = useSelector(store?.login?.validSign);
    //const dispatch = useDispatch();
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const [inpstyle, setInpStyle] = useState(styles.input);
        

    const image = require('../images/mainPic.jpg');

    const onClick = () => {
        let validPassword = new RegExp('^([0-9a-zA-Z]){8,}$');
        let validEmail = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');
        if (!validPassword.test(password) || !validEmail.test(login)) {
            setErr(true);
            setInpStyle(styles.wronInput);
            } else {
                setErr(false);
                //dispatch(signIn(log, pas));
                navigation.navigate('Home');
            }
    }


    return ( <>          
        <View style={styles.container}>  
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>    
        <View style={styles.box}>
        <Text style={styles.header1}>Добро пожаловать в</Text>
        <Text style={styles.header2}>Simple Hotel Check</Text>        
        <View style={styles.wrapper}> 
            <TextInput 
                name ='email'
                style={inpstyle}  
                value={login}
                placeholder='Имя' 
                onChangeText={text => setLogin(text)}/>
                
                <TextInput 
                name = 'password'
                style={inpstyle}
                value={password}
                placeholder='Пароль' 
                secureTextEntry = {true}
                onChangeText={text => setPassword(text)}/>
                {err == true ? 
                <Text style={styles.wron}>Неверный логин или пароль. Повторите попытку</Text>:
                <Text></Text>
                }
                    
                <TouchableOpacity onPress={() => onClick()}>
                    <View style={styles.button}>
                    <Text style={styles.btnTitle}>Войти</Text>
                    </View>
                </TouchableOpacity>
            <View style = {{flexDirection:"row", marginTop:20, justifyContent: 'center'}}>
                <Text style={{color: 'white'}}>Еще нет аккаунта? </Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Register');
                    setLogin(''); setPassword(''); setInpStyle(styles.input); setErr(false)}}>
                    <Text style={{color: '#5AC8FA'}}>Зарегистрируйтесь</Text>
                </TouchableOpacity>
            </View>
        </View>  
        </View>
        </ImageBackground>   
    </View>
    </>
)}

export default LoginScreen;
