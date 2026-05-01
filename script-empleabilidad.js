const questions = [
    {
        question: "¿Qué metodología promueve la entrega continua y la adaptación rápida en el desarrollo de soluciones innovadoras, según la información proporcionada?",
        options: [
            "Big Data",
            "Metodología ágil",
            "Design Thinking"
        ],
        correct: 1
    },
    {
        question: "¿Qué metodología ágil se centra en la validación continua de ideas a través de la creación de productos mínimos viables (PMV) y la respuesta ágil a las necesidades del mercado, minimizando el riesgo de fracaso?",
        options: [
            "Lean Startup",
            "Design Thinking",
            "Scrum"
        ],
        correct: 0
    },
    {
        question: "¿Qué técnica de selección de personal se centra en medir factores como inteligencia y rasgos de personalidad?",
        options: [
            "Pruebas psicométricas",
            "Entrevistas por competencias",
            "Dinámicas de grupo"
        ],
        correct: 0
    },
    {
        question: "¿Qué competencia es fundamental para establecer relaciones laborales saludables?",
        options: [
            "Motivación",
            "Empatía",
            "Adaptabilidad"
        ],
        correct: 1
    },
    {
        question: "¿Qué aspecto es crucial al adaptar un currículum al sector objetivo?",
        options: [
            "Incluir todas las experiencias laborales",
            "Usar un diseño gráfico llamativo",
            "Uso de palabras clave específicas del sector"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta digital es esencial para la búsqueda de empleo y permite crear perfiles detallados visibles para empleadores?",
        options: [
            "Twitter",
            "Facebook",
            "LinkedIn"
        ],
        correct: 2
    },
    {
        question: "¿Qué actitud clave implica anticiparse a las necesidades y desafíos antes de que ocurran?",
        options: [
            "Proactividad",
            "Comunicación",
            "Adaptabilidad"
        ],
        correct: 0
    },
    {
        question: "¿Qué forma jurídica es ideal para proyectos que buscan un modelo de gestión democrático?",
        options: [
            "Cooperativa",
            "Sociedad Limitada",
            "Sociedad Anónima"
        ],
        correct: 0
    },
    {
        question: "¿Qué aspecto es crucial para alinear un modelo de negocio con los Objetivos de Desarrollo Sostenible (ODS)?",
        options: [
            "Exclusividad de mercado",
            "Expansión internacional",
            "Integración de prácticas sostenibles"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta digital se describe como esencial para capturar, analizar y utilizar grandes volúmenes de datos, mejorando los procesos de toma de decisiones y fomentando nuevos desarrollos?",
        options: [
            "IoT",
            "IA",
            "Big Data"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta ayuda a estructurar y comunicar ideas de negocio de manera clara y concisa?",
        options: [
            "Business Model Canvas",
            "Análisis del Ciclo de Vida (ACV)",
            "Índice de Progreso Social (SPI)"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es una técnica clave para la gestión de conflictos según Daniel Goleman?",
        options: [
            "Empatía",
            "Asertividad",
            "Motivación extrínseca"
        ],
        correct: 0
    },
    {
        question: "¿Qué técnica de selección permite observar el comportamiento de los candidatos en situaciones simuladas?",
        options: [
            "Pruebas de conocimiento",
            "Dinámicas de grupo",
            "Entrevistas técnicas"
        ],
        correct: 1
    },
    {
        question: "¿Qué componente del Business Model Canvas describe los grupos de consumidores a los que se dirige una empresa?",
        options: [
            "Recursos Clave",
            "Segmentos de Clientes",
            "Propuesta de Valor"
        ],
        correct: 1
    },
    {
        question: "¿Qué es fundamental para gestionar la huella digital en favor de la empleabilidad?",
        options: [
            "Evitar el uso de redes sociales",
            "Publicar contenido personal sin restricciones",
            "Mantener perfiles profesionales actualizados"
        ],
        correct: 2
    },
    {
        question: "¿Qué competencia social es clave para la negociación efectiva?",
        options: [
            "Autorregulación",
            "Motivación intrínseca",
            "Habilidades interpersonales"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta permite una evaluación completa del impacto ambiental y social de un producto o servicio, desde su concepción hasta su desecho?",
        options: [
            "Análisis del Ciclo de Vida (ACV)",
            "Auditoría Ética",
            "Índice de Progreso Social (SPI)"
        ],
        correct: 0
    },
    {
        question: "¿Qué metodología se centra en la creación de un producto con las características esenciales para los primeros usuarios?",
        options: [
            "Análisis del Ciclo de Vida (ACV)",
            "Índice de Progreso Social (SPI)",
            "Mínimo producto viable (MVP)"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta se utiliza para clasificar tareas según su urgencia e importancia?",
        options: [
            "Matriz de Eisenhower",
            "Técnica Pomodoro",
            "Método Kanban"
        ],
        correct: 0
    },
    {
        question: "¿Qué dimensión del emprendimiento se centra en cómo las entidades empresariales utilizan sus recursos de manera eficiente y efectiva para generar valor?",
        options: [
            "Dimensión organizacional",
            "Dimensión económica",
            "Dimensión social"
        ],
        correct: 0
    },
    {
        question: "¿Qué tipo de emprendimiento se caracteriza por la búsqueda de un equilibrio entre crecimiento económico, protección ambiental y bienestar social, aprovechando las fallas del mercado?",
        options: [
            "Emprendimiento Tradicional",
            "Emprendimiento Sostenible",
            "Emprendimiento Social"
        ],
        correct: 1
    },
    {
        question: "¿Qué estrategia es útil para la autocandidatura y el envío proactivo de currículums?",
        options: [
            "Evitar el uso de redes sociales",
            "Esperar a que las empresas publiquen vacantes",
            "Investigación de empresas y personalización del currículum"
        ],
        correct: 2
    },
    {
        question: "¿Qué práctica ayuda a mejorar la autoconciencia y la regulación emocional?",
        options: [
            "Técnica de la pausa",
            "Visualización positiva",
            "Mindfulness"
        ],
        correct: 2
    },
    {
        question: "La colaboración entre empresas y emprendedores se conoce como:",
        options: [
            "Monopolio",
            "Innovación abierta",
            "Competencia desleal"
        ],
        correct: 1
    },
    {
        question: "Considerando la relación entre innovación, sostenibilidad y bienestar social, ¿qué tipo de impacto se enfatiza como resultado de la implementación de procesos de producción más limpios o el uso de energías renovables?",
        options: [
            "Aumento de las ganancias",
            "Mejora de la calidad de vida",
            "Reducción de costes operativos"
        ],
        correct: 1
    },
    {
        question: "¿Qué diferencia clave existe entre los procesos de selección en el sector público y privado?",
        options: [
            "El sector público tiene procesos más regulados y estandarizados",
            "El sector privado siempre utiliza entrevistas grupales",
            "El sector privado no valora las competencias emocionales"
        ],
        correct: 0
    },
    {
        question: "¿Qué técnica de autorregulación emocional ayuda a manejar el estrés?",
        options: [
            "Técnica Pomodoro",
            "Reencuadre cognitivo",
            "Técnica de la pausa"
        ],
        correct: 1
    },
    {
        question: "¿Qué ejemplo de marca personal exitosa se basa en la capacidad de revolucionar industrias?",
        options: [
            "Sheryl Sandberg",
            "Oprah Winfrey",
            "Elon Musk"
        ],
        correct: 2
    },
    {
        question: "¿Qué técnica se utiliza para modificar ideas existentes mediante siete categorías de acción?",
        options: [
            "Mapas mentales",
            "SCAMPER",
            "Análisis FODA"
        ],
        correct: 1
    },
    {
        question: "¿Qué competencia personal es crucial para enfrentar y superar adversidades?",
        options: [
            "Iniciativa",
            "Resiliencia",
            "Empatía"
        ],
        correct: 1
    },
    {
        question: "¿Qué factor del análisis PESTEL se refiere a la estabilidad gubernamental y las políticas de bienestar social?",
        options: [
            "Político",
            "Social",
            "Económico"
        ],
        correct: 0
    },
    {
        question: "¿Qué estrategia es útil para evitar la procrastinación y aumentar la productividad?",
        options: [
            "Técnica Pomodoro",
            "Método SMART",
            "Design Thinking"
        ],
        correct: 0
    },
    {
        question: "La economía circular busca:",
        options: [
            "Descartar productos al final de su vida útil",
            "Reducir costos de producción",
            "Minimizar residuos y maximizar la reutilización"
        ],
        correct: 2
    },
    {
        question: "En el sector público, ¿qué aspecto de los procesos de selección busca asegurar la transparencia, igualdad y mérito, minimizando la posibilidad de favoritismos?",
        options: [
            "Duración del proceso",
            "Flexibilidad",
            "Regulación estricta"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de liderazgo se centra en la integridad y la toma de decisiones que beneficien a la sociedad?",
        options: [
            "Liderazgo laissez-faire",
            "Liderazgo ético",
            "Liderazgo transaccional"
        ],
        correct: 1
    },
    {
        question: "¿Qué herramienta financiera ayuda a determinar el nivel de ventas necesario para cubrir todos los costes de un negocio?",
        options: [
            "Encuestas de satisfacción",
            "Análisis de mercado",
            "Análisis de punto de equilibrio"
        ],
        correct: 2
    },
    {
        question: "¿Qué principio es central en el liderazgo sostenible?",
        options: [
            "Uso eficiente y responsable de los recursos",
            "Centralización del poder",
            "Competencia interna"
        ],
        correct: 0
    },
    {
        question: "¿Qué tipo de entrevista sigue un formato y guion predefinidos?",
        options: [
            "Entrevista por competencias",
            "Entrevista estructurada",
            "Entrevista semiestructurada"
        ],
        correct: 1
    },
    {
        question: "¿Qué técnica se utiliza para fomentar la creatividad en equipos?",
        options: [
            "Análisis DAFO",
            "Brainstorming",
            "Planificación estratégica"
        ],
        correct: 1
    },
    {
        question: "La innovación sostenible se centra en:",
        options: [
            "Desarrollar soluciones que protejan el medio ambiente",
            "Reducir costos a cualquier precio",
            "Aumentar la producción sin límites"
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
            message = '¡Excelente! Tienes un conocimiento sobresaliente en empleabilidad y desarrollo profesional.';
        } else if (this.score >= 7) {
            message = '¡Muy bien! Tienes buenos conocimientos de empleabilidad y desarrollo profesional.';
        } else if (this.score >= 5) {
            message = 'Aprobado. Considera repasar algunos conceptos de empleabilidad y desarrollo profesional.';
        } else {
            message = 'Necesitas mejorar tus conocimientos en empleabilidad y desarrollo profesional. ¡Sigue estudiando!';
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
