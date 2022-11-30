// Added Shims through global for module import fixes
import "./global";
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import * as XRPFunctions from './xrpRPC';



export default function App() {
  const [loading, setLoading] = useState(false);
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [address, setAddress] = useState();

  async function getWallet() {
    setLoading(true);
    await XRPFunctions.CreateWallet()
      .then((data) => {
        setAddress(data.wallet.classicAddress);
        setPublicKey(data.wallet.publicKey);
        setPrivateKey(data.wallet.privateKey);
        setLoading(false);
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>XRP Mobile Demo</Text>


      <View>
        {loading ?
          <ActivityIndicator />
          :
          <>
            <Text style={styles.Label}>Wallet Address: {address ? address : 'No Address'}</Text>
            <Text style={styles.Label}>Public Key: {address ? address : 'No Address'}</Text>
            <Text style={styles.Label}>Private Key: {publicKey ? publicKey : 'No Public Key'}</Text>
            <Text style={styles.Label}>Private Key: {privateKey ? privateKey : 'No Private Key'}</Text>
          </>
        }
      </View>
      <Button title="Press To create Wallet" onPress={() => getWallet()} />

      <StatusBar style="auto" />
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
  Title: {
    color: '#000',
    fontWeight: 'bold'
  },
  Label: {
    color: '#000',
    fontWeight: 'bold',
    padding: 10
  },
  DataField: {
    backgroundColor: 'grey',
  }
});
