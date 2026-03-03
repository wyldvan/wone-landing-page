# Wone Sistemas - Landing Page 🚀

Bem-vindo ao repositório da Landing Page oficial da **Wone Sistemas**. Esta página de alta conversão foi projetada para apresentar nossa suíte de automação comercial (PDV, NFE, Loja Virtual e Gestão Integrada) de forma moderna, rápida e totalmente otimizada para SEO e performance.

🌐 **Demo em Produção:** [https://wonesistemas.com.br/](https://wonesistemas.com.br/)

---

## 🎨 Design & Experiência (UI/UX)
- **Glassmorphism:** Efeitos translúcidos e modernos em cards e na barra de navegação responsiva.
- **Dark Mode Nativo:** Paleta de cores premium (`#280058` roxo profundo em contraste com `#00FED9` verde cyan neon).
- **Animações Fluidas:** Intersection Observers para reveal scroll e aceleração em propriedades CSS (`will-change`).
- **Mobile-First:** Breakpoints (`992px`, `768px`, `480px`) milimetricamente ajustados, grid flexível de segmentos, FAQ interativo e menu hambúrguer customizado.

## ⚡ Performance & Otimização
A página foi construída priorizando tempos de carregamento (LCP < 1.0s):
- **Código Vanilla e Sem Frameworks:** HTML5 semântico estruturado para velocidade absoluta.
- **Assets Minificados:** Script customizado em NodeJS (`minify.js`) garante os menores pacotes CSS e JS.
- **Gerenciamento de Imagens:** Prevenção contra _Cumulative Layout Shift_ (CLS) pelo dimensionamento explícito e política total de `loading="lazy"`.
- **Preconexões no DOM:** As chamadas de fontes Google e de ícones CDN já contam com `<link rel="preconnect">` implementado.

## 🔍 SEO & Rastreamento
As _best-practices_ atuais de indexadores estão aplicadas:
- **Canonical tags** preparadas contra conteúdo duplicado.
- Tags completas estruturais de Open Graph e Twitter Cards (via og-image proprietária e favicon escalável nativo em `.svg`).
- Lógica de engajamento minificada com o **Google Analytics 4** já injetada, trackeando:
  - CLIKS: `Event_Category: CTA` em botões de "Demonstração" e "WhatsApp".
  - CONTEÚDO: `FAQ_Aberto` identificando as maiores dúvidas de acordo com as views no acordeon.
  - RETENÇÃO: Acionamento incremental por *Scroll Depth* via JavaScript puro (passando marcas de leitura de 25%, 50%, 75% e 100%).

---

## 🛠️ Tecnologias Utilizadas
* **HTML5** & **CSS3** (Variáveis, Transitions, Grid & Flex Layouts avançados)
* **JavaScript (Vanilla)**
* [Lucide Icons](https://lucide.dev/) (CDN de ícones SVG leves)
* [Google Fonts](https://fonts.google.com/) (Space Grotesk e Inter)

## 📁 Estrutura de Arquivos

```text
/
├── index.html       # Estrutura Core, Meta Tags, GA4 integrado
├── style.css        # Variáveis raiz, Responsividade Mobile e Animações
├── script.js        # IntersectionObserver, FAQ engine e Scroll Depth
├── favicon.svg      # Favicon escalonável e otimizado
├── og-image.html    # Base em HTML/CSS para geração oficial da marca d'água nas Redes
├── og-image.png     # Asset social padrão em 1200x630 pixels
├── minify.js        # Utilitário em NodeJS para _build e compression_ dos estáticos
└── /design e /assets# Diretórios de base com imagens visuais customizadas e SVGs.
```

## ⚙️ Uso Local do Minificador
Se desejar fazer alterações e recomprimir o CSS e JS localmente, instale o **Node.js** e execute:
```bash
node minify.js
```
O console acusará compressão bem sucedida (as quebras de linhas, indentações, comentários e consolidações JS serão limpadas nos locais corretos mantendo perfeitamente o seu código enxuto).

---

> _**Wone Sistemas © 2024** - Todos os direitos reservados. Otimize seus processos e dedique seu tempo ao que realmente importa: vender._
