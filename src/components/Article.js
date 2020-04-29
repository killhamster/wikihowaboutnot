import React from 'react';
import Byline from './Byline';
import Title from './Title';
import Intro from './Intro';
import Steps from './Steps';

const Article = ({ article }) => {
  return(
    <div id="content_inner">
      <div class="pre-content">
        <Title article={article} />
        <Byline />
      </div>
      <div id="bodyContent" class="content">
        <div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr">
          <div class="mw-parser-output">
            <Intro article={article} />
            <div class="section steps sticky">
              <h2 class="section-heading">
                <div class="mw-ui-icon mw-ui-icon-element indicator"></div>
                <span class="mw-headline" id="Steps">Steps</span>
              </h2>
              <Steps article={article} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
