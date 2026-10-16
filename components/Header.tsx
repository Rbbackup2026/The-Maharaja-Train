"use client";

import { useEffect, useState } from "react";
import { email, nav, phoneDisplay, phoneTel, whatsapp, type NavLink } from "@/lib/content";
import { Icon } from "./Icons";

function Dropdown({
  links,
  open,
}: {
  links: NavLink[];
  open: boolean;
}) {
  let lastGroup = "";
  return (
    <div className={open ? "dropdown is-open" : "dropdown"}>
      {links.map((link) => {
        const showGroup = link.group && link.group !== lastGroup;
        if (link.group) lastGroup = link.group;
        return (
          <span key={link.label}>
            {showGroup ? <p className="drop-group">{link.group}</p> : null}
            <a href={link.href}>{link.label}</a>
          </span>
        );
      })}
    </div>
  );
}

export function Header() {
  const [menu, setMenu] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        setOpenItem(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const close = () => {
    setMenu(false);
    setOpenItem(null);
  };

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap topbar-grid">
          <a className="lockup" href="#the-train" aria-label="Royal Indian Trains, by Lawrence Travels, established 1989">
            <span className="lockup-rail">
              <span>Royal Indian</span>
              <span>Trains</span>
            </span>
            <span className="lockup-rule" />
            <span className="lockup-by">by Lawrence Travels</span>
            <span className="lockup-est">Est. 1989</span>
          </a>

          <div className="agent">
            <img
              className="seal"
              src="/images/maharaja-seal-mark.png"
              alt="Maharajas' Express"
              width={64}
              height={64}
            />
            <div className="agent-text">
              <p className="agent-name">Lawrence Travels (PSA)</p>
              <p className="agent-pref">Preferred Sales Agents of</p>
              <p className="agent-train">Maharajas&apos; Express</p>
              <p className="agent-site">
                Official website:{" "}
                <a href="https://www.the-maharajas.com/" target="_blank" rel="noopener noreferrer">
                  www.the-maharajas.com
                </a>
              </p>
            </div>
          </div>

          <div className="header-cta">
            <a className="specialist" href={`tel:${phoneTel}`} aria-label={`Speak to a specialist, ${phoneDisplay}`}>
              <span className="specialist-label">Speak to a specialist</span>
              <span className="specialist-number">
                <span className="phone-mark">
                  <Icon name="phone" />
                </span>
                <span className="specialist-digits">{phoneDisplay}</span>
              </span>
            </a>
            <div className="cta-icons">
              <a className="cta-icon" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" />
              </a>
              <a className="cta-icon" href={`mailto:${email}`} aria-label="Email">
                <Icon name="mail" />
              </a>
            </div>
            <a className="btn-enquire" href="#enquire">
              Enquire now
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>

      <div className="nav-shell">
        <div className="wrap">
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menu}
            aria-controls="site-nav"
            onClick={() => setMenu((value) => !value)}
          >
            {menu ? "Close" : "Menu"}
            <Icon name={menu ? "close" : "menu"} />
          </button>
          <nav id="site-nav" className={menu ? "nav-panel is-open" : "nav-panel"} aria-label="Primary">
            <ul className="nav-list">
              {nav.map((item) => (
                <li
                  key={item.label}
                  className="nav-item"
                  onMouseEnter={() => {
                    if (window.matchMedia("(min-width: 980px)").matches && item.children) {
                      setOpenItem(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia("(min-width: 980px)").matches) {
                      setOpenItem((current) => (current === item.label ? null : current));
                    }
                  }}
                >
                  <div className="nav-row">
                    <a href={item.href} onClick={close} className={item.children ? undefined : "nav-leaf"}>
                      {item.label}
                    </a>
                    {item.children ? (
                      <button
                        className="chevron"
                        type="button"
                        aria-expanded={openItem === item.label}
                        aria-label={`${item.label} menu`}
                        onClick={() => setOpenItem((current) => (current === item.label ? null : item.label))}
                      >
                        <Icon name="chevron" />
                      </button>
                    ) : null}
                  </div>
                  {item.children ? <Dropdown links={item.children} open={openItem === item.label} /> : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
