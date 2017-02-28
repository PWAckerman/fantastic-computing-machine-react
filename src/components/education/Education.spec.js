import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import { Education } from './Education';

const education = [];

describe('<Education />', () => {
  it('calls componentDidMount', () => {
    const renderSpy = spy(Education.prototype, 'render');
    const wrapper = mount(
        <Education education={education}/>
    );
    expect(Education.prototype.render.calledOnce).to.equal(true);
    renderSpy.restore();
  });
});
