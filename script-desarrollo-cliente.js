const questions = [
    {
        question: "¿Qué tipo de nodo representa los comentarios en una página XHTML?",
        options: [
            "Text",
            "Comment",
            "Element"
        ],
        correct: 1
    },
    {
        question: "¿Qué propiedad del objeto document devuelve el elemento actualmente enfocado en el documento?",
        options: [
            "currentElement",
            "activeElement",
            "focusedElement"
        ],
        correct: 1
    },
    {
        question: "¿Qué método del objeto document se utiliza para crear un nodo de texto?",
        options: [
            "createTextNode()",
            "createNode()",
            "createText()"
        ],
        correct: 0
    },
    {
        question: "¿Qué método se utiliza para acceder a un nodo específico por su ID?",
        options: [
            "getElementById()",
            "getElementsByName()",
            "getElementsByTagName()"
        ],
        correct: 0
    },
    {
        question: "¿Qué método se utiliza para acceder a un formulario mediante su id en JavaScript?",
        options: [
            "document.getFormById()",
            "document.getElementById()",
            "document.getElement()"
        ],
        correct: 1
    },
    {
        question: "¿Qué método se utiliza para obtener todos los elementos de una página XHTML con una etiqueta específica?",
        options: [
            "getElementsByName()",
            "getElementsByTagName()",
            "getElementById()"
        ],
        correct: 1
    },
    {
        question: "¿Qué valor de la propiedad status del objeto XMLHttpRequest indica que la solicitud fue exitosa?",
        options: [
            "404",
            "200",
            "500"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es la función principal del objeto XMLHttpRequest en AJAX?",
        options: [
            "Crear y manipular elementos HTML",
            "Gestionar la base de datos del servidor",
            "Permitir la comunicación asíncrona con el servidor"
        ],
        correct: 2
    },
    {
        question: "¿Qué propiedad de un radiobutton en JavaScript devuelve true si está seleccionado?",
        options: [
            "selected",
            "value",
            "checked"
        ],
        correct: 2
    },
    {
        question: "¿Qué método del objeto XMLHttpRequest se utiliza para cancelar la solicitud actual?",
        options: [
            "open()",
            "abort()",
            "send()"
        ],
        correct: 1
    },
    {
        question: "¿Qué operador se utiliza para el desplazamiento a la derecha sin signo en JavaScript?",
        options: [
            ">>",
            "<<",
            ">>>"
        ],
        correct: 2
    },
    {
        question: "¿Qué método se utiliza para inicializar una solicitud en el objeto XMLHttpRequest?",
        options: [
            "send()",
            "abort()",
            "open()"
        ],
        correct: 2
    },
    {
        question: "¿Qué herramienta de programación permite probar y depurar el código?",
        options: [
            "Generador de estilo",
            "Editor de texto",
            "Depurador (debugger)"
        ],
        correct: 2
    },
    {
        question: "¿Qué función convierte una cadena en un número con coma flotante?",
        options: [
            "toString()",
            "parseInt()",
            "parseFloat()"
        ],
        correct: 2
    },
    {
        question: "¿Qué método del objeto XMLHttpRequest se utiliza para enviar una solicitud al servidor?",
        options: [
            "open()",
            "send()",
            "getResponseHeader()"
        ],
        correct: 1
    },
    {
        question: "¿Qué propiedad del objeto XMLHttpRequest contiene el estado de la solicitud?",
        options: [
            "responseText",
            "status",
            "readyState"
        ],
        correct: 2
    },
    {
        question: "¿Qué método del objeto window se utiliza para abrir una nueva ventana del navegador?",
        options: [
            "open()",
            "newWindow()",
            "createWindow()"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el modelo de eventos que no es compatible con Internet Explorer?",
        options: [
            "Modelo básico",
            "Modelo estándar",
            "Modelo propio de Internet Explorer"
        ],
        correct: 1
    },
    {
        question: "¿Qué método se utiliza para añadir un nuevo nodo al final de la lista childNodes?",
        options: [
            "insertBefore()",
            "appendChild()",
            "replaceChild()"
        ],
        correct: 1
    },
    {
        question: "¿Qué formato de datos es más compacto y ligero que XML y se utiliza en AJAX?",
        options: [
            "JSON",
            "HTML",
            "CSV"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el principal objetivo de HTML5 en el desarrollo web?",
        options: [
            "Mejorar la experiencia de usuario en dispositivos móviles",
            "Reemplazar completamente a JavaScript",
            "Eliminar la necesidad de CSS"
        ],
        correct: 0
    },
    {
        question: "¿Qué propiedad de un nodo devuelve una lista de todos sus nodos hijos?",
        options: [
            "lastChild",
            "childNodes",
            "firstChild"
        ],
        correct: 1
    },
    {
        question: "¿Qué propiedad del objeto window devuelve la URL del documento que se está visualizando?",
        options: [
            "src",
            "location",
            "href"
        ],
        correct: 1
    },
    {
        question: "¿Qué evento se produce cuando el usuario selecciona un elemento del formulario?",
        options: [
            "onblur",
            "onfocus",
            "onclick"
        ],
        correct: 1
    },
    {
        question: "¿Cuál es el valor de typeof null en JavaScript?",
        options: [
            "\"object\"",
            "\"null\"",
            "\"undefined\""
        ],
        correct: 0
    },
    {
        question: "¿Cuál es la instrucción en JavaScript para crear un objeto a partir de una clase?",
        options: [
            "new",
            "instantiate",
            "create"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es el resultado de 5 + \"5\" en JavaScript?",
        options: [
            "10",
            "\"10\"",
            "\"55\""
        ],
        correct: 2
    },
    {
        question: "¿Qué método se utiliza para reemplazar un nodo por otro en el árbol DOM?",
        options: [
            "swapNode()",
            "replaceElement()",
            "replaceChild()"
        ],
        correct: 2
    },
    {
        question: "¿Qué propiedad de un elemento de formulario HTML permite leer y modificar el valor del atributo value?",
        options: [
            "name",
            "type",
            "value"
        ],
        correct: 2
    },
    {
        question: "¿Qué tipo de arquitectura permite a los usuarios finales obtener acceso a la información de manera transparente, incluso en entornos multiplataforma?",
        options: [
            "Cliente/servidor",
            "Peer-to-peer",
            "Monolítica"
        ],
        correct: 0
    },
    {
        question: "¿Qué tecnología permite realizar cambios en una página web sin necesidad de recargarla?",
        options: [
            "AJAX",
            "CSS",
            "HTML5"
        ],
        correct: 0
    },
    {
        question: "¿Qué método del objeto window se utiliza para mostrar un cuadro de alerta con un mensaje y un botón Aceptar?",
        options: [
            "alert()",
            "displayAlert()",
            "showAlert()"
        ],
        correct: 0
    },
    {
        question: "¿Qué framework es el más extendido en las aplicaciones de JavaScript?",
        options: [
            "Angular",
            "React",
            "jQuery"
        ],
        correct: 2
    },
    {
        question: "¿Qué función en JavaScript se utiliza para establecer el foco en un elemento de formulario?",
        options: [
            "setFocus()",
            "getFocus()",
            "focus()"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es el nodo raíz del árbol de nodos en una página XHTML?",
        options: [
            "Document",
            "Element",
            "Text"
        ],
        correct: 0
    },
    {
        question: "¿Cuál es la principal diferencia entre los métodos POST y GET en el envío de formularios?",
        options: [
            "POST envía los datos en la URL",
            "GET es más seguro que POST",
            "GET envía los datos en la URL"
        ],
        correct: 2
    },
    {
        question: "¿Cuál es una de las principales limitaciones de JavaScript en cuanto a la seguridad?",
        options: [
            "Puede cerrar cualquier ventana del navegador",
            "Puede modificar las preferencias del navegador",
            "No puede acceder a los archivos del ordenador del usuario"
        ],
        correct: 2
    },
    {
        question: "¿Qué propiedad del objeto window permite guardar pares clave/valor en un navegador web sin fecha de vencimiento?",
        options: [
            "localStorage",
            "sessionStorage",
            "cookieStorage"
        ],
        correct: 0
    },
    {
        question: "¿Qué operador se utiliza para comparar estrictamente dos valores en JavaScript?",
        options: [
            "==",
            "=",
            "==="
        ],
        correct: 2
    },
    {
        question: "¿Qué operador se utiliza para incrementar el valor de una variable en 1?",
        options: [
            "--",
            "++",
            "+"
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
            message = '¡Excelente! Tienes un conocimiento sobresaliente en desarrollo web cliente.';
        } else if (this.score >= 7) {
            message = '¡Muy bien! Tienes buenos conocimientos de desarrollo web cliente.';
        } else if (this.score >= 5) {
            message = 'Aprobado. Considera repasar algunos conceptos de desarrollo web cliente.';
        } else {
            message = 'Necesitas mejorar tus conocimientos en desarrollo web cliente. ¡Sigue estudiando!';
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
