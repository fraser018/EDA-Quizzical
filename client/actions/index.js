// CHANGE ROOM NUMBERS
export function goToGame() {
    return {
        type: 'START_GAME'
    }
}

export function goToMainMenu() {
    return {
        type: 'MAIN_MENU'
    }
}

export function incrementPage() {
    return {
        type: 'INCREMENT_PAGE'
    }
}

// QUESTIONS
export function addQuestions(questions) {
    return {
        type: 'ADD_QUESTIONS',
        questions
    }
}

export function resetQuestions() {
    return {
        type: 'RESET_QUESTIONS'
    }
}

// PLAYER RESPONSES
export function resetPlayerResponses() {
    return {
        type: 'CLEAR_PR_STATE'
    }
}

// NUMBER OF ANSWERS
export function incrementAnswerCount() {
    return {
        type: 'INCREMENT_ANSWER_COUNT'
    }
}

export function resetAnswerCount() {
    return {
        type: 'RESET_ANSWER_COUNT'
    }
}

// CLOCK
export function resetClock() {
    return {
        type: 'RESET_CLOCK'
    }
}

export function decrementClock() {
    return {
        type: 'DECREMENT_CLOCK'
    }
}

// SCORE
export function incrementScore(score) {
    return {
        type: 'INCREMENT_SCORE',
        score
    }
}

export function resetScore() {
    return {
        type: 'RESET_SCORE'
    }
}