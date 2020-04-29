import React from 'react';

const Steps = ({ article }) => {

  return(
    <div id="steps" class="section_text">
      <ol class="steps_list_2">
      {article.steps.map((step, i) => (
        <li id={"step-id-0" + String(step.step_no - 1)}>
          <a name={"step_1_" + step.step_no} class="stepanchor"></a>
          <div class="mwimg  largeimage  floatcenter " style={{'max-width': "728px"}}><a href="#" class="image">
              <div class="content-spacer">
                <img alt={"Image titled " + article.title + " Step " + step.step_no} decoding="async" class="whcdn content-fill"
                  src={step.image} width="460" height="345" />
              </div>
            </a></div>
          <div class="step_num">{String(step.step_no)}</div>
          <div class="step">
            <b class="whb">{step.summary}</b> {step.description}
          </div>
          <div class="clearall"></div>
        </li>
      ))}

      </ol>
      <div class="clearall"></div>
    </div>
  )
}

export default Steps
