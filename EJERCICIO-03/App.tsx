import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Laura Martínez</Text>
        <Text style={styles.job}>Diseñadora UX/UI</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>24</Text>
            <Text style={styles.label}>Proyectos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>1280</Text>
            <Text style={styles.label}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>86</Text>
            <Text style={styles.label}>Contactos</Text>
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
    backgroundColor: '#19283c',
  },
  card: {
    backgroundColor: '#262626',
    padding: 28,
    borderRadius: 22,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    marginTop: 18,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#e2e8f0',
  },
  job: {
    marginTop: 4,
    color: '#64748b',
  },
  stats: {
    color: '#eff2f6',
    flexDirection: 'row',
    gap: 28,
    marginTop: 24,
  },
  stat: {
    color: '#f4f4f4',
    alignItems: 'center',
  },
  number: {
    color: '#f4f4f4',
    fontSize: 21,
    fontWeight: 'bold',
  },
  label:{
    fontSize: 14,
    color: '#ffffff',
  }
});