# MEICONTADOR - Resumo da Auditoria Codex

Data: 2026-07-09

## Status

O pacote gerado anteriormente pelo Claude foi revisado e corrigido. A versão atual está mais adequada para publicação estática na Vercel, mantendo HTML, CSS e JavaScript puro.

## Correções aplicadas

- Primeira dobra mobile ajustada: o SVG decorativo não aparece em telas pequenas e não empurra o H1 para baixo.
- CTAs de WhatsApp contextualizados por serviço.
- Menu mobile com `aria-expanded`, `aria-controls`, `aria-label` dinâmico e fechamento por Escape.
- FAQ com atualização real de `aria-expanded`.
- Estados de foco visíveis para links, botões e campos.
- Política de privacidade revisada para evitar promessa excessiva de conformidade.
- Textos de cookies ajustados ao que o site realmente faz hoje.
- Claims comerciais fortes removidos ou suavizados.
- `robots.txt` e `sitemap.xml` atualizados para o domínio inicial da Vercel.
- Vercel Web Analytics ativado e integrado via script estático.
- `@import` de fontes removido do CSS; fontes carregadas pelo `head`.
- Logos com `width`, `height` e `decoding` quando aplicável.
- Repositório preparado com `.gitignore`, `README.md` e `vercel.json`.

## Pontos ainda dependentes do dono

- Confirmar se `https://meicontador-site.vercel.app` será o domínio inicial definitivo.
- Confirmar dados legais da política de privacidade.
- Confirmar autorização para uso dos depoimentos e nomes comerciais.
- Confirmar se haverá domínio próprio no futuro.
- Confirmar se haverá Google Analytics, Meta Pixel ou campanhas pagas além do Vercel Web Analytics.
