# Aplicação de Pedidos de Entrega

## Descrição do Projeto

Este projeto é uma aplicação frontend em React que permite aos usuários cadastrar pedidos de entrega e visualizar o tempo estimado de entrega para cada pedido. A aplicação utiliza a API do Google Maps para calcular as rotas e o tempo de entrega, e o Redux para gerenciar o estado global da aplicação, incluindo os timers dos pedidos.

## Decisões Técnicas

### Utilização do Redux

Optei por utilizar o Redux para gerenciar o estado global da aplicação devido à sua eficiência e facilidade de integração com o React. O Redux nos permite manter o estado da aplicação consistente e acessível em todos os componentes, o que é essencial para funcionalidades como timers de pedidos e gerenciamento de rotas.

### Estado Global do Timer

Para garantir que os timers dos pedidos continuem funcionando mesmo ao mudar de rota, implementei um estado global de timers no Redux. Isso é gerenciado através de um intervalo global (`globalTimerInterval`) que decrementa os timers a cada segundo. Ao utilizar um estado global, asseguramos que os timers permaneçam precisos e em execução contínua, independentemente da navegação do usuário.

### Configuração do Google Maps API

Para calcular as rotas e tempos de entrega, utilizei a API do Google Maps na aplicação. Para isso, é necessário criar um projeto no Google Console Developer e obter uma chave de API. Esta chave deve ser configurada em um arquivo `.env` para ser utilizada na aplicação.

## Rodando o Projeto Localmente

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```sh
git clone https://github.com/fabiomoura-m/desafio-ivare.git
cd desafio-ivare

```

2. Instale as dependências:

```sh
npm install
```

3. Gere uma key da api do Google Maps
4. Crie um arquivo .env na raiz do projeto e adicione a seguinte linha ao arquivo, substituindo SUA_API_KEY pela chave obtida:

```sh
VITE_GOOGLE_MAPS_API_KEY=SUA_API_KEY
```

5. Inicie a aplicação:

```sh
npm run dev
```


## Deploy

[Clique](https://www.desafio-ivare.vercel.app)
