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

Se o projeto receber um domínio próprio no futuro, atualizar:

- `index.html`: canonical, Open Graph e Schema.org;
- `privacidade.html`: canonical;
- `robots.txt`: `Sitemap`;
- `sitemap.xml`: URLs.

## Pendências do dono do negócio

- Confirmar WhatsApp, e-mail e endereço.
- Confirmar dados legais que devem aparecer na política de privacidade.
- Validar depoimentos e autorização de uso dos nomes/empresas.
- Informar domínio próprio, caso seja comprado.
- Informar se haverá Google Analytics, Meta Pixel ou ferramenta de anúncios além do Vercel Web Analytics.
