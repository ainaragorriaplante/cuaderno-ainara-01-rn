import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', icon: '⌨️', name: 'Teclado', price: '59 €' },
  { id: '2', icon: '🖱️', name: 'Ratón', price: '39 €' },
  { id: '3', icon: '🖥️', name: 'Monitor', price: '199 €' },
  { id: '4', icon: '🎧', name: 'Auriculares', price: '79 €' },
  { id: '5', icon: '💻', name: 'Portátil', price: '899 €' },
  { id: '6', icon: '📱', name: 'Móvil', price: '599 €' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#19274b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  row: {
    gap: 10,
    marginBottom: 8,
  },
  card: {
    width: '48%',
    backgroundColor: '#161b22',
    padding: 10,
    borderRadius: 12,
  },
  icon: {
    fontSize: 24,
  },
  name: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  price: {
    marginTop: 2,
    color: '#60a5fa',
    fontWeight: 'bold',
    fontSize: 13,
  },
});