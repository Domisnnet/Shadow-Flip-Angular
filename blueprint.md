# Blueprint: Carrossel de Cards Angular

## Visão Geral

Esta aplicação é um carrossel de cards interativo construído com Angular v20+. O objetivo é demonstrar o uso de recursos modernos do Angular, como componentes standalone, signals para gerenciamento de estado, o novo controle de fluxo (`@for`), e a diretiva `NgOptimizedImage` para otimização de imagens.

## Estilo, Design e Funcionalidades Implementadas

### Arquitetura

*   **Componentes Standalone:** Todos os componentes são `standalone`, eliminando a necessidade de `NgModules`.
*   **`ChangeDetectionStrategy.OnPush`:** Todos os componentes usam a estratégia `OnPush` para otimizar a detecção de alterações.
*   **Gerenciamento de Estado com Signals:** O estado local do componente, como o índice do card atual, é gerenciado usando `signal()`.
*   **Serviços com `inject()`:** A injeção de dependência é feita usando a função `inject()`.

### Estrutura do Projeto

*   `app.component.ts`: Contém a lógica principal do carrossel, incluindo as funções `avancar()` e `voltar()`.
*   `app.component.html`: Utiliza o controle de fluxo `@for` para renderizar a lista de cards e faz data binding para exibir as informações e o estado de seleção.
*   `app.component.css`: Contém os estilos para o layout do carrossel, cards e botões.
*   `models/card.model.ts`: Define a interface `Card` para a tipagem dos dados.
*   `services/card.service.ts`: Fornece os dados dos cards para a aplicação.
*   `assets/imagens/`: Contém as imagens dos personagens e dos fundos dos cards.

### Design Visual

*   **Layout Centralizado:** O carrossel é centralizado verticalmente e horizontalmente na página.
*   **Navegação por Botões:** Dois botões de seta ("avançar" e "voltar") permitem a navegação entre os cards.
*   **Feedback Visual:** O card atualmente selecionado é o único visível, com uma transição suave de opacidade ao trocar de card.
*   **Estilo dos Cards:** Cada card tem uma imagem de fundo, uma imagem do personagem, nome, nível e uma descrição. As classes de fundo são aplicadas dinamicamente com base no `id` do card.

### Funcionalidades

*   **Carrossel Cíclico:** Ao chegar ao último card e clicar em "avançar", o carrossel volta para o primeiro card. O mesmo acontece ao voltar do primeiro card, indo para o último.
*   **Otimização de Imagens:** A diretiva `NgOptimizedImage` (`ngSrc`) é usada para otimizar o carregamento das imagens dos personagens.
