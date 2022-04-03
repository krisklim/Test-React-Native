import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, 
    SafeAreaView, StyleSheet, Animated } from 'react-native';
import { styles } from '../styles/homeStyles';
//import ModalDropdown from 'react-native-modal-dropdown';
import hotels from '../components/hotels'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Offers = ({navigation}) => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [heartColor, setHeartColor] = useState('#C4C4C4');
    const categories = ['Поиск', 'Избранное'];
    const [menueSelect, setMenueSelct] = useState(0);
    const [favVisible, setFavVisible] = useState(false);

    const CategoryList = () => {
        return(
            <View style={styles.menue}>
            {categories.map((item, index)=> (
                <TouchableOpacity key={index} activeOpacity={0.8}
                onPress={() => {
                    setMenueSelct(index);
                    (index == 2) ? setFavVisible(true) : setFavVisible(false);
                }}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.searchText}>{item}</Text>
                        {menueSelect == index && (
                            <View style={styles.tabLine}></View>
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </View>)
    };

const Cards = ({hotels, index}) => {
    const inputRange = [
        (index-2)*120,
        (index-1)*120,
        (index)*120,
    ];
    const opacity = scrollY.interpolate({
        inputRange,
        outputRange: [0.4, 0.2, 0]
    });
    return <View style={styles.cardBox}>   
        <TouchableOpacity 
        onPress={() => navigation.navigate('HotelCard')}>
        <Animated.View style= {{...styles.cardOverLay, opacity}}/>
            <View style={styles.headBox}>
                <Image source={hotels.image} style={styles.image}></Image>
                <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style={styles.nameBox}>
                    <Text style={styles.hotelName}>{hotels.name}</Text>
                    <TouchableOpacity onPress={() => {
                    (heartColor == '#DE0000') ? setHeartColor('#C4C4C4') : setHeartColor('#DE0000');}}>
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
        <SafeAreaView style={{flex:1, backgroundColor: '#E5E5E5'}}>  
        <View style={styles.searchingBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput style={styles.searchInputContainer} placeholder='Москва, 7 июля 2022, 1день'/>
                <Feather style={{position: 'absolute', marginLeft: 16}} name="search" size={24} color="#292D32" />
            </View>

            <CategoryList/>
        </View>

        <View style={styles.fav}>
            <Text style={{...styles.textFilter, color: '#000000'}}>Сортировать по</Text> 
            <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>     
            <TouchableOpacity style={styles.top}>
                <Text style={{...styles.textFilter, color: '#FFFFFF',}}>Рейтинг</Text>
                
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.costFilter}>
                <Text style={{...styles.textFilter, color: '#99A0A3'}}>Цена</Text>
            </TouchableOpacity>
            </View>
            
        </View>

        <View style={styles.infoBox}>
            
                <View style={{flex:1}}>
                    <Animated.FlatList 
                    onScroll={Animated.event([
                        {nativeEvent: {
                            contentOffset:{
                                y:scrollY}}}],
                        {useNativeDriver: true}
                        )}
                    vertical
                    data={hotels}
                    contentContainerStyle={{paddingVertical:30,}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index})=><Cards
                    hotels={item} index={index}/>}/>
                </View>
        </View>        
    </SafeAreaView>
    )
}

export default Offers;
