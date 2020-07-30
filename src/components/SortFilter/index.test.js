import React from "react";
import { render, fireEvent, getAllByText } from "@testing-library/react";
import renderer from "react-test-renderer";
import SortFilter from ".";

const defaultData = [
  {
    title: "test-asc",
    orderBy: "test",
    sort: "asc",
  },
  {
    title: "test-desc",
    orderBy: "test",
    sort: "desc",
  },
];

describe("SortFilter", () => {
  let filters = [];

  beforeEach(() => {
    filters = defaultData;
  });

  it("should match snapshot", () => {
    const comp = renderer.create(<SortFilter filters={filters} />).toJSON();
    expect(comp).toMatchSnapshot();
  });

  it("should match snapshot with filters is empty", () => {
    const comp = renderer.create(<SortFilter filters={[]} />).toJSON();
    expect(comp).toMatchSnapshot();
  });

  it("should be able to select an option and invoke onSelected", () => {
    const mockOnSelected = jest.fn();
    const { container, getByText } = render(
      <SortFilter filters={filters} onSelected={mockOnSelected} />
    );
    fireEvent.click(container.querySelector("select"));
    fireEvent.click(getByText("test-desc"));
    fireEvent.change(container.querySelector("select"), {
      target: { value: "test-desc" },
    });
    expect(mockOnSelected).toHaveBeenCalled();
    expect(mockOnSelected).toBeCalledWith({
      orderBy: "test",
      sort: "desc",
    });
  });
});
