import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7">
                        <div className="footer-end">
                            <span className="footer-title">Cover template for </span>
                            <a className="footer-link" href="https://getbootstrap.com/">Bootstrap</a>
                            <span className="footer-title">, by </span>
                            <a className="footer-link" href="https://twitter.com/mdo">@mdo</a>
                            <span className="footer-title">.</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;