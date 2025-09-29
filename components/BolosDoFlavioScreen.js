import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BolosDoFlavioScreen = ({ onBack }) => {
  const products = [
    {
      id: '1',
      name: 'Bolo de Cenoura com Cobertura',
      price: 'R$ 53,00',
      image: require('../assets/bolo-cenoura.jpg'),
    },
    {
      id: '2',
      name: 'Metade Cenoura com Cobertura',
      price: 'R$ 36,00',
      image: require('../assets/bolo-cenoura2.jpg'),
    },
    {
      id: '3',
      name: 'Bolo de Chocolate',
      price: 'R$ 34,00',
      image: require('../assets/bolo-chocolate.jpg'),
    },
    {
      id: '4',
      name: 'Bolo Mesclado',
      price: 'R$ 53,00',
      image: require('../assets/bolo-mesclado.jpg'),
    },
    {
      id: '5',
      name: 'Bolo de Milho',
      price: 'R$ 38,00',
      image: require('../assets/bolo-milho.jpg'),
    },
    {
      id: '6',
      name: 'Bolo Formigueiro',
      price: 'R$ 44,00',
      image: require('../assets/bolo-formigueiro.jpg'),
    },
  ];

  const ProductCard = ({ name, price, image }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8B4513" barStyle="light-content" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header com ícones */}
        <View style={styles.headerSection}>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton} onPress={onBack}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            
            <View style={styles.rightIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="search" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Logo Placeholder */}
          <ImageBackground 
            source={require('../assets/logo.jpg')}
            style={styles.logoPlaceholder}
            imageStyle={styles.logoImageStyle}
          >
            <View style={styles.logoOverlay} />
          </ImageBackground>
        </View>

        {/* Store Info Card */}
        <View style={styles.storeInfoCard}>
          {/* Círculo com logo */}
          <View style={styles.logoCircleOverCard}>
            <Image 
              source={require('../assets/logo.jpg')} 
              style={styles.logoImage}
            />
          </View>
          
          {/* Nome da loja */}
          <View style={styles.storeInfoRow}>
            <Text style={styles.storeName}>Bolos do Flávio - Águas Claras</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
          
          {/* Detalhes da entrega */}
          <View style={styles.storeDetailsRow}>
            <Text style={styles.storeDetails}>Entrega rastreável • 1,0 km • Min R$ 20,00</Text>
          </View>
          
          <View style={styles.divider} />
          
          {/* Avaliação */}
          <View style={styles.storeInfoRow}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#000" />
              <Text style={styles.ratingText}>4,9</Text>
              <Text style={styles.ratingCount}>(1,1 mil avaliações) • Nível 4 de 5</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
          
          <View style={styles.divider} />
          
          {/* Entrega */}
          <View style={styles.storeInfoRow}>
            <View style={styles.deliveryContainer}>
              <Text style={styles.deliveryLabel}>Entrega</Text>
              <Ionicons name="chevron-forward" size={14} color="#666" style={styles.smallArrow} />
              <Text style={styles.deliveryTime}>Hoje, 35-45 min • </Text>
              <Text style={styles.freeText}>Grátis</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </View>
        </View>

        {/* Destaques */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Destaques</Text>
          
          <View style={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </View>
        </View>

        {/* Footer promocional */}
        <View style={styles.promoFooter}>
          <View style={styles.promoContainer}>
            <View style={styles.promoLeft}>
              <Ionicons name="diamond" size={16} color="#8B5CF6" />
              <Text style={styles.promoAmount}>R$ 50 em cupons</Text>
              <Text style={styles.promoHere}>aqui!</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#666" />
          </View>
        </View>
        
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerSection: {
    position: 'relative',
  },
  headerIcons: {
    position: 'absolute',
    top: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 50,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  iconButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 18,
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  logoPlaceholder: {
    height: 200,
  },
  logoImageStyle: {
    opacity: 0.3,
  },
  logoOverlay: {
    backgroundColor: 'rgba(139, 69, 19, 0.7)',
    width: '100%',
    height: '100%',
  },
  storeInfoCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: -60,
    marginBottom: 8,
    borderRadius: 12,
    padding: 16,
    paddingTop: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 5,
  },
  logoCircleOverCard: {
    position: 'absolute',
    top: -25,
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  storeInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  storeDetailsRow: {
    paddingVertical: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  storeDetails: {
    fontSize: 13,
    color: '#666',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#333',
  },
  ratingCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  deliveryLabel: {
    fontSize: 14,
    color: '#333',
    marginRight: 4,
  },
  smallArrow: {
    marginRight: 8,
  },
  deliveryTime: {
    fontSize: 14,
    color: '#333',
  },
  freeText: {
    fontSize: 14,
    color: '#00A651',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '31%',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 8,
  },
  productName: {
    fontSize: 12,
    color: '#333',
    marginBottom: 4,
    lineHeight: 16,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  promoFooter: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  promoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  promoAmount: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '500',
    marginLeft: 6,
  },
  promoHere: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginLeft: 2,
  },
  bottomSpacing: {
    height: 32,
  },
});

export default BolosDoFlavioScreen;