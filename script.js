document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    if (document.querySelector('.quiz-main')) {
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

        const subjectSelect = document.getElementById('subject-select');
        const startQuizBtn = document.getElementById('start-quiz');
        const quizContainer = document.getElementById('quiz-container');
        const questionElement = document.getElementById('question');
        const optionsContainer = document.getElementById('options');
        const nextButton = document.getElementById('next-btn');
        const questionCountElement = document.getElementById('question-count');
        const subjectNameElement = document.getElementById('subject-name');
        const resultPopup = document.getElementById('result-popup');
        const resultSubject = document.getElementById('result-subject');
        const resultScore = document.getElementById('result-score');
        const resultMessage = document.getElementById('result-message');
        const retakeBtn = document.getElementById('retake-btn');
        const resourcesBtn = document.getElementById('resources-btn');

        let currentSubject = '';
        let currentQuestionIndex = 0;
        let score = 0;
        let selectedOptionIndex = null;

        startQuizBtn.addEventListener('click', function() {
            currentSubject = subjectSelect.value;
            if (!currentSubject) {
                alert('Please select a subject');
                return;
            }

            subjectSelect.disabled = true;
            startQuizBtn.disabled = true;
            quizContainer.style.display = 'block';
            subjectNameElement.textContent = subjectSelect.options[subjectSelect.selectedIndex].text;
            currentQuestionIndex = 0;
            score = 0;
            loadQuestion();
        });

        function loadQuestion() {
            selectedOptionIndex = null;
            
            const currentQuiz = quizData[currentSubject];
            const currentQuestion = currentQuiz[currentQuestionIndex];
            
            questionCountElement.textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.length}`;
            questionElement.textContent = currentQuestion.question;
            
            optionsContainer.innerHTML = '';
            currentQuestion.options.forEach((option, index) => {
                const optionElement = document.createElement('button');
                optionElement.classList.add('option');
                optionElement.textContent = option;
                optionElement.addEventListener('click', () => selectOption(index));
                optionsContainer.appendChild(optionElement);
            });
            
            nextButton.disabled = true;
        }

        function selectOption(index) {
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            selectedOptionIndex = index;
            optionsContainer.children[index].classList.add('selected');
            
            nextButton.disabled = false;
        }

        nextButton.addEventListener('click', function() {
            if (selectedOptionIndex === null) {
                alert('Please select an answer');
                return;
            }

            const currentQuiz = quizData[currentSubject];
            const currentQuestion = currentQuiz[currentQuestionIndex];
            const options = document.querySelectorAll('.option');
            
            if (currentQuestion.options[selectedOptionIndex] === currentQuestion.answer) {
                score++;
                options[selectedOptionIndex].classList.add('correct');
            } else {
                options[selectedOptionIndex].classList.add('incorrect');
                const correctIndex = currentQuestion.options.indexOf(currentQuestion.answer);
                options[correctIndex].classList.add('correct');
            }
            
            options.forEach(option => {
                option.style.pointerEvents = 'none';
            });
            
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < currentQuiz.length) {
                    loadQuestion();
                } else {
                    showResults();
                }
            }, 1000);
        });

        function showResults() {
            const subjectName = subjectSelect.options[subjectSelect.selectedIndex].text;
            resultSubject.textContent = subjectName;
            resultScore.textContent = `${score}/10`;
            
            const percentage = (score / 10) * 100;
            const resultEmoji = document.querySelector('.result-emoji');
            
            if (percentage >= 80) {
                resultMessage.textContent = 'Excellent! You have a strong understanding of this subject.';
                resultEmoji.textContent = '🎉';
            } else if (percentage >= 50) {
                resultMessage.textContent = 'Good job! With a bit more practice you can master this subject.';
                resultEmoji.textContent = '👍';
            } else {
                resultMessage.textContent = 'Keep practicing! Check out our resources to improve.';
                resultEmoji.textContent = '📚';
            }
            
            resultPopup.style.display = 'flex';
        }

        retakeBtn.addEventListener('click', function() {
            resultPopup.style.display = 'none';
            currentQuestionIndex = 0;
            score = 0;
            loadQuestion();
        });

        resourcesBtn.addEventListener('click', function() {
            window.location.href = `resources.html?subject=${currentSubject}`;
        });

        document.querySelector('.close-popup').addEventListener('click', function() {
            resultPopup.style.display = 'none';
        });
    }

    if (document.querySelector('.resources-main')) {
        const resourceData = {
            math: [
                {
                    title: "Algebra Basics",
                    description: "Learn the fundamentals of algebra in this comprehensive video tutorial. Covers variables, equations, and basic operations with clear examples.",
                    videoId: "ybkKvmYjW4I",
                    duration: "12:34",
                    level: "Beginner"
                },
                {
                    title: "Geometry Explained",
                    description: "Understand geometric concepts with visual examples. This video covers angles, shapes, and basic proofs in an easy-to-follow format.",
                    videoId: "q6o8o9I4JQ8",
                    duration: "15:20",
                    level: "Intermediate"
                }
            ],
            science: [
                {
                    title: "Chemistry Fundamentals",
                    description: "Introduction to basic chemistry concepts including atoms, molecules, and chemical reactions. Perfect for beginners starting their science journey.",
                    videoId: "FSyAehMdpyI",
                    duration: "18:45",
                    level: "Beginner"
                },
                {
                    title: "Physics in Motion",
                    description: "Explore the laws of motion and basic physics principles. This video uses real-world examples to explain complex concepts simply.",
                    videoId: "u7lZMUf6Z4Y",
                    duration: "22:10",
                    level: "Intermediate"
                }
            ],
            history: [
                {
                    title: "Ancient Civilizations",
                    description: "Journey through time to explore ancient civilizations including Egypt, Greece, and Rome. Learn about their cultures and contributions.",
                    videoId: "sohXPx_XZ6Y",
                    duration: "25:30",
                    level: "All Levels"
                }
            ],
            english: [
                {
                    title: "Grammar Essentials",
                    description: "Master English grammar with this comprehensive guide. Covers parts of speech, sentence structure, and common mistakes to avoid.",
                    videoId: "8ZvF3qe3Xh4",
                    duration: "20:15",
                    level: "Beginner"
                }
            ],
            geography: [
                {
                    title: "World Geography",
                    description: "Explore the world's continents, countries, and physical features. This video provides a great overview of global geography concepts.",
                    videoId: "vg5A0d1h5hQ",
                    duration: "16:40",
                    level: "All Levels"
                }
            ]
        };

        const subjectButtons = document.querySelectorAll('.subject-btn');
        const resourcesContainer = document.getElementById('resources-container');
        const urlParams = new URLSearchParams(window.location.search);
        const subjectParam = urlParams.get('subject');

        function loadResources(subject) {
            resourcesContainer.innerHTML = '';
            
            let resourcesToShow = [];
            if (subject === 'all' || !subject) {
                for (const sub in resourceData) {
                    resourcesToShow = resourcesToShow.concat(resourceData[sub]);
                }
            } else {
                resourcesToShow = resourceData[subject] || [];
            }
            
            if (resourcesToShow.length === 0) {
                resourcesContainer.innerHTML = '<p>No resources found for this subject.</p>';
                return;
            }
            
            resourcesToShow.forEach(resource => {
                const resourceCard = document.createElement('div');
                resourceCard.classList.add('resource-card');
                
                resourceCard.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${resource.videoId}" 
                            title="${resource.title}" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    <div class="resource-info">
                        <h3>${resource.title}</h3>
                        <p>${resource.description}</p>
                        <div class="resource-meta">
                            <span>${resource.duration}</span>
                            <span>${resource.level}</span>
                        </div>
                    </div>
                `;
                
                resourcesContainer.appendChild(resourceCard);
            });
        }

        if (subjectParam) {
            document.querySelector(`.subject-btn[data-subject="${subjectParam}"]`).classList.add('active');
            loadResources(subjectParam);
        } else {
            document.querySelector('.subject-btn[data-subject="all"]').classList.add('active');
            loadResources('all');
        }

        subjectButtons.forEach(button => {
            button.addEventListener('click', function() {
                subjectButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const subject = this.dataset.subject;
                loadResources(subject);
            });
        });
    }
});