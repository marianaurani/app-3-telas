import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabalho Mobile</Text>
      <Text style={styles.subtitle}>Escolha uma tela para visualizar</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => onNavigate('cartao')}
      >
        <MaterialIcons name="credit-card" size={40} color="#007AFF" />
        <Text style={styles.cardTitle}>Cartão Mercado Pago</Text>
        <Text style={styles.cardSubtitle}>Modal de apresentação do cartão</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => onNavigate('perfil')}
      >
        <Ionicons name="person-circle-outline" size={40} color="#EA1D2C" />
        <Text style={styles.cardTitle}>Perfil iFood</Text>
        <Text style={styles.cardSubtitle}>Tela de perfil do usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => onNavigate('bolos')}
        >
        <MaterialIcons name="cake" size={40} color="#8B4513" />
        <Text style={styles.cardTitle}>Bolos do Flávio</Text>
        <Text style={styles.cardSubtitle}>Loja de bolos - Águas Claras</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
});