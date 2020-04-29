import React from 'react';

function Rating() {
  return(
    <div id="sp_star_box" class="sidebox social_sidebox">
	<div class="sp_box sp_box_hoverable sp_helpful_hoverable sp_helpful_box helpful_sidebox " data-helpful="100">
		<div class="sp_helpful_statement"><span>100%</span> of readers found this article <b>helpful</b>.</div>
		<div class="sp_star_section_upper">
			<div class="sp_star_section_hoverable">
				<div class="sp_star_container star1">
					<div class="sp_helpful_icon_star pretty_star" style={{width: "100%"}}></div>
				</div>
				<div class="sp_star_container star2">
					<div class="sp_helpful_icon_star pretty_star" style={{width: "100%"}}></div>
				</div>
				<div class="sp_star_container star3">
					<div class="sp_helpful_icon_star pretty_star" style={{width: "100%"}}></div>
				</div>
				<div class="sp_star_container star4">
					<div class="sp_helpful_icon_star pretty_star" style={{width: "100%"}}></div>
				</div>
				<div class="sp_star_container star5">
					<div class="sp_helpful_icon_star pretty_star" style={{width: "100%"}}></div>
				</div>
			</div>
		</div>
			<div class="sp_helpful_lower">
				<div class="sp_star_rating_text"></div>
				<div class="sp_helpful_rating_count">17 votes - 100%</div>

			</div>
		<div id="sp_helpful_text_sidebox">Click a star to add your vote</div>
		<div class='sp_popup_container'>
			<div class='hint_box'>100% of people told us that this article helped them.</div>
		</div>
	</div>
</div>

  )
}

export default Rating
