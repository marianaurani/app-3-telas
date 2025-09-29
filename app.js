import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import PerfilIfood from './components/perfilIfood';
import CartaoMercadoPago from './components/cartaoMercadoPago';
import BolosDoFlavioScreen from './components/BolosDoFlavioScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'perfil':
        return <PerfilIfood />;
      case 'cartao':
        return <CartaoMercadoPago />;
      case 'bolos':
        return <BolosDoFlavioScreen onBack={() => setCurrentScreen('home')} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  const getPaddingTop = () => {
    if (currentScreen === 'bolos') return 0;
    return Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 44;
  };

  return (
    <View style={[styles.container, { paddingTop: getPaddingTop() }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {(currentScreen === 'perfil' || currentScreen === 'cartao') && (
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setCurrentScreen('home')}
        >
          <Ionicons name="arrow-back" size={22} color="#666" />
        </TouchableOpacity>
      )}

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
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 44 : (StatusBar.currentHeight || 0) + 5,
    left: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1001,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  screenContainer: {
    flex: 1,
  },
});