import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Line from './Line';

import InstitutionContainer from './InstitutionContainer';

describe('<InstitutionContainer />', () => {
  const institution = {
      institution: {
          name: 'Test University',
          location: 'America, USA',
          image: 'placeholder.img',
      },
      degree: 'Masters of Stuff',
      attended: '1900-2000',
      description: ['Studied','Very','Hard']
  }
  let Component;
  beforeEach(()=>{
      Component = shallow(
              <InstitutionContainer institution={institution}/>
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.institution-image-block__image').prop('src')).to.equal('placeholder.img');
      expect(Component.find('.institution-text-block__name').text()).to.equal('Test University');
      expect(Component.find('.institution-text-block__location').text()).to.equal('America, USA');
      expect(Component.find('.institution-text-block__degree').text()).to.equal('Masters of Stuff');
      expect(Component.find('.institution-text-block__attended').text()).to.equal('1900-2000');
  });
});
