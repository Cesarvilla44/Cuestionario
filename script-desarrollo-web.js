const questions = [
    {
        question: "¿Qué lenguaje embebido en HTML es conocido por su facilidad de uso y aprendizaje?",
        options: [
            "Servlet",
            "PHP",
            "JSP"
        ],
        correct: 1
    },
    {
        question: "¿Qué palabra clave se utiliza en JavaScript para definir una variable?",
        options: [
            "const",
            "let",
            "var"
        ],
        correct: 2
    },
    {
        question: "¿Qué función en PHP se utiliza para abrir un archivo?",
        options: [
            "file_open",
            "open_file",
            "fopen"
        ],
        correct: 2
    },
    {
        question: "¿Qué palabra clave se utiliza en PHP para definir una variable de sesión?",
        options: [
            "$_SESSION",
            "$_GET",
            "$_POST"
        ],
        correct: 0
    },
    {
        question: "¿Qué palabra clave se utiliza en PHP para definir una función que no retorna un valor?",
        options: [
            "function",
            "void",
            "sub"
        ],
        correct: 0
    },
    {
        question: "¿Qué atributo HTML permite limitar la cantidad de caracteres que un usuario puede introducir en un campo de texto?",
        options: [
            "size",
            "maxlength",
            "value"
        ],
        correct: 1
    },
    {
        question: "¿Qué extensión PHP, junto con PDO, se recomienda actualmente para interactuar con bases de datos MySQL por su mayor seguridad y flexibilidad?",
        options: [
            "MySQLi",
            "MySQL",
            "ODBC"
        ],
        correct: 0
    },
    {
        question: "¿Qué operador se utiliza para comparar si un valor es mayor o igual que otro en PHP?",
        options: [
            ">",
            "<",
            ">="
        ],
        correct: 2
    },
    {
        question: "¿Qué parte de la URL indica al servidor la ubicación de la página web solicitada?",
        options: [
            "Puerto",
            "Protocolo",
            "Ruta"
        ],
        correct: 2
    },
    {
        question: "¿Qué lenguaje de programación en entorno servidor requiere la instalación de un módulo especializado para su ejecución en un servidor web?",
        options: [
            "PHP",
            "CSS",
            "HTML"
        ],
        correct: 0
    },
    {
        question: "¿Qué función en PHP se utiliza para recuperar el valor de una cookie?",
        options: [
            "$_SESSION['nombre_cookie']",
            "$_COOKIE['nombre_cookie']",
            "$_GET['nombre_cookie']"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la instrucción para realizar un bucle condicional en PHP?",
        options: [
            "if (condicion) { sentencias_de_condicion_cierta } else { sentencias_de_condicion_falsa }",
            "while (condicion) { sentencias_de_bucle }",
            "for (asignacion_de_variable ; condicion_de_variable ; siguiente_valor_de_variable) { }"
        ],
        correct: 0
    },
    {
        question: "¿Qué tipo de bucle se utiliza cuando se conoce de antemano el número de iteraciones?",
        options: [
            "do-while",
            "while",
            "for"
        ],
        correct: 2
    },
    {
        question: "¿Qué archivo de configuración se utiliza para definir directivas en PHP?",
        options: [
            "app.config",
            "php.ini",
            "web.config"
        ],
        correct: 1
    },
    {
        question: "¿Qué lenguaje embebido en HTML es conocido por su integración natural con bases de datos MySQL, PostgreSQL o SQLite?",
        options: [
            "ASP",
            "JSP",
            "PHP"
        ],
        correct: 2
    },
    {
        question: "¿Qué función en PHP se utiliza para crear un directorio?",
        options: [
            "makedir",
            "mkdir",
            "createdir"
        ],
        correct: 1
    },
    {
        question: "¿Cómo se accede a los parámetros GET en PHP?",
        options: [
            "Usando la función getParameter().",
            "A través del array superglobal $_GET.",
            "Mediante la variable request."
        ],
        correct: 1
    },
    {
        question: "¿Qué característica principal diferencia a un servidor de aplicaciones de un servidor web?",
        options: [
            "Solo sirve contenido estático",
            "No puede manejar múltiples solicitudes simultáneas",
            "Proporciona servicios de ejecución de código avanzado"
        ],
        correct: 2
    },
    {
        question: "¿Qué función en PHP se utiliza para obtener el número de filas afectadas por una query?",
        options: [
            "mysql_num_rows",
            "mysql_affected_rows",
            "mysql_fetch_row"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de control HTML permite introducir texto en una caja de formato mayor a un input type=\"text\"?",
        options: [
            "TextArea",
            "Radio Button",
            "Checkbox"
        ],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes opciones NO es una herramienta o tecnología comúnmente asociada con el desarrollo de aplicaciones web en entorno servidor?",
        options: [
            "Git",
            "IDE",
            "Base de datos"
        ],
        correct: 2
    },
    {
        question: "¿Qué operador se utiliza para incrementar el valor de una variable en PHP?",
        options: [
            "++",
            "--",
            "+"
        ],
        correct: 0
    },
    {
        question: "¿Qué capa en el modelo de tres capas se encarga de la interacción directa con el usuario?",
        options: [
            "Capa de datos",
            "Capa de reglas de negocio",
            "Capa de presentación"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta de programación permite traducir el código fuente de un programa a código ejecutable?",
        options: [
            "Editor de texto",
            "Depurador de código (Debugger)",
            "Compilador"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de datos en PHP se utiliza para almacenar grupos de caracteres alfanuméricos?",
        options: [
            "Integer",
            "Float",
            "String"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de dato compuesto se utiliza para almacenar una lista de elementos en PHP?",
        options: [
            "object",
            "array",
            "class"
        ],
        correct: 1
    },
    {
        question: "¿Qué método se utiliza en el ejemplo de procesar.php para obtener los datos enviados por un formulario?",
        options: [
            "$_POST",
            "$_SERVER",
            "$_GET"
        ],
        correct: 0
    },
    {
        question: "¿Qué tipo de bucle se utiliza cuando la condición se evalúa al final de cada iteración?",
        options: [
            "for",
            "while",
            "do-while"
        ],
        correct: 2
    },
    {
        question: "¿Qué método de envío de datos (GET o POST) es preferible para enviar información confidencial, como contraseñas?",
        options: [
            "Ambos son igualmente seguros.",
            "GET, por su simplicidad.",
            "POST, ya que no muestra los datos en la URL."
        ],
        correct: 2
    },
    {
        question: "¿Qué capa de la arquitectura MVC se encarga de interactuar con la base de datos?",
        options: [
            "Controlador",
            "Modelo",
            "Vista"
        ],
        correct: 1
    },
    {
        question: "¿Qué operador se utiliza para comparar si dos valores son diferentes en PHP?",
        options: [
            ">",
            "!",
            "!="
        ],
        correct: 2
    },
    {
        question: "¿Qué protocolo es la base de los protocolos de comunicación actuales?",
        options: [
            "FTP",
            "HTTP",
            "TCP"
        ],
        correct: 2
    },
    {
        question: "¿Qué componente es responsable de ejecutar la capa de reglas de negocio en un modelo de tres capas?",
        options: [
            "Base de datos",
            "Servidor de aplicaciones",
            "Servidor web"
        ],
        correct: 1
    },
    {
        question: "¿Qué protocolo se utiliza para garantizar una comunicación segura entre cliente y servidor?",
        options: [
            "FTP",
            "HTTPS",
            "HTTP"
        ],
        correct: 1
    },
    {
        question: "¿Qué función en PHP se utiliza para crear una cookie?",
        options: [
            "newcookie()",
            "setcookie()",
            "createcookie()"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la estructura correcta para un comentario de una sola línea en JavaScript?",
        options: [
            "// Esto es un comentario de una línea",
            "/* Esto es un comentario de una línea */",
            "# Esto es un comentario de una línea"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es la función en PHP para cerrar una conexión MySQL?",
        options: [
            "mysql_disconnect",
            "mysql_end",
            "mysql_close"
        ],
        correct: 2
    },
    {
        question: "¿Qué es un tipo de dato booleano?",
        options: [
            "Un tipo de dato de cadena de texto.",
            "Un tipo de dato que solo puede tener dos valores: verdadero o falso.",
            "Un tipo de dato numérico entero."
        ],
        correct: 1
    },
    {
        question: "¿Qué protocolo de comunicación es fundamental para el funcionamiento de Internet y la comunicación entre componentes?",
        options: [
            "AJP",
            "TCP/IP",
            "HTTP"
        ],
        correct: 1
    },
    {
        question: "¿Qué lenguaje de marcas es fundamental para la presentación de contenido web en los navegadores?",
        options: [
            "HTML",
            "JSON",
            "XML"
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
            message = '¡Excelente! Tienes un conocimiento sobresaliente en desarrollo web.';
        } else if (this.score >= 7) {
            message = '¡Muy bien! Tienes buenos conocimientos de desarrollo web.';
        } else if (this.score >= 5) {
            message = 'Aprobado. Considera repasar algunos conceptos de desarrollo web.';
        } else {
            message = 'Necesitas mejorar tus conocimientos en desarrollo web. ¡Sigue estudiando!';
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
