import React from 'react';

function Byline() {
  return(
    <div id="expert_coauthor" class="has_coauthor">
      Co-authored by
      <a href="#" class="staff_icon expert_coauthor_link">wikiHow Staff</a>
      <span class="early_slot_2">
        <span class='ss_pipe'>|</span>
        <a href="#" class="expert_coauthor_link ss_review">Reader-Approved</a>
      </span>
      <span class="byline_references_top">
        <span class='ss_pipe'>|</span> <a href="#">References</a>
      </span>
      <p>
        Updated: January 29, 2020
        <span class="slot_2">
          <span class='ss_pipe'>|</span>
          <a href="#social_proof_anchor" class="expert_coauthor_link ss_review">Reader-Approved</a>
        </span>
        <span class="byline_references_bottom">
          <span class='ss_pipe'>|</span> <a href="#references">References</a>
        </span>
      </p>
    </div>
  )
}

export default Byline 
