import React from "react";
import { render } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";
import { MemoryRouter } from "react-router";

it("renders without crashing", function () {
    render(<RegistrationForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <RegistrationForm />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
