document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    // Quiz functionality
    if (document.querySelector('.quiz-main')) {
        const quizData = {
            math: [
                {
                    question: "What is 5 × 7?",
                    options: ["30", "35", "40", "45"],
                    answer: 1
                },
                {
                    question: "What is the value of π (pi) to two decimal places?",
                    options: ["3.14", "3.16", "3.12", "3.18"],
                    answer: 0
                },
                // Add 8 more math questions...
            ],
            science: [
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Go", "Gd", "Au", "Ag"],
                    answer: 2
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    answer: 1
                },
                // Add 8 more science questions...
            ],
            history: [
                {
                    question: "In which year did World War II end?",
                    options: ["1945", "1939", "1941", "1950"],
                    answer: 0
                },
                {
                    question: "Who was the first president of the United States?",
                    options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
                    answer: 2
                },
                // Add 8 more history questions...
            ],
            english: [
                {
                    question: "Which of these is a preposition?",
                    options: ["run", "under", "happy", "quickly"],
                    answer: 1
                },
                {
                    question: "What is the past tense of 'go'?",
                    options: ["goed", "went", "gone", "going"],
                    answer: 1
                },
                // Add 8 more english questions...
            ],
            geography: [
                {
                    question: "What is the capital of France?",
                    options: ["Berlin", "Madrid", "Paris", "Rome"],
                    answer: 2
                },
                {
                    question: "Which is the longest river in the world?",
                    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                    answer: 1
                },
                // Add 8 more geography questions...
            ]
        };

        // Add the remaining questions to each subject to make 10 per subject
        // (In a real implementation, you would complete all 50 questions)

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
        let selectedOption = null;

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
            const currentQuiz = quizData[currentSubject];
            const question = currentQuiz[currentQuestionIndex];
            
            questionCountElement.textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.length}`;
            questionElement.textContent = question.question;
            
            optionsContainer.innerHTML = '';
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('button');
                optionElement.classList.add('option');
                optionElement.textContent = option;
                optionElement.dataset.index = index;
                optionElement.addEventListener('click', selectOption);
                optionsContainer.appendChild(optionElement);
            });
            
            nextButton.disabled = true;
        }

        function selectOption(e) {
            const options = document.querySelectorAll('.option');
            options.forEach(option => option.classList.remove('selected'));
            
            selectedOption = parseInt(e.target.dataset.index);
            e.target.classList.add('selected');
            nextButton.disabled = false;
        }

        nextButton.addEventListener('click', function() {
            const currentQuiz = quizData[currentSubject];
            const question = currentQuiz[currentQuestionIndex];
            
            // Check if answer is correct
            const options = document.querySelectorAll('.option');
            if (selectedOption === question.answer) {
                score++;
                options[selectedOption].classList.add('correct');
            } else {
                options[selectedOption].classList.add('incorrect');
                options[question.answer].classList.add('correct');
            }
            
            // Disable all options
            options.forEach(option => {
                option.style.pointerEvents = 'none';
            });
            
            // Move to next question or show results
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < currentQuiz.length) {
                    loadQuestion();
                    nextButton.disabled = true;
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
            if (percentage >= 80) {
                resultMessage.textContent = 'Excellent! You have a strong understanding of this subject.';
                document.querySelector('.result-emoji').textContent = '🎉';
            } else if (percentage >= 50) {
                resultMessage.textContent = 'Good job! With a bit more practice you can master this subject.';
                document.querySelector('.result-emoji').textContent = '👍';
            } else {
                resultMessage.textContent = 'Keep practicing! Check out our resources to improve.';
                document.querySelector('.result-emoji').textContent = '📚';
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

    // Resources page functionality
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
                // Combine all resources
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

        // Set active subject button based on URL parameter
        if (subjectParam) {
            document.querySelector(`.subject-btn[data-subject="${subjectParam}"]`).classList.add('active');
            loadResources(subjectParam);
        } else {
            document.querySelector('.subject-btn[data-subject="all"]').classList.add('active');
            loadResources('all');
        }

        // Subject button click handlers
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