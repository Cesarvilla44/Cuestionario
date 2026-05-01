const questions = [
    {
        question: "¿Qué componente del modelo de tres capas se encarga de la presentación de datos?",
        options: [
            "Modelo",
            "Vista",
            "Controlador"
        ],
        correct: 1
    },
    {
        question: "¿Qué es un resolutor de nombres en el contexto de DNS?",
        options: [
            "Un protocolo de red",
            "Un tipo de servidor DNS",
            "Software encargado de localizar un servidor en Internet o en una red local"
        ],
        correct: 2
    },
    {
        question: "Si un servidor web recibe una solicitud HTTP con un código de estado 404, ¿qué significa?",
        options: [
            "La solicitud es incorrecta",
            "Error interno del servidor",
            "El recurso no existe."
        ],
        correct: 2
    },
    {
        question: "¿Qué lenguaje de marcado se utiliza normalmente para elaborar documentación?",
        options: [
            "XML",
            "YAML",
            "JSON"
        ],
        correct: 0
    },
    {
        question: "¿Qué protocolo se recomienda utilizar para garantizar la seguridad en la transmisión de datos en redes no controladas?",
        options: [
            "Secure Shell (SSH)",
            "FTP",
            "SMB"
        ],
        correct: 0
    },
    {
        question: "¿Qué es la operación unbind en LDAP?",
        options: [
            "Permite indicar al servidor LDAP que el cliente abandona la operación en curso",
            "Cierra la conexión con el servidor LDAP",
            "Autentica al cliente con respecto al directorio"
        ],
        correct: 1
    },
    {
        question: "¿Qué herramienta se menciona como útil para realizar tareas complicadas en el servidor remoto en modo texto?",
        options: [
            "Navegador web",
            "Cliente FTP gráfico",
            "Interfaz de modo texto"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de diagramas se deben crear para mostrar el comportamiento del programa ante diferentes opciones posibles?",
        options: [
            "Diagramas de Gantt",
            "Diagramas de barras",
            "Diagramas de flujo"
        ],
        correct: 2
    },
    {
        question: "¿Qué estructura tiene un sistema de nombres jerárquico?",
        options: [
            "Lista",
            "Árbol",
            "Matriz"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de páginas web se manejan con mayor facilidad con el modelo cliente-servidor en su forma más simple?",
        options: [
            "Aplicaciones web",
            "Páginas estáticas",
            "Páginas dinámicas"
        ],
        correct: 1
    },
    {
        question: "¿Qué protocolo se utiliza para transferir recursos en la web?",
        options: [
            "SMTP",
            "FTP",
            "HTTP"
        ],
        correct: 2
    },
    {
        question: "¿Qué protocolo se menciona como un sustituto seguro de FTP?",
        options: [
            "HTTP",
            "SMB",
            "SFTP"
        ],
        correct: 2
    },
    {
        question: "¿Qué plataforma libre es conocida por ser multiplataforma y basada en Apache, MariaDB/MySQL, Perl y PHP?",
        options: [
            "WAMP",
            "LAMP",
            "XAMPP"
        ],
        correct: 2
    },
    {
        question: "¿Qué tecnología permite que varios servidores respondan solicitudes dirigidas a la misma URL en Tomcat?",
        options: [
            "Security Manager",
            "Coyote HTML",
            "Clustering"
        ],
        correct: 2
    },
    {
        question: "¿Qué protocolo utiliza LDAP en lugar de los protocolos OSI?",
        options: [
            "FTP",
            "HTTP",
            "TCP/IP"
        ],
        correct: 2
    },
    {
        question: "En un entorno de red interna, ¿qué protocolos se utilizan comúnmente para la transferencia de archivos entre equipos, pero no son adecuados para servidores públicos?",
        options: [
            "SMB y NFS",
            "FTP y SFTP",
            "SCP y rsync"
        ],
        correct: 0
    },
    {
        question: "¿Qué componente del modelo de tres capas se encarga de la gestión de datos?",
        options: [
            "Servidor de base de datos",
            "Servidor de aplicaciones",
            "Navegador web"
        ],
        correct: 0
    },
    {
        question: "¿Qué puerto utiliza el servidor FTP para la sesión de control?",
        options: [
            "Puerto 21",
            "Puerto 22",
            "Puerto 20"
        ],
        correct: 0
    },
    {
        question: "¿Qué tipo de plataforma ofrece mayor flexibilidad para modificar y redistribuir el software, sin restricciones de licencia?",
        options: [
            "WAMP",
            "Plataforma propietaria",
            "Plataforma libre"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta se menciona como ejemplo para la generación automática de documentación en entornos Java?",
        options: [
            "Git",
            "Javadoc",
            "ArgoUML"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el principal componente de Tomcat que envía las peticiones a los diferentes contextos?",
        options: [
            "Motor Catalina",
            "Contexto",
            "Host"
        ],
        correct: 0
    },
    {
        question: "¿Qué es el protocolo HTTPS?",
        options: [
            "Un tipo de archivo multimedia",
            "Un lenguaje de programación",
            "Una versión segura de HTTP que utiliza SSL o TLS"
        ],
        correct: 2
    },
    {
        question: "¿Qué es un navegador web?",
        options: [
            "Una aplicación que actúa como cliente del protocolo HTTP",
            "Un protocolo de transferencia de archivos",
            "Un servidor que almacena datos de usuarios"
        ],
        correct: 0
    },
    {
        question: "¿Qué característica de las plataformas colaborativas de control de versiones es fundamental para gestionar las modificaciones realizadas por varios desarrolladores simultáneamente?",
        options: [
            "Control de conflictos",
            "Restauración de versiones",
            "Creación de ramas"
        ],
        correct: 0
    },
    {
        question: "¿Qué componente de Tomcat recoge información sobre el desarrollo de un motor o un servidor virtual y la almacena en un fichero?",
        options: [
            "Válvulas",
            "Clustering",
            "Loggers"
        ],
        correct: 2
    },
    {
        question: "En el contexto de la gestión de versiones, ¿qué representan los \"parches\" (patches)?",
        options: [
            "Versiones completas",
            "Actualizaciones de código",
            "Diagramas de flujo"
        ],
        correct: 1
    },
    {
        question: "¿Qué puerto se utiliza comúnmente para HTTPS?",
        options: [
            "443",
            "80",
            "21"
        ],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes NO es una ventaja de las plataformas libres?",
        options: [
            "Soporte técnico limitado",
            "Desarrollo colaborativo",
            "Ahorro económico"
        ],
        correct: 0
    },
    {
        question: "¿Qué es una firma digital?",
        options: [
            "Un tipo de archivo multimedia",
            "Un certificado de uso personal para autenticar usuarios",
            "Un protocolo de transferencia de archivos"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de archivos se transfieren utilizando el tipo binario en FTP?",
        options: [
            "Archivos de texto",
            "Páginas web",
            "Imágenes y vídeos"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de consulta DNS resuelve por sí mismo la consulta realizada por el resolutor?",
        options: [
            "Consulta recursiva",
            "Consulta directa",
            "Consulta no recursiva"
        ],
        correct: 0
    },
    {
        question: "¿Qué componente de IIS es el protocol listener para HTTP?",
        options: [
            "WWW Service",
            "WAS",
            "HTTP.SYS"
        ],
        correct: 2
    },
    {
        question: "¿Qué es un dominio de primer nivel?",
        options: [
            "La parte de la izquierda de un nombre de dominio",
            "La parte de la derecha de un nombre de dominio",
            "Un subdominio"
        ],
        correct: 1
    },
    {
        question: "¿Qué lenguaje se utiliza para definir la estructura y presentación de páginas web estáticas?",
        options: [
            "HTML y CSS",
            "JavaScript",
            "PHP"
        ],
        correct: 0
    },
    {
        question: "¿Qué componente de Tomcat permite a Tomcat funcionar como un servidor web?",
        options: [
            "Clustering",
            "Security Manager",
            "Coyote HTML"
        ],
        correct: 2
    },
    {
        question: "¿Qué plataforma libre es conocida por su uso en la gestión de blogs?",
        options: [
            "Zimbra",
            "Magento",
            "WordPress"
        ],
        correct: 2
    },
    {
        question: "¿Qué componente de Tomcat permite que un usuario que se identifica en el servidor sea reconocido por cualquier aplicación?",
        options: [
            "Single Sign On",
            "Filtro de direcciones remotas",
            "Auditoría de acceso"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es una de las principales ventajas de las plataformas libres?",
        options: [
            "Son más seguras que las propietarias",
            "Permiten redistribuir copias libremente",
            "Tienen soporte técnico exclusivo"
        ],
        correct: 1
    },
    {
        question: "¿Qué lenguaje derivado de XML se utiliza para describir la interfaz pública de los servicios web?",
        options: [
            "UDDI",
            "SOAP",
            "WSDL"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta de código libre se menciona para realizar diagramas de flujo y entidad-relacional?",
        options: [
            "Google Sheets",
            "Microsoft Excel",
            "OpenOffice Draw"
        ],
        correct: 2
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
            message = '¡Excelente! Tienes un conocimiento sobresaliente en despliegue de aplicaciones web.';
        } else if (this.score >= 7) {
            message = '¡Muy bien! Tienes buenos conocimientos de despliegue de aplicaciones web.';
        } else if (this.score >= 5) {
            message = 'Aprobado. Considera repasar algunos conceptos de despliegue de aplicaciones web.';
        } else {
            message = 'Necesitas mejorar tus conocimientos en despliegue de aplicaciones web. ¡Sigue estudiando!';
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
