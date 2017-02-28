import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HeroVideo from './HeroVideo';

describe('<HeroVideo />', () => {
  const videoSrc = 'dummyVideo';

  let Component;
  beforeEach(()=>{
      Component = shallow(
              <HeroVideo videoSrc={videoSrc}/>
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
      expect(Component.find('source[type="video/mp4"]').prop("src")).to.equal('dummyVideo.mp4');
      expect(Component.find('source[type="video/webm"]').prop("src")).to.equal('dummyVideo.webm');
  });
});
