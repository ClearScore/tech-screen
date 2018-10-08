import React from "react";
import { shallow, mount, render } from "enzyme";

import Dashboard from "./Dashboard.jsx";

describe("Dashboard", function() {
  it("should render without throwing an error", function() {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('[data-test-dashboard="true"]').length).toBe(1);
  });

  it("should display a notification if there is no credit report", function() {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('[data-test-no-report="true"]').length).toBe(1);
  });
});
