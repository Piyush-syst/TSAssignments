import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
const Props = {
  text1: String,
  text2: String,
  text3: String,
  text4: String,
  text5: String,
};

function DisplayScreen(props: Props) {
  
  return (
    <View style={styles.view}>
      <Text style={styles.largeText}>Details</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Name:</Text>
  <Text>{props.route.params.text1}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>DOB:</Text>
  <Text>{props.route.params.text2}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>E-Mail:</Text>
        <Text>{props.route.params.text3}</Text>
      </View>
      <View style={styles.tView}>
        <Text style={styles.text}>Contact:</Text>
        <Text>{props.route.params.text4}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.text}>Age:</Text>
        <Text>{props.route.params.text5}</Text>
      </View>
    
    </View>
  );
}
// style

export default DisplayScreen;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 20,
    paddingTop: 15,
    justifyContent: 'space-evenly',
  },
  text: {
    alignItems: 'center',
    fontSize: 16,
    flex: 0.22,
  },
  largeText: {
    alignSelf: 'center',
    fontSize: 42,
    fontWeight: 'bold',
    margin: 30,
  },
  btn: {
    padding: 15,
    backgroundColor: 'powderblue',
    borderRadius: 20,
    marginTop: 15,
    alignItems: 'center',
  },
  textnput: {
    padding: 10,
    width: '50%',
    height: 35,
    borderBottomColor: 'skyblue',
    borderBottomWidth: 1,
    borderRadius: 10,
    flex: 1,
  },
  tView: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
});
