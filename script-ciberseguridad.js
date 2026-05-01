const questions = [
    {
        question: "La fase de reconocimiento en un ataque incluye",
        options: [
            "Footprinting y fingerprinting",
            "Exfiltración de datos",
            "Movimiento lateral"
        ],
        correct: 0
    },
    {
        question: "El DNS asocia",
        options: [
            "Nombres de dominio con direcciones IP",
            "Puertos con protocolos",
            "Direcciones MAC con VLAN"
        ],
        correct: 0
    },
    {
        question: "El WAF protege principalmente frente a",
        options: [
            "Ataques contra aplicaciones web",
            "Vulnerabilidades de MAC",
            "Saturación de proxies"
        ],
        correct: 0
    },
    {
        question: "El uso de un proxy NAT permite",
        options: [
            "Bloquear automáticamente phishing",
            "Compartir una única IP pública entre dispositivos",
            "Instalar actualizaciones del sistema"
        ],
        correct: 1
    },
    {
        question: "En un SOC, el nivel N2 se ocupa de",
        options: [
            "Configurar firewalls e investigar incidentes",
            "Registrar accesos de usuarios",
            "Sustituir roles de administración"
        ],
        correct: 0
    },
    {
        question: "El NAT permite",
        options: [
            "Compartir una única IP pública entre varios dispositivos",
            "Sustituir direcciones MAC en la capa de enlace",
            "Crear túneles cifrados en redes públicas"
        ],
        correct: 0
    },
    {
        question: "El ransomware se caracteriza por",
        options: [
            "Cifrar archivos y exigir rescate",
            "Robar cookies de navegación",
            "Registrar teclas pulsadas"
        ],
        correct: 0
    },
    {
        question: "El principio de la tríada CIA que se asegura mediante hash es",
        options: [
            "Confidencialidad",
            "Integridad",
            "Autenticidad"
        ],
        correct: 1
    },
    {
        question: "Los logs almacenados por SIEM permiten",
        options: [
            "Optimizar la latencia de red",
            "Realizar análisis forenses de incidentes",
            "Reducir costes de hardware"
        ],
        correct: 1
    },
    {
        question: "Los black hat buscan principalmente",
        options: [
            "Beneficio económico ilícito",
            "Apoyo altruista a empresas",
            "Divulgar vulnerabilidades sin ánimo de lucro"
        ],
        correct: 0
    },
    {
        question: "El firewall actúa bloqueando",
        options: [
            "Los registros de auditoría",
            "Accesos no autorizados a la red",
            "El cifrado de sesiones SSL"
        ],
        correct: 1
    },
    {
        question: "Una vulnerabilidad común en la nube es",
        options: [
            "Alta disponibilidad",
            "Acceso no autorizado por credenciales débiles",
            "Actualizaciones automáticas"
        ],
        correct: 1
    },
    {
        question: "La vulnerabilidad Sequoia en Linux es",
        options: [
            "Error en WebKit",
            "Fuga de memoria en icmp6",
            "Escalada de privilegios por fallo size_t-to-int"
        ],
        correct: 2
    },
    {
        question: "La función principal de un proxy en la red es",
        options: [
            "Actuar como intermediario entre emisor y receptor",
            "Sustituir los firewalls tradicionales",
            "Crear direcciones IP dinámicas"
        ],
        correct: 0
    },
    {
        question: "El ataque MitM se basa en",
        options: [
            "Interceptar la comunicación entre dos partes",
            "Enviar millones de solicitudes desde múltiples equipos",
            "Infectar un dispositivo con rootkits"
        ],
        correct: 0
    },
    {
        question: "Los IPS, a diferencia de los IDS",
        options: [
            "Segmentan automáticamente la red",
            "Actúan para bloquear intrusiones en tiempo real",
            "Solo generan informes mensuales"
        ],
        correct: 1
    },
    {
        question: "El modelo OSI se compone de",
        options: [
            "Cinco capas",
            "Ocho capas",
            "Siete capas"
        ],
        correct: 2
    },
    {
        question: "Un uso clave de OSINT en ciberseguridad es",
        options: [
            "Generar claves privadas",
            "Identificar amenazas y actores maliciosos",
            "Crear protocolos de enrutamiento"
        ],
        correct: 1
    },
    {
        question: "Defense in Depth consiste en",
        options: [
            "Delegar la seguridad en el proveedor",
            "Emplear una única herramienta de protección",
            "Aplicar múltiples capas de seguridad redundantes"
        ],
        correct: 2
    },
    {
        question: "La dirección física asignada por el fabricante a la tarjeta de red se llama",
        options: [
            "MAC",
            "NAT",
            "Proxy"
        ],
        correct: 0
    },
    {
        question: "Un botmaster controla",
        options: [
            "Un honeypot de seguridad",
            "Una red de dispositivos infectados",
            "Un firewall corporativo"
        ],
        correct: 1
    },
    {
        question: "En TCP/IP, la capa de aplicación integra",
        options: [
            "Enlace y física",
            "Aplicación, presentación y sesión",
            "Transporte y red"
        ],
        correct: 1
    },
    {
        question: "El spyware busca principalmente",
        options: [
            "Robar información personal",
            "Mostrar solo publicidad",
            "Bloquear el acceso al sistema"
        ],
        correct: 0
    },
    {
        question: "La escalada de privilegios persigue",
        options: [
            "Bloquear accesos externos",
            "Alterar únicamente DNS",
            "Obtener permisos de administrador"
        ],
        correct: 2
    },
    {
        question: "El conjunto de protocolos que permitió la comunicación global en internet fue",
        options: [
            "SMTP/POP",
            "TCP/IP",
            "ICMP"
        ],
        correct: 1
    },
    {
        question: "El adware tiene como objetivo",
        options: [
            "Ejecutar escalada de privilegios root",
            "Generar beneficio económico mediante anuncios",
            "Instalar rootkits"
        ],
        correct: 1
    },
    {
        question: "En el phishing los atacantes",
        options: [
            "Insertan código en bases de datos",
            "Envían correos fraudulentos haciéndose pasar por entidades legítimas",
            "Alteran registros DNS"
        ],
        correct: 1
    },
    {
        question: "El troyano se instala porque",
        options: [
            "Se propaga por autorreplicación",
            "Actúa solo desde hardware dañado",
            "Se presenta como software legítimo"
        ],
        correct: 2
    },
    {
        question: "La autenticación multifactor requiere",
        options: [
            "Dos o más pruebas de identidad",
            "Un firewall adicional",
            "Una conexión DMZ"
        ],
        correct: 0
    },
    {
        question: "La relación entre amenaza, vulnerabilidad y activo da lugar a",
        options: [
            "Ingeniería social",
            "Riesgo",
            "Malware"
        ],
        correct: 1
    },
    {
        question: "La nube híbrida combina",
        options: [
            "Solo redes LAN y MAN",
            "Infraestructura privada y pública",
            "Únicamente servidores locales"
        ],
        correct: 1
    },
    {
        question: "Cuando un servidor cae y los usuarios no acceden a datos, se ve comprometida la",
        options: [
            "Integridad",
            "Confidencialidad",
            "Disponibilidad"
        ],
        correct: 2
    },
    {
        question: "Un gusano se diferencia de un virus porque",
        options: [
            "Es inofensivo para la red",
            "Se propaga autónomamente sin archivos anfitriones",
            "Requiere siempre acción del usuario"
        ],
        correct: 1
    },
    {
        question: "La autenticación multifactor evita",
        options: [
            "Acceso indebido tras robo de credenciales",
            "El uso de contraseñas largas",
            "Que un firewall bloquee tráfico"
        ],
        correct: 0
    },
    {
        question: "Los blue hat también son conocidos como",
        options: [
            "Pentesters",
            "Botmasters",
            "Vengadores"
        ],
        correct: 2
    },
    {
        question: "El payload dentro de un exploit corresponde a",
        options: [
            "La acción maliciosa que ejecuta el ataque",
            "El bug descubierto en un sistema",
            "La vulnerabilidad desconocida reportada"
        ],
        correct: 0
    },
    {
        question: "Los firewalls filtran tráfico según",
        options: [
            "El número de servidores internos",
            "Reglas basadas en IP, puertos o protocolos",
            "La cantidad de empleados en la red"
        ],
        correct: 1
    },
    {
        question: "El ataque Zero-Day explota",
        options: [
            "Virus inactivos en cuarentena",
            "Bugs ya corregidos",
            "Vulnerabilidades desconocidas sin parchear"
        ],
        correct: 2
    },
    {
        question: "En la encriptación, si los datagramas no están cifrados",
        options: [
            "Pueden leerse fácilmente al interceptarse",
            "Se actualizan con parches",
            "Se borran automáticamente"
        ],
        correct: 0
    },
    {
        question: "El modelo OSI incluye la capa de",
        options: [
            "Sesión",
            "Balanceo",
            "Proxy"
        ],
        correct: 0
    }
];

class QuizApp {
    constructor() {
        this.currentQuestion = 0;
        this.userAnswers = new Array(questions.length).fill(null);
        this.score = 0;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.displayQuestion();
        this.updateProgressBar();
    }

    setupEventListeners() {
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prev-btn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('submit-btn').addEventListener('click', () => this.submitQuiz());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('home-btn').addEventListener('click', () => this.goToHome());
        document.getElementById('home-btn-nav').addEventListener('click', () => this.goToHome());
    }

    displayQuestion() {
        const question = questions[this.currentQuestion];
        document.getElementById('question-text').textContent = `${this.currentQuestion + 1}. ${question.question}`;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            if (this.userAnswers[this.currentQuestion] === index) {
                optionDiv.classList.add('selected');
            }
            
            optionDiv.innerHTML = `
                <label class="option-label">
                    <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                    <span>${option}</span>
                </label>
            `;
            
            optionDiv.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionDiv);
        });
        
        this.updateNavigationButtons();
    }

    selectOption(index) {
        this.userAnswers[this.currentQuestion] = index;
        
        document.querySelectorAll('.option').forEach((option, i) => {
            option.classList.toggle('selected', i === index);
        });
    }

    nextQuestion() {
        if (this.currentQuestion < questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
            this.updateProgressBar();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
            this.updateProgressBar();
        }
    }

    updateProgressBar() {
        const progress = ((this.currentQuestion + 1) / questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `Pregunta ${this.currentQuestion + 1} de ${questions.length}`;
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        
        prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            submitBtn.style.display = 'none';
        }
    }

    calculateScore() {
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        this.userAnswers.forEach((answer, index) => {
            if (answer === questions[index].correct) {
                correctAnswers++;
            } else if (answer !== null) {
                incorrectAnswers++;
            }
        });
        // Calculate score with +1 for correct, -0.5 for incorrect
        this.score = Math.max(0, (correctAnswers * 1) - (incorrectAnswers * 0.5));
        // Convert to 10-point scale (max possible score is 40 if all correct)
        this.score = (this.score / 40) * 10;
        return { correct: correctAnswers, incorrect: incorrectAnswers };
    }

    submitQuiz() {
        const results = this.calculateScore();
        this.showResults(results);
    }

    showResults(results) {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('results-container').style.display = 'block';
        
        document.getElementById('score-number').textContent = this.score.toFixed(1);
        document.getElementById('correct-count').textContent = results.correct;
        document.getElementById('incorrect-count').textContent = results.incorrect;
        document.getElementById('percentage').textContent = `${((results.correct / questions.length) * 100).toFixed(0)}%`;
        
        let message = '';
        if (this.score >= 9) {
            message = '¡Excelente! Tienes un conocimiento sobresaliente en ciberseguridad.';
        } else if (this.score >= 7) {
            message = '¡Muy bien! Tienes buenos conocimientos de ciberseguridad.';
        } else if (this.score >= 5) {
            message = 'Aprobado. Considera repasar algunos conceptos de ciberseguridad.';
        } else {
            message = 'Necesitas mejorar tus conocimientos en ciberseguridad. ¡Sigue estudiando!';
        }
        document.getElementById('score-message').textContent = message;
        
        this.displayReview();
    }

    displayReview() {
        const reviewContainer = document.getElementById('review-questions');
        reviewContainer.innerHTML = '';
        
        questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            const reviewDiv = document.createElement('div');
            reviewDiv.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;
            
            const icon = isCorrect ? 'fa-check-circle' : 'fa-times-circle';
            const userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'No respondida';
            const correctAnswerText = question.options[question.correct];
            
            reviewDiv.innerHTML = `
                <h4><i class="fas ${icon}"></i> Pregunta ${index + 1}</h4>
                <p><strong>${question.question}</strong></p>
                <p>Tu respuesta: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${userAnswerText}</span></p>
                ${!isCorrect ? `<p>Respuesta correcta: <span class="correct-answer">${correctAnswerText}</span></p>` : ''}
            `;
            
            reviewContainer.appendChild(reviewDiv);
        });
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.userAnswers = new Array(questions.length).fill(null);
        this.score = 0;
        
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('results-container').style.display = 'none';
        
        this.displayQuestion();
        this.updateProgressBar();
    }

    goToHome() {
        window.location.href = 'main.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
