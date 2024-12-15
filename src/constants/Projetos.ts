import type { ImageMetadata } from "astro";
import type { Projeto } from "../types/Projeto";
import SoftSkills from "../assets/images/projetos/soft-skills.png"
import Termooo from "../assets/images/projetos/termooo.png"
import OnPlay from "../assets/images/projetos/onPlay-kiss.jpeg"
import TodoList from "../assets/images/projetos/todo-list.png"
import Calculadora from "../assets/images/projetos/calculadora.jpeg"

export default [
    {
        descricao: `
        Este site foi desenvolvido como parte de uma atividade da disciplina DSA2 da Instituição FIEB, em formato de trabalho em grupo. Minha responsabilidade no projeto foi a estruturação do HTML e a adição de interatividade através do uso de JavaScript, enquanto os demais membros do grupo ficaram encarregados da pesquisa e da estilização do site.

        A ideia original do trabalho era criar apenas um site estático e informativo, utilizando unicamente HTML e CSS. No entanto, decidimos ir além e tornar o projeto mais interativo e dinâmico. Incorporamos quizes em cada tópico, além de listagens e leituras interativas que só se revelam por meio de cliques dos visitantes. Para implementar essas funcionalidades, optamos por utilizar o framework Vue.js.

        O objetivo principal do site é informar sobre as soft skills e destacar seu impacto positivo em diferentes contextos, como ambientes de trabalho e educacionais. Por meio de conteúdo informativo e recursos interativos.
        `,
        foto: SoftSkills,
        github: "https://github.com/Joao-Lucas-Si/soft-skills",
        id: "soft-skills",
        link: "https://info-soft-skills.netlify.app/",
        nome: "soft skills",
        tags: ["vue", "sass", "typescript", "css", "html", "javascript"]

    },
    {
        descricao: `
        Aplicativo simples de lista de tarefas, o site foi desenvolvido como um desafio pessoal para descobrir quanto tempo eu levaria para criar um projeto simples, com a conclusão ocorrendo em dois dias.

        As funcionalidades principais foram implementadas no primeiro dia. No segundo dia, fiz correções e refinamentos. Após esses dois dias iniciais, o desenvolvimento continuou por mais alguns dias, focando em ajustes menores.
        
        Entre as funcionalidades, o usuário pode criar, editar e remover tarefas, além de marcar tarefas como concluídas. O sistema possui duas seções que organizam as tarefas: uma para as tarefas concluídas e outra para as não concluídas.
        
        Todas as tarefas são armazenadas localmente no navegador, e o projeto inclui algumas configurações extras que decidi adicionar nos primeiros dias. Estas incluem a possibilidade de escolher um tema de cores e suporte a diferentes idiomas, como inglês e coreano. As traduções foram feitas com o auxílio do Google Tradutor, uma vez que não possuo um nível avançado nessas línguas.
        `,
        github: "https://github.com/Joao-Lucas-Si/todo-list",
        id: "todo-list",
        link: "https://joao-lucas-si.github.io/todo-list/",
        nome: "todo list",
        foto: TodoList,
        tags: ["react", "typescript", "tailwind", "html", "css",   "javascript"]
    },
    {
        descricao: `
        Aplicativo básico de calculadora para dispositivos Android, atualmente em desenvolvimento, com o objetivo de replicar as funcionalidades essenciais de uma calculadora convencional, mas incorporando algumas características novas.

        Entre as funções tradicionais, o aplicativo oferece as operações básicas, como soma, subtração, multiplicação, divisão, potência, e outras operações matemáticas fundamentais. Além disso, inclui um sistema de histórico, que permite ao usuário visualizar e reexecutar cálculos anteriores, bem como suporte a constantes matemáticas como pi. O aplicativo também oferece uma funcionalidade para conversão de unidades.
        
        nas funcionalidades exclusivas, há o sistema de variáveis, no qual o usuário pode registrar uma ou mais variáveis em um formulário e utilizá-las em cálculos subsequentes. O valor de cada variável pode ser alterado diretamente no formulário, e o cálculo será automaticamente recalculado com base no novo valor.
        
        Adicionalmente, o usuário pode salvar cálculos complexos que envolvam variáveis em fórmulas personalizadas, e, sempre que necessário, refazê-los rapidamente apenas alterando os valores das variáveis no formulário.
        
        Além da criação de fórmulas personalizadas, o aplicativo também inclui uma biblioteca de fórmulas pré-configuradas, que abrange áreas como estatística e geometria plana.
        `,
        github: "https://github.com/Joao-Lucas-Si/calculadora",
        id: "calculadora",
        foto: Calculadora,
        link: "https://github.com/Joao-Lucas-Si/calculadora/releases/tag/apk",
        tags: ["react", "react native", "expo"],
        nome: "calculadora",
    },
    // {
    //     descricao: "",
    //     github: "https://github.com/Joao-Lucas-Si/TCC",
    //     id: "systemize-me",
    //     link: "",
    //     tags: ["spring", "postgres", "react",  "sql", "next", "css", "bootstrap", "react native", "html", "javascript", "typescript"],
    //     nome: "systemizeMe",
    // },
    // {
    //     descricao: "",
    //     github: "",
    //     id: "galaxy-map",
    //     tags: ["postgres", "next", "css", "sql", "html", "javascript", "typescript"],
    //     link: "",
    //     nome: "galaxy map",
    // },
    {
        descricao: `
Player de música desenvolvido para dispositivos Android, atualmente com a funcionalidade de reproduzir músicas armazenadas localmente no dispositivo. No entanto, devido ao estágio em que o aplicativo se encontra no processo de desenvolvimento, a reprodução é restrita às faixas localizadas na pasta padrão de música do Android, a "Music", sendo essa limitação temporária.

O aplicativo oferece uma variedade de opções de personalização, abrangendo desde a escolha das cores até a extração de informações detalhadas das músicas. O tema de cores do player segue um padrão predefinido, mas ao iniciar a reprodução de uma música, o aplicativo identifica as cores da capa e utiliza essas cores como base para gerar um novo esquema de cores. Além disso, os usuários podem personalizar esses temas por meio de ajustes na paleta de cores e na intensidade do brilho.

Adicionalmente, o aplicativo permite que o usuário crie múltiplos perfis personalizados, com configurações específicas que podem ser ativadas de acordo com a preferência do usuário em cada situação. Cada perfil pode conter ajustes exclusivos.
        `,
        github: "https://github.com/Joao-Lucas-Si/onPlay-music",
        id: "on-play",
        link: "https://github.com/Joao-Lucas-Si/onPlay-music/releases/tag/apks",
        foto: OnPlay,
        tags: ["dart", "flutter"],
        nome: "onPlay",
    },
    {
        descricao: `
        Jogo web inspirado em "Termoo", desenvolvido com o intuito de recriar a jogabilidade, mas oferecendo palavras aleatórias ilimitadas, ao invés de palavras predefinidas para cada dia.

        O jogo é simple. O sistema seleciona aleatoriamente uma palavra de cinco letras e exibe uma tabela vazia na tela. Cada coluna da tabela corresponde a uma letra da palavra, enquanto cada linha representa uma tentativa do jogador para adivinhar a palavra correta.
        
        Após a seleção da palavra, o jogador deve inserir uma palavra de cinco letras a cada tentativa até conseguir descobrir a palavra secreta. O sistema então fornece feedback visual indicando a posição correta das letras, bem como quais letras fazem parte da palavra, mas estão em posições incorretas.
        
        O feedback é dado por meio de cores nos quadrados das letras: vermelho indica que a letra não pertence à palavra sorteada; amarelo significa que a letra existe na palavra, mas está na posição errada; e verde indica que a letra está correta tanto na posição quanto na própria palavra.
        
        Caso o jogador acerte a palavra dentro do número de tentativas permitidas, o algoritmo declara uma vitória. No entanto, se todas as tentativas forem esgotadas sem sucesso, o jogo termina em derrota.
        
        O jogo oferece três tipos de personalização, permitindo que o jogador modifique a quantidade de palavras sorteadas, o número de tentativas e o nível de dificuldade.
        
        Na dificuldade, o jogo dispõe de dois níveis: normal e difícil. No nível normal, uma tentativa é considerada válida apenas quando o jogador envia explicitamente uma palavra. Já no nível difícil, o sistema automaticamente conta cada palavra completada como uma tentativa, sem a necessidade de envio manual. Além disso, no modo difícil, a indicação de acerto é limitada a amarelo e vermelho: o feedback verde é removido, e o amarelo passa a ser utilizado tanto para indicar letras corretas, mas em posições erradas, quanto para as letras corretas que estavam na posição certa, substituindo o verde.
        
        No que se refere à quantidade de palavras sorteadas, o jogador pode escolher entre 1, 2 ou 4 palavras a serem adivinhadas simultaneamente. O número de tentativas disponíveis será o mesmo, independentemente de quantas palavras o jogador tenha de adivinhar.
        `,
        github: "https://github.com/Joao-Lucas-Si/termooo",
        id: "termooo",
        link: "https://termoo.netlify.app",
        foto: Termooo,
        tags: [ "typescript", "bootstrap", "html", "css", "javascript",],
        nome: "termooo",
    },
] satisfies Projeto[]