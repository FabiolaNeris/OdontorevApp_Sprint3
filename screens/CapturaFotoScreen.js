import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CapturaFotoScreen = ({ navigation }) => {
  const [photoUri, setPhotoUri] = useState(null); 

  // Função para tirar a foto
  const takePhoto = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      setPhotoUri(data.uri);
    }
  };

  let camera;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Captura de Foto do Sorriso</Text>

      {}
      {!photoUri ? (
        <RNCamera
          ref={(ref) => { camera = ref; }}
          style={styles.camera}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.auto}
        >
          <View style={styles.captureContainer}>
            <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
              <Text style={styles.captureButtonText}>Tirar Foto</Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
      ) : (
        // Exibição da foto tirada
        <View style={styles.imageContainer}>
          <Image source={{ uri: photoUri }} style={styles.imagePreview} />
          <Button
            title="Ver Resultados"
            onPress={() => navigation.navigate('ResultadosScreen', { photoUri })}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  captureContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  captureButton: {
    backgroundColor: '#f08a5d',
    padding: 15,
    borderRadius: 50,
  },
  captureButtonText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default CapturaFotoScreen;
