// let Routes = {
//     message: "Comecar",
//     content: ["Olá, prazer! Meu nome é AutoJábot. \n Sou seu assistente digital para tirar todas as suas dúvidas" +
//     " sobre a concenssionária com muito mais praticidade e agilidade. Estou disponível para você a qualquer mom" +
//     "ento do dia! Diga INICIAR para saber mais"],
//     options: [
//         {
//             message: "Iniciar",
//             content: [
//                 "Novidades",
//                 "Consultas, pagamentos, boletos, etc",
//                 "Revisão"
//             ],
//             options: [
//                 {
//                     message: "Novidades",
//                     content: "Conteúdo de novidades"
//                 },
//                 {
//                     message: "Consultas, pagamentos, boletos, etc",
//                     content: "Conteúdo relacionado a consultas, pagamentos, boletos, etc."
//                 },
//                 {
//                     message: "Revisão",
//                     content: "Conteúdo de revisão"
//                 }
//             ]
//         },
//     ],
// };

let Routes = [
    {
        message: "Ajuda",
        previousMessage: "",
        content: ["Ficou perdido? Deixe-me te ajudar. Sobre qual assunto você deseja falar?"],
        options: [
            "Novidades",
            "Consultas",
            "Revisão"
        ]
    },
    {
        message: "Comecar",
        previousMessage: "",
        content: ["Olá, prazer! Meu nome é AutoJábot. \n Sou seu assistente digital para tirar todas as suas dúvidas" +
        " sobre a concenssionária com muito mais praticidade e agilidade. Estou disponível para você a qualquer mom" +
        "ento do dia! Diga INICIAR para saber mais"],
        options: [
            "Novidades",
            "Consultas",
            "Revisão"
        ]
    },
    {
        message: "Novidades",
        previousMessage: "Comecar",
        content: ["Conteudo Novidades"],
        options: [
            "Novidades",
            "Consultas",
            "Revisão"
        ]
    },
    {
        message: "Consultas",
        previousMessage: "Comecar",
        content: ["Conteudo Consultas"],
        options: [
            "Novidades",
            "Consultas",
            "Revisão"
        ]
    },
    {
        message: "Revisão",
        previousMessage: "Comecar",
        content: ["Conteúdo Revisão"],
        options: [
            "Novidades",
            "Consultas",
            "Revisão"
        ]
    }
];

export default Routes;
