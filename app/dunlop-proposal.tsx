import type { Metadata } from "next";
import Image from "next/image";

const visualBase = "/assets/bbd-dunlop-2026-06-24/proposal-visuals";
const videoBase = "/assets/bbd-dunlop-2026-06-24/proposal-video";

const proposal = {
  title: "Dunlop Residence",
  subtitle: "Phase II Addition + Whole-Home Remodel",
  property: "3220 W. 82nd St., Leawood, Kansas 66206",
  clients: "Jon Dunlop / Jennifer Woodward",
  packageTitle: "An Addition and Remodel Phase II",
  heroImage: `${visualBase}/exterior-front.png`,
  message:
    "Thank you for continuing the conversation with Built By Design. This proposal brings together the addition and remodel scope, lower-level entertaining spaces, primary suite updates, mudroom and laundry improvements, and the current budget structure in one clear review format. The visuals below are intended to help align on direction while the agreement, design development, selections, and construction documents refine the final details.",
  gallery: [
    {
      title: "Front Elevation Concept",
      src: `${visualBase}/exterior-front.png`,
      alt: "Front elevation concept rendering for the Dunlop Residence"
    },
    {
      title: "Rear Addition Concept",
      src: `${visualBase}/exterior-rear.png`,
      alt: "Rear addition concept rendering for the Dunlop Residence"
    },
    {
      title: "Lower-Level Family Room",
      src: `${visualBase}/basement-family.png`,
      alt: "Lower-level family room concept rendering"
    },
    {
      title: "Basement Bar",
      src: `${visualBase}/basement-bar.png`,
      alt: "Basement bar concept rendering"
    },
    {
      title: "Golf Simulator",
      src: `${visualBase}/golf-sim.png`,
      alt: "Golf simulator concept rendering"
    },
    {
      title: "Mudroom + Laundry",
      src: `${visualBase}/mudroom.png`,
      alt: "Mudroom and laundry concept rendering"
    },
    {
      title: "Primary Bathroom",
      src: `${visualBase}/primary-bathroom.png`,
      alt: "Primary bathroom concept rendering"
    }
  ],
  scopeNotes: [
    "Addition and exterior massing",
    "Lower-level entertaining spaces",
    "Primary suite updates",
    "Mudroom and laundry improvements"
  ],
  video: {
    src: `${videoBase}/dunlop-proposal-walkthrough.mp4`,
    poster: `${videoBase}/dunlop-proposal-poster.jpg`
  },
  numbers: [
    {
      label: "Base Construction Scope",
      amount: "$650,000",
      note: "Core construction presentation before the specialty features allowance."
    },
    {
      label: "Specialty Features / Builder-Supplied Allowance",
      amount: "$85,000",
      note: "Builder-supplied specialty features and equipment allowance."
    },
    {
      label: "Current Proposal Total",
      amount: "$735,000",
      note: "Current Built By Design construction presentation with the allowance included."
    },
    {
      label: "Interior Selections Reference",
      amount: "$93,685",
      note: "Separate EKD selections reference for cosmetic and interior selection planning."
    }
  ],
  selectionRows: [
    { room: "Bar", subtotal: "$7,880" },
    { room: "Basement Bathroom", subtotal: "$10,270" },
    { room: "Laundry Room", subtotal: "$16,785" },
    { room: "Living Room Media Wall", subtotal: "$12,850" },
    { room: "Mudroom", subtotal: "$8,625" },
    { room: "Primary Bathroom", subtotal: "$19,650" },
    { room: "Primary Closet", subtotal: "$4,500" },
    { room: "Upstairs Hall Bath", subtotal: "$13,125" }
  ]
};

export const dunlopProposalMetadata: Metadata = {
  title: "Dunlop Residence Proposal | Built By Design",
  description:
    "Built By Design proposal for the Dunlop Residence Phase II addition and whole-home remodel."
};

export function DunlopProposal() {
  const featuredVisuals = proposal.gallery.slice(0, 2);
  const roomVisuals = proposal.gallery.slice(2);

  return (
    <main className="dunlop-proposal-page">
      <section className="dunlop-proposal-hero" aria-label="Dunlop Residence proposal introduction">
        <Image
          src={proposal.heroImage}
          alt="Front elevation concept rendering for the Dunlop Residence"
          fill
          priority
          sizes="100vw"
        />
        <div className="dunlop-hero-shade" />
        <div className="dunlop-hero-content">
          <p className="dunlop-brand-line">Built By Design</p>
          <h1>{proposal.title}</h1>
          <p className="dunlop-hero-subtitle">{proposal.subtitle}</p>
          <div className="dunlop-context-strip" aria-label="Project context">
            <span>{proposal.property}</span>
            <span>{proposal.clients}</span>
            <span>{proposal.packageTitle}</span>
          </div>
        </div>
      </section>

      <section className="dunlop-section dunlop-letter-section" aria-label="Personal message">
        <div className="dunlop-letter-label">
          <span>Prepared for</span>
          <strong>Jon and Jennifer</strong>
        </div>
        <div className="dunlop-letter-copy">
          <p>Jon and Jennifer,</p>
          <p>{proposal.message}</p>
        </div>
      </section>

      <section className="dunlop-section dunlop-gallery-section" aria-label="Visual proposal gallery">
        <div className="dunlop-section-head">
          <p className="dunlop-kicker">Visual Proposal</p>
          <h2>Concept direction for the addition, remodel, and key interior spaces.</h2>
          <p>
            These renderings communicate design intent and overall direction. Final layouts, finishes, materials,
            fixtures, and specifications are refined through design development.
          </p>
        </div>

        <div className="dunlop-featured-gallery">
          {featuredVisuals.map((visual) => (
            <article className="dunlop-gallery-card dunlop-gallery-card-large" key={visual.title}>
              <div className="dunlop-image-frame">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <h3>{visual.title}</h3>
            </article>
          ))}
        </div>

        <div className="dunlop-room-gallery">
          {roomVisuals.map((visual) => (
            <article className="dunlop-gallery-card" key={visual.title}>
              <div className="dunlop-image-frame">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>
              <h3>{visual.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="dunlop-section dunlop-video-section" aria-label="Proposal video">
        <div className="dunlop-video-copy">
          <h2>Proposal Video</h2>
          <p>A focused walkthrough of the proposed direction, key rooms, and overall remodel vision.</p>
        </div>
        <video
          className="dunlop-video-player"
          controls
          playsInline
          preload="metadata"
          poster={proposal.video.poster}
          aria-label="Dunlop Residence proposal walkthrough video"
        >
          <source src={proposal.video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="dunlop-section dunlop-numbers-section" aria-label="Proposal numbers">
        <div className="dunlop-section-head">
          <p className="dunlop-kicker">Proposal Summary</p>
          <h2>Current budget structure for review.</h2>
          <p>
            The construction total and the interior selections reference are shown separately so the allowance structure
            remains clear and nothing is counted twice.
          </p>
        </div>

        <div className="dunlop-number-grid">
          {proposal.numbers.map((item) => (
            <article className="dunlop-number-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.amount}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>

        <div className="dunlop-budget-detail">
          <div className="dunlop-scope-panel">
            <h3>Included review areas</h3>
            <ul>
              {proposal.scopeNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="dunlop-selections-panel">
            <div className="dunlop-selections-head">
              <h3>Interior selections reference</h3>
              <strong>$93,685</strong>
            </div>
            <div className="dunlop-selection-table" role="table" aria-label="Interior selections reference subtotals">
              {proposal.selectionRows.map((row) => (
                <div className="dunlop-selection-row" role="row" key={row.room}>
                  <span role="cell">{row.room}</span>
                  <strong role="cell">{row.subtotal}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="dunlop-client-note">
          Final pricing, selections, allowances, and construction documents are confirmed through the agreement and
          design development process.
        </p>
      </section>
    </main>
  );
}
