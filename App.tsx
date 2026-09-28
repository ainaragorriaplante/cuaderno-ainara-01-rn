import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://picsum.photos/600/400' }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.category}>OFERTA</Text>
          <Text style={styles.title}>Auriculares Wireless</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>89,99 €</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#101d3f',
  },
  card: {
    backgroundColor: '#161b22',
    borderRadius: 20,
    overflow: 'hidden', 
  },
  image: {
    margin: 16,
    width: 'auto',
    height: 180,
    borderRadius: 12,
  },
  content: {
    padding: 20,
  },
  category: {
    color: '#f87171',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  rating: {
    marginTop: 10,
    color: '#fbbf24',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#21262d', 
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});