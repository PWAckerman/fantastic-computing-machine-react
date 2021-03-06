import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import { Contact } from './Contact';

describe('<Contact />', () => {
  it('calls componentDidMount', () => {
    const renderSpy = spy(Contact.prototype, 'render');
    const path = {
        pathname: 'email'
    }
    const wrapper = mount(
        <Contact location={path}/>
    );
    expect(Contact.prototype.render.calledOnce).to.equal(true);
    renderSpy.restore();
  });
});
