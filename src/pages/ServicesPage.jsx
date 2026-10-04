import Services from '../components/sections/Services';
import Industries from '../components/sections/Industries';
import Section from '../components/ui/Section';
import { FiDownload } from 'react-icons/fi';

const ServicesPage = () => {
  return (
    <>
      <Services />

      {/* Rate card download — light */}
      <Section className="bg-yilnan-light !pt-0">
        <div className="max-w-3xl mx-auto rounded-2xl border border-yilnan-lightBorder bg-yilnan-lightCard p-8 md:p-10 text-center shadow-sm">
          <h3 className="text-2xl font-semibold text-yilnan-ink mb-2">Full services &amp; pricing</h3>
          <p className="text-yilnan-inkMuted mb-6">
            Download our complete rate card — every service, package, and price in one document.
          </p>
          <a
            href="/yilnan-rate-card.pdf"
            download
            className="inline-flex items-center gap-2 rounded-[10px] bg-yilnan-accent px-7 py-3.5 text-sm font-semibold text-yilnan-accentDark transition hover:brightness-95"
          >
            <FiDownload /> Download rate card (PDF)
          </a>
        </div>
      </Section>

      <Industries />
    </>
  );
};

export default ServicesPage;