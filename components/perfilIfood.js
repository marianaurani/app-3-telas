import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

export default function PerfilIfood() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView 
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarPlaceholder} />
          <View>
            <Text style={styles.profileName}>Diego Rodrigues</Text>
            <Text style={styles.linkText}>+ Adicionar telefone de acesso</Text>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <MaterialIcons
            name="security"
            size={24}
            color="red"
            style={{ marginRight: 10 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>Entrega mais segura!</Text>
            <Text style={styles.bannerSubtitle}>
              Agora dá pra alterar o código de entrega. Vem ver!
            </Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>NOVO</Text>
          </View>
        </View>

        {/* Lista de opções */}
        {[
          {
            title: "Conversas",
            subtitle: "Meu histórico de conversas",
            badge: "2",
            icon: (
              <Ionicons
                name="chatbubble-outline"
                size={22}
                color="#333"
                style={styles.icon}
              />
            ),
          },
          {
            title: "Notificações",
            subtitle: "Minha central de notificações",
            badge: "3",
            icon: (
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#333"
                style={styles.icon}
              />
            ),
          },
          {
            title: "Dados da conta",
            subtitle: "Minhas informações da conta",
            badge: "!",
            badgeColor: "#f4c542",
            icon: (
              <MaterialIcons
                name="person-outline"
                size={22}
                color="#333"
                style={styles.icon}
              />
            ),
          },
          {
            title: "Pagamentos",
            subtitle: "Meus saldos e cartões",
            badge: "NOVO",
            icon: (
              <MaterialIcons
                name="credit-card"
                size={22}
                color="#333"
                style={styles.icon}
              />
            ),
          },
          {
            title: "Clube iFood",
            subtitle: "Meus benefícios exclusivos",
            icon: (
              <FontAwesome5
                name="gift"
                size={20}
                color="#333"
                style={styles.icon}
              />
            ),
          },
          {
            title: "Cupons",
            subtitle: "Meus cupons de desconto",
            icon: (
              <MaterialIcons
                name="local-offer"
                size={22}
                color="#333"
                style={styles.icon}
              />
            ),
          },
          {
            title: "Comunidade iFood",
            subtitle: "Junte-se a nós",
            icon: (
              <Ionicons
                name="people-outline"
                size={22}
                color="#333"
                style={styles.icon}
              />
            ),
          },
          {
            title: "Código de entrega",
            subtitle: "",
            badge: "NOVO",
            icon: (
              <MaterialIcons
                name="qr-code-2"
                size={22}
                color="#333"
                style={styles.icon}
              />
            ),
          },
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            {item.icon}
            <View style={{ flex: 1 }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.subtitle ? (
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
              ) : null}
            </View>
            {item.badge && (
              <View
                style={[
                  styles.badge,
                  item.badgeColor ? { backgroundColor: item.badgeColor } : null,
                ]}
              >
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
            <MaterialIcons name="chevron-right" size={22} color="#aaa" />
          </View>
        ))}

        {/* Botão Ir para Cartão - pequeno no canto direito */}
        <View style={{ alignItems: 'flex-end', marginTop: 30, marginBottom: 20 }}>
          <TouchableOpacity style={styles.cartaoButton}>
            <Text style={styles.cartaoButtonText}>Ir para Cartão</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Barra inferior */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={24} color="#555" />
          <Text style={styles.tabLabel}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Feather name="search" size={24} color="#555" />
          <Text style={styles.tabLabel}>Busca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <MaterialIcons name="receipt-long" size={24} color="#555" />
          <Text style={styles.tabLabel}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-circle-outline" size={24} color="red" />
          <Text style={styles.tabLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  profileHeader: {
    // marginTop: 60, 
    //ativar marginTop - p/ espaço seta de navegação - caso não queira que a seta fique em cima do perfil
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#eeeeee",
    marginRight: 12,
  },
  profileName: { fontSize: 18, fontWeight: "bold" },
  linkText: { color: "red", fontSize: 14 },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  bannerTitle: { fontWeight: "bold", fontSize: 15 },
  bannerSubtitle: { fontSize: 13, color: "#555" },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  icon: { marginRight: 12 },
  itemTitle: { fontSize: 16, fontWeight: "500" },
  itemSubtitle: { fontSize: 13, color: "#555" },
  badge: {
    backgroundColor: "red",
    borderRadius: 20,
    paddingHorizontal: 8,
    minWidth: 28,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  tabItem: { alignItems: "center" },
  tabLabel: { fontSize: 12, color: "#555", marginTop: 2 },
  cartaoButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  cartaoButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});