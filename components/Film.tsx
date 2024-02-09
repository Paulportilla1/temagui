import { StyleSheet, Image } from "react-native";
import { Button, Input, XStack, YStack, Text, H1 } from 'tamagui';
import { router } from 'expo-router';
import { SkipBack } from "@tamagui/lucide-icons";

export function FilmDemo() {
  return (
    <YStack style={styles.container}>
      <XStack justifyContent="space-between" alignItems="center" style={styles.headerContainer}>
        <H1 style={styles.dashText}>FILMS</H1>
        <Button onPress={() => router.push("/tabs/tab1")} style={styles.skipBackButton} icon={SkipBack}></Button>
      </XStack>
      <Image source={require('../assets/photo1.jpg')} style={styles.imageStyle} />
      <XStack justifyContent="center" alignItems="center">
        <H1 style={styles.text}>Title</H1>
      </XStack>
      <XStack justifyContent="center" alignItems="center">
        <Input style={styles.input} />
      </XStack>

      <XStack justifyContent="space-evenly" >
        <H1 style={styles.text}>Time</H1>
        <H1 style={styles.text}>Director</H1>
      </XStack>
      <XStack justifyContent="space-evenly">
        <Input style={styles.smallInput} />
        <Input style={styles.smallInput} />
      </XStack>

      <Button
        onPress={() => router.push("/tabs/tab1")}
        style={styles.buttonStyle}
      > Create Character </Button>
    </YStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 29,
    fontWeight: '900',
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: '#FF9700',
    borderWidth: 1.5,
    borderColor: '#FEFEFE',
    borderRadius: 20,
    padding: 10,
    marginTop: 25,
  },
  dashText: {
    fontWeight: 'bold',
    color: '#00FFBD',
    marginTop: 40,
  },
  imageStyle: {
    width: 550,
    height: 350,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  headerContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  skipBackButton: {
    backgroundColor: '#FF9700',
    borderColor: '#FEFEFE',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 24,
    marginTop: 40,
  },
  input: {
    width: '90%',
    marginTop: 8,
    backgroundColor: '#black', 
  },
  smallInput: {
    width: '40%',
    marginTop: 9,
    backgroundColor: '#black', // Fondo blanco para la barra de entrada
  },
});