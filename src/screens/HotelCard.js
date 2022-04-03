import React, {useState} from 'react';
import { ImageBackground, SafeAreaView, Text, 
    TouchableOpacity, View, Image, Animated, FlatList, ScrollView } from 'react-native';
import { styles } from '../styles/cardStyles';
import { AntDesign } from '@expo/vector-icons';
import hotels from '../components/hotels'
import { Ionicons } from '@expo/vector-icons';

const HotelCard = ({navigation}) => {
    const image = require('../images/mainPic.jpg');
    const profile = require('../images/profile-2user.png');
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const nameHotel = 'Name hotel';


    const [heartColor, setHeartColor] = useState('#DE0000');

    const Includes = ({hotels, index}) => {
        return (
        <View style={styles.includes}>
            <Text style={styles.inclTxt}>{hotels.incl}</Text>
        </View>          
    )
    }

    const Cards = ({hotels, index}) => {  
        const inputRange = [
            (index - 2) * 139,
            index * 139,
            (index + 2) * 139,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 0, 0.5],
          });   
        return ( 
            <View style={{...styles.card}}>
                <Image source={hotels.roomimg} style={styles.img}/>
                <Animated.View style={{...styles.cardOverlay, opacity}}/>
            </View>       
            
        )
    }

    return (
        <SafeAreaView style={{height: '100%', flexDirection: 'column'}}>
        <ImageBackground source={image} resizeMode = 'cover' 
        style={styles.image}>  
        <View style={styles.headerContainer}>
            <View style={styles.topNav}> 
                <TouchableOpacity onPress={
                    ()=> navigation.goBack()}>
                <Ionicons name="chevron-back" size={26} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    (heartColor == '#DE0000') ? setHeartColor('#FFFFFF') : setHeartColor('#DE0000');                    
                }}>
                <AntDesign name="heart" size={24} color={heartColor} />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
                <Text style={styles.name}>{nameHotel}</Text>
                <View style={styles.ratingBox}>                  
                    <AntDesign name="star" size={17} color="#F3DB00"/>
                    <AntDesign name="star" size={17} color="#F3DB00"/>
                    <AntDesign name="star" size={17} color="#F3DB00"/>
                    <AntDesign name="star" size={17} color="#F3DB00"/>
                    <AntDesign name="star" size={17} color="#FFFFFF"/>
                </View>
            </View> 
        </View>
        </ImageBackground>

        <View style={styles.aboutRoom}>
            <Image source={image} style={styles.roomImg}></Image>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.roomTxt}>Улучшенный номер с кроватью {'\n'} размера "king-size"</Text>
                <View style={styles.profile}>
                <Image source={profile} style={{width: 24, height: 24}}/>
                <Text style={styles.peoples}>2</Text>
                </View>    
            </View>
        </View> 
        <View style={{flexDirection: 'column'}}>
        <Text style={styles.text}>Фото номера</Text>  
        <ScrollView>
                <Animated.FlatList 
                    onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true},
                    )}
                horizontal
                data={hotels}
                contentContainerStyle={{paddingVertical: 8, paddingLeft:16}}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index}) => <Cards hotels={item} index={index}/>}/>
        </ScrollView> 

        <Text style={[styles.text, { position:'relative'}]}>Что включено</Text>
        <ScrollView >
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data = {hotels}
            renderItem={({item,index}) => <Includes hotels={item} index={index}/>}>
            </FlatList>
        </ScrollView>        
        </View>
        <View style={styles.bookContainer}>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.price}>Цена за 1 ночь</Text>
                <Text style={styles.cost}>{hotels.price} ₽</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.txtBtn}>Забронировать</Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
    )
}

export default HotelCard;
