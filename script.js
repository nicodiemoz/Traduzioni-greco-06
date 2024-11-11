const nomi = [
    { parola: "ἄνθρωπος", traduzione: "uomo" }
    { parola: "γυνή", traduzione: "donna" },
    { parola: "κύων", traduzione: "cane" },
    { parola: "μάρτυς", traduzione: "testimone" },
    { parola: "οὖς", traduzione: "orecchio" },
    { parola: "πῦρ", traduzione: "fuoco" }
];

const aggettivi = [
    { parola: "μέλας, μέλαινα, μέλαν", traduzione: "nero" },
    { parola: "τάλας, τάλανα, τάλαν", traduzione: "infelice" },
    { parola: "τερήν, τερεινα, τερεν", traduzione: "tenero" },
    { parola: "σύμπας, σύμπασα, σύμπαν", traduzione: "tutto insieme" },
    { parola: "ἀкων, ἀкουσα, ἀкον", traduzione: "noto, contrario" },
    { parola: "ηкών, ήкοũσα, ηкον", traduzione: "valente, favorevole" },
    { parola: "χαρίεις, χαρίεσσα, χαρίεν", traduzione: "grazioso" },
    { parola: "γλυκύς, γλυκεῖα, γλυκύ", traduzione: "dolce (per gusto)" },
    { parola: "βραδύς, βραδεῖα, βραδύ", traduzione: "lento" },
    { parola: "βαθύς, βαθεῖα, βαθύ", traduzione: "profondo" },
    { parola: "ταχύς, ταχεῖα, ταχύ", traduzione: "veloce" },
    { parola: "ἠδύς, ἠδεῖα, ἠδύ", traduzione: "dolce (con le mente)" },
    { parola: "οξύς, οξεῖα, οξύ", traduzione: "acuto, aguzzo" },
    { parola: "πιων, πιόν", traduzione: "grasso" },
    { parola: "εὐδαίμων, εὐδαίμονος", traduzione: "felice" },
    { parola: "σωφρων, ον ", traduzione: "saggio" },
    { parola: "αφρων, ον", traduzione: "stretto, sicuro" },
    { parola: "πέπων, ον", traduzione: "maturo" },
    { parola: "ασεβής, ασεβές", traduzione: "empio" },
    { parola: "εὐσεβής, εὐσεβές", traduzione: "pio" },
    { parola: "ἀμαθής, ἀμαθές", traduzione: "ignorante" },
    { parola: "ἀληθής, ἀληθές", traduzione: "vero" },
    { parola: "ἀσθενής, -ές", traduzione: "debole" },
    { parola: "ἀκριβής, -ές", traduzione: "attento, preciso" },
    { parola: "εὐχάρις, εὔχαρι", traduzione: "grazioso" },
    { parola: "εὐпατρις", traduzione: "nobile" },
    { parola: "φιλοπάτρις,", traduzione: "patriottico" },
    { parola: "εὐέλπις, ", traduzione: "di buona speranza, speranzoso" },
    { parola: "δυέλπις", traduzione: "senza speranza, sfiduciato" },
    { parola: "ιδρις", traduzione: "espetto" },
    { parola: "ἀδάκρυς, -υ", traduzione: "senza lacrime" },
    { parola: "ἀρπαξ, -γος", traduzione: "rapace, avido" },
    { parola: "φυγάς, -δος", traduzione: "esule, fuggiasco" },
    { parola: "πενης, -τος", traduzione: "povero" },
    { parola: "μέγας, μεγάλη, μέγα", traduzione: "grande" },
    { parola: "πολύς, πολλή, πολύ", traduzione: "molto" },
    { parola: "πρᾶος, πραεία, πραεῖον", traduzione: "mite" }
];

const verbi = [
    { parola: "βλέπω", traduzione: "vedere" },  
    { parola: "ἄρχομαι", traduzione: "cominciare" },
    { parola: "παບω", traduzione: "finire" },
    { parola: "διατελεω", traduzione: "continuare" },
    { parola: "ὁράω", traduzione: "vedere" },
    { parola: "αкoúω", traduzione: "sentire + GEN" },
    { parola: "ἀισθάνoμαι", traduzione: "percepire" },
    { parola: "γιγνώσκω", traduzione: "conoscere/sapere" },
    { parola: "χαίρω", traduzione: "mi allegro" },
    { parola: "αχθομαι", traduzione: "mi arrabbio" },
    { parola: "φέρω", traduzione: "sopportare" },
    { parola: "φανερός, εἰμί", traduzione: "sono evidente/chiaro" },
    { parola: "δελός εἰμί", traduzione: "sono evidente/chiaro" },
    { parola: "τυγχάνω", traduzione: "essere per caso/trovarsi (nel part.) casualmente" },
    { parola: "λανθάνω", traduzione: "sto nascosto (nel part.) di nascosto" },
    { parola: "φθάνω", traduzione: "prevengo (nel part.) primo/per primo" },
    { parola: "δηλόω", traduzione: "appaio/mi mostro (nel part.) chiaramente" }
];

    
  const complementi = [
    { parola: "εν + dativo / ὑπό + genitivo / παρά + dativo", traduzione: "Stato in luogo" },
    { parola: "εἰς / πρός / ἐπί + accusativo", traduzione: "Moto a luogo" },
    { parola: "εκ / από + genitivo", traduzione: "Moto da luogo" },
    { parola: "διά + genitivo / κατὰ + accusativo", traduzione: "Moto per luogo" },
    { parola: "συν + dativo / μετά + genitivo", traduzione: "Compagnia/Unione" },
    { parola: "διά + accusativo", traduzione: "Causa" },
    { parola: "συν + dativo", traduzione: "Modo" },
    { parola: "διά + genitivo", traduzione: "Mezzo" },
    { parola: "περί + genitivo", traduzione: "Argomento" },
    { parola: "ὑπό / παρά / εκ / από + genitivo/dativo", traduzione: "Agente/Causa efficiente" },
    { parola: "εν + dativo / πρό + genitivo (prima) / μετά + accusativo/genitivo (dopo)", traduzione: "Tempo determinato" },
    { parola: "εν / πρό / μετά + accusativo", traduzione: "Tempo continuato" }
];

let currentWordIndex = 0;
let currentMode = 'nomi';
let shuffledWords = [];

// Funzione per mescolare un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.getElementById("startQuiz").addEventListener("click", function () {
    currentMode = document.getElementById("modalita").value;

    if (currentMode === 'nomi') {
        shuffledWords = [...nomi];
    } else if (currentMode === 'aggettivi') {
        shuffledWords = [...aggettivi];
    } else if (currentMode === 'verbi') {
        shuffledWords = [...verbi];
    } else if (currentMode === 'complementi') {
        shuffledWords = [...complementi];
    } else {
        shuffledWords = [...nomi, ...aggettivi, ...verbi, ...complementi];
    }

    shuffle(shuffledWords);
    currentWordIndex = 0;
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("quizAnswer").style.display = "none";

    // Mostra la prima parola
    showNextWord();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    document.getElementById("quizAnswer").style.display = "block";
    if (currentWordIndex < shuffledWords.length) {
        document.getElementById("nextBtn").textContent = "Soluzione";
    } else {
        document.getElementById("quizPrompt").textContent = "Quiz terminato!";
        document.getElementById("nextBtn").style.display = "none";
    }
});

// Funzione per mostrare la prossima parola
function showNextWord() {
    if (currentWordIndex < shuffledWords.length) {
        let word = shuffledWords[currentWordIndex];
        const visualizzazione = document.getElementById("visualizzazione").value;
        
        if (visualizzazione === 'parola') {
            document.getElementById("quizPrompt").textContent = `${word.parola}`;
            document.getElementById("quizAnswer").textContent = `Traduzione: ${word.traduzione}`;
        } else {
            document.getElementById("quizPrompt").textContent = `${word.traduzione}`;
            document.getElementById("quizAnswer").textContent = `${word.parola}`;
        }

        document.getElementById("quizAnswer").style.display = "none";
        currentWordIndex++;
    }
}

