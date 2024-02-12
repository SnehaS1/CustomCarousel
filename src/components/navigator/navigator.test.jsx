import { act, render, renderHook, screen, within } from "@testing-library/react";
import SlideNavigator from "./navigator";
import { useQuestionsStore } from "../../store/questionsStore";
import userEvent from '@testing-library/user-event'

describe("Slide Navigator component renders", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useQuestionsStore());
    // Reset the state
    act(() => {
      result.current.activeIndex = 0;
    });
  });
  it("should render navigator Componnet  correctly", () => {
    renderSlideNavigator();
    const element = screen.getByRole('slides-navigator')
    expect(element).toBeInTheDocument();
  });
  it("check count of slides", () => {
    renderSlideNavigator();
    const element = screen.getByRole('slides-navigator')
    const { getAllByRole } = within(element);
    const items = getAllByRole("unit-navigator")
    // expect(items.length).toBe(5)
  });
  it("check store update", () => {
    renderSlideNavigator();
    const { result } = renderHook(() => useQuestionsStore());
    act(() => result.current.setActiveindex(10));
    expect(result.current.activeIndex).toBe(10);
  });
  it("check store update on click", async () => {
    renderSlideNavigator();
    const { result } = renderHook(() => useQuestionsStore());
    const elements = screen.getAllByRole('unit-navigator');
    await userEvent.click(elements[0]);
    expect(result.current.activeIndex).toBe(0);
  });

});

const renderSlideNavigator = () => {
  return render(<SlideNavigator />)
};