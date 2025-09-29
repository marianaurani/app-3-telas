import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from "react-native";

export default function CartaoMercadoPago() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Conteúdo centralizado */}
      <View style={styles.content}>
        {/* Ícone */}
        <Image
          source={require("../assets/icone_cel-cartao.png")}
          style={styles.icone}
          resizeMode="contain"
        />

        {/* Título */}
        <Text style={styles.titulo}>
          Peça seu Cartão de Crédito Mercado Pago e aproveite essas vantagens exclusivas:🛒✨
        </Text>

        {/* Lista de benefícios */}
        <View style={styles.beneficios}>
          <Text style={styles.beneficioItem}>
            - Parcele suas compras em até <Text style={styles.destaque}>18x sem juros no Mercado Livre</Text>
          </Text>
          
          <Text style={styles.beneficioItem}>
            - Anuidade Grátis
          </Text>
          
          <Text style={styles.beneficioItem}>
            - <Text style={styles.destaque}>Segurança e controle:</Text> acompanhe seus gastos pelo App, garantindo controle de todas suas transações.
          </Text>
        </View>
      </View>

      {/* Botão fixo no rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Peça já</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  icone: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  titulo: {
    fontSize: 17,
    textAlign: "center",
    color: "#000",
    marginBottom: 24,
    lineHeight: 24,
    fontWeight: "500",
  },
  beneficios: {
    width: "100%",
    alignItems: "center",
  },
  beneficioItem: {
    fontSize: 15,
    color: "#000",
    marginBottom: 12,
    lineHeight: 22,
    textAlign: "center",
    width: "100%",
  },
  destaque: {
    fontWeight: "bold",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  botao: {
    backgroundColor: "#3483FA",
    paddingVertical: 16,
    borderRadius: 6,
    alignItems: "center",
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});