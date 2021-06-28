import React from "react";
import "./FooterEnd.css";

function FooterEnd() {
  return (
    <div className="footerEnd">
      <ul>
        <li className="footerEnd__listItem">
          <a
            href="/gp/help/customer/display.html?nodeId=200545940&amp;ref_=footer_cou"
            class="nav_a"
          >
            Conditions of Use &amp; Sale
          </a>
        </li>
        <li className="footerEnd__listItem">
          <a
            href="/gp/help/customer/display.html?nodeId=200534380&amp;ref_=footer_privacy"
            class="nav_a"
          >
            Privacy Notice
          </a>
        </li>
        <li className="footerEnd__listItem">
          <a
            href="/gp/help/customer/display.html?nodeId=202075050&amp;ref_=footer_iba"
            class="nav_a"
          >
            Interest-Based Ads
          </a>
        </li>
      </ul>
      <span>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
    </div>
  );
}

export default FooterEnd;
