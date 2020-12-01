import React from 'react';
import { shallow, mount } from 'enzyme';
import AddContact from './AddContact';

const defaultProps = {
  hideForm: jest.fn(),
  createContact: jest.fn()
};

describe('AddContact tests', () => {
  afterEach(() => {
    defaultProps.hideForm.mockClear(),
    defaultProps.createContact.mockClear()
  });

  it('it should render correctly', () => {
    // ARRANGE && ACT
    const tree = shallow(<AddContact {...defaultProps} />);
  
    // ASSERT
    expect(tree).toMatchSnapshot();
  });
  
  it('when window close is clicked hideForm is called', () => {
    // ARRANGE && ACT
    const tree = mount(<AddContact {...defaultProps} />);
    const windowCloseButton = tree.find("FaWindowClose").first();
    windowCloseButton.simulate('click');

    //ASSERT 
    expect(defaultProps.hideForm).toHaveBeenCalled();
    expect(defaultProps.createContact).not.toHaveBeenCalled();
  });
});