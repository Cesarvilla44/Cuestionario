const questions = [
    {
        question: "¿Qué fase de un proyecto implica la clarificación de objetivos y recursos necesarios?",
        options: [
            "Monitorización y control",
            "Definición del proyecto",
            "Ejecución del proyecto"
        ],
        correct: 1
    },
    {
        question: "¿Qué es fundamental para la correcta implementación de tecnologías de la información en una organización?",
        options: [
            "Capacitación y habilidades de los empleados",
            "Reducción de la inversión en tecnología",
            "Eliminación de la formación continua"
        ],
        correct: 0
    },
    {
        question: "¿Qué tecnología permite a las empresas predecir la demanda y optimizar la cadena de suministro usando análisis de grandes conjuntos de datos?",
        options: [
            "Cloud Computing",
            "Inteligencia Artificial",
            "Big Data"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de servicio en la nube es Dropbox?",
        options: [
            "Almacenamiento",
            "IaaS",
            "SaaS"
        ],
        correct: 0
    },
    {
        question: "¿Cuál de las siguientes opciones NO es una fuente común de datos crudos en un entorno industrial?",
        options: [
            "Sensores IoT",
            "Registros de sistemas",
            "Redes sociales"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de bases de datos es más eficiente para almacenar datos no estructurados?",
        options: [
            "Bases de datos no relacionales",
            "Almacenamiento en hojas de cálculo",
            "Bases de datos relacionales"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el propósito principal de las pruebas de hipótesis en Big Data?",
        options: [
            "Reducir el tamaño de los conjuntos de datos",
            "Aumentar la velocidad de procesamiento de datos",
            "Evaluar la validez de suposiciones o teorías basadas en datos"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es un beneficio clave del uso de Big Data en la transformación digital empresarial?",
        options: [
            "Eliminación de la competencia",
            "Mejora de la toma de decisiones",
            "Reducción de costos de hardware"
        ],
        correct: 1
    },
    {
        question: "¿Cuál NO es una característica del Big Data?",
        options: [
            "Velocidad",
            "Visibilidad",
            "Volumen"
        ],
        correct: 1
    },
    {
        question: "¿Qué componente de los entornos IT es esencial para el procesamiento y almacenamiento de datos?",
        options: [
            "Telecomunicaciones",
            "Equipos Informáticos",
            "Bases de Datos"
        ],
        correct: 1
    },
    {
        question: "¿Qué diferencia clave hay entre digitalización y transformación digital?",
        options: [
            "La digitalización rediseña todos los procesos; la transformación digital solo digitaliza documentos",
            "La transformación digital implica una revisión/rediseño exhaustivo; la digitalización convierte procesos analógicos individuales y mejora eficiencia",
            "Son lo mismo"
        ],
        correct: 1
    },
    {
        question: "¿Qué modelo de computación se caracteriza por el procesamiento de datos directamente en el dispositivo IoT, sin depender de nodos intermedios o la nube, y es ideal para acciones inmediatas?",
        options: [
            "Edge Computing",
            "Mist Computing",
            "Fog Computing"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el propósito principal de la evaluación de resultados en comunicación interna?",
        options: [
            "Garantizar la efectividad y relevancia de los esfuerzos realizados",
            "Medir la satisfacción del cliente",
            "Aumentar la productividad de los empleados"
        ],
        correct: 0
    },
    {
        question: "¿Qué es típico de un entorno OT?",
        options: [
            "Sensores y actuadores",
            "CRM",
            "Correo electrónico corporativo"
        ],
        correct: 0
    },
    {
        question: "¿Qué aspecto es crucial al presentar hallazgos de análisis de datos?",
        options: [
            "Uso de gráficos complejos",
            "Detalle exhaustivo de cada dato",
            "Comunicación clara y concisa"
        ],
        correct: 2
    },
    {
        question: "¿Qué entorno se centra en controlar procesos físicos y maquinaria en tiempo real?",
        options: [
            "CRM",
            "OT",
            "IT"
        ],
        correct: 1
    },
    {
        question: "¿Qué tecnología permite a las máquinas aprender de datos pasados sin programación explícita para cada tarea, siendo parte fundamental de la IA?",
        options: [
            "Redes Neuronales",
            "Deep Learning",
            "Machine Learning"
        ],
        correct: 2
    },
    {
        question: "¿Qué desafío plantea la rápida evolución de las normativas en el uso de IA?",
        options: [
            "Incremento de los costos operativos",
            "Cumplir con estándares vigentes sin comprometer principios morales",
            "Disminución de la innovación"
        ],
        correct: 1
    },
    {
        question: "¿Qué ventaja ofrece la computación en la nube frente a un CPD propio?",
        options: [
            "Alta escalabilidad",
            "Control total del hardware",
            "Baja inversión inicial"
        ],
        correct: 0
    },
    {
        question: "¿Qué tipo de servicio en la nube es Heroku?",
        options: [
            "PaaS",
            "IaaS",
            "SaaS"
        ],
        correct: 0
    },
    {
        question: "¿Qué permite a las empresas de retail predecir la demanda de productos?",
        options: [
            "Reducción de la variedad de productos",
            "Análisis de datos",
            "Aumento de precios"
        ],
        correct: 1
    },
    {
        question: "¿Qué tecnología permite el procesamiento escalable y rentable de datos en el contexto de IA?",
        options: [
            "Big Data",
            "Cloud Computing",
            "Internet de las Cosas (IoT)"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es una de las oportunidades que ofrece la IA en sectores clave?",
        options: [
            "Aumento de la burocracia",
            "Innovación y competitividad",
            "Reducción de la calidad del producto"
        ],
        correct: 1
    },
    {
        question: "¿Qué medida de seguridad es crucial para proteger los datos y asegurar la continuidad de las operaciones?",
        options: [
            "Automatización",
            "Ciberseguridad",
            "Outsourcing"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de tareas realizan los robots equipados con IA en entornos industriales?",
        options: [
            "Tareas de gestión administrativa",
            "Tareas de diseño creativo",
            "Tareas peligrosas o repetitivas"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de servicio en la nube es Google App Engine?",
        options: [
            "IaaS",
            "SaaS",
            "PaaS"
        ],
        correct: 2
    },
    {
        question: "¿Qué es esencial para la presentación de resultados en proyectos de análisis de datos?",
        options: [
            "Inclusión de todos los datos recolectados",
            "Herramientas y técnicas adecuadas para la comunicación",
            "Detalle exhaustivo de cada paso del análisis"
        ],
        correct: 1
    },
    {
        question: "¿Qué es crucial para la recolección y registro de datos personales en bases de datos?",
        options: [
            "Utilizar datos de acceso público",
            "Recopilar datos sin consentimiento",
            "Tener una autorización explícita del titular"
        ],
        correct: 2
    },
    {
        question: "¿Qué enfoque permite repartir la carga de procesamiento y almacenamiento de datos?",
        options: [
            "Almacenamiento en dispositivos locales",
            "Almacenamiento distribuido",
            "Almacenamiento centralizado"
        ],
        correct: 1
    },
    {
        question: "¿Qué reto de la implementación de la IA en entornos industriales se relaciona con la necesidad de infraestructuras para manejar grandes volúmenes de datos en tiempo real?",
        options: [
            "Ética y privacidad",
            "Infraestructura adecuada",
            "Transformación laboral"
        ],
        correct: 1
    },
    {
        question: "¿Qué permite la optimización de rutas y tiempos de entrega en empresas de logística?",
        options: [
            "Contratación de más personal",
            "Integración de Big Data y sensores IoT",
            "Uso de drones para entregas"
        ],
        correct: 1
    },
    {
        question: "¿Qué método de recolección de información es ideal para obtener datos de una gran muestra rápidamente?",
        options: [
            "Observaciones directas",
            "Encuestas",
            "Entrevistas"
        ],
        correct: 1
    },
    {
        question: "¿Qué medida de seguridad implica limitar el acceso a la información según el rol?",
        options: [
            "Modelo Zero Trust",
            "Cifrado de datos",
            "Acceso Según el Criterio del Mínimo Privilegio"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de servicio en la nube es Microsoft Azure?",
        options: [
            "PaaS",
            "IaaS",
            "SaaS"
        ],
        correct: 1
    },
    {
        question: "¿Qué se debe garantizar al realizar anotaciones en un diario de campo?",
        options: [
            "Revisión periódica de las anotaciones",
            "Realización inmediata de las anotaciones",
            "Inclusión de opiniones personales"
        ],
        correct: 1
    },
    {
        question: "¿Qué se debe evitar para garantizar que un modelo no se ajuste demasiado a un conjunto específico de datos?",
        options: [
            "Subajuste",
            "Sobreajuste",
            "Uso de datos externos"
        ],
        correct: 1
    },
    {
        question: "¿Qué técnica es comúnmente utilizada para la validación interna de modelos?",
        options: [
            "Cross-validation",
            "Algoritmo de clustering",
            "Análisis de regresión"
        ],
        correct: 0
    },
    {
        question: "¿Qué etapa del desarrollo de software implica la adopción de nuevas tecnologías para integrar sistemas?",
        options: [
            "Administración de Datos",
            "Control o Formalización",
            "Integración"
        ],
        correct: 2
    },
    {
        question: "Un equipo de marketing utiliza Google Drive para colaborar en una campaña. ¿Qué función clave de Google Drive facilita la colaboración en tiempo real y evita la confusión de versiones?",
        options: [
            "Comentarios",
            "Edición simultánea",
            "Almacenamiento en la nube"
        ],
        correct: 1
    },
    {
        question: "¿Qué modelo de servicio en la nube permite alquilar recursos computacionales de forma flexible y escalable sin invertir en hardware físico?",
        options: [
            "IaaS",
            "SaaS",
            "PaaS"
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
            message = '¡Excelente! Tienes un conocimiento sobresaliente en digitalización aplicada a sectores productivos.';
        } else if (this.score >= 7) {
            message = '¡Muy bien! Tienes buenos conocimientos de digitalización aplicada a sectores productivos.';
        } else if (this.score >= 5) {
            message = 'Aprobado. Considera repasar algunos conceptos de digitalización aplicada a sectores productivos.';
        } else {
            message = 'Necesitas mejorar tus conocimientos en digitalización aplicada a sectores productivos. ¡Sigue estudiando!';
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
