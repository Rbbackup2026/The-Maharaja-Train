import { email, footerLinks, phoneDisplay, phoneTel, whatsapp } from "@/lib/content";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="footer-lockup lockup" aria-label="Royal Indian Trains by Lawrence Travels, established 1989">
          <span className="lockup-rail">
            <span>Royal Indian</span>
            <span>Trains</span>
          </span>
          <span className="lockup-rule" />
          <span className="lockup-by">by Lawrence Travels</span>
          <span className="lockup-est">Est. 1989</span>
        </div>

        <div className="footer-grid">
          <div>
            <h2>Follow</h2>
            <div className="social">
              <a href="https://www.facebook.com/lawrencetravelsin/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" />
              </a>
              <a href="https://www.instagram.com/lawrencetravels" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UC-vtyuMLz6uFVWj7SI7WnZw" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <Icon name="youtube" />
              </a>
              <a href={whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" />
              </a>
            </div>
          </div>

          <div>
            <h2>Quick links</h2>
            <ul>
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>More</h2>
            <ul>
              {footerLinks.more.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="https://www.lawrencetravels.com/" target="_blank" rel="noopener noreferrer">
                  Lawrence Travels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2>Address</h2>
            <p>
              Royal Indian Trains
              <br />
              V10/50, 3rd Floor, DLF Phase Three
              <br />
              Gurgaon, NCR Delhi 122002, India
            </p>
            <p style={{ marginTop: 10 }}>
              <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
              <br />
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <h2 style={{ marginTop: 18 }}>Cards</h2>
            <img className="pay" src="/images/pay.png" alt="Visa, Mastercard and American Express" width={134} height={42} />
          </div>
        </div>

        <div className="legal">
          <p>
            We are a Preferred Sales Agent (PSA-IA) of Maharajas&apos; Express. Royal Indian Trains makes no claim
            over the Maharajas&apos; Express trademark or logo. They remain the property of their owners.
          </p>
          <p>
            This website is owned and managed by Royal Indian Trains, an associate of Lawrence Travels. We do not
            own or operate the Maharajas&apos; Express, which is owned and operated by Indian Railways Catering and
            Tourism Corporation Ltd (IRCTC). The official website is{" "}
            <a href="https://www.the-maharajas.com/" target="_blank" rel="noopener noreferrer">
              www.the-maharajas.com
            </a>
            .
          </p>
          <p className="copy">© Lawrence Travels × Royal Indian Trains {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
