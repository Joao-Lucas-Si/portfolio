import type { Conhecimento } from "../types/Conhecimento";

export default [
    {
        conteudo: "",
        nome: "Javascript",
        nivel: 3,
        imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" ,
        subs: [
            {
                conteudo: "",
                 imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                 nivel: 3,
                 nome: "Typescript",
            },
            {
                conteudo: "",
                imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                nivel: 3,
                nome: "React",
            },
            {
                conteudo: "",
                imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                nivel: 2,
                nome: "React Native",
            },
            {
                conteudo: `
                    Vue foi o primeiro framework frontend que eu aprendi, meu conhecimento abrange crição de componentes, gerenciamento de estado e interatividade, tanto na options api quanto na composite api
                `,
                imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
                nivel: 1,
                nome: "Vue",
            },
            {
                conteudo: "",
                imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
                nivel: 1,
                nome: "Astro",
            },
        ]
    },
    {
        conteudo: "",
        imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        nivel: 2,
        nome: "Java",
        subs: [
            {
                conteudo: `

                `,
                imagem:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
                nivel: 3,
                nome: "Spring boot"
            }
        ],
    },
    {
        conteudo: `
            python foi a linguagem de programação que eu decide usar para estudar lógica de programação, como tambem a linguagem que eu decidi usar enquanto competia na OBI, sei sua estrutura básica de váriaveis, funções, classes, etc. 
        `,
        imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        nivel: 2,
        nome: "Python",
        subs: [
            {
                conteudo: `
                    python django foi o primeiro framework backend que eu aprendi, por mais que faça um bom tempo em que eu não utilizo, ainda lembro do básico, como sua template engine, orm e views.
                `

                ,
                imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
                nivel: 1,
                nome: "Django",

            }
        ]
    },
    {
        conteudo: `
            Dart é uma linguagem que aprendi por consequencia de utilizar flutter em meus projetos, sei o básico de sua sintaxe de classes, funções, váriaveis, tipos, etc.


        `,
        imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
        nome: "Dart",
        nivel: 2,
        subs: [
            {
                nome: "Flutter",
                conteudo: `
                    Flutter é uma das minhas tecnologias favoritas para desenvolvimento mobile.

                    meu conhecimento sobre o framework abrange os widgets padrões, gerenciamento de estado, criação de widget, roteamento.
                `,
                nivel: 2,
                imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
            }
        ]
    },
    {
        conteudo: `
            css foi a primeira linguage na qual eu decide estudar mais afundo, atualmente eu sei o básico sobre seletores, propriedades, valores, variavéis, funções nativas, unidades, animações, pseudo class e pseudo elementos
        `,
        nome: "Css",
        nivel: 3,
        imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        subs: [
            {
                conteudo: "",
                imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                nivel: 2,
                nome: "Tailwind",
    
            },
            {
                conteudo: "",
                imagem:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
                nivel: 1,
                nome: "Bootstrap"
            },
            {
                conteudo: "",
                imagem:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
                nivel: 1,
                nome: "Sass"
            },
    
        ]
    },
    {
        conteudo: ``,
        imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        nivel: 2,
        nome: "SQL",
        
    },
] satisfies Conhecimento[]