const questions = [
    {
        question: "¿Cuál es el formato de vídeo que está en retirada del mercado según el documento?",
        options: [
            "Flash Video (FLV)",
            "MP4",
            "AVI"
        ],
        correct: 0
    },
    {
        question: "¿Qué formato de imagen es adecuado para fotografías debido a su capacidad de tonos continuos?",
        options: [
            "GIF",
            "JPEG",
            "PNG"
        ],
        correct: 1
    },
    {
        question: "¿Qué propiedad CSS se utiliza para definir el color del texto?",
        options: [
            "font-color",
            "color",
            "text-color"
        ],
        correct: 1
    },
    {
        question: "¿Qué propiedad CSS se utiliza para definir el relleno interno de un elemento?",
        options: [
            "margin",
            "border",
            "padding"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta de evaluación de accesibilidad es la más extendida en español?",
        options: [
            "HERA (Fundación Sidar)",
            "Cynthia Says",
            "TAW (Fundación CTIC)"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es el tamaño de letra recomendado para una lectura fluida en una web?",
        options: [
            "Más de 11 puntos",
            "Menos de 7 puntos",
            "Entre 12 y 14 puntos"
        ],
        correct: 2
    },
    {
        question: "¿Qué programa de Adobe se menciona como referencia para desarrollar animaciones tras la desaparición de Flash?",
        options: [
            "Premiere Pro",
            "After Effects",
            "Animate"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es una de las barreras identificadas por los usuarios debido al diseño del documento?",
        options: [
            "Dificultades de software",
            "Tamaño de fuente pequeña",
            "Dificultades de entorno"
        ],
        correct: 1
    },
    {
        question: "¿Qué técnica CSS se recomienda para asegurar un buen contraste entre los colores de primer plano y de fondo?",
        options: [
            "Usar colores aleatorios",
            "Usar colores predeterminados del navegador",
            "Usar números en vez de nombres para especificar colores"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de filtro se utiliza para mejorar una imagen o conseguir un efecto especial?",
        options: [
            "Filtros de CorelDRAW",
            "Filtros de Photoshop",
            "Filtros de Illustrator"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la unidad mínima de expresión gráfica según Donis A. Dondis?",
        options: [
            "El plano",
            "La línea",
            "El punto"
        ],
        correct: 2
    },
    {
        question: "¿Qué elemento de una interfaz web está situado en la parte superior y tiene altura variable?",
        options: [
            "Cuerpo",
            "Pie",
            "Dintel"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de lenguaje de marcas se utiliza para describir fragmentos de texto sin especificar su representación?",
        options: [
            "Marcas descriptivas",
            "Marcas de presentación",
            "Marcas de procedimientos"
        ],
        correct: 0
    },
    {
        question: "¿Qué propiedad CSS se utiliza para importar una hoja de estilo externa en una hoja incrustada?",
        options: [
            "@stylesheet",
            "@import",
            "@link"
        ],
        correct: 1
    },
    {
        question: "¿Qué principio de accesibilidad web se refiere a que la información debe ser presentada de forma que pueda ser percibida?",
        options: [
            "Operatibilidad",
            "Perceptibilidad",
            "Comprensibilidad"
        ],
        correct: 1
    },
    {
        question: "¿Qué herramienta de analítica web permite realizar A/B Testing?",
        options: [
            "AWStats",
            "Google Analytics",
            "Woopra"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es uno de los principios básicos de la accesibilidad web según el documento?",
        options: [
            "Flexibilidad",
            "Simplicidad",
            "Rapidez"
        ],
        correct: 0
    },
    {
        question: "¿Qué elemento HTML delimita el cuerpo principal de un documento, donde se coloca el texto e imágenes visibles al usuario?",
        options: [
            "<head> y </head>",
            "<body> y </body>",
            "<html> y </html>"
        ],
        correct: 1
    },
    {
        question: "¿Quién estableció los puntos clave para el diseño de una página web en su obra Alertbox?",
        options: [
            "Charlene Li",
            "Jakob Nielsen",
            "Josh Bernoff"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la extensión de archivo estándar para una hoja de estilo en cascada?",
        options: [
            ".html",
            ".css",
            ".js"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de usuario se limita a navegar por los contenidos publicados por otros?",
        options: [
            "Creadores",
            "Espectadores",
            "Críticos"
        ],
        correct: 1
    },
    {
        question: "¿Qué nivel de adecuación de las WCAG garantiza un nivel mínimo de accesibilidad?",
        options: [
            "Nivel AA",
            "Nivel A",
            "Nivel AAA"
        ],
        correct: 1
    },
    {
        question: "¿Qué formato de imagen es ideal para Internet debido a su capacidad de compresión y uso de colores planos?",
        options: [
            "GIF",
            "JPEG",
            "PNG"
        ],
        correct: 0
    },
    {
        question: "¿Qué técnica de analítica web se utiliza para analizar la efectividad de diferentes versiones de una página?",
        options: [
            "Análisis de formularios",
            "A/B Testing",
            "DiseMap"
        ],
        correct: 1
    },
    {
        question: "¿Qué propiedad CSS se utiliza para definir el volumen del contenido hablado en hojas de estilo auditivas?",
        options: [
            "volume",
            "sound-level",
            "audio-volume"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es uno de los factores clave que afectan la usabilidad de una página web?",
        options: [
            "Facilidad de aprender",
            "Cantidad de imágenes",
            "Complejidad del diseño"
        ],
        correct: 0
    },
    {
        question: "¿Qué software se menciona como un editor de video gratuito?",
        options: [
            "Adobe Premiere Pro CC",
            "Final Cut Pro",
            "Gimp"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es la unidad mínima de expresión gráfica según Donis A. Dondis?",
        options: [
            "El plano",
            "El punto",
            "La línea"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de lenguaje de marcas se utiliza para describir fragmentos de texto sin especificar su representación?",
        options: [
            "Marcas de presentación",
            "Marcas de procedimientos",
            "Marcas descriptivas"
        ],
        correct: 2
    },
    {
        question: "¿Qué formato de imagen es adecuado para fotografías debido a su capacidad de tonos continuos?",
        options: [
            "GIF",
            "JPEG",
            "PNG"
        ],
        correct: 1
    },
    {
        question: "¿Qué elemento HTML delimita el cuerpo principal de un documento, donde se coloca el texto e imágenes visibles al usuario?",
        options: [
            "<head> y </head>",
            "<body> y </body>",
            "<html> y </html>"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de filtro se utiliza para mejorar una imagen o conseguir un efecto especial?",
        options: [
            "Filtros de Illustrator",
            "Filtros de CorelDRAW",
            "Filtros de Photoshop"
        ],
        correct: 2
    },
    {
        question: "¿Quién estableció los puntos clave para el diseño de una página web en su obra Alertbox?",
        options: [
            "Josh Bernoff",
            "Charlene Li",
            "Jakob Nielsen"
        ],
        correct: 2
    },
    {
        question: "¿Qué programa de Adobe se menciona como referencia para desarrollar animaciones tras la desaparición de Flash?",
        options: [
            "Animate",
            "After Effects",
            "Premiere Pro"
        ],
        correct: 0
    },
    {
        question: "¿Qué propiedad CSS se utiliza para importar una hoja de estilo externa en una hoja incrustada?",
        options: [
            "@stylesheet",
            "@import",
            "@link"
        ],
        correct: 1
    },
    {
        question: "¿Qué herramienta de evaluación de accesibilidad es la más extendida en español?",
        options: [
            "Cynthia Says",
            "TAW (Fundación CTIC)",
            "HERA (Fundación Sidar)"
        ],
        correct: 1
    },
    {
        question: "¿Qué técnica CSS se recomienda para asegurar un buen contraste entre los colores de primer plano y de fondo?",
        options: [
            "Usar colores aleatorios",
            "Usar colores predeterminados del navegador",
            "Usar números en vez de nombres para especificar colores"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es una de las barreras identificadas por los usuarios debido al diseño del documento?",
        options: [
            "Dificultades de software",
            "Tamaño de fuente pequeña",
            "Dificultades de entorno"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el tamaño de letra recomendado para una lectura fluida en una web?",
        options: [
            "Entre 12 y 14 puntos",
            "Menos de 7 puntos",
            "Más de 11 puntos"
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
            message = '¡Excelente! Tienes un conocimiento sobresaliente en desarrollo de interfaces web.';
        } else if (this.score >= 7) {
            message = '¡Muy bien! Tienes buenos conocimientos de desarrollo de interfaces web.';
        } else if (this.score >= 5) {
            message = 'Aprobado. Considera repasar algunos conceptos de desarrollo de interfaces web.';
        } else {
            message = 'Necesitas mejorar tus conocimientos en desarrollo de interfaces web. ¡Sigue estudiando!';
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
