import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import { Projects } from './Projects';

describe('<Projects />', () => {
  let projects = []
  let dispatch = function(){
      console.log('dispatch');
  }


  it('calls componentWillMount', () => {
    const renderSpy = spy(Projects.prototype, 'render');
    const wrapper = mount(
        <Projects projects={projects}/>
    );
    expect(Projects.prototype.render.calledOnce).to.equal(true);
    renderSpy.restore();
  });

});
