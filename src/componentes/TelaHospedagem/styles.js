import { StyleSheet, Dimensions } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    image1: {
        width: '30%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop:10,
        marginLeft:10,
    },
    image2: {
        width: '30%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop:10,
        marginLeft:10,

    },
    image3: {
        width: '30%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop:10,
        marginLeft:10,
    },
    image4: {
        width: '30%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop:10,
        marginLeft:10,
    },
    image5: {
        width: '30%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop:10,
        marginLeft:10,
    },
    image6: {
        width: '30%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop:10,
        marginLeft:10,
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold', 
        color: 'white',
        width:'70%',
        marginLeft: 25,
    },
    button:{
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchButton:{
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width = 1260,
        borderRadius: 30,
        marginHorizontal:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 100,
    },
    searchButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    boxBotao:{
        marginBottom: 10,
      } 
});
export default styles;