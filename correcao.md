#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Incorreto
Nota: 0,00

#Criterio7 — Comentários explicativos nos pontos principais
Correto
Nota: 1,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Correto
Nota: 1,00

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 9,00

#Extra1 — Loading e erro
Não conquistado
Nota extra: +0,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 0,00
Extras conquistados: nenhum

Subtotal com extras (teto 10,00): 9,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 9,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** Valorant (`https://valorant-api.com/v1/agents?language=pt-BR` em `app/components/Lista.js`).  
**Caminho base do app Next:** raiz (`app/`).

**Critério 1 — Projeto Next.js:** `package.json` com `next` 16.4.0 e `axios`; `app/layout.js` e `app/page.js`.

**Critério 2 — Lista com axios:** `Lista.js` faz `axios.get` no `useEffect` e renderiza `<li>{a.developerName}</li>`; montado em `app/page.js`.

**Critério 3 — useState e useEffect:** ambos em `Lista.js` com `"use client"`.

**Critério 4 — 6 componentes:** `Component1`–`Component6`, `Lista`, `TratErro` (≥6).

**Critério 5 — Props:** `Component1({ title })`, `Component2({ descricao })`, `Component4({ subtitulo })` usados na home.

**Critério 6 — Detalhes + axios + navegação:** `app/details/[id]/page.js` praticamente vazio; sem `Link`/`useRouter` a partir da lista → incorreto.

**Critério 7 — Comentários:** comentários JSX em `Lista.js` (useState/useEffect) e demais componentes.

**Critério 8 — Commits:** 12 commits na `main`.

**Critério 9 — README / deploy link:** `README.md` com link de deploy + descrição do projeto/componentes (como a lista/API funciona). Reavaliação generosa: **Correto** (instruções básicas + URL).

**Critério 10 — Deploy Vercel:** `https://checkpoint-5-webdev-1-espz-rho.vercel.app/` — probe HTTP **200** (live); também `gitDeploymentsKnown=true` no GitHub/Vercel.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Não conquistado (+0,00). `TratErro` envolve JSX em try/catch (não trata loading/erro de API na UI).
**Extra 2 — Hooks avançados:** Não conquistado (+0,00).
**Extra 3 — Busca/filtro:** Não conquistado (+0,00).
**Extra 4 — localStorage:** Não conquistado (+0,00).
**Resumo extras:** nenhum; total 9,00.

**Penalizações:** nenhuma (`participantes.md` presente).
**Sinalizadores anti-cola / IA:** nenhum.

---

## CONTEXTO GIT
- **remote:** `https://github.com/rah2707/checkpoint-5-webdev-1ESPZ`
- **branch avaliada:** `main`
- **commits (12):** `f931de9` feat:commit1 … `99f6a1f` commit12
- **autores:** 12 Laboratório FIAP `<labsfiap@fiap.com.br>`
- **contagem usada no Critério 8:** 12
