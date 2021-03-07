import React from 'react';
import {NavLink} from "react-router-dom"
function Header(props) {
    return (
        <div className="header">
          <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-2">
                   <div className="header-left">Cover</div>
                </div>
                <div className="col-4">
                    <div className="header-right">
                        <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                        <NavLink exact activeClassName="selected" to="/featurs">Featurs</NavLink>
                        <NavLink exact activeClassName="selected" to="/contact">Contact</NavLink>
                    </div>

                </div>
            </div>

          </div>
        </div>
    );
}

export default Header
