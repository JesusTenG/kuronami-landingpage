import "../styles/PartnerStrip.css";

export default function PartnerStrip() {
  const baseLogos = [
    "/assets/freshnfancy.png",
    "/assets/kowalski.png",
    "/assets/globalcentro.png",
    "/assets/245.png",
    "/assets/brownbasar.png",
    "/assets/bsn.png",
    "/assets/splitpocket.png",
    "/assets/freshnfancy.png",
    "/assets/kowalski.png",
    "/assets/globalcentro.png",
    "/assets/245.png",
    "/assets/brownbasar.png",
    "/assets/bsn.png",
    "/assets/splitpocket.png",
    "/assets/freshnfancy.png",
    "/assets/kowalski.png",
    "/assets/globalcentro.png",
    "/assets/245.png",
    "/assets/brownbasar.png",
    "/assets/bsn.png",
    "/assets/splitpocket.png",
    "/assets/freshnfancy.png",
    "/assets/kowalski.png",
    "/assets/globalcentro.png",
    "/assets/245.png",
    "/assets/brownbasar.png",
    "/assets/bsn.png",
    "/assets/splitpocket.png",
  ];

  return (
    <section className="partnerstrip-section">
      <div className="partnerstrip-content">
        <h3 className="partnerstrip-title">
          Powered by leading <span>Partner Shops</span>
        </h3>

        <div className="partnerstrip-marquee-wrapper">
          <div className="partnerstrip-marquee">
            <div className="partnerstrip-track">
              {baseLogos.map((src, i) => (
                <img
                  key={`set1-${i}`}
                  src={src}
                  alt="Partner Logo"
                  className="partnerstrip-logo"
                />
              ))}
              {baseLogos.map((src, i) => (
                <img
                  key={`set2-${i}`}
                  src={src}
                  alt="Partner Logo"
                  className="partnerstrip-logo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
