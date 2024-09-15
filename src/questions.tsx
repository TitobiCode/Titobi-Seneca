export interface Question {
    questionText: string;
    optionSets: { options: string[]; correct: number }[];
  }
  
  export const questions: Question[] = [
    {
      questionText: 'An animal cell contains:',
      optionSets: [
        { options: ['Cell wall', 'Ribosomes'], correct: 1 },
        { options: ['Cytoplasm', 'Chloroplast'], correct: 0 },
        { options: ['Partially permeable membrane', 'Impermeable membrane'], correct: 0 },
        { options: ['Cellulose', 'Mitochondria'], correct: 1 }
      ]
    },
    {
      questionText: 'Which of these is a planet?',
      optionSets: [
        { options: ['Mars', 'Moon', 'Pluto'], correct: 0 },
        { options: ['Earth', 'Sun', 'Phobos'], correct: 0 }
      ]
    },
    {
        questionText: 'What are the ideal conditions inside an office?',
        optionSets: [
          { options: ['Good pay', 'Bad pay'], correct: 0 },
          { options: ['Free coffee', 'Expensive coffee'], correct: 0 },
          { options: ['Lot of meetings', 'Less meetings'], correct: 1 },
          { options: ['Bear in office', 'Dog in office'], correct: 1 }
        ]
      },
  ];
  
