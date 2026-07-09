# MEICONTADOR Site

Landing page estática do MEICONTADOR, feita em HTML, CSS e JavaScript puro.

## Objetivo

Gerar contatos qualificados pelo WhatsApp para serviços contábeis voltados a MEI, pequenas empresas e pessoa física:

- abertura de MEI;
- regularização de CNPJ;
- DAS e DASN-SIMEI;
- baixa e alteração cadastral;
- imposto de renda pessoa física.

## Estrutura

```text
.
├── index.html
├── formulario-abertura-mei.html
├── privacidade.html
├── robots.txt
├── sitemap.xml
├── vercel.json
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
```

## Como testar localmente

Como o site é estático, basta abrir `index.html` no navegador. Para testar como servidor local:

```powershell
python -m http.server 3000
```

Depois acesse `http://localhost:3000`.

Observação: as rotas limpas (`/formulario-abertura-mei` e `/privacidade`) são resolvidas pela Vercel por causa de `cleanUrls: true`. No servidor Python local, acesse os arquivos `.html` diretamente se precisar testar páginas internas.

## Publicação na Vercel

Configuração recomendada:

- Framework preset: `Other`
- Build command: vazio
- Output directory: `.`
- Install command: vazio

Domínio inicial esperado:

```text
https://meicontador-site.vercel.app
```

Rotas públicas principais:

- `/`
- `/formulario-abertura-mei`
- `/privacidade`

Se o projeto receber um domínio próprio no futuro, atualizar:

- `index.html`: canonical, Open Graph e Schema.org;
- `formulario-abertura-mei.html`: canonical;
- `privacidade.html`: canonical;
- `robots.txt`: `Sitemap`;
- `sitemap.xml`: URLs.

## Pendências do dono do negócio

- Confirmar WhatsApp, e-mail e endereço.
- Confirmar dados legais que devem aparecer na política de privacidade.
- Validar depoimentos e autorização de uso dos nomes/empresas.
- Informar domínio próprio, caso seja comprado.
- Informar se haverá Google Analytics, Meta Pixel ou ferramenta de anúncios além do Vercel Web Analytics.

## Segurança do pré-formulário de MEI

O pré-formulário não envia CPF, data de nascimento, endereço completo ou documentos por URL. Ele abre o WhatsApp com um resumo comercial da solicitação. Dados sensíveis devem ser enviados apenas no atendimento direto, conforme orientação do contador.
