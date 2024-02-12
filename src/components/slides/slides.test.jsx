import { act, cleanup, render, renderHook, screen, within } from "@testing-library/react";
import { useQuestionsStore } from "../../store/questionsStore";
import userEvent from '@testing-library/user-event'
import SlideComponent from "./slides";

describe("Slide Navigator component renders", () => {
    beforeEach(() => {
        const { result } = renderHook(() => useQuestionsStore());
        // Reset the state
        act(() => {
            result.current.activeIndex = 0;
        });
    });
    afterEach(cleanup);

    it("matches snapshot", () => {
        const { asFragment } = render(<SlideComponent />);
        expect(asFragment()).toMatchSnapshot();
    });
    it("should render Slides Componnet Emoji correctly", () => {
        renderSlideNavigator();
        const { result } = renderHook(() => useQuestionsStore());
        let { activeIndex, questionsList, setActiveindex } = result.current;
        const element = screen.getByRole('slide-panel');
        expect(element).toBeInTheDocument();

    });
    it("should render Slides Componnet Table correctly", () => {
        renderSlideNavigator();
        const { result } = renderHook(() => useQuestionsStore());
        let { activeIndex, questionsList, setActiveindex } = result.current;
        act(() => {
            result.current.setActiveindex(2);
        });
        let questionPart = questionsList.slice(0, -1).find(o => !!o.rating);
        // const element = screen.getByTestId('hide-feedback');

        // expect(element).toBeInTheDocument();

    });
})

const renderSlideNavigator = () => {
    return render(<SlideComponent />)
};