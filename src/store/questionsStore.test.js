import { act, renderHook } from '@testing-library/react'

import {create as actualCreate, StateCreator} from "zustand";

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
export const create =
  () =>
  (createState) => {
    const store = actualCreate(createState);
    const initialState = store.getState();
    storeResetFns.add(() => store.setState(initialState, true));

    return store;
  };

// Reset all stores after each test run
beforeEach(() => {
  act(() => storeResetFns.forEach(resetFn => resetFn()));
});
const initialQuestions = [{
    id: 0,
    questions: 'How likely are you to recommend us to friends, family, or colleagues?',
    rating: null,
    backgroundColor: '#BFB2F3'
  }, {
    id: 1,
    questions: 'How would you rate your satisfaction with the customer service representative you spoke to?',
    rating: null,
    backgroundColor: '#96CAF7'
  }
];
const useIncrementingStore = create()(set => ({
    questionsList: initialQuestions,
    activeIndex: 0,
    setActiveindex: (id) => {
        set(() => ({ activeIndex: id }));
    },
    updateQuestions: () => set(state => ({value: state.value + 1})),
  }));
  
  describe("useQuestionStore", () => {
    it("questionsList's initial value:", () => {
      const {result} = renderHook(() => useIncrementingStore());
      expect(result.current.questionsList).toEqual(initialQuestions);
    });
    it("activeIndex's initial value is 0", () => {
        const {result} = renderHook(() => useIncrementingStore());
        expect(result.current.activeIndex).toEqual(0);
      });
  
    it("every time activeIndex is called the value changes", () => {
      const {result} = renderHook(() => useIncrementingStore());
      expect(result.current.activeIndex).toEqual(0);
  
      act(() => result.current.setActiveindex(1));
      expect(result.current.activeIndex).toEqual(1);
      act(() => result.current.setActiveindex(4));
      expect(result.current.activeIndex).toEqual(4);
    });
    describe("useQuestionStore", () => {
        it("questionsList's initial value:", () => {
          const {result} = renderHook(() => useIncrementingStore());
          expect(result.current.questionsList).toEqual(initialQuestions);
        });
        it("activeIndex's initial value is 0", () => {
            const {result} = renderHook(() => useIncrementingStore());
            expect(result.current.activeIndex).toEqual(0);
          });
      
        it("every time activeIndex is called the value changes", () => {
          const {result} = renderHook(() => useIncrementingStore());
          expect(result.current.activeIndex).toEqual(0);
      
          act(() => result.current.setActiveindex(1));
          expect(result.current.activeIndex).toEqual(1);
          act(() => result.current.setActiveindex(4));
          expect(result.current.activeIndex).toEqual(4);
        });
    });
    describe("useQuestionStore update question", () => {
        it("questionsList's initial value:", () => {
          const {result} = renderHook(() => useIncrementingStore());
          expect(result.current.questionsList).toEqual(initialQuestions);
        });
        it("every time activeIndex is called the value changes", () => {
          const {result} = renderHook(() => useIncrementingStore());
          expect(result.current.activeIndex).toEqual(0);
      
          act(() => result.current.setActiveindex(1));
          expect(result.current.activeIndex).toEqual(1);
          act(() => result.current.setActiveindex(4));
          expect(result.current.activeIndex).toEqual(4);
        });
    });
});