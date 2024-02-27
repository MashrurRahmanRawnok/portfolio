import React from 'react';

const EthicalHackerComponent = () => {
  return (
    <div>
      <p>Ethical Hacker</p>
      <div>
        <span className="r-typed"></span>
      </div>
      <div>
        <div>
          <a href="#" className="menu-btn btn-next-visible"><span></span></a>
        </div>
        <div className="mode-switch-btn" data-ui="1" data-ui-dir="https://asibulhasan.me/otteri">
          <input className="tgl" id="mode-switch-radio" type="checkbox" checked />
          <label className="mode-swich-label" htmlFor="mode-switch-radio">
            <span className="sw-before">
              <svg xmlns="http://www.w3.org/2000/svg" width="22.22" height="22.313" viewBox="0 0 22.22 22.313">
                {/* Your SVG code */}
              </svg>
            </span>
            <span className="sw-after">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                {/* Your SVG code */}
              </svg>
            </span>
          </label>
        </div>
        <div className="top-menu top-menu-onepage">
          <div className="menu-main-menu-container">
            <ul id="menu-main-menu" className="menu">
              <li data-id="menu-item-107" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-40 current_page_item">
                <a href="#home" className="one-page-menu-item">
                  <span className="icon ion-ios-person-outline"></span>
                  <span className="name">About</span>
                </a>
              </li>
              {/* Other menu items */}
            </ul>
          </div>
        </div>
      </div>
      <header>
        {/* Header content */}
      </header>
      <div className="card-started" id="home-card">
        {/* Card content */}
      </div>
      <div className="s_overlay"></div>
      <div className="content-sidebar">
        {/* Sidebar content */}
      </div>
      <div className="card-inner animated active" id="card-home">
        {/* Card inner content */}
      </div>
      <div className="post-40 page type-page status-publish hentry">
        {/* Page content */}
      </div>
    </div>
  );
};

export default EthicalHackerComponent;
