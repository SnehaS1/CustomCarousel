import { act, fireEvent, render, renderHook, screen, within } from "@testing-library/react";
import FeebackConatiner from "./feedback";
import { useQuestionsStore } from "../../store/questionsStore";
import userEvent from '@testing-library/user-event';

describe("Register component", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useQuestionsStore());

    // Reset the state
    act(() => {
      result.current.activeIndex = 0;
    });
  });
  it(`MyComponent renders with default props`, () => {
    const { asFragment } = render(<FeebackConatiner questionId={1} />)

    expect(asFragment(<FeebackConatiner questionId={1} />)).toMatchSnapshot()
  });
  it("should render feedback component correctly", () => {
    render(<FeebackConatiner questionId={1} />);
    const element = screen.getByRole('feedback-section')
    expect(element).toBeInTheDocument();
  });
  it("should render 3 emojis correctly", () => {
    render(<FeebackConatiner questionId={1} />);
    expect(screen.getAllByRole('emoji').length).toBe(3);
  });
  it("should update on click", () => {
    render(<FeebackConatiner questionId={1} />);
    const { result } = renderHook(() => useQuestionsStore());
    expect(result.current.activeIndex).toBe(0);
  });
  it("should update on click", () => {
    render(<FeebackConatiner questionId={1} />);
    const { result } = renderHook(() => useQuestionsStore());
    expect(result.current.questionsList.length).toBe(6);
  });
  it("should update on click", () => {
    render(<FeebackConatiner questionId={1} />);
    const { result } = renderHook(() => useQuestionsStore());
    expect(result.current.questionsList.length).toBe(6);
  });
  it("should update on click", async () => {
    render(<FeebackConatiner questionId={1} />);
    const { result } = renderHook(() => useQuestionsStore());
    expect(result.current.activeIndex).toBe(0);
    // await userEvent.click(screen.getByRole('emoji'), 0);
    await userEvent.click(screen.getAllByRole('emoji')[0])
    expect(result.current.activeIndex).toBe(1);
    // expect(result.current.questionsList.length).toBe(6);

    result.current.setActiveindex
  });
  it('should handle onclick ', async () => {
    render(<FeebackConatiner questionId={1} />);
    const mockedSetTodo = jest.fn();

  })
  it('should update handleEmojiClick', async () => {
    function renderOfficeCharacters() {
      render(<FeebackConatiner questionId={1} />);

      return {
        getEmojis() {
          return screen.getAllByTestId("emoji-list-li").map((item) => ({
            value: within(item).getByTestId("emoji-tooltip").textContent,
            handleEmojiClick: within(item).getByTestId("emoji-wrapper")
          }));
        }
      };
    }
    const { getEmojis } = renderOfficeCharacters();
    const likeVal = "Like";
    expect(
      getEmojis().find((character) => character.value === likeVal)
    ).toBeTruthy();
  })
});
