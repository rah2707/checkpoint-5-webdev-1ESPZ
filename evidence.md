# Evidence 1ESPZ/rah2707-checkpoint-5-webdev-1ESPZ
hasGit: true
nextRoots: [
  {
    "pkgPath": "package.json",
    "dir": "/Volumes/externo/FIAP/corretor-avaliacoes/turmas/2026/checkpoint-5/1ESPZ/rah2707-checkpoint-5-webdev-1ESPZ",
    "next": "16.4.0",
    "axios": "^1.20.0",
    "react": "19.3.0",
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "eslint"
    }
  }
]
API: Valorant
components: 9 (em components/: 8)
- Component1 @ app/components/Component1.js
- Component2 @ app/components/Component2.js
- Component3 @ app/components/Component3.js
- Component4 @ app/components/Component4.js
- Component5 @ app/components/Component5.js
- Component6 @ app/components/Component6.js
- Lista @ app/components/Lista.js
- TratErro @ app/components/TratErro.js
- Api @ app/services/Api.js

## axios (7)
app/components/Lista.js:3: import axios from "axios";
app/components/Lista.js:11: const res = await axios.get(
app/services/Api.js:2: import axios from "axios";
package-lock.json:11: "axios": "^1.20.0",
package-lock.json:2354: "node_modules/axios": {
package-lock.json:2356: "resolved": "https://registry.npmjs.org/axios/-/axios-1.20.0.tgz",
package.json:12: "axios": "^1.20.0",

## fetch (0)


## useState (5) / useEffect (4)
use client: 3
dynamic routes:
app/details/[id]/page.js
Link/useRouter: link=0 router=0

## Extras hints
useMemo=0 useCallback=0 useRef=0
localStorage=0
loadingHints=0 errorHints=6 searchHints=7

## Honeypots
nenhum

## Vercel links
https://checkpoint-5-webdev-1-espz-rho.vercel.app/

## Git commits: 12 branch=main
```
12	Laboratório FIAP <labsfiap@fiap.com.br>
```
```
99f6a1f commit12
5c27e0a commit11
a0f2477 commit10
c467e2e commit9
ae78492 commit8
0e7436c commit7
b133087 commit6
5f30a00 commit5
52a0c92 commit4
3443886  chamada da api - commit3
d6cb098 commit2
f931de9 feat:commit1
```

## README preview
https://checkpoint-5-webdev-1-espz-rho.vercel.app/ - LINK DO DEPLOY

Projeto que consolida e printa os dados da api em forma de lista.
No projeto é usado usesTate e Useeffect, é feito o tratamento de erro, e possui agradecimento...


COMPONENTES: 
Component1 = Título
Component2 = Descrição
Component3 = Espaçamento entre linhas
Component4 = Subtítulo
Component5 = Paragrafo para lista da API
Component6 = Agradecimento
Lista = Lista dos itens da API
TratErro = Componente para tratar o erro da chamada da API



## Participantes preview
Luiz Felipe Izumi - RM572328
Raissa Capasso - RM572166
Rafael Boneti - RM571628