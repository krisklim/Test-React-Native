import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: '100%', 
        height: 237, 
        justifyContent: 'center',
        borderRadius: 16,
    },
    headerContainer: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'flex-end',
        top: 0,
        height: 237,
        padding: 16,
        backgroundColor: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    topNav: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 98,
    },
    name:{
        position: 'relative',
        fontFamily: 'Gotham',
        fontWeight: '400',
        marginBottom: 12,
        fontSize: 24,
        lineHeight: 22,
        letterSpacing: -0.408, 
        color: '#FFFFFF',        
    },
    ratingBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        marginRight: 264,
    },
    aboutRoom: {
        display: 'flex',
        width: 70,
        width: '100%',
        padding: 16,
        flexDirection: 'row',
    },
    roomImg:{
        height:76,
        width: 70,
        borderRadius: 16,
        marginRight: 9,
    },
    roomTxt: {
        width: '100%',
        fontFamily: 'Gotham',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#000000',
    },
    profile: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 6,
    },
    peoples: {
        fontFamily: 'Gotham',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#000000',
        marginLeft: 9,     
    },
    text:{
        fontFamily: 'Gotham',
        position: 'relative',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#000000',
        marginLeft:16,
    },
    card: {
        width: 139,
        height: 200,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 4,
        shadowOffset: { width: 0, height: 30 },
        borderRadius: 10,
        marginRight: 16,
        backgroundColor: '#FFFFFF'
    },
    img: {
        width: '100%', height: '100%', borderRadius: 10
    },
    cardOverlay:{
        position: 'absolute',
        zIndex: 100,
        width: 139,
        height: 200,
        borderRadius: 10,   
        backgroundColor: '#FFFFFF'            
    },
    includes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        position: 'relative',
        width: 86,
        marginTop: 8,
        marginLeft: 16,
        height: 23,
        borderRadius: 4,
        backgroundColor: 'rgba(106, 175, 117, 0.2)',
    },
    inclTxt: {
        display: 'flex',
        position: 'absolute',
        fontFamily: 'Gotham',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#6AAF75',
    },
    bookContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        position: 'relative',
        width: '85%',
        marginLeft: "7.5%",
        marginTop: 23,
        height: 80,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        position: 'absolute',
        width: 163,
        height: 45,
        left: 164,
        top: 17.5,
        backgroundColor: '#5AC8FA',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOpacity: 2,
        borderRadius: 10,
    }, 
    txtBtn: {
        fontFamily: 'Gotham',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: '#FFFFFF',
    },
    price: {     
        fontFamily: 'Gotham',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#878787',
    },
    cost:{
        fontFamily: 'Gotham',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 22,
        textAlign: 'left',
        letterSpacing: -0.408,
        color: '#424242'
    }
})