import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CustomVideoPlayer from './CustomVideoPlayer';

describe('<CustomVideoPlayer />', () => {
  const videoSrc = 'dummyVideo';
  const config = {
      errorMessage: "Custom Error Message!"
  }

  let Component;
  beforeEach(()=>{
      Component = shallow(
              <CustomVideoPlayer config={config} videoSrc={videoSrc}/>
          )
  })
  it('should render', () => {
      expect(Component.length).to.equal(1);
  });
});
