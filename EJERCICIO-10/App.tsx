import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Laura 👋</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>8.200</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Resumen</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="610" label="Calorías" />
        <StatCard icon="⏱" value="55 min" label="Actividad" />
        <StatCard icon="❤️" value="69" label="Pulsaciones" />
        <StatCard icon="📍" value="6,3 km" label="Distancia" />
      </View>
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122044',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  greeting: {
    color: '#94a3b8',
    fontSize: 15,
  },
  user: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffffff',
  },
  goalCard: {
    backgroundColor: '#161b22',
    padding: 18,
    borderRadius: 18,
  },
  goalLabel: {
    color: '#94a3b8',
    fontWeight: 'bold',
    fontSize: 12,
  },
  steps: {
    marginTop: 8,
    color: 'white',
    fontSize: 36,
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#21262d',
    borderRadius: 4,
    marginTop: 16,
    overflow: 'hidden',
  },
  progress: {
    width: '82%',
    height: '100%',
    backgroundColor: '#22c55e',
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#161b22',
    borderRadius: 14,
    padding: 14,
  },
  statIcon: {
    fontSize: 24,
  },
  statValue: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statLabel: {
    marginTop: 2,
    color: '#94a3b8',
    fontSize: 13,
  },
});