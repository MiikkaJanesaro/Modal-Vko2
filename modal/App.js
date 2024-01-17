import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        style={styles.modalContainer}
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() =>{
          setModalVisible(!modalVisible)
        }}>
          <View style={styles.container}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>This is modal...</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyleClose}>Close</Text>
              </Pressable>
            </View>
          </View>
      </Modal>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show modal message</Text>
      </Pressable>
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
  modalView: {
    backgroundColor: 'white',
    paddingVertical: 50,
    paddingHorizontal: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    modalContainer: {
      paddingTop: 30,
    },
    button: {
      paddingTop: 30,
    },
    textStyleClose: {
      fontWeight: 'bold',
    },
});

export default App;