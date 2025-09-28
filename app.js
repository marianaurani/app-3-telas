import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PerfilIfood from './components/perfilIfood';
import CartaoMercadoPago from './components/cartaoMercadoPago';
import BolosDoFlavioScreen from './components/BolosDoFlavioScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('perfil'); // 'perfil', 'cartao', 'bolos'

  const renderScreen = () => {
    switch (currentScreen) {
      case 'perfil':
        return <PerfilIfood />;
      case 'cartao':
        return <CartaoMercadoPago />;
      case 'bolos':
        return <BolosDoFlavioScreen />;
      default:
        return <PerfilIfood />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Navegação simples */}
      <View style={styles.navigation}>
        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'perfil' && styles.activeNavButton,
          ]}
          onPress={() => setCurrentScreen('perfil')}
        >
          <Text
            style={[
              styles.navText,
              currentScreen === 'perfil' && styles.activeNavText,
            ]}
          >
            Perfil iFood
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'cartao' && styles.activeNavButton,
          ]}
          onPress={() => setCurrentScreen('cartao')}
        >
          <Text
            style={[
              styles.navText,
              currentScreen === 'cartao' && styles.activeNavText,
            ]}
          >
            Cartão MP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'bolos' && styles.activeNavButton,
          ]}
          onPress={() => setCurrentScreen('bolos')}
        >
          <Text
            style={[
              styles.navText,
              currentScreen === 'bolos' && styles.activeNavText,
            ]}
          >
            Bolos do Flávio
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tela atual */}
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigation: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: 40, // Espaço para a status bar
  },
  navButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginHorizontal: 2,
    borderRadius: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  activeNavButton: {
    backgroundColor: '#007AFF',
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
  activeNavText: {
    color: '#fff',
  },
  screenContainer: {
    flex: 1,
  },
});