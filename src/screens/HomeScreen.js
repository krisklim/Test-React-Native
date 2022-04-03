import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, FlatList, Animated } from 'react-native';
import { styles } from '../styles/homeStyles';
import hotels from '../components/hotels'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



const HomeScreen = ({navigation}) => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [heartColor, setHeartColor] = useState('#C4C4C4');

    const Cards = ({hotels, index}) => {
    const inputRange = [
        (index-1)*120,
        index*120,
        (index+1)*120,
    ];
    const opacity = scrollY.interpolate({
        inputRange,
        outputRange: [0.5, 0, 0.5]
    });
    return <View style={styles.cardBox}>   
        <TouchableOpacity 
        onPress={() => navigation.navigate('HotelCard')}
        >
        <Animated.View style= {{...styles.cardOverLay, opacity}}/>
            <View style={styles.headBox}>
                <Image source={hotels.image} style={styles.image}></Image>
                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style={styles.nameBox}>
                    <Text style={styles.hotelName}>{hotels.name}</Text>
                    <TouchableOpacity style={{width: 26, height: 26}} 
                    onPress={() => {
                        (heartColor == '#DE0000') ? setHeartColor('#C4C4C4') : setHeartColor('#DE0000')}}>
                    <AntDesign name="heart" size={24} color={heartColor} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ratingBox}>
                    <View style={{flexDirection: 'row'}}>
                    <AntDesign name="star" size={15} color="#F3DB00"/>
                    <AntDesign name="star" size={15} color="#F3DB00"/>
                    <AntDesign name="star" size={15} color="#F3DB00"/>
                    <AntDesign name="star" size={15} color="#F3DB00"/>
                    <AntDesign name="star" size={15} color="#323232"/>
                    </View>
                    <Text style={styles.rooms}>Осталось {hotels.rooms} комнаты</Text>
                </View>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.costBox}>
                <Text style={styles.cost}>Цена за 1 ночь: </Text>
                <Text style= {styles.price}>{hotels.price} ₽</Text>
            </View>
        </TouchableOpacity>
    </View> 
}

    return (
    <SafeAreaView style={{flex: 1}}>      
            
            <View style={styles.titleBox}>
                <Text style={styles.title}>Simple Hotel Check</Text>  
                <TouchableOpacity style={{position: 'relative'}} 
                onPress={() => navigation.navigate('Login')}>
                    <Feather name="log-out" size={18} color="black" />
                </TouchableOpacity>
            </View>

        <View style={styles.searchBox}>
            <Text style={styles.searchText}>Куда едем?</Text>
            <TextInput style={styles.input} placeholder='Москва'/>
            <View style={styles.inpContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput style={styles.input2} placeholder='Data'/>
                <MaterialCommunityIcons style={{position: 'absolute', right: 10}} name="calendar-month-outline" size={24} color="#5AC8FA" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput style={styles.input2} placeholder='1'/>
                <FontAwesome5 style={{position: 'absolute', right: 10}} name="clock" size={24} color="#5AC8FA" />
                </View> 
            </View>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Offers')}
            style={styles.button}>
                <Text style={styles.btnTitle}>Найти</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.infoBox}>
            <Text style={styles.header}>Подходящие бронирования</Text>
                    <Animated.FlatList 
                        onScroll={Animated.event([
                            {nativeEvent: {
                                contentOffset:{
                                    y:scrollY}}}],
                            {useNativeDriver: true}
                            )}
                        vertical
                        data={hotels}
                        contentContainerStyle={{paddingVertical: 16}}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index})=><Cards
                        hotels={item} index={index}/>}/>
        </View>
        </SafeAreaView>
    )
}

export default HomeScreen;
