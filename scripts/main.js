const CONTATO = {
    instagram: 'https://www.instagram.com/portilla_gabrel/',
    whatsapp: 'https://wa.me/5511999999999?text=Olá!%20Vim%20pela%20Calculadora%20de%20Equivalentes.%0A%0AGostaria%20de%20solicitar%20orientação%20nutricional%20para%20minha%20dieta.',
    email: 'mailto:seuemail@exemplo.com?subject=Orientação%20Nutricional&body=Olá!%20Vim%20pela%20Calculadora%20de%20Equivalentes.%20Gostaria%20de%20solicitar%20orientação%20nutricional%20para%20minha%20dieta.'
};

const dados = {
  "Grupos": {
    "Feijão": {
      "kcal": 70,
      "alimentos": [
        {"alimento": "Feijão", "porcao": "80g", "medida": "1 Concha Pequena"},
        {
          "alimento": "Lentilha",
          "porcao"  : "80g",
          "medida"  : "1 Concha Pequena"
        },
        {
          "alimento": "Soja cozida",
          "porcao"  : "50g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Grão de bico",
          "porcao"  : "40g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Ervilha Seca",
          "porcao"  : "80g",
          "medida"  : "4 Colheres de Sopa"
        }
      ]
    },
    "Arroz": {
      "kcal": 70,
      "alimentos": [
        {
          "alimento": "Arroz Branco (cozido)",
          "porcao"  : "50g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Arroz Integral (cozido)",
          "porcao"  : "60g",
          "medida"  : "3 Colheres de Sopa Rasas"
        },
        {
          "alimento": "Batata Inglesa",
          "porcao"  : "80g",
          "medida"  : "1 Unidade Média"
        },
        {
          "alimento": "Batata doce",
          "porcao"  : "90g",
          "medida"  : "1 Fatia Média"
        },
        {
          "alimento": "Aipim",
          "porcao": "60g",
          "medida": "1 Pedaço Pequeno"
        },
        {
          "alimento": "Farofa",
          "porcao": "45g",
          "medida": "1 Colher de Sopa"
        },
        {
          "alimento": "Massa/Macarrão",
          "porcao"  : "50g",
          "medida"  : "1 Colher de Servir"
        },
        {
          "alimento": "Polenta",
          "porcao": "50g",
          "medida": "1 Fatia Fina"},
        {
          "alimento": "Polenta Mole",
          "porcao"  : "70g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Purê de Batata",
          "porcao"  : "55g",
          "medida"  : "1 Colher de Sopa"
        },
        {
          "alimento": "Tortei",
          "porcao"  : "60g",
          "medida"  : "2 Unidades Pequenas"
        },
        {
          "alimento": "Capeleti",
          "porcao"  : "60g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Nhoque",
          "porcao"  : "60g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Sushi",
          "porcao": "40g",
          "medida": "2 Unidades"
        }
      ]
    },
    "Leite": {
      "kcal": 120,
      "alimentos": [
        {"alimento": "Leite integral", "porcao": "200ml", "medida": "1 Copo"},
        {
          "alimento": "Leite desnatado",
          "porcao"  : "350ml",
          "medida"  : "1 Copo e ½"
        },
        {
          "alimento": "Leite semidesnatado",
          "porcao"  : "250ml",
          "medida"  : "1 Copo"
        },
        {
          "alimento": "Leite em pó (integral)",
          "porcao"  : "32g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Leite em pó (desnatado)",
          "porcao"  : "45g",
          "medida"  : "3 Colheres de Sopa"
        },
        {"alimento": "Iogurte natural", "porcao": "170ml", "medida": "1 Pote"},
        {"alimento": "Iogurte com sabor", "porcao": "120ml", "medida": "1 Pote"}
      ]
    },
    "Queijo": {
      "kcal": 60,
      "alimentos": [
        {"alimento": "Ricota", "porcao": "40g", "medida": "1 Fatia Média"},
        {
          "alimento": "Queijo magro",
          "porcao"  : "15g",
          "medida"  : "1 Fatia Fina"
        },
        {
          "alimento": "Queijo Minas Frescal",
          "porcao"  : "23g",
          "medida"  : "1 Fatia Pequena"
        },
        {
          "alimento": "Queijo Minas Meia Cura",
          "porcao"  : "18g",
          "medida"  : "1 Fatia Pequena"
        },
        {
          "alimento": "Queijo Mussarela",
          "porcao"  : "18g",
          "medida"  : "1 Fatia Média"
        },
        {
          "alimento": "Queijo Parmesão",
          "porcao"  : "13g",
          "medida"  : "1 Colher de Sopa Cheia"
        },
        {
          "alimento": "Queijo Prato",
          "porcao"  : "12g",
          "medida"  : "1 Fatia Pequena"
        }
      ]
    },
    "Carne": {
      "kcal": 150,
      "alimentos": [
        {
          "alimento": "Carne de gado",
          "porcao"  : "100g",
          "medida"  : "1 Bife Médio"
        },
        {
          "alimento": "Acém sem gordura",
          "porcao"  : "70g",
          "medida"  : "2 Pedaços Médios"
        },
        {
          "alimento": "Contrafilé sem gordura",
          "porcao"  : "77g",
          "medida"  : "2 Pedaços Médios"
        },
        {
          "alimento": "Contrafilé com gordura",
          "porcao"  : "54g",
          "medida"  : "1 Pedaço Grande"
        },
        {"alimento": "Costela", "porcao": "40g", "medida": "1 Pedaço Médio"},
        {
          "alimento": "Coxão duro sem gordura",
          "porcao"  : "69g",
          "medida"  : "2 Pedaços Médios"
        },
        {
          "alimento": "Coxão mole sem gordura",
          "porcao"  : "68g",
          "medida"  : "2 Pedaços Médios"
        },
        {"alimento": "Cupim", "porcao": "45g", "medida": "1 Pedaço Médio"},
        {
          "alimento": "Filé Mignon",
          "porcao"  : "68g",
          "medida"  : "2 Pedaços Médios"
        },
        {
          "alimento": "Fraldinha com gordura",
          "porcao"  : "44g",
          "medida"  : "1 Pedaço Médio"
        },
        {
          "alimento": "Miolo de Alcatra sem gordura",
          "porcao"  : "62g",
          "medida"  : "1 Pedaço Grande"
        },
        {
          "alimento": "Músculo sem gordura",
          "porcao"  : "77g",
          "medida"  : "2 Pedaços Médios"
        },
        {
          "alimento": "Paleta sem gordura",
          "porcao"  : "77g",
          "medida"  : "2 Pedaços Médios"
        },
        {
          "alimento": "Patinho sem gordura",
          "porcao"  : "100g",
          "medida"  : "3 Pedaços Médios"
        },
        {
          "alimento": "Peito bovino sem gordura",
          "porcao"  : "44g",
          "medida"  : "1 Pedaço Médio"
        },
        {
          "alimento": "Picanha sem gordura",
          "porcao"  : "63g",
          "medida"  : "1 Pedaço Grande"
        },
        {
          "alimento": "Carne de galinha",
          "porcao"  : "70g",
          "medida"  : "1 Pedaço Pequeno"
        },
        {
          "alimento": "Carne Moída",
          "porcao"  : "60g",
          "medida"  : "4 Colheres de Sopa"
        },
        {
          "alimento": "Peixe cação posta",
          "porcao"  : "150g",
          "medida"  : "1 Posta Pequena"
        },
        {
          "alimento": "Filé de merluza",
          "porcao"  : "120g",
          "medida"  : "1 Filé Médio"
        },
        {"alimento": "Atum em óleo", "porcao": "99g", "medida": "½ Lata"},
        {"alimento": "Sardinha em óleo", "porcao": "50g", "medida": "½ Lata"},
        {"alimento": "Salmão sem pele", "porcao": "50g", "medida": "½ Filé"},
        {
          "alimento": "Frango (peito sem pele)",
          "porcao"  : "120g",
          "medida"  : "1 Filé de Peito"
        },
        {
          "alimento": "Coração de frango",
          "porcao"  : "80g",
          "medida"  : "10 Unidades"
        },
        {
          "alimento": "Coxa de frango M (sem pele)",
          "porcao"  : "80g",
          "medida"  : "2 Unidades"
        },
        {
          "alimento": "Sobrecoxa frango (sem pele)",
          "porcao"  : "65g",
          "medida"  : "1 Unidade"
        },
        {
          "alimento": "Frango desfiado (sem pele)",
          "porcao"  : "120g",
          "medida"  : "6 Colheres de Sopa"
        },
        {
          "alimento": "Frango passarinho",
          "porcao"  : "64g",
          "medida"  : "4 Unidades"
        },
        {
          "alimento": "Fígado de galinha M",
          "porcao"  : "90g",
          "medida"  : "3 Unidades"
        },
        {
          "alimento": "Almôndegas",
          "porcao"  : "60g",
          "medida"  : "2 Unidades Médias"
        },
        {
          "alimento": "Atum sem óleo",
          "porcao"  : "60g",
          "medida"  : "4 Colheres de Sopa"
        },
        {"alimento": "Língua", "porcao": "70g", "medida": "1 Fatia Média"},
        {
          "alimento": "Charque",
          "porcao"  : "50g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Miúdos de frango",
          "porcao"  : "60g",
          "medida"  : "1 Colher de Sopa Cheia"
        },
        {
          "alimento": "Hambúrguer",
          "porcao"  : "80g",
          "medida"  : "1 Unidade Média"
        },
        {
          "alimento": "Ovo de galinha (cozido/frito)",
          "porcao"  : "100g",
          "medida"  : "2 Unidades"
        }
      ]
    },
    "Proteína": {
      "kcal": 100,
      "alimentos": [
        {
          "alimento": "Hambúrguer de lentilha",
          "porcao"  : "110g",
          "medida"  : "1 Unidade"
        },
        {
          "alimento": "Hambúrguer de feijão",
          "porcao"  : "100g",
          "medida"  : "1 Unidade"
        },
        {
          "alimento": "Hambúrguer de grão de bico",
          "porcao"  : "60g",
          "medida"  : "1 Unidade"
        },
        {
          "alimento": "Hambúrguer de soja",
          "porcao"  : "60g",
          "medida"  : "1 Unidade"
        },
        {
          "alimento": "Hambúrguer de ervilha",
          "porcao"  : "60g",
          "medida"  : "1 Unidade"
        },
        {
          "alimento": "Ovo de galinha (cozido/omelete)",
          "porcao"  : "50g",
          "medida"  : "1 Unidade"
        },
        {
          "alimento": "Proteína de soja escura",
          "porcao"  : "50g",
          "medida"  : "1 Xícara"
        }
      ]
    },
    "Frutas": {
      "kcal": 70,
      "alimentos": [
        {
          "alimento": "Abacate amassado",
          "porcao"  : "45g",
          "medida"  : "1 ½ Colher de Sopa"
        },
        {"alimento": "Abacaxi", "porcao": "130g", "medida": "1 Fatia Grande"},
        {"alimento": "Laranja", "porcao": "130g", "medida": "1 Unidade"},
        {"alimento": "Mamão formosa", "porcao": "160g", "medida": "1 Fatia"},
        {"alimento": "Mamão papaia", "porcao": "140g", "medida": "½ Unidade"},
        {"alimento": "Morango", "porcao": "240g", "medida": "10 Unidades"},
        {"alimento": "Goiaba", "porcao": "95g", "medida": "½ Unidade"},
        {"alimento": "Ameixa preta", "porcao": "30g", "medida": "3 Unidades"},
        {
          "alimento": "Ameixa vermelha",
          "porcao"  : "140g",
          "medida"  : "4 Unidades"
        },
        {"alimento": "Caqui", "porcao": "113g", "medida": "1 Unidade Pequena"},
        {
          "alimento": "Uva",
          "porcao"  : "100g",
          "medida"  : "1 Cacho Pequeno (8 unid)"
        },
        {"alimento": "Banana", "porcao": "80g", "medida": "1 Unidade"},
        {"alimento": "Maçã", "porcao": "130g", "medida": "1 Unidade"},
        {"alimento": "Melão", "porcao": "230g", "medida": "2 Fatias"},
        {"alimento": "Manga", "porcao": "100g", "medida": "1 Unidade Média"},
        {"alimento": "Pêssego", "porcao": "220g", "medida": "2 Unidades"},
        {"alimento": "Bergamota", "porcao": "140g", "medida": "1 Unidade"},
        {"alimento": "Melancia", "porcao": "290g", "medida": "2 Fatias"},
        {"alimento": "Pêra", "porcao": "130g", "medida": "1 Unidade"},
        {"alimento": "Kiwi", "porcao": "154g", "medida": "2 Unidades Médias"},
        {
          "alimento": "Salada de frutas",
          "porcao"  : "100g",
          "medida"  : "½ Xícara"
        },
        {"alimento": "Suco de laranja", "porcao": "187ml", "medida": "¾ Copo"},
        {"alimento": "Suco de abacaxi", "porcao": "125ml", "medida": "½ Copo"}
      ]
    },
    "Gorduras": {
      "kcal": 72,
      "alimentos": [
        {
          "alimento": "Margarina ou Manteiga",
          "porcao"  : "8g",
          "medida"  : "1 Colher de Chá"
        },
        {
          "alimento": "Margarina ou Manteiga light",
          "porcao"  : "20g",
          "medida"  : "2 Colheres de Chá"
        },
        {
          "alimento": "Maionese",
          "porcao"  : "15g",
          "medida"  : "1 Colher de Sopa"
        },
        {
          "alimento": "Maionese light",
          "porcao"  : "25g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Requeijão",
          "porcao"  : "30g",
          "medida"  : "1 Colher de Sopa"
        },
        {
          "alimento": "Requeijão light",
          "porcao"  : "50g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Creme de leite ou Nata",
          "porcao"  : "20g",
          "medida"  : "2 Colheres de Sobremesa"
        },
        {
          "alimento": "Pasta de amendoim",
          "porcao"  : "15g",
          "medida"  : "1 Colher de Sopa"
        },
        {
          "alimento": "Óleo vegetal",
          "porcao"  : "8ml",
          "medida"  : "1 Colher de Sopa"
        }
      ]
    },
    "Pão": {
      "kcal": 70,
      "alimentos": [
        {"alimento": "Pão de centeio", "porcao": "22g", "medida": "1 Fatia"},
        {"alimento": "Pão caseiro", "porcao": "25g", "medida": "½ Fatia"},
        {"alimento": "Pão de forma", "porcao": "25g", "medida": "1 Fatia"},
        {
          "alimento": "Pão francês (cacetinho)",
          "porcao"  : "25g",
          "medida"  : "½ Unidade"
        },
        {"alimento": "Pão light", "porcao": "32g", "medida": "2 Fatias"},
        {"alimento": "Pão integral", "porcao": "25g", "medida": "1 Fatia"},
        {"alimento": "Pão sírio", "porcao": "25g", "medida": "½ Unidade"},
        {"alimento": "Bisnaguinha", "porcao": "20g", "medida": "1 Unidade"},
        {"alimento": "Pão de queijo", "porcao": "25g", "medida": "1 Unidade"},
        {
          "alimento": "Bolacha de aveia e mel",
          "porcao"  : "16g",
          "medida"  : "2 Unidades"
        },
        {
          "alimento": "Bolacha água e sal",
          "porcao"  : "20g",
          "medida"  : "4 Unidades"
        },
        {
          "alimento": "Bolo simples",
          "porcao"  : "30g",
          "medida"  : "½ Pedaço Pequeno"
        },
        {"alimento": "Cereal matinal", "porcao": "20g", "medida": "½ Xícara"},
        {"alimento": "Aveia", "porcao": "18g", "medida": "1 Colher de Sopa"},
        {"alimento": "Granola", "porcao": "15g", "medida": "1 Colher de Sopa"},
        {"alimento": "Pinhão", "porcao": "50g", "medida": "10 Unidades"},
        {"alimento": "Tapioca", "porcao": "20g", "medida": "1 Colher de Sopa"}
      ]
    },
    "Oleaginosas": {
      "kcal": 60,
      "alimentos": [
        {"alimento": "Amêndoa", "porcao": "10g", "medida": "6 Unidades"},
        {"alimento": "Nozes", "porcao": "10g", "medida": "2 Unidades"},
        {"alimento": "Amendoim", "porcao": "11g", "medida": "11 Unidades"},
        {
          "alimento": "Castanha de caju",
          "porcao"  : "10g",
          "medida"  : "4 Unidades"
        },
        {
          "alimento": "Castanha do Pará",
          "porcao"  : "8g",
          "medida"  : "2 Unidades"
        },
        {"alimento": "Pistache", "porcao": "10g", "medida": "8 Unidades"}
      ]
    },
    "Bebidas Alcoólicas": {
      "kcal": 150,
      "alimentos": [
        {"alimento": "Cerveja",    "porcao": "350ml", "medida": "1 Lata"   },
        {"alimento": "Vinho",      "porcao": "150ml", "medida": "1 Taça"   },
        {"alimento": "Whisky",     "porcao": "50ml",  "medida": "1 Dose"   },
        {"alimento": "Caipirinha", "porcao": "75ml",  "medida": "½ Copo"   },
        {"alimento": "Espumante",  "porcao": "125ml", "medida": "1 Taça"   },
        {"alimento": "Vodka",      "porcao": "40ml",  "medida": "2 Cálices"}
      ]
    },
    "Fibras": {
      "kcal": 100,
      "alimentos": [
        {
          "alimento": "Aveia (flocos)",
          "porcao"  : "27g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Aveia (farinha)",
          "porcao"  : "27g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Linhaça (semente)",
          "porcao"  : "22g",
          "medida"  : "1 ½ Colheres de Sopa"
        },
        {
          "alimento": "Granola",
          "porcao"  : "30g",
          "medida"  : "2 Colheres de Sopa"
        },
        {
          "alimento": "Gergelim",
          "porcao"  : "15g",
          "medida"  : "1 Colher de Sopa"
        },
        {"alimento": "Chia", "porcao": "22g", "medida": "2 Colheres de Sopa"},
        {
          "alimento": "Amaranto",
          "porcao"  : "45g",
          "medida"  : "3 Colheres de Sopa Cheias"
        },
        {
          "alimento": "Girassol (semente)",
          "porcao"  : "21g",
          "medida"  : "3 Colheres de Sopa"
        },
        {"alimento": "Quinoa", "porcao": "30g", "medida": "2 Colheres de Sopa"}
      ]
    }
  }
};

// Funções auxiliares para formatação de números
function formatarNumero(numero, casasDecimais = 1) {
  return parseFloat(numero.toFixed(casasDecimais));
}

function extrairValorNumerico(texto) {
  const match = texto.match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

function extrairUnidade(texto) {
  if (texto.includes('ml')) return 'ml';
  if (texto.includes('g')) return 'g';
  return ''; // retorna vazio se não encontrar unidade
}

function calcularMedidaProporcional(medidaOriginal, fator) {
  // Procura por números (inteiros ou decimais) seguidos opcionalmente por frações
  const regex = /(\d+(?:\.\d+)?)(?:\s*\/\s*(\d+))?/g;
  let medida = medidaOriginal;
  let match;
  
  while ((match = regex.exec(medidaOriginal)) !== null) {
    const numero = parseFloat(match[1]);
    const denominador = match[2] ? parseInt(match[2]) : 1;
    
    // Calcular o valor proporcional
    let valorProporcional;
    if (denominador > 1) {
      // Se for uma fração, mantém como fração simplificada
      valorProporcional = numero / denominador * fator;
    } else {
      // Se for número inteiro ou decimal
      valorProporcional = numero * fator;
    }
    
    // Formatar o resultado (simplificar frações se possível)
    let valorFormatado;
    if (valorProporcional < 1 && valorProporcional > 0) {
      // Para valores menores que 1, mostrar como fração
      const fracao = simplificarFracao(valorProporcional);
      valorFormatado = fracao.numerador === 1 && fracao.denominador === 1 ? 
        '1' : `${fracao.numerador}/${fracao.denominador}`;
    } else if (Math.abs(valorProporcional - Math.round(valorProporcional)) < 0.1) {
      // Para valores próximos de inteiros
      valorFormatado = Math.round(valorProporcional).toString();
    } else {
      // Para decimais, mostrar com 1 casa decimal
      valorFormatado = valorProporcional.toFixed(1);
    }
    
    // Substituir o número original pelo calculado
    medida = medida.replace(match[0], valorFormatado);
  }
  
  return medida;
}

// Função para simplificar frações
function simplificarFracao(decimal, tolerancia = 0.01) {
  const denominadoresComuns = [2, 3, 4, 5, 6, 8, 10, 12, 16];
  
  for (let denom of denominadoresComuns) {
    const numer = Math.round(decimal * denom);
    const valorAproximado = numer / denom;
    
    if (Math.abs(decimal - valorAproximado) < tolerancia) {
      // Simplificar a fração se possível
      let mdc = calcularMDC(numer, denom);
      return {
        numerador: numer / mdc,
        denominador: denom / mdc
      };
    }
  }
  
  // Se não encontrar fração comum, retorna como decimal
  return {
    numerador: Math.round(decimal * 100),
    denominador: 100
  };
}

// Função para calcular MDC (Máximo Divisor Comum)
function calcularMDC(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  while(b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function preencherGrupos() {
  const grupoSelect = document.getElementById("grupo");
  const alimentoSelect = document.getElementById("alimento");
  
  grupoSelect.innerHTML = '<option value="">Selecione um grupo...</option>';

  Object.keys(dados.Grupos).forEach(grupo => {
    let option = document.createElement("option");
    option.value = grupo;
    option.textContent = grupo;
    grupoSelect.appendChild(option);
  });

  // Configurar evento de change
  grupoSelect.addEventListener("change", function() {
    if (this.value) {
      alimentoSelect.disabled = false;
      atualizarAlimentos();
    } else {
      alimentoSelect.disabled = true;
      alimentoSelect.innerHTML = '<option value="">Selecione um grupo primeiro</option>';
    }
  });

  // Não selecionar Feijão automaticamente - deixar usuário escolher
  // Ou se quiser manter Feijão como default:
  grupoSelect.value = "Feijão";
  alimentoSelect.disabled = false;
  atualizarAlimentos();
}

function atualizarAlimentos() {
  const grupo = document.getElementById("grupo").value;
  const alimentoSelect = document.getElementById("alimento");
  
  if (!grupo) {
    alimentoSelect.innerHTML = '<option value="">Selecione um grupo primeiro</option>';
    return;
  }
  
  alimentoSelect.innerHTML = '<option value="">Selecione um alimento...</option>';
  
  dados.Grupos[grupo].alimentos.forEach(item => {
    let option = document.createElement("option");
    option.value = item.alimento;
    option.textContent = item.alimento;
    alimentoSelect.appendChild(option);
  });
}

function buscarEquivalentes() {
  const grupo = document.getElementById("grupo").value;
  const alimento = document.getElementById("alimento").value;
  const quantidadeInput = document.getElementById("quantidade").value;
  const resultadoDiv = document.getElementById("resultado");

  // Validação básica
  if (!grupo || !alimento) {
    resultadoDiv.innerHTML = `<p class="erro">Por favor, selecione um grupo e um alimento.</p>`;
    return;
  }

  const alimentos = dados.Grupos[grupo].alimentos;
  const kcalBase = dados.Grupos[grupo].kcal;

  const selecionado = alimentos.find(item => item.alimento === alimento);
  const equivalentes = alimentos.filter(item => item.alimento !== alimento);

  // Extrair valores numéricos
  const porcaoSelecionada = extrairValorNumerico(selecionado.porcao);
  const unidadeSelecionada = extrairUnidade(selecionado.porcao);
  
  // Usar quantidade informada ou porção padrão
  let qtdConsumida;
  if (quantidadeInput && !isNaN(parseFloat(quantidadeInput))) {
    qtdConsumida = parseFloat(quantidadeInput);
  } else {
    qtdConsumida = porcaoSelecionada;
  }

  // Fator de equivalência
  const fator = qtdConsumida / porcaoSelecionada;
  
  // Calcular valores formatados
  const fatorFormatado = formatarNumero(fator, 1);
  const kcalTotais = formatarNumero(kcalBase * fator, 1);
  const qtdConsumidaFormatada = formatarNumero(qtdConsumida, 1);
  
  // Formatar para exibição
  resultadoDiv.innerHTML = `<div class="alimento-principal">
    <h3><i class="fas fa-star"></i> Alimento escolhido:</h3>
    <p><strong>${selecionado.alimento}</strong> - ${qtdConsumidaFormatada}${unidadeSelecionada} (≈ ${fatorFormatado} porções padrão)</p>
    <p class="kcal-info">Valor calórico: <strong>${kcalTotais} kcal</strong></p>
  </div>
  <div class="equivalentes-list">
    <h3><i class="fas fa-exchange-alt"></i> Equivalentes (${kcalTotais} kcal cada):</h3>`;

  equivalentes.forEach(eq => {
    const porcaoEqValor = extrairValorNumerico(eq.porcao);
    const unidadeEq = extrairUnidade(eq.porcao);
    const porcaoEquivalente = formatarNumero(porcaoEqValor * fator, 1);
    
    // Calcular medida proporcional
    const medidaProporcional = calcularMedidaProporcional(eq.medida, fator);
    
    resultadoDiv.innerHTML += `
    <div class="equivalente-item">
      <p><strong>${eq.alimento}</strong> - ${porcaoEquivalente}${unidadeEq}</p>
      <p class="medida"><i class="fas fa-utensil-spoon"></i> Medida: ${medidaProporcional}</p>
    </div>`;
  });
  
  resultadoDiv.innerHTML += '</div>';
}

// Inicializa ao carregar a página
window.onload = preencherGrupos;