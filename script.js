document.addEventListener('DOMContentLoaded', function() {
    const quizData = {
        math: [
            {
                question: "What is the value of π (pi) rounded to two decimal places?",
                options: ["3.14", "3.16", "3.12", "3.18"],
                answer: "3.14"
            },
            {
                question: "What is the square root of 64?",
                options: ["6", "7", "8", "9"],
                answer: "8"
            },
            {
                question: "What is 15% of 200?",
                options: ["15", "20", "30", "45"],
                answer: "30"
            },
            {
                question: "Solve for x: 2x + 5 = 15",
                options: ["5", "7", "10", "12"],
                answer: "5"
            },
            {
                question: "What is the area of a rectangle with length 8 and width 5?",
                options: ["13", "26", "35", "40"],
                answer: "40"
            },
            {
                question: "How many degrees are in a right angle?",
                options: ["45", "90", "180", "360"],
                answer: "90"
            },
            {
                question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
                options: ["24", "28", "32", "64"],
                answer: "32"
            },
            {
                question: "What is 7 squared?",
                options: ["14", "47", "49", "56"],
                answer: "49"
            },
            {
                question: "How many sides does a hexagon have?",
                options: ["4", "5", "6", "7"],
                answer: "6"
            },
            {
                question: "What is the sum of the angles in a triangle?",
                options: ["90°", "120°", "180°", "360°"],
                answer: "180°"
            }
        ],
        science: [
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                answer: "H2O"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: "Mars"
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Quartz"],
                answer: "Diamond"
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                answer: "Carbon Dioxide"
            },
            {
                question: "What is the human body's largest organ?",
                options: ["Liver", "Brain", "Skin", "Heart"],
                answer: "Skin"
            },
            {
                question: "Which scientist developed the theory of relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
                answer: "Albert Einstein"
            },
            {
                question: "What is the pH value of pure water?",
                options: ["5", "7", "9", "12"],
                answer: "7"
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Helium", "Carbon", "Hydrogen", "Oxygen"],
                answer: "Hydrogen"
            },
            {
                question: "What force keeps planets in orbit around the sun?",
                options: ["Electromagnetism", "Gravity", "Nuclear Force", "Centrifugal Force"],
                answer: "Gravity"
            },
            {
                question: "What is the speed of light in a vacuum?",
                options: ["300,000 km/s", "150,000 km/s", "1 million km/s", "30 km/s"],
                answer: "300,000 km/s"
            }
        ],
        history: [
            {
                question: "In which year did World War II end?",
                options: ["1943", "1945", "1947", "1950"],
                answer: "1945"
            },
            {
                question: "Who was the first president of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
                answer: "George Washington"
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Greeks", "Romans", "Egyptians", "Mayans"],
                answer: "Egyptians"
            },
            {
                question: "When did the Titanic sink?",
                options: ["1905", "1912", "1918", "1923"],
                answer: "1912"
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci"
            },
            {
                question: "Which country was Nelson Mandela president of?",
                options: ["Nigeria", "Kenya", "South Africa", "Egypt"],
                answer: "South Africa"
            },
            {
                question: "When did the Berlin Wall fall?",
                options: ["1985", "1989", "1991", "1995"],
                answer: "1989"
            },
            {
                question: "Who discovered America in 1492?",
                options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"],
                answer: "Christopher Columbus"
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek", "Roman", "Persian", "Ottoman"],
                answer: "Roman"
            },
            {
                question: "What was the main cause of the Cold War?",
                options: ["Economic differences", "Religious conflicts", "Political tensions between US and USSR", "Territorial disputes"],
                answer: "Political tensions between US and USSR"
            }
        ],
        english: [
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                answer: "William Shakespeare"
            },
            {
                question: "What is the plural of 'child'?",
                options: ["Childs", "Children", "Childes", "Childen"],
                answer: "Children"
            },
            {
                question: "Which of these is a preposition?",
                options: ["Run", "Beautiful", "Under", "Quickly"],
                answer: "Under"
            },
            {
                question: "What is the past tense of 'go'?",
                options: ["Goed", "Gone", "Went", "Going"],
                answer: "Went"
            },
            {
                question: "Which literary device compares two things using 'like' or 'as'?",
                options: ["Metaphor", "Simile", "Hyperbole", "Alliteration"],
                answer: "Simile"
            },
            {
                question: "What is the main character in a story called?",
                options: ["Antagonist", "Protagonist", "Narrator", "Supporting character"],
                answer: "Protagonist"
            },
            {
                question: "Which of these is a conjunction?",
                options: ["And", "Happy", "Jump", "Blue"],
                answer: "And"
            },
            {
                question: "What genre is 'Harry Potter'?",
                options: ["Biography", "Fantasy", "Historical Fiction", "Science Fiction"],
                answer: "Fantasy"
            },
            {
                question: "What is the adjective in: 'The quick brown fox jumps over the lazy dog'?",
                options: ["Quick", "Fox", "Jumps", "Dog"],
                answer: "Quick"
            },
            {
                question: "Who wrote 'Pride and Prejudice'?",
                options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Virginia Woolf"],
                answer: "Jane Austen"
            }
        ],
        geography: [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                answer: "Paris"
            },
            {
                question: "Which is the longest river in the world?",
                options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
                answer: "Nile"
            },
            {
                question: "Which continent is the largest by area?",
                options: ["Africa", "Asia", "Europe", "North America"],
                answer: "Asia"
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Maldives", "Vatican City", "San Marino"],
                answer: "Vatican City"
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
                answer: "Sahara"
            },
            {
                question: "Which country has the most time zones?",
                options: ["USA", "Russia", "China", "France"],
                answer: "France"
            },
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                answer: "Ottawa"
            },
            {
                question: "Which ocean is the largest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                answer: "Pacific"
            },
            {
                question: "Mount Everest is located in which mountain range?",
                options: ["Andes", "Rockies", "Alps", "Himalayas"],
                answer: "Himalayas"
            },
            {
                question: "Which country is both an island and a continent?",
                options: ["New Zealand", "Madagascar", "Australia", "Greenland"],
                answer: "Australia"
            }
        ]
    };

    let currentSubject = '';
    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];

    const subjectSelect = document.getElementById('subject-select');
    const startQuizBtn = document.getElementById('start-quiz');
    const quizContainer = document.getElementById('quiz-container');
    const questionCountSpan = document.getElementById('question-count');
    const subjectNameSpan = document.getElementById('subject-name');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextBtn = document.getElementById('next-btn');
    const resultPopup = document.getElementById('result-popup');
    const resultSubject = document.getElementById('result-subject');
    const resultScore = document.getElementById('result-score');
    const resultMessage = document.getElementById('result-message');
    const retakeBtn = document.getElementById('retake-btn');
    const resourcesBtn = document.getElementById('resources-btn');

    startQuizBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    retakeBtn.addEventListener('click', retakeQuiz);
    resourcesBtn.addEventListener('click', viewResources);

    function startQuiz() {
        currentSubject = subjectSelect.value;
        if (!currentSubject) {
            alert('Please select a subject first!');
            return;
        }

        currentQuestionIndex = 0;
        score = 0;
        questions = [...quizData[currentSubject]];
        
        quizContainer.style.display = 'block';
        
        const subjectNames = {
            math: "Mathematics",
            science: "Science",
            history: "History",
            english: "English",
            geography: "Geography"
        };
        subjectNameSpan.textContent = subjectNames[currentSubject];
        
        loadQuestion();
    }

    function loadQuestion() {
        questionCountSpan.textContent = `Question ${currentQuestionIndex + 1}/10`;
        
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        
        optionsElement.innerHTML = '';
        
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectOption(option));
            optionsElement.appendChild(button);
        });
        
        nextBtn.disabled = true;
    }

    function selectOption(selectedOption) {
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            button.classList.remove('selected');
            if (button.textContent === selectedOption) {
                button.classList.add('selected');
            }
        });
        
        nextBtn.disabled = false;
    }

    function nextQuestion() {
        const selectedButton = document.querySelector('.option-btn.selected');
        if (!selectedButton) return;
        
        const selectedAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        
        if (selectedAnswer === currentQuestion.answer) {
            score++;
        }
        
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizContainer.style.display = 'none';
        
        const subjectNames = {
            math: "Mathematics",
            science: "Science",
            history: "History",
            english: "English",
            geography: "Geography"
        };
        
        resultSubject.textContent = subjectNames[currentSubject];
        resultScore.textContent = `${score}/10`;
        
        
        if (score >= 8) {
            resultMessage.textContent = "Excellent work! You really know your stuff!";
        } else if (score >= 5) {
            resultMessage.textContent = "Good job! With a bit more practice you'll be perfect!";
        } else {
            resultMessage.textContent = "Keep practicing! You'll get better with time!";
        }
        
        resultPopup.style.display = 'block';
    }

    function retakeQuiz() {
        resultPopup.style.display = 'none';
        startQuiz();
    }

    function viewResources() {
        window.location.href = `resources.html?subject=${currentSubject}`;
    }

    document.querySelector('.close-popup').addEventListener('click', function() {
        resultPopup.style.display = 'none';
    });
});