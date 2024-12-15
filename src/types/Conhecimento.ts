export interface Conhecimento {
    nome: string,
    imagem: string,
    nivel: 1|2|3,
    conteudo: string,
    subs?: Conhecimento[]
}