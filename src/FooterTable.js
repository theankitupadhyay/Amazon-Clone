import React from "react";
import "./FooterTable.css";

function FooterTable() {
  return (
    <div className="footerTable">
      <table>
        <tbody>
          <tr className="footerTable__row">
            <td class="footerTable__col">
              <a href="https://www.abebooks.com/" class="nav_a">
                AbeBooks
                <br />
                <span class="footerTable__colText">
                  Books, art
                  <br />
                  &amp; collectibles
                </span>
              </a>
            </td>
            <td class="footerTable__Spacer"></td>

            <td class="footerTable__col">
              <a
                href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=IN_amazonfooter"
                class="nav_a"
              >
                Amazon Web Services
                <br />
                <span class="footerTable__colText">
                  Scalable Cloud
                  <br />
                  Computing Services
                </span>
              </a>
            </td>

            <td class="footerTable__Spacer"></td>
            <td class="footerTable__col">
              <a href="https://www.audible.in/" class="nav_a">
                Audible
                <br />
                <span class="footerTable__colText">
                  Download
                  <br />
                  Audio Books
                </span>
              </a>
            </td>
            <td class="footerTable__Spacer"></td>
            <td class="footerTable__col">
              <a href="https://www.audible.in/" class="nav_a">
                Audible
                <br />
                <span class="footerTable__colText">
                  Download
                  <br />
                  Audio Books
                </span>
              </a>
            </td>
            <td class="footerTable__Spacer"></td>
            <td class="footerTable__col">
              <a href="https://www.dpreview.com/" class="nav_a">
                DPReview
                <br />
                <span class="footerTable__colText">
                  Digital
                  <br />
                  Photography
                </span>
              </a>
            </td>
            <td class="footerTable__Spacer"></td>
            <td class="footerTable__col">
              <a href="https://www.imdb.com/" class="nav_a">
                IMDb
                <br />
                <span class="footerTable__colText">
                  Movies, TV
                  <br />
                  &amp; Celebrities
                </span>
              </a>
            </td>
          </tr>
          <tr className="footerTable__row1">
            <td className="footerTable__col">
              <br />
            </td>
          </tr>
          <tr className="footerTable__row">
            <td class="footerTable__col">
              <a href="https://www.shopbop.com/" class="nav_a">
                Shopbop
                <br />
                <span class="footerTable__colText">
                  Designer
                  <br />
                  Fashion Brands
                </span>
              </a>
            </td>
            <td class="footerTable__Spacer"></td>
            <td class="footerTable__col">
              <a href="/business?ref=footer_aingw" class="nav_a">
                Amazon Business
                <br />
                <span class="footerTable__colText">
                  Everything For
                  <br />
                  Your Business
                </span>
              </a>
            </td>

            <td class="footerTable__Spacer"></td>

            <td class="footerTable__col">
              <a href="/now?ref=footer_amznow" class="nav_a">
                Prime Now
                <br />
                <span class="footerTable__colText">
                  {" "}
                  2-Hour Delivery
                  <br />
                  on Everyday Items
                </span>
              </a>
            </td>

            <td class="footerTable__Spacer"></td>

            <td class="footerTable__col">
              <a href="/music/prime?ref=footer_apm" class="nav_a">
                Amazon Prime Music
                <br />
                <span class="footerTable__colText">
                  70 million songs, ad-free
                  <br />
                  Over 9 million podcast episodes{" "}
                </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FooterTable;
