import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from "react-native";

// Componente ScreenWrapper embutido
const ScreenWrapper = ({ children, backgroundColor = '#fff' }) => {
  return (
    <View style={[styles.wrapper, { backgroundColor }]}>
      {children}
    </View>
  );
};

export default function CartaoMercadoPago() {
  return (
    <ScreenWrapper backgroundColor="#fff">
      <View style={styles.cartaoContainer}>
        {/* Conteúdo principal */}
        <View style={styles.content}>
          {/* Imagem */}
          <Image
            source={require("../assets/icone_cel-cartao.png")}
            style={styles.cartaoImagem}
            resizeMode="contain"
          />

          {/* Texto */}
          <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
            <Text style={styles.cartaoTexto}>
              Peça seu Cartão de Crédito Mercado Pago e aproveite essas vantagens
              exclusivas:🛒✨
            </Text>
            <Text style={styles.cartaoItem}>
              - Parcele suas compras em até{" "}
              <Text style={{ fontWeight: "bold" }}>
                18x sem juros no Mercado Livre
              </Text>
            </Text>
            <Text style={styles.cartaoItem}>- Anuidade Grátis</Text>
            <Text style={styles.cartaoItem}>
              - <Text style={{ fontWeight: "bold" }}>Segurança e controle:</Text>{" "}
              acompanhe seus gastos pelo App, garantindo controle de todas suas
              transações.
            </Text>
          </View>
        </View>

        {/* Botão fixo no rodapé */}
        <TouchableOpacity style={styles.botaoCartao}>
          <Text style={styles.botaoCartaoTexto}>Peça já</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0,
  },
  cartaoContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cartaoImagem: {
    width: 160,
    height: 160,
    marginBottom: 16,
  },
  cartaoTexto: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  cartaoItem: {
    fontSize: 14,
    marginVertical: 4,
    textAlign: "center",
  },
  botaoCartao: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 30,
  },
  botaoCartaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});