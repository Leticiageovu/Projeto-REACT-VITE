const opcoesDeTransmissao = [
    {
    id: 1,
    tipo: 'Manual',
    marchas: 5,
    descricao: 'Transmissão manual de 5 velocidades',
    preco: 'R$ 2.000,00 (padrão)',
    disponivel: true
},
{
    id: 2,
    tipo: 'Manual',
    marchas: 6,
    descricao: 'Transmissão manual de 6 velocidades com embreagem reforçada',
    preco: 'R$ 1.500,00',
    disponivel: true
},
{
    id: 3,
    tipo: 'Automático',
    marchas: 6,
    descricao: 'Transmissão automática de 6 velocidades com modo sequencial',
    preco: 'R$ 6.800,00',
    disponivel: true
},
{
    id: 4,
    tipo: 'CVT',
    descricao: 'Transmissão continuamente variável com 7 marchas simuladas',
    preco: 'R$ 7.500,00',
    disponivel: true
},
{
    id: 5,
    tipo: 'DCT',
    marchas: 7,
    descricao: 'Transmissão de dupla embreagem com 7 velocidades e paddle shifts',
    preco: 'R$ 9.300,00',
    disponivel: false
}
];

  module.exports = opcoesDeTransmissao;