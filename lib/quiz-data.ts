export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export const allQuestions: Question[] = [
  {
    id: 1,
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "Brasília",
  },
  {
    id: 2,
    question: "Which language is spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: "Portuguese",
  },
  {
    id: 3,
    question: "What colors are on the Brazilian flag?",
    options: [
      "Green, yellow, blue, and white",
      "Red, white, and blue",
      "Green and red",
      "Yellow and black",
    ],
    correctAnswer: "Green, yellow, blue, and white",
  },
  {
    id: 4,
    question: "Which famous rainforest is largely in Brazil?",
    options: [
      "Black Forest",
      "Amazon Rainforest",
      "Sherwood Forest",
      "Congo Rainforest",
    ],
    correctAnswer: "Amazon Rainforest",
  },
  {
    id: 5,
    question: "Which sport is the most popular in Brazil?",
    options: ["Baseball", "Tennis", "Soccer", "Hockey"],
    correctAnswer: "Soccer",
  },
  {
    id: 6,
    question: "Which city is home to the Christ the Redeemer statue?",
    options: ["Brasília", "Recife", "Rio de Janeiro", "Belo Horizonte"],
    correctAnswer: "Rio de Janeiro",
  },
  {
    id: 7,
    question: "What is pão de queijo?",
    options: [
      "A fruit juice",
      "A cheese bread",
      "A chocolate dessert",
      "A soup",
    ],
    correctAnswer: "A cheese bread",
  },
  {
    id: 8,
    question: "What is brigadeiro?",
    options: [
      "A savory pie",
      "A cheese snack",
      "A chocolate sweet",
      "A fruit salad",
    ],
    correctAnswer: "A chocolate sweet",
  },
  {
    id: 9,
    question: "What is feijoada?",
    options: [
      "A bean stew",
      "A dessert",
      "A tropical fruit",
      "A dance",
    ],
    correctAnswer: "A bean stew",
  },
  {
    id: 10,
    question: "Which animal is often found in the Amazon region of Brazil?",
    options: ["Jaguar", "Polar bear", "Penguin", "Camel"],
    correctAnswer: "Jaguar",
  },
  {
    id: 11,
    question: "What is Carnival in Brazil famous for?",
    options: [
      "Snow sculptures",
      "Parades, costumes, and music",
      "Pumpkin contests",
      "Fireworks only",
    ],
    correctAnswer: "Parades, costumes, and music",
  },
  {
    id: 12,
    question: "Brazil is in which continent?",
    options: ["Europe", "Africa", "South America", "Asia"],
    correctAnswer: "South America",
  },
  {
    id: 13,
    question: "What is the currency of Brazil?",
    options: ["Peso", "Dollar", "Real", "Euro"],
    correctAnswer: "Real",
  },
  {
    id: 14,
    question: "Which famous Brazilian music and dance style is known around the world?",
    options: ["Samba", "Flamenco", "Waltz", "Polka"],
    correctAnswer: "Samba",
  },
  {
    id: 15,
    question: "Which ocean is on the east coast of Brazil?",
    options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
    correctAnswer: "Atlantic Ocean",
  },
  {
    id: 16,
    question: "Which of these is a famous Brazilian beach?",
    options: ["Copacabana", "Waikiki", "Bondi", "Venice Beach"],
    correctAnswer: "Copacabana",
  },
  {
    id: 17,
    question: "Which city is the largest in Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "São Paulo",
  },
  {
    id: 18,
    question: "What does 'tchau' mean in Portuguese?",
    options: ["Hello", "Please", "Thank you", "Bye"],
    correctAnswer: "Bye",
  },
  {
    id: 19,
    question: "What does 'obrigado' mean in Portuguese?",
    options: ["Thank you", "Good morning", "Good night", "Excuse me"],
    correctAnswer: "Thank you",
  },
  {
    id: 20,
    question: "Which fruit grows in Brazil and is used for a popular purple smoothie bowl?",
    options: ["Apple", "Açaí", "Peach", "Pear"],
    correctAnswer: "Açaí",
  },
  {
    id: 21,
    question: "What do people call the big soccer stadium in Rio that is one of the most famous in the world?",
    options: ["Maracanã", "Morumbi", "Mineirão", "Beira-Rio"],
    correctAnswer: "Maracanã",
  },
  {
    id: 22,
    question: "Which of these animals is a colorful bird found in Brazil?",
    options: ["Toucan", "Ostrich", "Peacock", "Swan"],
    correctAnswer: "Toucan",
  },
  {
    id: 23,
    question: "Which of these foods is common in Brazilian barbecues?",
    options: ["Sushi", "Churrasco", "Tacos", "Croissants"],
    correctAnswer: "Churrasco",
  },
  {
    id: 24,
    question: "Which shape appears in the middle of Brazil's flag?",
    options: ["Square", "Circle", "Diamond", "Triangle"],
    correctAnswer: "Diamond",
  },
  {
    id: 25,
    question: "What is the Amazon River?",
    options: [
      "A mountain range",
      "A famous road",
      "One of the largest rivers in the world",
      "A desert",
    ],
    correctAnswer: "One of the largest rivers in the world",
  },
  {
    id: 26,
    question: "Which Brazilian state is famous for pão de queijo?",
    options: ["Bahia", "Minas Gerais", "Amazonas", "Paraná"],
    correctAnswer: "Minas Gerais",
  },
  {
    id: 27,
    question: "Which city is Brazil's capital planned city with modern design?",
    options: ["Brasília", "Rio de Janeiro", "Fortaleza", "Curitiba"],
    correctAnswer: "Brasília",
  },
  {
    id: 28,
    question: "Which of these is a Brazilian martial art that also looks like a dance?",
    options: ["Karate", "Capoeira", "Judo", "Taekwondo"],
    correctAnswer: "Capoeira",
  },
  {
    id: 29,
    question: "What is one popular way Brazilians greet each other?",
    options: ["A bow", "A handshake or cheek kiss", "A salute", "A high kick"],
    correctAnswer: "A handshake or cheek kiss",
  },
  {
    id: 30,
    question: "Brazil is famous for growing which drink ingredient?",
    options: ["Coffee", "Tea leaves", "Cocoa only", "Maple syrup"],
    correctAnswer: "Coffee",
  },
]

export function getRandomQuestions(count: number = 8): Question[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
