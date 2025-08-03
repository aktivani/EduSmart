document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (unchanged)
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    // Quiz functionality - fixed version
    if (document.querySelector('.quiz-main')) {
        // Your original quiz data remains exactly the same
        const quizData = {
            math: [
                // ... all your math questions ...
            ],
            science: [
                // ... all your science questions ...
            ],
            history: [
                // ... all your history questions ...
            ],
            english: [
                // ... all your english questions ...
            ],
            geography: [
                // ... all your geography questions ...
            ]
        };

        // Get all DOM elements
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

        // Quiz state variables
        let currentSubject = '';
        let currentQuestionIndex = 0;
        let score = 0;
        let selectedOptionIndex = null;

        // Start quiz button click handler
        startQuizBtn.addEventListener('click', function() {
            currentSubject = subjectSelect.value;
            if (!currentSubject) {
                alert('Please select a subject');
                return;
            }

            // Initialize quiz
            subjectSelect.disabled = true;
            startQuizBtn.disabled = true;
            quizContainer.style.display = 'block';
            subjectNameElement.textContent = subjectSelect.options[subjectSelect.selectedIndex].text;
            currentQuestionIndex = 0;
            score = 0;
            loadQuestion();
        });

        // Load question function
        function loadQuestion() {
            // Reset selection
            selectedOptionIndex = null;
            
            const currentQuiz = quizData[currentSubject];
            const currentQuestion = currentQuiz[currentQuestionIndex];
            
            // Update question counter
            questionCountElement.textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.length}`;
            
            // Set question text
            questionElement.textContent = currentQuestion.question;
            
            // Clear and create new options
            optionsContainer.innerHTML = '';
            currentQuestion.options.forEach((option, index) => {
                const optionElement = document.createElement('button');
                optionElement.classList.add('option');
                optionElement.textContent = option;
                optionElement.addEventListener('click', () => selectOption(index));
                optionsContainer.appendChild(optionElement);
            });
            
            // Disable next button until an option is selected
            nextButton.disabled = true;
        }

        // Option selection handler
        function selectOption(index) {
            // Remove selected class from all options
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Set selected option
            selectedOptionIndex = index;
            optionsContainer.children[index].classList.add('selected');
            
            // Enable next button
            nextButton.disabled = false;
        }

        // Next button click handler - FIXED VERSION
        nextButton.addEventListener('click', function() {
            if (selectedOptionIndex === null) {
                alert('Please select an answer');
                return;
            }

            const currentQuiz = quizData[currentSubject];
            const currentQuestion = currentQuiz[currentQuestionIndex];
            const options = document.querySelectorAll('.option');
            
            // Check if answer is correct
            if (currentQuestion.options[selectedOptionIndex] === currentQuestion.answer) {
                score++;
                options[selectedOptionIndex].classList.add('correct');
            } else {
                options[selectedOptionIndex].classList.add('incorrect');
                // Highlight correct answer
                const correctIndex = currentQuestion.options.indexOf(currentQuestion.answer);
                options[correctIndex].classList.add('correct');
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
                } else {
                    showResults();
                }
            }, 1000);
        });

        // Show results function
        function showResults() {
            const subjectName = subjectSelect.options[subjectSelect.selectedIndex].text;
            resultSubject.textContent = subjectName;
            resultScore.textContent = `${score}/10`;
            
            // Set result message based on score
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
            
            // Show results popup
            resultPopup.style.display = 'flex';
        }

        // Retake quiz button
        retakeBtn.addEventListener('click', function() {
            resultPopup.style.display = 'none';
            currentQuestionIndex = 0;
            score = 0;
            loadQuestion();
        });

        // View resources button
        resourcesBtn.addEventListener('click', function() {
            window.location.href = `resources.html?subject=${currentSubject}`;
        });

        // Close popup button
        document.querySelector('.close-popup').addEventListener('click', function() {
            resultPopup.style.display = 'none';
        });
    }

    // Resources page code (unchanged)
    if (document.querySelector('.resources-main')) {
        // ... your original resources code ...
    }
});