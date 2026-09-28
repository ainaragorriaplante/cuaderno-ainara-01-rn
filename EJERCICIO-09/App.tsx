import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
      </View>

      <Text style={styles.sectionTitle}>Movimientos</Text>
      <Movement title="Nómina" amount="+2.340 €" isPositive={true} />
      <Movement title="Supermercado" amount="-42,80 €" isPositive={false} />
    </ScrollView>
  );
}

type MovementProps = {
  title: string;
  amount: string;
  isPositive: boolean;
};

function Movement({ title, amount, isPositive }: MovementProps) {
  return (
    <View style={styles.movement}>
      <Text style={styles.movementTitle}>{title}</Text>
      <Text style={[styles.amount, { color: isPositive ? '#4ade80' : '#ffffff' }]}>
        {amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122145',
    paddingHorizontal: 20,
  },
  hello: {
    marginTop: 60,
    color: '#94a3b8',
  },
  user: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    },
  balanceCard: {
    backgroundColor: '#06172e',
    padding: 24,
    borderRadius: 12,
  },
  balanceLabel: {
    color: '#94a3b8',
  },
  balance: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#ffffff',
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161b22', 
    padding: 18,
    borderRadius: 14,
    marginBottom: 10,
  },
  movementTitle: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});