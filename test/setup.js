import { configure } from 'enzyme'
import Enzyme, { shallow, render, mount } from 'enzyme'

global.shallow = shallow
global.render = render
global.mount = mount

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
