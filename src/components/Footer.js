import React from 'react';

function Footer() {
  return(
    <div id="footer" role="navigation">

      <div id="footer_inner">

        <a href='/Main-Page' id="footer_logo">
          <img src='/skins/owl/images/wikihow_logo_intl.png' width='162' height='42' alt='wikiHow' />

        </a>

        <div id="footer_crumbs">
          <ul class="breadcrumbs">
            <li class='home'><a href="/Main-Page" title="Main Page">Home</a></li>
            <li class='categories'><a href="/Special:CategoryListing" title="Special:CategoryListing">Categories</a></li>
            <li><a href="/Category:Finance-and-Business" title="Category:Finance and Business">Finance and Business</a></li>
            <li><a href="/Category:Legal-Matters" title="Category:Legal Matters">Legal Matters</a></li>
            <li><a href="/Category:Court-Practice-and-Procedure" title="Category:Court Practice and Procedure">Court Practice and Procedure</a></li>
            <li><a href="/Category:Jury-Duty" title="Category:Jury Duty">Jury Duty</a></li>
          </ul>
        </div>
        <div class="footer_divider"></div>
        <div id="search_footer" class="wh_search " role="search">
          <div class="cse_x" role="button"></div>
          <form action="/wikiHowTo" id="cse-search-box-bottom">
            <div>
              <input type="text" class="cse_q search_box" name="search" value="" placeholder="How to Survive Jury Duty" x-webkit-speech aria-label="Search here" />
              <input type="submit" value="" class="cse_sa" alt="" />
            </div>
          </form>
        </div>
        <div id="footer_links">
          <ul>
            <li><a href="/Main-Page" title="Main Page">Home</a></li>
            <li><a href="/About-wikiHow" class="mw-redirect" title="About wikiHow">About wikiHow</a></li>
            <li><a class="external text" href="https://www.wikihow.com/Experts">Experts</a></li>
            <li><a href="/wikiHow:Jobs" title="wikiHow:Jobs">Jobs</a></li>
            <li><a href="/wikiHow:Contact-Us" title="wikiHow:Contact Us">Contact Us</a></li>
            <li><a href="/Special:Sitemap" title="Special:Sitemap">Site Map</a></li>
            <li><a href="/Terms-of-Use" class="mw-redirect" title="Terms of Use">Terms of Use</a></li>
            <li><a id="footer_ccpa" href="#">Do Not Sell My Info</a></li>
            <li><a id="footer_ccpa_optout" href="#">Not Selling Info</a></li>
          </ul>
        </div>
        <div class="footer_divider"></div>

        <div id="sf" class="mobile">
          <p>Follow Us</p>
          <a id="sf_ig" class="sf_icon" href="https://www.instagram.com/wikihow/" target="_blank" title="Instagram"></a>
          <a id="sf_fb" class="sf_icon" href="https://www.facebook.com/wikiHow/" target="_blank" title="Facebook"></a>
          <a id="sf_tt" class="sf_icon" href="https://twitter.com/wikihow" target="_blank" title="Twitter"></a>
          <a id="sf_yt" class="sf_icon" href="https://www.youtube.com/wikihow" target="_blank" title="YouTube"></a>
          <a id="sf_nl" class="sf_icon" href="https://wikihow.us13.list-manage.com/subscribe?u=7d3ca675de04729b75ecca92b&amp;id=2e1c5aad27" target="_blank" title="Newsletter"></a>
        </div>


      </div>

    </div>

  )
}

export default Footer
