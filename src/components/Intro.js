import React from 'react';

const Intro = ({ article }) => {
  return (
    <div id="intro" class="section hasad sticky">
      <div class="mf-section-0" id="mf-section-0">
        <p>{article.intro}
        </p>
      </div>
      <div class="clearall"></div>
    </div>
  )
}

export default Intro
