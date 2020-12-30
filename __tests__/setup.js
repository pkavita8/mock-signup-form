import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

global.mount = mount;
jest.mock("react-native-gesture-handler", () => {
  return {
    Directions: {},
  };
});

jest.mock("react-navigation", () => ({
  withNavigation: (component) => component,
  NavigationActions: {
    navigate: jest.fn().mockImplementation((x) => x),
    state: { params: {} },
  },
}));

Enzyme.configure({ adapter: new Adapter() });
