import { useState } from "react";
import "../styles/Footer.css";

export default function Footer() {
  const [openModal, setOpenModal] = useState(null); // 'legal' | 'privacy' | null

  const closeModal = () => setOpenModal(null);
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <>
      <footer className="footer">
        <div className="section-inner footer-inner">
          <p className="footer-project">
            Kuronami <span>Drift Fuel</span>
          </p>

          <div className="footer-links">
            <a
              href="https://github.com/DEIN_GITHUB_USERNAME/DEIN_KURONAMI_REPO"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>

            <a
              href="https://DEINE-PORTFOLIO-DOMAIN.COM"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>

            <button
              type="button"
              className="footer-link-button"
              onClick={() => setOpenModal("legal")}
            >
              Legal notice
            </button>

            <button
              type="button"
              className="footer-link-button"
              onClick={() => setOpenModal("privacy")}
            >
              Privacy policy
            </button>
          </div>
        </div>
      </footer>

      {/* LEGAL NOTICE MODAL */}
      {openModal === "legal" && (
        <div className="legal-modal-backdrop" onClick={closeModal}>
          <div className="legal-modal" onClick={stopPropagation}>
            <button className="legal-modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="legal-modal-content">
              <h2>Legal notice</h2>

              <h3>Service provider</h3>
              <p>
                This website is operated by:
                <br />
                <strong>Martin Wyganowski</strong>
                <br />
                [YOUR STREET + HOUSE NUMBER]
                <br />
                [YOUR POSTCODE] [YOUR CITY]
                <br />
                Germany
              </p>

              <h3>Contact</h3>
              <p>
                E-mail:{" "}
                <a href="mailto:[YOUR-EMAIL-ADDRESS]">
                  [YOUR-EMAIL-ADDRESS]
                </a>
                <br />
                Phone: [optional]
              </p>

              <h3>Nature of this website</h3>
              <p>
                This website presents a fictional concept brand called{" "}
                <strong>“Kuronami Drift Fuel”</strong>. It is a design and
                development showcase only. No real energy drink products are
                offered, sold or shipped through this website.
              </p>
              <p>
                The purpose of the site is to demonstrate visual identity, user
                interface design and front-end development skills of the
                operator.
              </p>

              <h3>Hosting</h3>
              <p>
                This website is hosted by:
                <br />
                Vercel Inc.
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                USA
                <br />
                Website:{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com
                </a>
              </p>

              <h3>Copyright and image credits</h3>
              <p>
                Unless stated otherwise, all layouts, code and written content
                on this website are owned by <strong>Martin Wyganowski</strong>.
              </p>
              <p>
                All images used on this site were created using AI tools
                (ChatGPT / DALL·E or comparable models) based on prompts written
                by the operator. The brand “Kuronami Drift Fuel” is fictional
                and not related to any real beverage company.
              </p>

              <h3>Liability for content</h3>
              <p>
                The content on these pages was created with great care. However,
                I cannot guarantee that the content is complete, accurate or
                up to date at all times. As a service provider, I am responsible
                for my own content on these pages in accordance with general
                laws.
              </p>

              <h3>Liability for links</h3>
              <p>
                This website may contain links to external third-party websites.
                I have no control over the content of those websites and
                therefore cannot assume any liability for such external content.
                The respective provider or operator of the linked pages is
                always responsible for their content. At the time of linking, no
                illegal content was recognisable.
              </p>

              <h3>Jurisdiction</h3>
              <p>
                This legal notice applies to the domain{" "}
                <strong>[YOUR-KURONAMI-DOMAIN.COM]</strong> and any associated
                subpages, unless otherwise stated.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* PRIVACY POLICY MODAL */}
      {openModal === "privacy" && (
        <div className="legal-modal-backdrop" onClick={closeModal}>
          <div className="legal-modal" onClick={stopPropagation}>
            <button className="legal-modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="legal-modal-content">
              <h2>Privacy policy</h2>

              <h3>1. Controller</h3>
              <p>
                The controller responsible for data processing on this website
                in the sense of the EU General Data Protection Regulation
                (GDPR) is:
                <br />
                <strong>Martin Wyganowski</strong>
                <br />
                [YOUR STREET + HOUSE NUMBER]
                <br />
                [YOUR POSTCODE] [YOUR CITY]
                <br />
                Germany
                <br />
                E-mail:{" "}
                <a href="mailto:[YOUR-EMAIL-ADDRESS]">
                  [YOUR-EMAIL-ADDRESS]
                </a>
              </p>

              <h3>2. Purpose of this website</h3>
              <p>
                This website serves as a portfolio and concept project. It
                showcases a fictional brand called “Kuronami Drift Fuel” and
                demonstrates design and development skills. No user accounts
                are created, no products are sold and no contact forms are
                used on this site.
              </p>

              <h3>3. Server log files</h3>
              <p>
                When you visit this website, your browser automatically sends
                information to the server of this site. This information is
                temporarily stored in so-called server log files. The following
                data may be collected:
              </p>
              <ul>
                <li>IP address of the requesting device</li>
                <li>Date and time of access</li>
                <li>Time zone difference to GMT</li>
                <li>Requested page / URL</li>
                <li>HTTP status code</li>
                <li>Amount of data transferred</li>
                <li>Website from which the request originates (referrer URL)</li>
                <li>Browser type and version, operating system, device type</li>
              </ul>
              <p>
                This data is processed to ensure a stable and secure operation
                of the website (e.g. for troubleshooting and security analysis).
                The legal basis is Art. 6(1)(f) GDPR (legitimate interest in
                operating a secure website).
              </p>

              <h3>4. Hosting with Vercel</h3>
              <p>
                This website is hosted on servers of Vercel Inc. (440 N Barranca
                Avenue #4133, Covina, CA 91723, USA). All data that is processed
                when using this website is stored on Vercel&apos;s servers.
                Further information on data processing by Vercel can be found in
                their privacy policy:
              </p>
              <p>
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
              <p>
                Data processing may also take place outside the European Union,
                in particular in the United States. According to Vercel,
                standard contractual clauses approved by the European Commission
                are used to ensure an adequate level of data protection.
              </p>

              <h3>5. Cookies and tracking</h3>
              <p>
                This website does not use any analytics tools (such as Google
                Analytics) and does not set cookies for marketing or tracking
                purposes. Only technically necessary processing by the hosting
                provider may occur in order to deliver the website securely and
                efficiently.
              </p>

              <h3>6. Contact by e-mail</h3>
              <p>
                If you contact me by e-mail using the address provided in the
                legal notice, your message and the personal data included in it
                will be processed solely for the purpose of handling your enquiry.
                The legal basis is Art. 6(1)(b) GDPR (performance of a contract
                or pre-contractual measures) or Art. 6(1)(f) GDPR (legitimate
                interest in answering enquiries).
              </p>

              <h3>7. Storage period</h3>
              <p>
                Server log files are stored for a limited period and automatically
                deleted unless longer storage is required for security or
                evidence purposes. Other personal data is deleted as soon as the
                purpose of processing ceases to apply and no statutory retention
                obligations prevent deletion.
              </p>

              <h3>8. Your rights under the GDPR</h3>
              <p>
                You have the following rights under the GDPR, subject to the
                applicable legal requirements:
              </p>
              <ul>
                <li>Right of access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object to processing (Art. 21 GDPR)</li>
              </ul>
              <p>
                To exercise your rights, you can contact me at any time using
                the contact details shown above.
              </p>

              <h3>9. Right to lodge a complaint</h3>
              <p>
                You also have the right to lodge a complaint with a competent
                data protection supervisory authority if you believe that the
                processing of your personal data violates data protection law.
              </p>

              <h3>10. Updates to this privacy policy</h3>
              <p>
                This privacy policy may be updated from time to time to reflect
                changes in law, hosting infrastructure or the functionality of
                this website. The current version is always available on this
                page.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
