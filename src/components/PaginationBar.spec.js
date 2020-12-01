import React from 'react';
import { shallow } from 'enzyme';
import PaginationBar from './PaginationBar';

const defaultProps = {
  currentItemsCount: 10,
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 101,
  action: jest.fn()
};

describe('PaginationBar tests', () => {
  afterEach(() => {
    defaultProps.action.mockClear()
  });

  it('it should render correctly', () => {
    // ARRANGE && ACT
    const tree = shallow(<PaginationBar {...defaultProps} />);
  
    // ASSERT
    expect(tree).toMatchSnapshot();
  });

  it('items message on page 1 should render correctly', () => {
    // ARRANGE && ACT
    const tree = shallow(<PaginationBar {...defaultProps} />);
  
    // ASSERT
    const message = tree.find(".message").first().text();
    expect(message).toBe('items 1-10 of 101');
  });

  it('items message on page 2 should render correctly', () => {
    // ARRANGE
    const props = {
      ...defaultProps,
      currentPage: 2
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
  
    // ASSERT
    const message = tree.find(".message").first().text();
    expect(message).toBe('items 11-20 of 101');
  });
  
  it('items message on last page should render correctly', () => {
    // ARRANGE
    const props = {
      ...defaultProps,
      currentPage: 11,
      currentItemsCount: 1
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
  
    // ASSERT
    const message = tree.find(".message").first().text();
    expect(message).toBe('items 101-101 of 101');
  });
  
  it('from first page firstButton works as expected', () => {
    // ARRANGE
    const props = {
      ...defaultProps
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
    const firstButton = tree.find("FaAngleDoubleLeft").first();
    firstButton.simulate('click');

    //ASSERT 
    expect(defaultProps.action).toHaveBeenCalledWith(1);
  });
  
  it('from first page lastButton works as expected', () => {
    // ARRANGE
    const props = {
      ...defaultProps
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
    const firstButton = tree.find("FaAngleDoubleRight").first();
    firstButton.simulate('click');

    //ASSERT 
    expect(defaultProps.action).toHaveBeenCalledWith(11);
  });
  
  it('from first page prevButton works as expected', () => {
    // ARRANGE
    const props = {
      ...defaultProps
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
    const firstButton = tree.find("FaAngleLeft").first();
    firstButton.simulate('click');

    //ASSERT 
    expect(defaultProps.action).toHaveBeenCalledWith(1);
  });
  
  it('from first page nextButton works as expected', () => {
    // ARRANGE
    const props = {
      ...defaultProps
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
    const firstButton = tree.find("FaAngleRight").first();
    firstButton.simulate('click');

    //ASSERT 
    expect(defaultProps.action).toHaveBeenCalledWith(2);
  });
  
  it('from last page firstButton works as expected', () => {
    // ARRANGE
    const props = {
      ...defaultProps,
      currentPage: 11,
      currentItemsCount: 1
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
    const firstButton = tree.find("FaAngleDoubleLeft").first();
    firstButton.simulate('click');

    //ASSERT 
    expect(defaultProps.action).toHaveBeenCalledWith(1);
  });
  
  it('from last page lastButton works as expected', () => {
    // ARRANGE
    const props = {
      ...defaultProps,
      currentPage: 11,
      currentItemsCount: 1
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
    const firstButton = tree.find("FaAngleDoubleRight").first();
    firstButton.simulate('click');

    //ASSERT 
    expect(defaultProps.action).toHaveBeenCalledWith(11);
  });
  
  it('from last page prevButton works as expected', () => {
    // ARRANGE
    const props = {
      ...defaultProps,
      currentPage: 11,
      currentItemsCount: 1
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
    const firstButton = tree.find("FaAngleLeft").first();
    firstButton.simulate('click');

    //ASSERT 
    expect(defaultProps.action).toHaveBeenCalledWith(10);
  });
  
  it('from last page nextButton works as expected', () => {
    // ARRANGE
    const props = {
      ...defaultProps,
      currentPage: 11,
      currentItemsCount: 1
    }

    // ACT
    const tree = shallow(<PaginationBar {...props} />);
    const firstButton = tree.find("FaAngleRight").first();
    firstButton.simulate('click');

    //ASSERT 
    expect(defaultProps.action).toHaveBeenCalledWith(11);
  });
});