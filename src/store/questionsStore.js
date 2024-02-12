import { create } from 'zustand';

const questionsList = [{
  id: 0,
  questions: 'How was your overall week ?',
  rating: null,
  backgroundColor: '#BFB2F3'
}, {
  id: 1,
  questions: 'How would you rate your satisfaction with the customer service representative you spoke to?',
  rating: null,
  backgroundColor: '#96CAF7'
}, {
  id: 2,
  questions: 'How would you rate the effort you had to make to get in touch with us?',
  rating: null,
  backgroundColor: '#9CDCAA'
}, {
  id: 3,
  questions: 'How would you rate the effort you had to make to speak directly to someone on the customer service team?',
  rating: null,
  backgroundColor: '#E5E1AB'
}, {
  id: 4,
  questions: 'How would you rate the quality of your customer service experience ?',
  rating: null,
  backgroundColor: '#F8A3A8'
}, {
  id: 5,
  questionsListFinal: [],
  ratings: [],
  backgroundColor: '#ff80bf'
}];

const handleFeedback = (val) => {
  switch (val) {
    case 0:
      return 'Nuetral';
    case 1:
      return 'Like';
    case -1:
      return 'Dislike';
  }
};

export const useQuestionsStore = create((set) => ({
  // initial state
  questionsList: questionsList,
  activeIndex: 0,
  // methods for anipulating state
  setActiveindex: (id) => {
    set(() => ({ activeIndex: id }));
  },
  updateQuestions: (id, val) => {

    set((state) => ({
      questionsList: state.questionsList.map((question) =>
        question.id === id
          ? ({ ...question, rating: handleFeedback(val) })
          : question
      ),
    }));



  },
}));