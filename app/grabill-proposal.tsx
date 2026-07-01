import type { Metadata } from "next";
import Image from "next/image";

const assetBase = "/assets/bbd-grabill-2026-07-01";
const brandBase = "/assets/bbd-brand";

const proposal = {
  title: "Grabill Outdoor Living Concept",
  subtitle: "Backyard renovation proposal room",
  heroImage: `${assetBase}/concept-hero.png`,
  messageLines: [
    "[Personal greeting and project recap from Built By Design goes here.]",
    "[Client-specific goals, constraints, and estimate recap go here.]"
  ],
  beforeVisuals: [
    {
      title: "Existing Backyard",
      src: `${assetBase}/before-01.png`,
      alt: "Existing Grabill backyard patio and rear exterior before the outdoor living concept"
    },
    {
      title: "Existing Backyard",
      src: `${assetBase}/before-02.webp`,
      alt: "Existing Grabill backyard view toward the golf course before the outdoor living concept"
    }
  ],
  conceptVisuals: [
    {
      title: "Concept Direction",
      src: `${assetBase}/concept-hero.png`,
      alt: "Grabill outdoor living concept with covered patio, hot tub, fire pit, landscaping, and putting green"
    },
    {
      title: "Outdoor Living Vision",
      src: `${assetBase}/concept-wide-yard.png`,
      alt: "Grabill outdoor living concept with open lawn, golf course view, play area, and landscape planting"
    }
  ],
  video: {
    src: `${assetBase}/grabill-landscape-video.mp4`,
    poster: `${assetBase}/grabill-video-poster.jpg`
  },
  features: [
    "Covered patio area on the right side",
    "Hot tub remains in place",
    "Circular stone fire-pit patio moved farther from the house",
    "Putting green and open lawn integration",
    "Play area on the left side near the trees and golf-course side",
    "New playset with flat rubber mulch surface",
    "Shade umbrella set in concrete with two Adirondack chairs and a small parent table",
    "Landscape lighting and warm fire-pit evening atmosphere"
  ],
  placeholders: [
    {
      title: "Estimate Summary",
      copy: "[Estimate summary and investment range goes here.]"
    },
    {
      title: "Scope of Work",
      copy: "[Scope of work / included items goes here.]"
    },
    {
      title: "Allowances + Options",
      copy: "[Allowances, exclusions, and optional upgrades go here.]"
    },
    {
      title: "Next Steps",
      copy: "[Next steps, approval language, scheduling, or deposit details go here.]"
    }
  ]
};

export const grabillProposalMetadata: Metadata = {
  title: "Grabill Outdoor Living Concept | Built By Design",
  description: "Built By Design proposal room for the Grabill outdoor living concept."
};

export function GrabillProposal() {
  return (
    <main className="dunlop-proposal-page grabill-proposal-page">
      <section className="dunlop-proposal-hero" aria-label="Grabill Outdoor Living Concept introduction">
        <Image
          src={proposal.heroImage}
          alt="Grabill outdoor living concept with covered patio, fire pit, hot tub, and putting green"
          fill
          priority
          sizes="100vw"
        />
        <div className="dunlop-hero-shade" />
        <a
          className="grabill-hero-logo-link"
          href="https://builtbydesignkc.com/"
          aria-label="Visit Built by Design homepage"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`${brandBase}/bbd-logo.webp`}
            alt="Built by Design"
            width={256}
            height={85}
            priority
            sizes="(max-width: 640px) 150px, 220px"
          />
        </a>
        <div className="dunlop-hero-content">
          <p className="dunlop-brand-line">Built By Design</p>
          <h1>{proposal.title}</h1>
          <p className="dunlop-hero-subtitle">{proposal.subtitle}</p>
          <div className="dunlop-context-strip" aria-label="Project context">
            <span>Private proposal room</span>
            <span>Outdoor living concept</span>
            <span>Prepared for review</span>
          </div>
        </div>
      </section>

      <section className="dunlop-section dunlop-letter-section" aria-label="Personal message and project recap">
        <div className="dunlop-letter-label">
          <span>Prepared for</span>
          <strong>Grabill</strong>
        </div>
        <div className="dunlop-letter-copy">
          {proposal.messageLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="dunlop-section dunlop-gallery-section grabill-vision-section" aria-label="Before and vision gallery">
        <div className="dunlop-section-head">
          <p className="dunlop-kicker">Before + Vision</p>
          <h2>Existing backyard views paired with the proposed outdoor living direction.</h2>
          <p>
            These visuals bring the current yard, patio, play area, fire-pit direction, and evening atmosphere into one
            review sequence.
          </p>
        </div>

        <div className="grabill-vision-grid">
          {[...proposal.beforeVisuals, ...proposal.conceptVisuals].map((visual) => (
            <article className="dunlop-gallery-card grabill-vision-card" key={`${visual.title}-${visual.src}`}>
              <div className="dunlop-image-frame">
                <Image src={visual.src} alt={visual.alt} fill loading="eager" sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <h3>{visual.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="dunlop-section dunlop-video-section" aria-label="Concept video">
        <div className="dunlop-video-copy">
          <h2>Concept Video</h2>
          <p>This short video helps visualize the outdoor living direction, from daytime yard context to evening fire-pit atmosphere.</p>
        </div>
        <video
          className="dunlop-video-player"
          autoPlay
          controls
          loop
          muted
          playsInline
          preload="metadata"
          poster={proposal.video.poster}
          aria-label="Grabill outdoor living concept video"
        >
          <source src={proposal.video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="dunlop-section grabill-feature-section" aria-label="Key design features">
        <div className="dunlop-section-head">
          <p className="dunlop-kicker">Key Design Features</p>
          <h2>Outdoor living priorities reflected in the current concept visuals.</h2>
        </div>

        <div className="grabill-feature-grid">
          {proposal.features.map((feature) => (
            <article className="grabill-feature-card" key={feature}>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dunlop-section dunlop-numbers-section grabill-estimate-section" aria-label="Estimate and scope placeholders">
        <div className="dunlop-section-head">
          <p className="dunlop-kicker">Estimate + Scope</p>
          <h2>Proposal details ready for final BBD inputs.</h2>
        </div>

        <div className="grabill-placeholder-grid">
          {proposal.placeholders.map((item) => (
            <article className="grabill-placeholder-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <p className="dunlop-client-note grabill-concept-note">
          Visuals are concept support for the proposal and may not represent final construction details, materials,
          specifications, or pricing.
        </p>
      </section>
    </main>
  );
}
