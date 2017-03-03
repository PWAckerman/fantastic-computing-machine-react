import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Entry from './Entry';

describe('<Entry />', () => {
  const avatar = "avatar.jpg";
  const entry = {
      date: "2016-02-09T18:57:54.351Z",
      text: "ipsum #tag",
      tags: ["tag1","tag2"]
  }
  let Component;

  beforeEach(()=>{
      Component = shallow(
              <Entry avatar={avatar} entry={entry}/>
          )
  });

  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('.avatar-block__avatar').prop("src")).to.equal('avatar.jpg');
      expect(Component.find('.text-block__date').text()).to.equal('Tuesday, Feb 9, 2016, 1:57 PM');
      expect(Component.find('.text-block__text').text()).to.equal('ipsum #tag');
  });

});
