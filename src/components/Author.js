import React from 'react';

function Author() {
  return(
    <div id="social_proof_sidebox" class="sidebox ">
      <div class="sp_inner">
        <div class="sp_top_box sp_person sp_staff">
          <div class="sp_top_icon_bg">
            <div class="sp_top_icon_check"></div>
            <div class="sp_staff_icon"></div>
          </div>
          <div class="sp_expert_text sp_top_box_hoverable sp_nonverifier_text">
            <div>
              <div id="sp_expert_team_label">Co-Authored By:</div>
              <div id="sp_expert_team">wikiHow Staff Editor</div>
              <div id="sp_expert_blurb"></div>
            </div>
          </div>
        </div>
        <div class="sp_box sp_stats_box sp_thin_box">
          <div class="sp_text">
            Co-authors: <span class="sp_text_data">9</span>
          </div>
          <div class="sp_text">
            <span id="sp_modified">Updated: <span class="sp_text_data">January 22, 2020</span></span>
          </div>
          <div class="sp_text">
            Views:&nbsp;<span class="sp_text_data">8,836</span>
          </div>
        </div>
        <div class="clearall"></div>
      </div>
    </div>
  )
}

export default Author
