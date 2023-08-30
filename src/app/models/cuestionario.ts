export class Questions {
    QUESTION: Question[]
  }
  
  export class Question {
    id: number
    text: string
    type_id: number //difficulty
    answers: Answer[]
  }
  
  export class Answer {
    id: number
    text: string
    is_correct: number
    answers: any[string];
  }