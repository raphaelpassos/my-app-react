import {StyleSheet } from 'react-native'

const estilo = StyleSheet.create({
boxDados: {
    marginHorizontal: 30,
    marginVertical: 20,

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
},
boxCard: {
    flex: 1,
    backgroundColor: '#ffdb58',
    alignItems: 'center',
    justifyContent: 'center',

},
img:{
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    width: 350,
    height: 350,
    borderRadius: 75,
    borderColor: '#000',
    borderWidth: 2
  },
  botao:{
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#923',
    borderRadius: 20,
  }
})

export default estilo;