import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Introduce tus datos</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Correo electrónico" 
          placeholderTextColor="#64748b" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          placeholderTextColor="#64748b" 
          secureTextEntry 
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0b0f19',
  },
  card: {
    backgroundColor: '#161b22',
    padding: 28,
    borderRadius: 22,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    color: '#94a3b8',
  },
  input: {
    backgroundColor: '#21262d',
    color: '#ffffff',
    borderRadius: 12,
    marginBottom: 14,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});