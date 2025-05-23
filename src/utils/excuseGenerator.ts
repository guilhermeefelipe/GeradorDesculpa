
interface ExcuseTemplates {
  [key: string]: string[];
}

const excuseTemplates: string[] = [
  "Desculpe, mas tive um imprevisto familiar urgente que demandou minha atenção imediata.",
  "Infelizmente, meu celular ficou sem bateria e não consegui me comunicar a tempo.",
  "Houve um problema técnico com meu transporte que me impediu de cumprir o compromisso.",
  "Tive que lidar com uma emergência médica inesperada.",
  "Meu alarme não funcionou devido a uma queda de energia durante a madrugada.",
  "Recebi uma ligação urgente que não podia ignorar e isso atrasou todos os meus planos.",
  "Tive que ajudar um vizinho idoso em uma situação de emergência.",
  "Meu computador travou bem no momento crítico e perdi todo o progresso.",
  "Desculpe pelo atraso, mas enfrentei um engarrafamento excepcional devido a um acidente na via principal.",
  "Tive que resolver uma questão urgente de última hora que surgiu em casa.",
  "Meu filho/filha ficou doente durante a noite e precisei levá-lo ao médico esta manhã.",
  "Houve um problema com o transporte público que causou atrasos significativos na minha rota.",
  "Meu carro apresentou um defeito mecânico inesperado no caminho.",
  "Recebi uma ligação de emergência que demandou atenção imediata.",
  "Tive que aguardar um técnico para resolver um problema urgente em casa.",
  "Meu despertador não funcionou devido a uma queda de energia que afetou o bairro.",
  "Professor(a), tive problemas técnicos com meu computador que impediram a conclusão da tarefa.",
  "Minha internet ficou instável, dificultando o acesso aos materiais.",
  "Tive que ajudar minha família em uma situação de emergência que demandou muito tempo.",
  "Houve um mal-entendido com as datas e me organizei incorretamente.",
  "Meu arquivo corrompeu e perdi todo o progresso, tendo que recomeçar do zero."
];

export const generateExcuse = (problem: string): string => {
  const randomTemplate = excuseTemplates[Math.floor(Math.random() * excuseTemplates.length)];
  
  // Analyze the problem for context
  const problemLower = problem.toLowerCase();
  
  // Add some personalization based on the problem
  let personalizedExcuse = randomTemplate;
  
  // Add specific details based on common problem keywords
  if (problemLower.includes('atraso') || problemLower.includes('atrasado')) {
    personalizedExcuse += " Peço sinceras desculpas pelo transtorno causado.";
  } else if (problemLower.includes('esqueci') || problemLower.includes('esqueceu')) {
    personalizedExcuse += " Sei que não é desculpa, mas garanto que não se repetirá.";
  } else if (problemLower.includes('não consegui') || problemLower.includes('impossível')) {
    personalizedExcuse += " Espero que compreendam a situação.";
  } else {
    personalizedExcuse += " Agradeço a compreensão.";
  }
  
  return personalizedExcuse;
};
