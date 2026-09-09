// Banco de dados de filmes com Avaliação de 1.0 a 5.0 (Pior ao Melhor)
const filmes = {
  romance: [
    {
      titulo: "Como Se Fosse a Primeira Vez",
      ano: 2004,
      nota: 3.4,
      diretor: "Peter Segal",
      plataformas: "Max, Paramount+",
      sinopse: "Um veterinário no Havaí se apaixona por uma mulher que sofre de perda de memória recente, precisando reconquistá-la todos os dias do zero."
    },
    {
      titulo: "Diário de uma Paixão",
      ano: 2004,
      nota: 3.9,
      diretor: "Nick Cassavetes",
      plataformas: "Max",
      sinopse: "Um idoso lê para uma colega de clínica a intensa história de amor vivida por dois jovens nos anos 1940, separados por diferenças sociais e pela guerra."
    },
    {
      titulo: "Orgulho e Preconceito",
      ano: 2005,
      nota: 3.9,
      diretor: "Joe Wright",
      plataformas: "Netflix, Prime Video",
      sinopse: "Elizabeth Bennet lida com a pressão social para se casar no século XIX. Quando conhece o reservado Sr. Darcy, surge um intenso conflito entre orgulho de classe e preconceito."
    },
    {
      titulo: "Questão de Tempo",
      ano: 2013,
      nota: 3.9,
      diretor: "Richard Curtis",
      plataformas: "Netflix, Telecine",
      sinopse: "Tim descobre que os homens de sua família podem viajar no tempo. Ele decide usar essa habilidade para encontrar um grande amor, mas aprende lições profundas sobre a vida."
    },
    {
      titulo: "La La Land: Cantando Estações",
      ano: 2016,
      nota: 4.0,
      diretor: "Damien Chazelle",
      plataformas: "Prime Video, Max",
      sinopse: "Um pianista de jazz e uma jovem atriz apaixonam-se em Los Angeles enquanto perseguem suas carreiras, precisando equilibrar o amor com suas maiores ambições."
    }
  ],
  terror: [
    {
      titulo: "Hereditário",
      ano: 2018,
      nota: 3.65,
      diretor: "Ari Aster",
      plataformas: "Max, Prime Video",
      sinopse: "Após a morte da matriarca, uma família começa a desvendar segredos obscuros sobre seus ancestrais, envolvendo-se num destino aterrorizante."
    },
    {
      titulo: "Invocação do Mal",
      ano: 2013,
      nota: 3.75,
      diretor: "James Wan",
      plataformas: "Max",
      sinopse: "Investigadores paranormais famosos ajudam uma família que se mudou para uma fazenda isolada assombrada por uma entidade maligna."
    },
    {
      titulo: "Corra!",
      ano: 2017,
      nota: 3.9,
      diretor: "Jordan Peele",
      plataformas: "Prime Video, Telecine",
      sinopse: "Um jovem fotógrafo visita a família de sua namorada e descobre uma trama perturbadora por trás do comportamento receptivo dos moradores."
    },
    {
      titulo: "O Iluminado",
      ano: 1980,
      nota: 4.2,
      diretor: "Stanley Kubrick",
      plataformas: "Max",
      sinopse: "Um escritor aceita ser caseiro de um hotel isolado no inverno. O isolamento e forças sobrenaturais começam a afetar gravemente sua sanidade."
    }
  ],
  acao: [
    {
      titulo: "John Wick: De Volta ao Jogo",
      ano: 2014,
      nota: 3.7,
      diretor: "Chad Stahelski",
      plataformas: "Prime Video, Telecine",
      sinopse: "Um ex-assassino aposentado retorna ao submundo do crime para caçar os gangsters que destruíram o que ele tinha de mais precioso."
    },
    {
      titulo: "Mad Max: Estrada da Fúria",
      ano: 2015,
      nota: 4.05,
      diretor: "George Miller",
      plataformas: "Max, Prime Video",
      sinopse: "Em um futuro pós-apocalíptico, Max se une à Imperatriz Furiosa em uma fuga insana pelo deserto para libertar prisioneiras de um tirano cruel."
    },
    {
      titulo: "Batman: O Cavaleiro das Trevas",
      ano: 2008,
      nota: 4.5,
      diretor: "Christopher Nolan",
      plataformas: "Max",
      sinopse: "Batman tenta manter a ordem em Gotham, mas precisa enfrentar o caos psicológico e anárquico provocado pelo terrível Coringa."
    }
  ],
  ficcao: [
    {
      titulo: "Matrix",
      ano: 1999,
      nota: 4.35,
      diretor: "Lana e Lilly Wachowski",
      plataformas: "Max",
      sinopse: "Um programador descobre que a realidade em que vive é uma simulação computadorizada controlada por máquinas inteligentes."
    },
    {
      titulo: "Interstellar",
      ano: 2014,
      nota: 4.35,
      diretor: "Christopher Nolan",
      plataformas: "Max, Prime Video",
      sinopse: "Com a Terra à beira do colapso, exploradores espaciais atravessam um buraco de minhoca no espaço em busca de um novo lar para a humanidade."
    },
    {
      titulo: "A Origem",
      ano: 2010,
      nota: 4.4,
      diretor: "Christopher Nolan",
      plataformas: "Max",
      sinopse: "Um ladrão especializado em roubar segredos do subconsciente através dos sonhos aceita a missão de implantar uma ideia na mente de um empresário."
    }
  ],
  comedia: [
    {
      titulo: "As Branquelas",
      ano: 2004,
      nota: 2.9,
      diretor: "Keenen Ivory Wayans",
      plataformas: "Netflix, Prime Video",
      sinopse: "Dois agentes do FBI disfarçam-se como duas herdeiras milionárias para evitar um sequestro, gerando situações absurdamente cômicas."
    },
    {
      titulo: "Superbad: É Hoje",
      ano: 2007,
      nota: 3.8,
      diretor: "Greg Mottola",
      plataformas: "Netflix",
      sinopse: "Dois jovens tentam comprar bebidas para uma festa no final do ano letivo, enfrentando uma sequência de imprevistos inacreditáveis."
    },
    {
      titulo: "Se Beber, Não Case!",
      ano: 2009,
      nota: 3.85,
      diretor: "Todd Phillips",
      plataformas: "Max",
      sinopse: "Três amigos acordam em Las Vegas sem memória da noite anterior e precisam localizar o noivo desaparecido antes do casamento."
    }
  ],
  animacao: [
    {
      titulo: "Shrek",
      ano: 2001,
      nota: 3.95,
      diretor: "Andrew Adamson, Vicky Jenson",
      plataformas: "Netflix, Prime Video",
      sinopse: "Um ogro ranzinza tem seu pântano invadido por criaturas de contos de fadas e faz um acordo com um rei para resgatar uma princesa."
    },
    {
      titulo: "Divertida Mente",
      ano: 2015,
      nota: 4.05,
      diretor: "Pete Docter",
      plataformas: "Disney+",
      sinopse: "Dentro da mente de uma garota de 11 anos, emoções como Alegria e Tristeza precisam aprender a trabalhar juntas."
    },
    {
      titulo: "Homem-Aranha: No Aranhaverso",
      ano: 2018,
      nota: 4.2,
      diretor: "Bob Persichetti, Peter Ramsey",
      plataformas: "Prime Video, Disney+",
      sinopse: "Miles Morales se torna o novo Homem-Aranha e encontra outras versões do herói vindas de universos paralelos."
    }
  ],
  suspense: [
    {
      titulo: "Garota Exemplar",
      ano: 2014,
      nota: 4.05,
      diretor: "David Fincher",
      plataformas: "Max, Disney+",
      sinopse: "No dia do seu aniversário de casamento, uma mulher desaparece e seu marido se torna o principal suspeito."
    },
    {
      titulo: "Ilha do Medo",
      ano: 2010,
      nota: 4.1,
      diretor: "Martin Scorsese",
      plataformas: "Netflix, Paramount+",
      sinopse: "Um detetive investiga o desaparecimento de uma paciente em um hospital psiquiátrico isolado numa ilha."
    },
    {
      titulo: "O Silêncio dos Inocentes",
      ano: 1991,
      nota: 4.3,
      diretor: "Jonathan Demme",
      plataformas: "Prime Video",
      sinopse: "Uma agente do FBI precisa da ajuda de um psiquiatra canibal preso para capturar um perigoso serial killer."
    }
  ],
  fantasia: [
    {
      titulo: "Harry Potter e a Pedra Filosofal",
      ano: 2001,
      nota: 3.8,
      diretor: "Chris Columbus",
      plataformas: "Max",
      sinopse: "Um garoto órfão descobre que é um bruxo e é convidado a estudar na Escola de Magia de Hogwarts."
    },
    {
      titulo: "O Senhor dos Anéis: O Retorno do Rei",
      ano: 2003,
      nota: 4.5,
      diretor: "Peter Jackson",
      plataformas: "Max, Prime Video",
      sinopse: "A batalha final pela Terra-média se aproxima enquanto Frodo e Sam chegam ao Monte da Perdição para destruir o Anel."
    }
  ],
  drama: [
    {
      titulo: "A Procura da Felicidade",
      ano: 2006,
      nota: 4.0,
      diretor: "Gabriele Muccino",
      plataformas: "Netflix, Max",
      sinopse: "Enfrentando sérias dificuldades financeiras, um pai tenta construir um futuro melhor para ele e seu filho."
    },
    {
      titulo: "Um Sonho de Liberdade",
      ano: 1994,
      nota: 4.65,
      diretor: "Frank Darabont",
      plataformas: "Max",
      sinopse: "Condenado injustamente por um crime, um homem cultiva uma amizade com outro detento ao longo de décadas na prisão."
    }
  ],
  aventura: [
    {
      titulo: "Jumanji: Bem-Vindo à Selva",
      ano: 2017,
      nota: 3.5,
      diretor: "Jake Kasdan",
      plataformas: "Netflix, Max",
      sinopse: "Quatro adolescentes encontram um videogame antigo e são sugados para dentro do jogo como avatares."
    },
    {
      titulo: "Jurassic Park",
      ano: 1993,
      nota: 4.1,
      diretor: "Steven Spielberg",
      plataformas: "Prime Video, Telecine",
      sinopse: "Um parque temático com dinossauros clonados entra em colapso e coloca os visitantes em perigo."
    }
  ],
  musical: [
    {
      titulo: "Mamma Mia!",
      ano: 2008,
      nota: 3.2,
      diretor: "Phyllida Lloyd",
      plataformas: "Netflix, Telecine",
      sinopse: "Uma noiva convida três homens do passado de sua mãe para descobrir quem é seu pai verdadeiro."
    },
    {
      titulo: "Whiplash: Em Busca da Perfeição",
      ano: 2014,
      nota: 4.25,
      diretor: "Damien Chazelle",
      plataformas: "Netflix, Max",
      sinopse: "Um jovem baterista entra em um conservatório de elite e é pressionado até o limite por um mestre implacável."
    }
  ],
  documentario: [
    {
      titulo: "O Dilema das Redes",
      ano: 2020,
      nota: 3.8,
      diretor: "Jeff Orlowski",
      plataformas: "Netflix",
      sinopse: "Especialistas alertam sobre o impacto das redes sociais na democracia e na saúde mental."
    },
    {
      titulo: "Senna",
      ano: 2010,
      nota: 4.25,
      diretor: "Asif Kapadia",
      plataformas: "Netflix",
      sinopse: "A trajetória lendária do piloto brasileiro Ayrton Senna, desde sua estreia até seu auge na F1."
    }
  ]
};

// Histórico de sorteados para não repetir
const historicoSorteados = [];

// Contexto de Áudio
let audioCtx;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// Som de cada giro da roleta
function tocarSomCliqueRoleta() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.03);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.03);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.03);
  } catch (e) {
    console.log("Erro ao tocar áudio:", e);
  }
}

// Efeitos sonoros finais para cada tema
function tocarEfeitoSonoro(genero) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    if (genero === "terror") {
      // Uivo macabro
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(380, now + 0.8);
      osc.frequency.exponentialRampToValueAtTime(110, now + 1.8);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.8);

    } else if (genero === "romance") {
      // Beijo
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(2200, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);

      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);

    } else if (genero === "ficcao") {
      // Espaçonave
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(1600, now + 1.0);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);

    } else if (genero === "comedia") {
      // Risada ("Ha-ha-ha!")
      [0, 0.15, 0.3, 0.45].forEach((delay, index) => {
        const notas = [520, 440, 480, 380];
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(notas[index], now + delay);
        osc.frequency.exponentialRampToValueAtTime(notas[index] - 80, now + delay + 0.1);

        gain.gain.setValueAtTime(0.3, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.1);
      });

    } else {
      // Som padrão para outros gêneros (Fanfarra / Impacto)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  } catch (e) {
    console.log("Erro de áudio:", e);
  }
}

// Pegando os elementos do HTML
const genreSelect = document.getElementById("genreSelect");
const drawBtn = document.getElementById("drawBtn");
const roulette = document.getElementById("roulette");
const rouletteTitle = document.getElementById("rouletteTitle");
const resultCard = document.getElementById("resultCard");

const movieGenre = document.getElementById("movieGenre");
const movieRating = document.getElementById("movieRating");
const movieYear = document.getElementById("movieYear");
const movieTitle = document.getElementById("movieTitle");
const movieDirector = document.getElementById("movieDirector");
const movieDescription = document.getElementById("movieDescription");
const moviePlatforms = document.getElementById("moviePlatforms");

let isSpinning = false;

// Função principal do sorteio
function sortearFilme() {
  const genre = genreSelect.value;

  if (!genre || !filmes[genre]) {
    alert("Por favor, selecione um tema válido de filme!");
    return;
  }

  if (isSpinning) return;

  // Ordena os filmes da menor nota para a maior nota
  const listaOrdenada = [...filmes[genre]].sort((a, b) => a.nota - b.nota);

  // Filtra filmes que ainda não saíram
  let filmesDisponiveis = listaOrdenada.filter(
    (filme) => !historicoSorteados.includes(filme.titulo)
  );

  // Se todos do gênero foram sorteados, reseta o histórico para esse gênero
  if (filmesDisponiveis.length === 0) {
    listaOrdenada.forEach((f) => {
      const idx = historicoSorteados.indexOf(f.titulo);
      if (idx > -1) historicoSorteados.splice(idx, 1);
    });
    filmesDisponiveis = [...listaOrdenada];
  }

  isSpinning = true;

  // Oculta resultado anterior e prepara animação
  resultCard.style.display = "none";
  drawBtn.disabled = true;
  drawBtn.style.opacity = "0.6";
  roulette.style.display = "block";

  // Efeito roleta passando nomes rápidos
  const interval = setInterval(() => {
    const filmeAleatorio = listaOrdenada[Math.floor(Math.random() * listaOrdenada.length)];
    rouletteTitle.innerText = filmeAleatorio.titulo;
    tocarSomCliqueRoleta();
  }, 90);

  // Revela o sorteado após 2 segundos
  setTimeout(() => {
    clearInterval(interval);

    const filmeSorteado = filmesDisponiveis[Math.floor(Math.random() * filmesDisponiveis.length)];
    historicoSorteados.push(filmeSorteado.titulo);

    roulette.style.display = "none";

    movieGenre.innerText = genre;
    if (movieRating) {
      movieRating.innerText = `⭐ ${filmeSorteado.nota.toFixed(1)}/5.0`;
    }
    movieYear.innerText = filmeSorteado.ano;
    movieTitle.innerText = filmeSorteado.titulo;
    movieDirector.innerText = filmeSorteado.diretor;
    movieDescription.innerText = filmeSorteado.sinopse;
    moviePlatforms.innerText = filmeSorteado.plataformas;

    resultCard.style.display = "block";
    resultCard.classList.remove("fade-in");
    void resultCard.offsetWidth; // Força reanimação CSS
    resultCard.classList.add("fade-in");

    // Toca som do tema
    tocarEfeitoSonoro(genre);

    isSpinning = false;
    drawBtn.disabled = false;
    drawBtn.style.opacity = "1";
  }, 2000);
}

// Associa o clique ao botão de sorteio
drawBtn.addEventListener("click", sortearFilme);