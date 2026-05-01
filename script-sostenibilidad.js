const questions = [
    {
        question: "¿Qué enfoque estratégico, mencionado en el texto, busca la sustitución de recursos naturales por capital humano o tecnológico sin comprometer el bienestar global?",
        options: [
            "Sostenibilidad débil",
            "Racionalidad ambiental",
            "Sostenibilidad fuerte"
        ],
        correct: 0
    },
    {
        question: "¿Qué se busca con la implementación de políticas de Responsabilidad Social Corporativa (RSC)?",
        options: [
            "Mejorar la calidad de vida de los empleados y la comunidad",
            "Reducir la transparencia empresarial",
            "Aumentar únicamente los beneficios económicos"
        ],
        correct: 0
    },
    {
        question: "¿Qué es la economía circular?",
        options: [
            "Un sistema que se enfoca únicamente en la reducción de la huella de carbono",
            "Un sistema económico que busca minimizar el desperdicio y hacer un uso eficiente de los recursos",
            "Un modelo que prioriza el crecimiento económico sin restricciones"
        ],
        correct: 1
    },
    {
        question: "¿Qué debe incluir la evaluación de la implementación de un proyecto de intervención social?",
        options: [
            "Solo la metodología utilizada",
            "Solo la temporalización del proyecto",
            "Grado de cumplimiento de los objetivos"
        ],
        correct: 2
    },
    {
        question: "¿Qué implica la Responsabilidad Social Corporativa (RSC) en una empresa?",
        options: [
            "Considerar los impactos de todas las actividades sobre los stakeholders",
            "Fomentar únicamente el bienestar de los empleados",
            "Solo cumplir con la legislación nacional"
        ],
        correct: 0
    },
    {
        question: "¿Qué estrategia de negocio en la economía circular se enfoca en la fabricación de productos de alta durabilidad?",
        options: [
            "Suficiencia",
            "Vida clásica larga",
            "Acceso y rendimiento"
        ],
        correct: 1
    },
    {
        question: "¿Qué sector productivo se enfoca en la creación de ciudades sostenibles según los ODS?",
        options: [
            "Sector servicios",
            "Sector industrial",
            "Sector agrícola"
        ],
        correct: 0
    },
    {
        question: "¿Qué es un KPI específico en un proyecto educativo?",
        options: [
            "Número de beneficiarios que han recibido formación",
            "Reducción en el nivel de contaminación del aire",
            "Porcentaje de estudiantes que completan el curso con una calificación aprobatoria"
        ],
        correct: 2
    },
    {
        question: "¿Qué se promueve con la economía circular en el sector energético?",
        options: [
            "Menos residuos y emisiones",
            "Incremento de la contaminación",
            "Reducción de la eficiencia energética"
        ],
        correct: 0
    },
    {
        question: "¿Cuántos objetivos tiene la Agenda 2030?",
        options: [
            "8",
            "15",
            "17"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta permite evaluar los impactos ambientales de un producto a lo largo de todas sus etapas (desde materias primas hasta disposición final)?",
        options: [
            "CATWOE",
            "Análisis del Ciclo de Vida (ACV)",
            "Diagrama de Gantt"
        ],
        correct: 1
    },
    {
        question: "¿Qué sector productivo se centra en la innovación y la infraestructura sostenible?",
        options: [
            "Sector industrial",
            "Sector energético",
            "Sector agrícola"
        ],
        correct: 0
    },
    {
        question: "¿Qué principio de la economía circular implica devolver a la naturaleza los recursos que de ella extraemos?",
        options: [
            "Uso de energías renovables",
            "Regeneración de la naturaleza",
            "Circular productos y materiales"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es uno de los objetivos principales del ecodiseño?",
        options: [
            "Minimizar el impacto ambiental a lo largo del ciclo de vida del producto",
            "Aumentar la complejidad del diseño del producto",
            "Maximizar la producción a corto plazo"
        ],
        correct: 0
    },
    {
        question: "¿Qué concepto clave, relacionado con la interacción entre grupos humanos y su espacio geográfico, se destaca en el texto como esencial para entender los modelos de desarrollo sustentable a nivel regional?",
        options: [
            "Sustentabilidad",
            "Territorialidad",
            "Racionalidad ambiental"
        ],
        correct: 1
    },
    {
        question: "¿Qué principio de buena regulación se relaciona directamente con la necesidad de que las normas sean claras, sencillas y reduzcan las cargas administrativas, promoviendo la transparencia?",
        options: [
            "Transparencia y simplificación",
            "Participación ciudadana",
            "Publicidad"
        ],
        correct: 0
    },
    {
        question: "¿Qué se debe hacer para asegurar la satisfacción y rendimiento óptimo en el puesto de trabajo?",
        options: [
            "Gestionar grupos humanos heterogéneos",
            "Implementar tecnologías limpias",
            "Establecer metas claras y medibles"
        ],
        correct: 0
    },
    {
        question: "¿Qué ODS se relaciona directamente con la necesidad de desarrollar infraestructuras resilientes, promoviendo una industrialización inclusiva y sostenible, y fomentando la innovación tecnológica?",
        options: [
            "ODS 9",
            "ODS 12",
            "ODS 8"
        ],
        correct: 0
    },
    {
        question: "¿Qué estrategia de ecodiseño implica garantizar que los productos y sus partes se puedan separar y volver a ensamblar con facilidad?",
        options: [
            "Uso de energías renovables",
            "Minimización de embalajes",
            "Diseño para el desmontaje y reensamblaje"
        ],
        correct: 2
    },
    {
        question: "¿Qué promueve principalmente el ODS 12?",
        options: [
            "Reducir residuos mediante prevención, reducción, reciclaje y reutilización y mejorar la eficiencia en el uso de recursos",
            "Aumentar el consumo para impulsar el crecimiento económico a cualquier coste",
            "Eliminar toda normativa sobre productos químicos para abaratar procesos"
        ],
        correct: 0
    },
    {
        question: "¿Qué ODS se centra en la creación de ciudades y comunidades sostenibles?",
        options: [
            "ODS 2",
            "ODS 9",
            "ODS 11"
        ],
        correct: 2
    },
    {
        question: "¿Qué es esencial para la comunicación efectiva en una organización?",
        options: [
            "Solo transmitir información de arriba hacia abajo",
            "Ignorar las opiniones de los empleados",
            "Que sea bidireccional, permitiendo retroalimentación"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de KPI mide la igualdad de oportunidades para acceder a las actividades?",
        options: [
            "Indicadores de eficiencia",
            "Indicadores de eficacia",
            "Indicadores de equidad"
        ],
        correct: 2
    },
    {
        question: "¿Qué es la Agenda 2030 para el Desarrollo Sostenible?",
        options: [
            "Un programa para fomentar el crecimiento económico sin restricciones",
            "Un conjunto de objetivos globales para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos",
            "Una estrategia para reducir únicamente la huella de carbono"
        ],
        correct: 1
    },
    {
        question: "¿Qué organismo internacional, mencionado en el texto, juega un rol fundamental en la implementación y supervisión de tratados internacionales, desde la promoción de derechos fundamentales hasta el fomento del empleo?",
        options: [
            "OCDE",
            "Organización Internacional del Trabajo (OIT)",
            "UNESCO"
        ],
        correct: 1
    },
    {
        question: "¿Qué práctica empresarial es clave para la sostenibilidad y la responsabilidad social corporativa?",
        options: [
            "Expansión de mercado",
            "Colaboraciones y alianzas estratégicas",
            "Publicidad y marketing"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de incentivo gubernamental se relaciona directamente con la reducción de la carga impositiva para empresas que implementan programas de sostenibilidad o políticas de igualdad?",
        options: [
            "Subvenciones directas",
            "Etiquetas de sostenibilidad",
            "Desgravaciones fiscales"
        ],
        correct: 2
    },
    {
        question: "¿Qué implica la gestión ASG en las organizaciones?",
        options: [
            "Integrar aspectos ambientales, sociales y de gobernanza en la gestión empresarial",
            "Aumentar la producción industrial sin restricciones",
            "Reducir la importancia de la equidad social"
        ],
        correct: 0
    },
    {
        question: "¿Qué modelo de negocio verde se gestiona democráticamente y se enfoca en actividades como la agricultura ecológica?",
        options: [
            "Fondos de inversión socialmente responsables",
            "Cooperativas verdes",
            "Startups tecnológicas verdes"
        ],
        correct: 1
    },
    {
        question: "¿Qué modelo de negocio se basa en la propiedad democrática de sus miembros?",
        options: [
            "Empresas de impacto",
            "Cooperativas",
            "Sociedades de beneficio público"
        ],
        correct: 1
    },
    {
        question: "¿Qué implica la sostenibilidad fuerte?",
        options: [
            "Fomentar el crecimiento económico sin restricciones",
            "Conservación rigurosa de los recursos naturales sin permitir alteraciones",
            "Permitir la sustitución de recursos naturales por capital humano"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el primer paso crucial en el desarrollo de un plan de sostenibilidad empresarial?",
        options: [
            "Implementar tecnologías limpias",
            "Establecer metas claras",
            "Realizar un diagnóstico inicial"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es el principal objetivo de la sostenibilidad según la Comisión Brundtland?",
        options: [
            "Satisfacer las necesidades del presente sin comprometer la capacidad de futuras generaciones",
            "Reducir la huella de carbono únicamente",
            "Promover el crecimiento económico a cualquier costo"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es uno de los riesgos económicos asociados a la implementación de los ODS?",
        options: [
            "Creación de empleos verdes",
            "Redistribución desigual de recursos",
            "Aumento de la biodiversidad"
        ],
        correct: 1
    },
    {
        question: "¿Qué es la territorialidad en el contexto de la sostenibilidad?",
        options: [
            "Simple ocupación del suelo por una comunidad",
            "Relación intrínseca entre un grupo humano y el espacio geográfico que habita",
            "Desplazamiento de comunidades para la explotación de recursos"
        ],
        correct: 1
    },
    {
        question: "¿Qué modelo de negocio se basa en la premisa de minimizar los residuos desde el diseño del producto?",
        options: [
            "Economía lineal",
            "Economía de escala",
            "Economía circular"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es uno de los principales objetivos de la economía circular?",
        options: [
            "Reducir la eficiencia energética",
            "Incrementar la producción de residuos",
            "Maximizar la reutilización de recursos"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta modular y accesible, mencionada en el texto, permite a las organizaciones reportar sus impactos económicos, ambientales y sociales de manera coherente y verificable, independientemente de su tamaño?",
        options: [
            "TCFD",
            "Estándares GRI",
            "SASB"
        ],
        correct: 1
    },
    {
        question: "¿Qué tipo de empresa se constituye con la finalidad de generar un impacto positivo en la sociedad y el medio ambiente?",
        options: [
            "Empresas de impacto",
            "Cooperativas verdes",
            "Empresas de beneficio público"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es el objetivo principal del ODS 4?",
        options: [
            "Reducir el consumo de agua por parte de los sistemas agrícolas.",
            "Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida",
            "Incrementar la producción industrial sin límites ambientales"
        ],
        correct: 1
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
            message = '¡Excelente! Tienes un conocimiento sobresaliente en sostenibilidad aplicada al sistema productivo.';
        } else if (this.score >= 7) {
            message = '¡Muy bien! Tienes buenos conocimientos de sostenibilidad aplicada al sistema productivo.';
        } else if (this.score >= 5) {
            message = 'Aprobado. Considera repasar algunos conceptos de sostenibilidad aplicada al sistema productivo.';
        } else {
            message = 'Necesitas mejorar tus conocimientos en sostenibilidad aplicada al sistema productivo. ¡Sigue estudiando!';
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
