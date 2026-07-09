# MEICONTADOR - Checklist de Publicação

## 1. Antes do primeiro push

- [ ] Confirmar que `meicontador-site-auditado.zip` não será versionado.
- [ ] Conferir `git status`.
- [ ] Fazer commit inicial limpo.
- [ ] Fazer push para `harlemsingularbr-wq/meicontador-site`.

## 2. Vercel

- [ ] Acessar https://vercel.com.
- [ ] Importar o repositório `harlemsingularbr-wq/meicontador-site`.
- [ ] Usar framework preset `Other`.
- [ ] Deixar `Build Command` vazio.
- [ ] Deixar `Install Command` vazio.
- [ ] Usar `Output Directory` como `.`.
- [ ] Publicar.

Domínio esperado:

```text
https://meicontador-site.vercel.app
```

## 3. QA no ar

- [ ] Abrir a home no desktop.
- [ ] Abrir a home no celular.
- [ ] Confirmar que o H1, proposta de valor e CTA aparecem rápido no mobile.
- [ ] Testar menu mobile: abrir, fechar por clique, fechar por link e fechar por Escape.
- [ ] Testar FAQ: abrir/fechar e conferir que apenas uma resposta fica aberta.
- [ ] Navegar por teclado usando Tab.
- [ ] Confirmar foco visível em botões, links e campos.
- [ ] Testar CTA "Abrir meu MEI".
- [ ] Testar CTAs dos cards de serviço.
- [ ] Testar formulário e conferir mensagem gerada no WhatsApp.
- [ ] Abrir `/privacidade`.
- [ ] Abrir `/formulario-abertura-mei`.
- [ ] Preencher o pré-formulário de abertura de MEI e confirmar que o WhatsApp abre com resumo sem CPF/endereço completo.
- [ ] Abrir `/robots.txt`.
- [ ] Abrir `/sitemap.xml`.

## 4. Pendências do dono

- [ ] Confirmar WhatsApp: `(27) 99775-5884`.
- [ ] Confirmar e-mail: `ocontadormei@gmail.com`.
- [ ] Confirmar endereço em Vitória/ES.
- [ ] Confirmar dados legais para política de privacidade.
- [ ] Confirmar autorização de depoimentos.
- [ ] Decidir se haverá domínio próprio.
- [ ] Decidir se haverá Google Analytics ou Meta Pixel além do Vercel Web Analytics.

## 5. Se houver domínio próprio

Atualizar:

- [ ] `index.html`: canonical, `og:url`, `og:image`, Schema.org.
- [ ] `formulario-abertura-mei.html`: canonical.
- [ ] `privacidade.html`: canonical.
- [ ] `robots.txt`: URL do sitemap.
- [ ] `sitemap.xml`: URLs das páginas.
