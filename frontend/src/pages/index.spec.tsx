import Greeting from "@udtt/components/Greeting";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<Greeting/>", () => {
  it("renders a greeting", () => {
    render(<Greeting />);

    const message = screen.getByText("Hello, World!");
    expect(message).toBeInTheDocument();
  });

  it("버튼 클릭시 알림창 보여야 한다.", () => {
    window.alert = jest.fn();
    const { getByText } = render(<Greeting />);
    const button = getByText("click");

    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("wow!!!");
  });
});
