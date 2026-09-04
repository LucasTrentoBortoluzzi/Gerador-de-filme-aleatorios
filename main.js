// Banco de dados de filmes
const filmes = {
    romance: [
      {
        titulo: "Orgulho e Preconceito",
        ano: 2005,
        diretor: "Joe Wright",
        plataformas: "Netflix, Prime Video",
        sinopse: "Elizabeth Bennet lida com a pressão social para se casar no século XIX. Quando conhece o reservado Sr. Darcy, surge um intenso conflito entre orgulho de classe e preconceito."
      },
      {
        titulo: "La La Land: Cantando Estações",
        ano: 2016,
        diretor: "Damien Chazelle",
        plataformas: "Prime Video, Max",
        sinopse: "Um pianista de jazz e uma jovem atriz apaixonam-se em Los Angeles enquanto perseguem suas carreiras, precisando equilibrar o amor com suas maiores ambições."
      },
      {
        titulo: "Questão de Tempo",
        ano: 2013,
        diretor: "Richard Curtis",
        plataformas: "Netflix, Telecine",
        sinopse: "Tim descobre que os homens de sua família podem viajar no tempo. Ele decide usar essa habilidade para encontrar um grande amor, mas aprende lições profundas sobre a vida."
      },
      {
        titulo: "Como Se Fosse a Primeira Vez",
        ano: 2004,
        diretor: "Peter Segal",
        plataformas: "Max, Paramount+",
        sinopse: "Um veterinário no Havaí se apaixona por uma mulher que sofre de perda de memória recente, precisando reconquistá-la todos os dias do zero."
      },
      {
        titulo: "Diário de uma Paixão",
        ano: 2004,
        diretor: "Nick Cassavetes",
        plataformas: "Max",
        sinopse: "Um idoso lê para uma colega de clínica a intensa história de amor vivida por dois jovens nos anos 1940, separados por diferenças sociais e pela guerra."
      }
    ],
    terror: [
      {
        titulo: "Hereditário",
        ano: 2018,
        diretor: "Ari Aster",
        plataformas: "Max, Prime Video",
        sinopse: "Após a morte da matriarca, uma família começa a desvendar segredos obscuros sobre seus ancestrais, envolvendo-se num destino aterrorizante."
      },
      {
        titulo: "O Iluminado",
        ano: 1980,
        diretor: "Stanley Kubrick",
        plataformas: "Max",
        sinopse: "Um escritor aceita ser caseiro de um hotel isolado no inverno. O isolamento e forças sobrenaturais começam a afetar gravemente sua sanidade."
      },
      {
        titulo: "Corra!",
        ano: 2017,
        diretor: "Jordan Peele",
        plataformas: "Prime Video, Telecine",
        sinopse: "Um jovem fotógrafo visita a família de sua namorada e descobre uma trama perturbadora por trás do comportamento receptivo dos moradores."
      },
      {
        titulo: "Invocação do Mal",
        ano: 2013,
        diretor: "James Wan",
        plataformas: "Max",
        sinopse: "Investigadores paranormais famosos ajudam uma família que se mudou para uma fazenda isolada assombrada por uma entidade maligna."
      }
    ],
    acao: [
      {
        titulo: "Mad Max: Estrada da Fúria",
        ano: 2015,
        diretor: "George Miller",
        plataformas: "Max, Prime Video",
        sinopse: "Em um futuro pós-apocalíptico, Max se une à Imperatriz Furiosa em uma fuga insana pelo deserto para libertar prisioneiras de um tirano cruel."
      },
      {
        titulo: "John Wick: De Volta ao Jogo",
        ano: 2014,
        diretor: "Chad Stahelski",
        plataformas: "Prime Video, Telecine",
        sinopse: "Um ex-assassino aposentado retorna ao submundo do crime para caçar os gangsters que destruíram o que ele tinha de mais precioso."
      },
      {
        titulo: "Batman: O Cavaleiro das Trevas",
        ano: 2008,
        diretor: "Christopher Nolan",
        plataformas: "Max",
        sinopse: "Batman tenta manter a ordem em Gotham, mas precisa enfrentar o caos psicológico e anárquico provocado pelo terrível Coringa."
      }
    ],
    ficcao: [
      {
        titulo: "Interstellar",
        ano: 2014,
        diretor: "Christopher Nolan",
        plataformas: "Max, Prime Video",
        sinopse: "Com a Terra à beira do colapso, exploradores espaciais atravessam um buraco de minhoca no espaço em busca de um novo lar para a humanidade."
      },
      {
        titulo: "A Origem",
        ano: 2010,
        diretor: "Christopher Nolan",
        plataformas: "Max",
        sinopse: "Um ladrão especializado em roubar segredos do subconsciente através dos sonhos aceita a missão de implantar uma ideia na mente de um empresário."
      },
      {
        titulo: "Matrix",
        ano: 1999,
        diretor: "Lana e Lilly Wachowski",
        plataformas: "Max",
        sinopse: "Um programador descobre que a realidade em que vive é uma simulação computadorizada controlada por máquinas inteligentes."
      }
    ],
    comedia: [
      {
        titulo: "As Branquelas",
        ano: 2004,
        diretor: "Keenen Ivory Wayans",
        plataformas: "Netflix, Prime Video",
        sinopse: "Dois agentes do FBI disfarçam-se como duas herdeiras milionárias para evitar um sequestro, gerando situações absurdamente cômicas."
      },
      {
        titulo: "Se Beber, Não Case!",
        ano: 2009,
        diretor: "Todd Phillips",
        plataformas: "Max",
        sinopse: "Três amigos acordam em Las Vegas sem memória da noite anterior e precisam localizar o noivo desaparecido antes do casamento."
      },
      {
        titulo: "Superbad: É Hoje",
        ano: 2007,
        diretor: "Greg Mottola",
        plataformas: "Netflix",
        sinopse: "Dois jovens tentam comprar bebidas para uma festa no final do ano letivo, enfrentando uma sequência de imprevistos inacreditáveis."
      }
    ]
  };
  
  // Histórico Global para não repetir filmes
  const historicoSorteados = [];
  
  // Sintetizador de Áudio da Web
  let audioCtx;
  
  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }
  
  // 🎰 Som da Roleta (Giro)
  function tocarSomCliqueRoleta() {
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
  }
  
  // 🔊 Efeitos Sonoros Finais por Tema
  function tocarEfeitoSonoro(genero) {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
  
    if (genero === "terror") {
      // 👻 Uivo Macabro e Sinistro
      const osc = ctx.createOscillator();
      const lfo = ctx.createOscillator();
      const gain = ctx.createGain();
  
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(380, now + 0.8);
      osc.frequency.exponentialRampToValueAtTime(110, now + 1.8);
  
      // Tremor do Uivo (LFO)
      lfo.frequency.setValueAtTime(5, now);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(15, now);
      lfo.connect(osc.frequency);
  
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
  
      osc.connect(gain);
      gain.connect(ctx.destination);
  
      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 1.8);
      osc.stop(now + 1.8);
  
    } else if (genero === "romance") {
      // ❤️ Beijo Estalado
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
      // 🚀 Espaçonave Decolando + Laser
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
      // 😂 Risada Cômica Ritada ("Ha-ha-ha-ha!")
      const tempos = [0, 0.15, 0.3, 0.45];
      const notas = [520, 440, 480, 380];
  
      tempos.forEach((delay, index) => {
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
  
    } else if (genero === "acao") {
      // 💥 Impacto/Explosão
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
  
      osc.type = "square";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.6);
  
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
  
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    }
  }
  
  // Elementos DOM
  const genreSelect = document.getElementById("genreSelect");
  const drawBtn = document.getElementById("drawBtn");
  const roulette = document.getElementById("roulette");
  const rouletteTitle = document.getElementById("rouletteTitle");
  const resultCard = document.getElementById("resultCard");
  
  const movieGenre = document.getElementById("movieGenre");
  const movieYear = document.getElementById("movieYear");
  const movieTitle = document.getElementById("movieTitle");
  const movieDirector = document.getElementById("movieDirector");
  const movieDescription = document.getElementById("movieDescription");
  const moviePlatforms = document.getElementById("moviePlatforms");
  
  let isSpinning = false;
  
  function sortearFilme() {
    const genre = genreSelect.value;
  
    if (!genre) {
      alert("Por favor, selecione um tema de filme!");
      return;
    }
  
    if (isSpinning) return;
  
    const listaCompletaDoGenero = filmes[genre];
  
    // Filtra filmes já sorteados
    let filmesDisponiveis = listaCompletaDoGenero.filter(
      (filme) => !historicoSorteados.includes(filme.titulo)
    );
  
    // Recomeça lista caso todos do gênero já tenham sido sorteados
    if (filmesDisponiveis.length === 0) {
      listaCompletaDoGenero.forEach((f) => {
        const idx = historicoSorteados.indexOf(f.titulo);
        if (idx > -1) historicoSorteados.splice(idx, 1);
      });
      filmesDisponiveis = [...listaCompletaDoGenero];
    }
  
    isSpinning = true;
  
    // Esconde resultado anterior
    resultCard.style.display = "none";
    drawBtn.disabled = true;
    drawBtn.style.opacity = "0.6";
  
    roulette.style.display = "block";
  
    // 🎰 Animação trocando nomes e tocando som da roleta
    const interval = setInterval(() => {
      const filmeAleatorio = listaCompletaDoGenero[Math.floor(Math.random() * listaCompletaDoGenero.length)];
      rouletteTitle.innerText = filmeAleatorio.titulo;
      tocarSomCliqueRoleta(); // Som de cada giro da roleta
    }, 90);
  
    // Após 2 segundos, paralisa e sorteia o filme final
    setTimeout(() => {
      clearInterval(interval);
  
      const filmeSorteado = filmesDisponiveis[Math.floor(Math.random() * filmesDisponiveis.length)];
      historicoSorteados.push(filmeSorteado.titulo);
  
      roulette.style.display = "none";
  
      movieGenre.innerText = genre;
      movieYear.innerText = filmeSorteado.ano;
      movieTitle.innerText = filmeSorteado.titulo;
      movieDirector.innerText = filmeSorteado.diretor;
      movieDescription.innerText = filmeSorteado.sinopse;
      moviePlatforms.innerText = filmeSorteado.plataformas;
  
      resultCard.style.display = "block";
      resultCard.classList.remove("fade-in");
      void resultCard.offsetWidth;
      resultCard.classList.add("fade-in");
  
      // 🔊 Toca o som temático do filme sorteado
      tocarEfeitoSonoro(genre);
  
      isSpinning = false;
      drawBtn.disabled = false;
      drawBtn.style.opacity = "1";
    }, 2000);
  }
  
  drawBtn.addEventListener("click", sortearFilme);