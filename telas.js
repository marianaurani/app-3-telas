import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

// Componente da Tela do Cartão Mercado Pago
const CartaoMercadoPago = () => {
  return (
    <View style={styles.container}>
      {/* Fechar (X) */}
      <View style={styles.closeButton}>
        <Text style={styles.closeText}>X</Text>
      </View>

      {/* Ícone do Celular + Cartão */}
      <View style={styles.imagePlaceholder}>
        <Text>[Imagem Celular + Cartão]</Text>
      </View>

      {/* Texto principal */}
      <Text style={styles.title}>
        Peça seu Cartão de Crédito Mercado Pago e aproveite essas vantagens
        exclusivas:
      </Text>

      {/* Benefícios */}
      <View style={styles.benefits}>
        <Text style={styles.benefitText}>
          - Parcele suas compras em até 18x sem juros no Mercado Livre
        </Text>
        <Text style={styles.benefitText}>- Anuidade Grátis</Text>
        <Text style={styles.benefitText}>
          - <Text style={{ fontWeight: "bold" }}>Segurança e controle:</Text>{" "}
          acompanhe seus gastos pelo App, garantindo controle de todas suas
          transações.
        </Text>
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Peça já</Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente da Tela de Perfil iFood
const PerfilIfood = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text>[Avatar]</Text>
        </View>
        <View>
          <Text style={styles.profileName}>Diego Rodrigues</Text>
          <Text style={styles.linkText}>+ Adicionar telefone de acesso</Text>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text>[Ícone Entrega]</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Entrega mais segura!</Text>
          <Text style={styles.bannerSubtitle}>
            Agora dá pra alterar o código de entrega. Vem ver!
          </Text>
        </View>
        <Text style={styles.newTag}>NOVO</Text>
      </View>

      {/* Lista de opções */}
      {[
        {
          title: "Conversas",
          subtitle: "Meu histórico de conversas",
          badge: "2",
        },
        {
          title: "Notificações",
          subtitle: "Minha central de notificações",
          badge: "3",
        },
        {
          title: "Dados da conta",
          subtitle: "Minhas informações da conta",
          badge: "!",
        },
        {
          title: "Pagamentos",
          subtitle: "Meus saldos e cartões",
          badge: "NOVO",
        },
        {
          title: "Clube iFood",
          subtitle: "Meus benefícios exclusivos",
          badge: "NOVO",
        },
        { title: "Cupons", subtitle: "Meus cupons de desconto" },
        { title: "Comunidade iFood", subtitle: "Junte-se a nós" },
      ].map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text>[Ícone]</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
          </View>
          {item.badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.badge}</Text>
            </View>
          )}
        </View>
      ))}

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Código de entrega</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imagePlaceholder: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  benefits: {
    marginBottom: 24,
  },
  benefitText: {
    fontSize: 14,
    marginBottom: 8,
    color: "#333",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#eee",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "red",
    fontSize: 14,
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  bannerTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: "#555",
  },
  newTag: {
    color: "red",
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemSubtitle: {
    fontSize: 13,
    color: "#555",
  },
  badge: {
    backgroundColor: "red",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#555",
    fontSize: 14,
  },
});

export { CartaoMercadoPago, PerfilIfood };
