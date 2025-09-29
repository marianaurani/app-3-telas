import React, { useState } from 'react';
<<<<<<< HEAD
import { View, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
=======
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
>>>>>>> 863379942a5a6ecd27f09714458dcfade186ba01
import PerfilIfood from './components/perfilIfood';
import CartaoMercadoPago from './components/cartaoMercadoPago';
import BolosDoFlavioScreen from './components/BolosDoFlavioScreen';

export default function App() {
<<<<<<< HEAD
  const [currentScreen, setCurrentScreen] = useState('home');
=======
  const [currentScreen, setCurrentScreen] = useState('perfil');
>>>>>>> 863379942a5a6ecd27f09714458dcfade186ba01

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
<<<<<<< HEAD
    <View style={[styles.container, { paddingTop: getPaddingTop() }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {(currentScreen === 'perfil' || currentScreen === 'cartao') && (
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => setCurrentScreen('home')}
=======
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      
      {/* Navegação simples */}
      <View style={styles.navigation}>
        <TouchableOpacity
          style={[
            styles.navButton,
            currentScreen === 'perfil' && styles.activeNavButton,
          ]}
          onPress={() => setCurrentScreen('perfil')}
>>>>>>> 863379942a5a6ecd27f09714458dcfade186ba01
        >
          <Ionicons name="arrow-back" size={22} color="#666" />
        </TouchableOpacity>
      )}

      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
<<<<<<< HEAD
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 44 : (StatusBar.currentHeight || 0) + 5,  // Reduzido de +10 para +5
    left: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    justifyContent: 'center',
=======
  navigation: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginHorizontal: 2,
    borderRadius: 6,
    backgroundColor: '#fff',
>>>>>>> 863379942a5a6ecd27f09714458dcfade186ba01
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
