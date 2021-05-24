import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import {TouchableHighlight, TouchableOpacity} from 'react-native-web';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [countries, setCountries] = useState([
    {
      id: 1,
      name: 'Ecuador',
    },
    {
      id: 2,
      name: 'Columbia',
    },
    {
      id: 3,
      name: 'Netherlands',
    }
  ])
  const [currentCountry, setCurrentCountry] = useState('')

  const toggleVisible = () => {
    setVisible(!visible);
  }

  const setCountry = (countryObj) => {
    setCurrentCountry(countryObj);
  }

  console.log(currentCountry);

  return (
    <View style={styles.container}>
      <View>
        <Text>Some Text</Text>
        <TouchableOpacity onPress={()=>toggleVisible}>Press btn</TouchableOpacity>
      </View>
      <View>
        <Modal visible={visible}>
          <View>
            <Text>Please pick the country</Text>
            {
              countries.map(el => {
                return <TouchableHighlight key={el.id} onPress={()=>setCountry(el)}>
                  <Text>{el.name}</Text>
                </TouchableHighlight>
              })
            }
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
