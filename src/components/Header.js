import React from 'react';

function Header() {
  return(
    <div id="header_container" data-responsive="1">
      <div id="header" class="header" role="navigation"><a href="#" title="Open main menu" id="mw-mf-main-menu-button" class="mainmenu element main-menu-button"></a><a id="header_logo" href="#"></a>
        <div id="hs">
          <form action="/wikiHowTo" class="search" target="_top"><input id="hs_query" role="textbox" tabindex="0" name="search" aria-label="Search here" required="" placeholder="about not?" x-webkit-speech="" /><button type="submit" id="hs_submit"></button>
            <div id="hs_close" role="button" tabindex="0"></div>
          </form>
        </div>
        <ul id="actions" role="menubar" aria-label="Header navigation">
          <li id="nav_messages_li" class="nav_item" role="menuitem" aria-labelledby="nav_messages">
            <div class="nav_icon"></div><a id="nav_messages" class="nav" href="#">MESSAGES</a>
            <div class="menu_messages" role="menu">
              <div class="menu_message_morelink">You have no <a href="#" title="Special:Notifications">notifications</a> at this time.</div>
            </div>
          </li>
          <li id="nav_profile_li" class="nav_item" role="menuitem" aria-labelledby="nav_profile">
            <div class="nav_icon"></div><a id="nav_profile" class="nav" href="#" data-link="#">LOG IN</a>
            <div class="menu_login" role="menu">
              <div name="userlogin" class="userlogin">

                <h3>Log in</h3>
                <div id='social-login-navbar' data-return-to=''>
                  <div id="fb_connect_head"><a id="fb_login_head" href="#" role="button" class="ulb_button loading" aria-label="Log in with Facebook"><span class="ulb_loading_indicator"></span><span class="ulb_icon"></span><span
                        class="ulb_label">Facebook</span><span class="ulb_status">Loading...</span></a></div>
                  <div id="gplus_connect_head"><a id="gplus_login_head" href="#" role="button" class="ulb_button loading" aria-label="Log in with Google"><span class="ulb_loading_indicator"></span><span class="ulb_icon"></span><span
                        class="ulb_label">Google</span><span class="ulb_status">Loading...</span></a></div>
                  <div id="civic_connect_head"><a id="civic_login_head" href="#" role="button" class="ulb_button loading" aria-label=""><span class="ulb_loading_indicator"></span><span class="ulb_icon"></span><span class="ulb_label">Civic</span><span
                        class="ulb_status">Loading...</span></a></div>
                </div>

                <div>
                  <a href="#" role="button" id="wh_login_head" class="ulb_button ulb_login" aria-label="Log in"><span
                      class="ulb_icon"></span><span class="ulb_label">wikiHow Account</span></a>
                </div>

                <div class="userlogin_links">
                  No account yet? <a href="#">Create an account</a>
                </div>
              </div>

            </div>
          </li>
          <li id="nav_explore_li" class="nav_item" role="menuitem" aria-labelledby="nav_explore">
            <div class="nav_icon"></div><a id="nav_explore" class="nav" href="#">EXPLORE</a>
            <div class="menu" role="menu">
              <a href="#" class="menuitem">Community Dashboard</a>
              <a href="#" class="menuitem">Random Article</a>
              <a href="#" class="menuitem">About Us</a>
              <a href="#" class="menuitem">Categories</a>

            </div>
          </li>
          <li id="nav_help_li" class="nav_item" role="menuitem" aria-labelledby="nav_help">
            <div class="nav_icon"></div><a id="nav_help" class="nav" href="#">HELP US</a>
            <div class="menu" role="menu">
              <a href="#" class="menuitem">Write an Article</a>
              <a href="#" class="menuitem">Request a New Article</a>
              <a href="#" class="menuitem">More Ideas...</a>

            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
