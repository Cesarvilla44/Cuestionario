const questions = [
    {
        question: "\"Deploying applications\" means:",
        options: [
            "Installing and making applications available to users",
            "Testing hardware components",
            "Designing software interfaces"
        ],
        correct: 0
    },
    {
        question: "What does \"motherboard\" mean in Spanish?",
        options: [
            "Fuente de alimentación",
            "Placa base",
            "Disco duro"
        ],
        correct: 1
    },
    {
        question: "Which action requires the operating system to manage hardware resources?",
        options: [
            "Writing an e-mail",
            "Allocating memory to a running program",
            "Designing a logo"
        ],
        correct: 1
    },
    {
        question: "Which component temporarily stores data currently in use by the system?",
        options: [
            "Graphics card",
            "RAM memory",
            "Hard drive"
        ],
        correct: 1
    },
    {
        question: "An \"API\" is mainly used to:",
        options: [
            "Protect systems from malware",
            "Design user interfaces",
            "Allow different software systems to communicate"
        ],
        correct: 2
    },
    {
        question: "Which protocol is used to assign IP addresses automatically?",
        options: [
            "DNS",
            "DHCP",
            "FTP"
        ],
        correct: 1
    },
    {
        question: "A device that connects your home network to the internet is typically a:",
        options: [
            "Router",
            "Printer",
            "Monitor"
        ],
        correct: 0
    },
    {
        question: "Which option best defines \"cloud computing?\"",
        options: [
            "Connecting computers using Bluetooth",
            "Using online servers to store and process data",
            "Storing data only on physical hard drives"
        ],
        correct: 1
    },
    {
        question: "When you type a website name and it is converted into a numeric address, which system is working?",
        options: [
            "DNS",
            "Streaming",
            "Firewall"
        ],
        correct: 0
    },
    {
        question: "If you click an icon and a program opens, which OS function is working?",
        options: [
            "Cable routing",
            "Task management",
            "Network encryption"
        ],
        correct: 1
    },
    {
        question: "What is the correct Spanish translation of \"bug\" in IT?",
        options: [
            "Actualización",
            "Virus",
            "Error informático"
        ],
        correct: 2
    },
    {
        question: "What is the function of a switch inside the LAN?",
        options: [
            "Scan for viruses",
            "Connect multiple devices within the same local network",
            "Translate domain names"
        ],
        correct: 1
    },
    {
        question: "Which task belongs to general IT support?",
        options: [
            "Helping users with technical problems",
            "Designing marketing campaigns",
            "Developing complex software applications"
        ],
        correct: 0
    },
    {
        question: "What is the correct Spanish translation of \"backup data\"?",
        options: [
            "Análisis de datos",
            "Gestión de servidores",
            "Copia de seguridad de datos"
        ],
        correct: 2
    },
    {
        question: "Which situation is an example of using an ISP service?",
        options: [
            "Opening a folder on your desktop",
            "Updating a document offline",
            "Getting internet access at home through a provider"
        ],
        correct: 2
    },
    {
        question: "What does \"encryption\" refer to?",
        options: [
            "Protecting data by converting it into a coded form",
            "Copying data to another server",
            "Deleting unnecessary files"
        ],
        correct: 0
    },
    {
        question: "Which option best describes a background process?",
        options: [
            "A deleted file",
            "A program running without direct user interaction",
            "A broken shortcut"
        ],
        correct: 1
    },
    {
        question: "Which task involves preventing unauthorized access to systems?",
        options: [
            "Debugging",
            "Configuring firewalls",
            "Writing documentation"
        ],
        correct: 1
    },
    {
        question: "What does \"upgrade\" usually mean in a technological context?",
        options: [
            "Encrypting confidential data",
            "Removing software permanently",
            "Improving or updating a system or component"
        ],
        correct: 2
    },
    {
        question: "Which practice directly improves account protection?",
        options: [
            "Using two-factor authentication",
            "Disabling updates",
            "Sharing your password with a classmate"
        ],
        correct: 0
    },
    {
        question: "If someone steals your personal information and uses it online, this is called:",
        options: [
            "Encryption",
            "Updating",
            "Identity theft"
        ],
        correct: 2
    },
    {
        question: "What is the main function of the RAM?",
        options: [
            "Temporary storage for active processes",
            "Power distribution",
            "Long-term data storage"
        ],
        correct: 0
    },
    {
        question: "If an e-mail pretends to be from your bank and asks for your password, it is most likely:",
        options: [
            "A phishing attempt",
            "A system update",
            "A firewall attempt"
        ],
        correct: 0
    },
    {
        question: "If you send a file from your computer to a cloud platform, you are:",
        options: [
            "Downloading it",
            "Encrypting it",
            "Uploading it"
        ],
        correct: 2
    },
    {
        question: "What does \"boot the system\" mean in practice?",
        options: [
            "Delete all users",
            "Disconnect the network",
            "Start the computer and load the OS"
        ],
        correct: 2
    },
    {
        question: "Which definition best describes hardware?",
        options: [
            "Online services and applications",
            "Programs that control the computer",
            "Physical components you can touch"
        ],
        correct: 2
    },
    {
        question: "What is the main purpose of technical support?",
        options: [
            "Managing company finances",
            "Creating software codes",
            "Helping users solve technical issues"
        ],
        correct: 2
    },
    {
        question: "In a school computer lab where all machines are connected in one building, which network type is most appropriate?",
        options: [
            "WAN",
            "PAN",
            "LAN"
        ],
        correct: 2
    },
    {
        question: "Cybersecurity mainly focuses on:",
        options: [
            "Improving network performance and speed",
            "Managing hardware installation processes",
            "Protecting digital systems"
        ],
        correct: 2
    },
    {
        question: "What does \"troubleshooting\" mean?",
        options: [
            "Identifying and solving technical problems",
            "Installing new applications",
            "Training new users"
        ],
        correct: 0
    },
    {
        question: "Where would you normally go to change device settings and user accounts?",
        options: [
            "Control panel / settings",
            "Recycle bin",
            "Taskbar clock"
        ],
        correct: 0
    },
    {
        question: "Which option is an example of system software?",
        options: [
            "Operating system",
            "Web browser",
            "Microsoft Word"
        ],
        correct: 0
    },
    {
        question: "What is the main function of antivirus software?",
        options: [
            "Detect and remove malicious software",
            "Create stronger passwords",
            "Only remove malicious software"
        ],
        correct: 0
    },
    {
        question: "Which example describes a PAN?",
        options: [
            "The global internet",
            "A city government network",
            "A phone connected to wireless headphones by Bluetooth"
        ],
        correct: 2
    },
    {
        question: "What is the main function of an IP address in a network?",
        options: [
            "Increase transmission speed",
            "Uniquely identify a device on the network",
            "Identify the operating system type"
        ],
        correct: 1
    },
    {
        question: "What is a GPU mainly responsible for?",
        options: [
            "Rendering images and videos",
            "Managing internet connections",
            "Storing user files"
        ],
        correct: 0
    },
    {
        question: "If a network is described as wireless, how does it mainly transmit data?",
        options: [
            "Through radio signals (Wi-Fi)",
            "Only through USB drives",
            "Only through fiber cables"
        ],
        correct: 0
    },
    {
        question: "Why is data broken into packets when it travels online?",
        options: [
            "To hide the sender's name",
            "To move efficiently and be reassembled at the destination",
            "To make files larger"
        ],
        correct: 1
    },
    {
        question: "What does DNS stand for in networking?",
        options: [
            "Digital Network System",
            "data Naming Service",
            "Domain Name System"
        ],
        correct: 2
    },
    {
        question: "Which protocol is specifically used to access secure websites?",
        options: [
            "FTP",
            "HTTPS",
            "USB"
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
