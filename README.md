# RIFA PREMIUM

Sistema de rifa online com geração de QR Code PIX, gerenciamento de números e integração com API.

## 🎯 Características

- ✅ Grid de 100 números para seleção
- ✅ Geração automática de QR Code PIX
- ✅ Carrossel de imagens com navegação
- ✅ Barra de progresso dupla (Reservados/Pagos)
- ✅ Formulário de reserva com validação
- ✅ Cache local para melhor performance
- ✅ Design responsivo (mobile-first)
- ✅ Integração com API Cloudflare Workers
- ✅ Suporte a múltiplos vendedores

## 🚀 Deploy na Netlify

### Método 1: Via Git (Recomendado)

1. **Conecte seu repositório GitHub à Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Selecione seu repositório
   - Clique em "Deploy site"

2. **Configurações automáticas:**
   - O arquivo `netlify.toml` já contém todas as configurações necessárias
   - Não é necessário configurar build commands
   - O site será publicado automaticamente

### Método 2: Deploy Manual (Drag & Drop)

1. Acesse [netlify.com](https://netlify.com)
2. Faça drag & drop da pasta do projeto
3. Aguarde o deploy ser concluído

### Método 3: Via Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

## 📋 Configuração

### Variáveis de Configuração (index.html)

```javascript
const RIFA_CONFIG = {
    apiBase: "https://rifaproxy.albertdesignerbr.workers.dev",
    valor: "R$ 5,00",
    valorNumerico: 5.00,
    chavePix: "b3a0efeb-d91d-46dc-b84f-6d74e719c5d1",
    nomeRecebedor: "Carlos Alberto Silva de S",
    cidadeRecebedor: "SAO PAULO",
    whatsapp: "https://wa.me/5585981402113"
};
```

**Para alterar:**
1. Abra `index.html`
2. Localize a seção `CONFIGURAÇÃO` (linha ~1306)
3. Modifique os valores conforme necessário
4. Faça commit e push para atualizar o site

## 🔧 Estrutura do Projeto

```
rifa-premium/
├── index.html           # Arquivo principal (HTML + CSS + JS)
├── netlify.toml         # Configuração Netlify
├── .gitignore          # Arquivos ignorados pelo Git
├── README.md           # Este arquivo
└── vercel.json         # Configuração anterior (pode ser removida)
```

## 🎨 Personalização

### Alterar Imagens do Carrossel

No arquivo `index.html`, localize a seção do carrossel (linha ~1055) e substitua as URLs:

```html
<div class="carrossel-slide">
    <img src="https://i.ibb.co/d0hx3KDt/IMA1.jpg" alt="Título da Rifa">
</div>
```

### Alterar Cores

As cores principais estão definidas no CSS (linha ~30). Procure por:
- `#155724` - Verde escuro
- `#28a745` - Verde principal
- `#ffd700` - Dourado

### Alterar Textos

Todos os textos estão no HTML e podem ser editados diretamente.

## 🔐 Segurança

- ✅ Headers de segurança configurados
- ✅ CORS habilitado para API
- ✅ Cache-Control otimizado
- ✅ Proteção contra XSS
- ✅ Proteção contra Clickjacking

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1200px+)

## 🐛 Troubleshooting

### API retorna erro

1. Verifique se a URL da API está correta em `RIFA_CONFIG.apiBase`
2. Verifique a conexão com a internet
3. Abra o console do navegador (F12) para ver mensagens de erro

### QR Code não aparece

1. Verifique se a chave PIX está correta
2. Verifique se o valor está preenchido
3. Limpe o cache do navegador

### Números não carregam

1. Verifique se a API está respondendo
2. Verifique os logs no console (F12)
3. Recarregue a página

## ✅ Checklist de Deploy

- [ ] Verificar todas as configurações em `RIFA_CONFIG`
- [ ] Testar QR Code PIX
- [ ] Testar formulário de reserva
- [ ] Testar carrossel de imagens
- [ ] Testar responsividade (mobile)
- [ ] Verificar links do WhatsApp
- [ ] Testar em diferentes navegadores
- [ ] Fazer commit e push para GitHub
- [ ] Conectar à Netlify
- [ ] Testar URL do site ao vivo

---

**Última atualização:** 29 de Março de 2024
