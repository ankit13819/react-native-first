import {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
function App() {
  //use jsonplaceholder Api users
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  return (
    <ScrollView>
      {data.map(item => {
        return (
          <View>
            <Text style={{color: 'red', fontSize: 20}}>name:{item.name}</Text>
            <Text style={{color: 'pink'}}>email:{item.email}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

export default App;
