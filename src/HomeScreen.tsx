// components/Hello.tsx
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {State} from 'react-native-gesture-handler';
interface Props {
  text: String;
}
interface State {
  text: String;
}
class HomeScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      email: '',
      contact: '',
      age: '',
    };
  }
  render() {
    const {name,gender,email,contact,age}= this.state;
  
    return (
      <View style={styles.view}>
        <Text style={styles.largeText}>Form</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Name:</Text>
          <TextInput
            style={styles.textnput}
            onChangeText={(changedText) => {
              this.setState({ name: changedText })
          }}
            //   value={this.state.firstField}
            //   onChangeText={(value) => this.setState({ secondNumber: value })}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Gender:</Text>
          <TextInput
            style={styles.textnput}
            onChangeText={(changedText) => {
              this.setState({ gender: changedText })
          }}
            //   value={this.state.secondField}
            //   onChangeText={(value) => this.setState({ secondNumber: value })}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>E-Mail:</Text>
          <TextInput
            style={styles.textnput}
            onChangeText={(changedText) => {
              this.setState({ email: changedText })
          }}
            //   value={this.state.threeField}
            //   onChangeText={(value) => this.setState({ secondNumber: value })}
          />
        </View>
        <View style={styles.tView}>
          <Text style={styles.text}>Contact:</Text>
          <TextInput
            style={styles.textnput}
            onChangeText={(changedText) => {
              this.setState({ contact: changedText })
          }}
            //   value={this.state.fourthField}
            //   onChangeText={(value) => this.setState({ secondNumber: value })}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text}>Age:</Text>
          <TextInput
            style={styles.textnput}
            onChangeText={(changedText) => {
              this.setState({ age: changedText })
          }}
            //   value={this.state.fifthField}
            //   onChangeText={(value) => this.setState({ secondNumber: value })}
          />
        </View>
        <View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate('Details', {
                text1: name,
                text2: gender,
                text3: email,
                text4: contact,
                text5: age,
              });
            }}>
            <Text>View Details</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
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

// style

export default HomeScreen;
