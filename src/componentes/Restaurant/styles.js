import { StyleSheet, Dimensions } from "react-native-web";

const styles = StyleSheet.create({
    
    header: {
        margin:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap:'wrap' 
      },

    container: {
        margin:20,
      },

    image: {
        width:'25%',
        aspectRatio: 3/2,
        resizeMode: 'cover', 
        borderRadius: 10,
    },
  
    place:{
        marginVertical: 10, 
        color: '#5b5b5b',

    },
    description:{
        fontSize: 18,
        lineHeight: 26,
    },
    prices:{
        fontSize:18,
        marginVertical: 10,
    },
    oldPrice:{
        color:'#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price:{
        fontWeight: 'bold',
    },
    totalPrice:{
       color:'#5b5b5b',
       textDecorationLine: 'underline',
    },

    /* button:{
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }, */
    /* buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
    }, */
    /* searchButton:{
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
    }, */
    /* searchButtonText:{
        fontSize: 16,
        fontWeight: 'bold',
    }, */
    boxBotao:{
        marginBottom: 10,
        justifyContent:'center',
      } 
});
export default styles;