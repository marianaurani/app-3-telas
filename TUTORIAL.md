# Tutorial: StyleSheet e Flexbox em React Native

## Introdução

Este tutorial explica como StyleSheet e Flexbox foram utilizados para replicar três telas de aplicativos: Perfil iFood, Cartão Mercado Pago e Bolos do Flávio (loja iFood).

## 1. StyleSheet em React Native

### O que é StyleSheet?

**StyleSheet** é uma API do React Native que permite criar estilos de forma otimizada e organizada. Funciona similar ao CSS, mas usa JavaScript.

### Exemplo de aplicação na tela clonada: Cartão Mercado Pago

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 17,
    textAlign: "center",
    color: "#000",
    marginBottom: 24,
    lineHeight: 24,
    fontWeight: "500",
  },
  botao: {
    backgroundColor: "#3483FA", // Azul Mercado Pago
    paddingVertical: 16,
    borderRadius: 6,
    alignItems: "center",
  },
});
```

---

## 2. Flexbox

Flexbox é um sistema de layout unidimensional que organiza elementos em linhas ou colunas. É o padrão de layout no React Native.

### Principais propriedades:

- **flex**: Define como o componente cresce em relação ao espaço disponível
- **flexDirection**: Define a direção do eixo principal (padrão: 'column' no React Native)
- **justifyContent**: Alinha itens ao longo do eixo principal
- **alignItems**: Alinha itens ao longo do eixo transversal
- **flexWrap**: Permite quebra de linha dos itens
- **gap**: Define espaçamento entre itens (versões mais recentes)

### Exemplos de aplicação nas Telas Clonadas

#### Tela 1: Perfil iFood - Estrutura de lista vertical com itens espaçados

```jsx
// Container principal com SafeAreaView
container: {
  flex: 1,
  backgroundColor: '#fff',
}

// Header do perfil
profileHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#f0f0f0',
}

// Avatar
avatar: {
  width: 64,
  height: 64,
  borderRadius: 32,
  backgroundColor: '#e0e0e0',
  marginRight: 16,
}

// Cada item do menu
menuItem: {
  flexDirection: 'row',        // Ícone e texto lado a lado
  alignItems: 'center',        // Centraliza verticalmente
  justifyContent: 'space-between', // Espaça conteúdo e seta
  paddingVertical: 16,
  paddingHorizontal: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#f5f5f5',
}

// Container do ícone
iconContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
}

// Badge de notificação
badge: {
  position: 'absolute',
  right: 40,
  backgroundColor: '#EA1D2C',  // Vermelho iFood
  borderRadius: 12,
  paddingHorizontal: 8,
  paddingVertical: 4,
  minWidth: 24,
  alignItems: 'center',
}

// Badge "NOVO"
badgeNovo: {
  backgroundColor: '#EA1D2C',
  borderRadius: 4,
  paddingHorizontal: 8,
  paddingVertical: 4,
}
```

**Técnicas usadas:**

- `flexDirection: 'row'` para ícone + texto + badge horizontalmente
- `justifyContent: 'space-between'` para espaçar elementos nas extremidades
- `alignItems: 'center'` para alinhar verticalmente ao centro
- `ScrollView` para permitir rolagem da lista de itens
- `SafeAreaView` para respeitar áreas seguras do dispositivo
- `TouchableOpacity` para adicionar interatividade aos itens

---

#### Tela 2: Cartão Mercado Pago - Layout centralizado vertical e horizontalmente

```jsx
// Container principal
container: {
  flex: 1,
  backgroundColor: "#fff",
}

// SafeArea
safeArea: {
  flex: 1,
}

// Header com botão voltar
header: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingVertical: 12,
}

backButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#f5f5f5',
  justifyContent: 'center',
  alignItems: 'center',
}

// Conteúdo centralizado
content: {
  flex: 1,
  justifyContent: "center",  // Centraliza verticalmente
  alignItems: "center",      // Centraliza horizontalmente
  paddingHorizontal: 30,
}

// Ícone
icone: {
  width: 140,
  height: 140,
  marginBottom: 30,
}

// Título principal
titulo: {
  fontSize: 20,
  fontWeight: '600',
  textAlign: 'center',
  marginBottom: 16,
  color: '#000',
}

// Container dos benefícios
beneficiosContainer: {
  alignItems: 'center',
  marginTop: 20,
}

// Textos dos benefícios
beneficioItem: {
  fontSize: 15,
  textAlign: "center",       // Centraliza texto
  marginBottom: 12,
  lineHeight: 22,
  color: '#333',
}

// Destaque em negrito
beneficioDestaque: {
  fontWeight: '600',
  color: '#000',
}

// Botão fixo no rodapé
footer: {
  paddingHorizontal: 20,
  paddingBottom: 30,
}

botao: {
  backgroundColor: '#3483FA',
  paddingVertical: 16,
  borderRadius: 6,
  alignItems: 'center',
}

botaoTexto: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
}
```

**Técnicas usadas:**

- `justifyContent: 'center'` e `alignItems: 'center'` para centralização completa
- `flex: 1` no content para ocupar espaço disponível
- Footer sem flex para manter tamanho fixo no final
- `SafeAreaView` para áreas seguras
- `TouchableOpacity` no botão para feedback visual

---

#### Tela 3: Bolos do Flávio (Loja iFood) - Layout complexo com sobreposições e grid

```jsx
// Container principal
container: {
  flex: 1,
  backgroundColor: '#f5f5f5',
}

// Header com imagem de fundo
headerSection: {
  position: 'relative',  // Permite posicionamento absoluto dos filhos
  height: 200,
}

headerBackground: {
  width: '100%',
  height: '100%',
}

// Ícones sobre a imagem
headerIcons: {
  position: 'absolute',
  top: 50,
  left: 0,
  right: 0,
  zIndex: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
}

iconButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
}

// Card flutuante com informações da loja
storeInfoCard: {
  backgroundColor: 'white',
  marginHorizontal: 16,
  marginTop: -80,  // Sobrepõe a imagem
  borderRadius: 12,
  padding: 16,
  paddingTop: 30,
  zIndex: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 4,
}

// Logo circular sobre o card
logoCircleOverCard: {
  position: 'absolute',
  top: -25,          // Sobe acima do card
  alignSelf: 'center', // Centraliza horizontalmente
  width: 60,
  height: 60,
  borderRadius: 30,
  borderWidth: 3,
  borderColor: 'white',
  backgroundColor: 'white',
  overflow: 'hidden',
}

// Nome da loja
storeName: {
  fontSize: 20,
  fontWeight: '600',
  color: '#000',
  marginBottom: 8,
}

// Linha de informação
storeInfoRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: '#f0f0f0',
}

storeInfoText: {
  fontSize: 13,
  color: '#666',
}

// Seção de destaques
highlightsSection: {
  padding: 16,
}

sectionTitle: {
  fontSize: 18,
  fontWeight: '600',
  color: '#000',
  marginBottom: 16,
}

// Grid de produtos (3 colunas)
productsGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',          // Quebra linha automaticamente
  justifyContent: 'space-between',
}

// Card do produto (33% da largura)
productCard: {
  width: '31%',              // 3 colunas com espaçamento
  backgroundColor: 'white',
  borderRadius: 8,
  marginBottom: 16,
  overflow: 'hidden',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
}

productImage: {
  width: '100%',
  height: 100,
  backgroundColor: '#f0f0f0',
}

productInfo: {
  padding: 8,
}

productName: {
  fontSize: 12,
  fontWeight: '500',
  color: '#000',
  marginBottom: 4,
}

productPrice: {
  fontSize: 13,
  fontWeight: '600',
  color: '#EA1D2C',
}

// Banner de cupons
couponBanner: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  marginHorizontal: 16,
  marginVertical: 16,
  padding: 16,
  borderRadius: 8,
}
```

**Técnicas usadas:**

- `position: 'absolute'` para sobreposição de elementos
- `zIndex` para controlar ordem de empilhamento
- `marginTop` negativo para efeito de sobreposição do card
- `flexWrap: 'wrap'` para criar grid responsivo
- `width: '31%'` para 3 colunas com espaçamento
- `alignSelf: 'center'` para centralizar elemento individual
- `ImageBackground` para imagem de fundo do header
- `ScrollView` para permitir rolagem do conteúdo
- `TouchableOpacity` para interatividade dos cards
- `shadow` e `elevation` para profundidade visual

---

## 3. Componentes Essenciais

### SafeAreaView
Garante que o conteúdo não seja sobreposto por elementos do sistema (notch, barra de status).

```jsx
import { SafeAreaView } from 'react-native';

<SafeAreaView style={styles.container}>
  {/* Seu conteúdo aqui */}
</SafeAreaView>
```

### ScrollView
Permite rolagem do conteúdo quando ultrapassa o tamanho da tela.

```jsx
import { ScrollView } from 'react-native';

<ScrollView style={styles.container}>
  {/* Conteúdo rolável */}
</ScrollView>
```

### TouchableOpacity
Adiciona feedback visual de toque aos elementos interativos.

```jsx
import { TouchableOpacity } from 'react-native';

<TouchableOpacity 
  style={styles.botao}
  onPress={() => console.log('Clicou!')}
  activeOpacity={0.7}
>
  <Text>Clique aqui</Text>
</TouchableOpacity>
```

### Ícones
Bibliotecas comuns para ícones:
- `react-native-vector-icons`
- `@expo/vector-icons` (para projetos Expo)

```jsx
import Icon from 'react-native-vector-icons/MaterialIcons';

<Icon name="arrow-back" size={24} color="#000" />
```

---

## 4. Dicas e Boas Práticas

### Espaçamentos
- Utilize números múltiplos de 4 ou 8 (ex: 4, 8, 12, 16, 20, 24, 32)
- Mantém consistência visual e facilita manutenção

### Uso do Flex
- ✅ **Use flex** para preencher espaço disponível
- ❌ **Não use flex** para tamanho fixo (use width/height)

```jsx
// ✅ Correto
container: {
  flex: 1,  // Preenche espaço disponível
}

// ❌ Evite
header: {
  flex: 1,  // Se o header deve ter altura fixa
  height: 60,  // Use apenas height
}
```

### Profundidade Visual
Use `elevation` (Android) e `shadow` (iOS) para dar profundidade:

```jsx
card: {
  // iOS
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  // Android
  elevation: 4,
}
```

### Cores Consistentes
Defina uma paleta de cores no início do arquivo:

```jsx
const COLORS = {
  primary: '#EA1D2C',
  secondary: '#3483FA',
  background: '#fff',
  text: '#000',
  textSecondary: '#666',
  border: '#f0f0f0',
};
```

### Componentização
Divida a interface em componentes reutilizáveis:

```jsx
// MenuItem.js
const MenuItem = ({ icon, title, badge, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Icon name={icon} size={24} />
      <Text style={styles.menuText}>{title}</Text>
    </View>
    {badge && (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    )}
  </TouchableOpacity>
);
```

### Responsividade
Use porcentagens e Dimensions para layouts adaptáveis:

```jsx
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  productCard: {
    width: (width - 48) / 3, // 3 colunas com padding de 16px
  }
});
```

---

## 5. Estrutura de Código Recomendada

```jsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const MinhaTelaClonada = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Conteúdo da tela */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Seus estilos aqui
});

export default MinhaTelaClonada;
```

---

## Conclusão

O domínio de StyleSheet e Flexbox foi essencial para replicar as três telas:

- **StyleSheet** organizou os estilos de forma performática e otimizada
- **Flexbox** permitiu criar layouts complexos e responsivos
- **Position absolute** viabilizou sobreposições precisas e efeitos visuais
- **Componentes nativos** (SafeAreaView, ScrollView, TouchableOpacity) garantiram funcionalidade completa
- **Boas práticas** de componentização e organização facilitam manutenção

A prática com esses conceitos através da clonagem de interfaces reais consolida o aprendizado e prepara para o desenvolvimento de aplicativos completos e profissionais.

---

## Recursos Adicionais

- [Documentação oficial React Native](https://reactnative.dev/docs/getting-started)
- [Guia completo de Flexbox](https://reactnative.dev/docs/flexbox)
- [StyleSheet API](https://reactnative.dev/docs/stylesheet)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)