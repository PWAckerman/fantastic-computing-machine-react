import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import LearningContainer from './LearningContainer';

describe('<Meter />', () => {
  let Component;
  let learnings = [{
      _id:"56bd311dd4c6ff1d3a14ddd5",
      progress:"50",
      skill: {
        _id:"56bd30b0d4c6ff1d3a14ddd1",
        icon:"https://avatars0.githubusercontent.com/u/8770005?v=3&s=400",
        name:"Mocha",
        type:"JS Testing Framework"
    }
}];

  beforeEach(()=>{
      Component = shallow(
              <LearningContainer learnings={learnings} />
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
