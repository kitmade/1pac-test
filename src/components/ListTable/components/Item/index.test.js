import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Item from "./";

let defaultData = {
  data: [{ title: "test", date_created: "2000/01/01" }],
  nasa_id: "test_id",
};

describe("Item", () => {
  let data = {};

  beforeEach(() => {
    data = defaultData;
  });

  it("should match snapshot", () => {
    const comp = renderer.create(<Item data={data} />).toJSON();
    expect(comp).toMatchSnapshot();
  });

  it("should match snapshot when data is empty", () => {
    data = { data: [{}], nasa_id: "" };
    const comp = renderer.create(<Item data={data} />).toJSON();
    expect(comp).toMatchSnapshot();
  });

  it("should delete and undo item", () => {
    const { getByText, container } = render(<Item data={data} />);
    fireEvent.click(getByText("remove"));
    expect(container.querySelector("tr").className).toBe("removed-tr");
    fireEvent.click(getByText("undo"));
    expect(container.querySelector("tr").className).toBe("");
  });

  it("should like and unlike item", () => {
    const { getByText, container } = render(<Item data={data} />);
    const likeCheckboxBlock = container
      .getElementsByClassName("table-other-block")[0]
      .querySelector("div");
    fireEvent.click(likeCheckboxBlock.querySelector("input"));
    expect(getByText("liked")).toBeTruthy();
    fireEvent.click(likeCheckboxBlock.querySelector("input"));
    expect(getByText("like")).toBeTruthy();
  });

  it("should be editable", () => {
    const { getByText, container, getAllByTestId } = render(
      <Item data={data} />
    );
    const onEditInputAction = () => {
      fireEvent.change(getAllByTestId("edit-item-input")[0], {
        target: { value: "test changed" },
      });
    };
    fireEvent.click(getByText("edit"));
    expect(getAllByTestId("edit-item-input")).toBeTruthy();
    onEditInputAction();
    fireEvent.click(getByText("cancel"));
    expect(getByText("test")).toBeTruthy();
    fireEvent.click(getByText("edit"));
    onEditInputAction();
    fireEvent.click(getByText("confirm"));
    expect(getByText("test changed")).toBeTruthy();
  });
});
