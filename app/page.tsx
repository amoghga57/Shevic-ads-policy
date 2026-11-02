const workflow = [
  {
    number: "01",
    title: "Bring a video",
    description:
      "Paste a valid YouTube URL, review its details, then choose Load when you’re ready.",
    note: "Load on your say-so",
  },
  {
    number: "02",
    title: "Find the moment",
    description:
      "Move through the visual frame timeline, set your in and out points, then preview and replay your selection.",
    note: "Up to 20 seconds",
  },
  {
    number: "03",
    title: "Keep it your way",
    description:
      "Generate a short clip and save it to a private collection or share it publicly with the community.",
    note: "Private or public",
  },
];

const platformDetails = [
  {
    label: "Made for mobile",
    title: "A focused capture flow",
    description:
      "The app is built with React Native and Expo, with TypeScript across the experience.",
  },
  {
    label: "Processing",
    title: "The right tools for the job",
    description:
      "A Node.js and Express service coordinates video processing with yt-dlp and FFmpeg.",
  },
  {
    label: "Trust",
    title: "Careful by design",
    description:
      "Secure data storage, JWT-based access, validation, authorization, and rate limiting help protect the service.",
  },
];

const experienceDetails = [
  {
    number: "01",
    title: "A way in that fits",
    description:
      "Register, log in, or continue as a guest with limited functionality.",
  },
  {
    number: "02",
    title: "Know what you’re loading",
    description:
      "After a valid YouTube URL is checked, see its title, thumbnail, channel, and duration before explicitly loading the video.",
  },
  {
    number: "03",
    title: "Processing, in plain sight",
    description:
      "yt-dlp and FFmpeg produce a mobile-friendly MP4, with progress through downloading, trimming, encoding, and completion.",
  },
  {
    number: "04",
    title: "A library you can return to",
    description:
      "Search and filter personal collections by category, revisit generation history, and download clips for offline viewing.",
  },
  {
    number: "05",
    title: "Community, with conversation",
    description:
      "Explore an infinitely scrolling public feed with autoplay and replay, likes, comments, sharing, and reporting.",
  },
  {
    number: "06",
    title: "The activity that matters",
    description:
      "Notifications keep you posted on generation completion, upload status, likes, comments, and other activity.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Shevic, home">
          shevic<span className="wordmark-period">.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#why-shevic">Why Shevic</a>
          <a href="#roadmap">Roadmap</a>
        </nav>
        <a className="header-link" href="#how-it-works">
          Meet the moment <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero page-wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Video, kept in context</p>
          <h1 id="hero-title">
            Keep the moments.
            <br />
            <em>Not the whole video.</em>
          </h1>
          <p className="hero-intro">
            Shevic helps you save the small, specific parts of YouTube videos
            worth coming back to — and share the ones worth passing on.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#how-it-works">
              See how it works <span aria-hidden="true">↓</span>
            </a>
            <span className="hero-aside">Short clips. Bigger meaning.</span>
          </div>
        </div>

        <figure className="clip-figure" aria-labelledby="clip-caption">
          <div className="clip-window" aria-hidden="true">
            <div className="clip-window-top">
              <span className="clip-window-label"><i /> MOMENT 00:42–00:59</span>
              <span className="clip-window-menu">•••</span>
            </div>
            <div className="clip-scene">
              <div className="scene-sun" />
              <div className="scene-hill scene-hill-back" />
              <div className="scene-hill scene-hill-front" />
              <div className="scene-person">
                <span className="person-head" />
                <span className="person-body" />
              </div>
              <div className="scene-caption">“Wait for the light.”</div>
              <span className="play-mark"><span /></span>
            </div>
            <div className="clip-controls">
              <span className="clip-time">00:42</span>
              <div className="frame-track">
                <div className="frame-slices">
                  <i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
                </div>
                <span className="selection-range">
                  <b className="range-handle range-start" />
                  <b className="range-handle range-end" />
                </span>
                <span className="track-playhead" />
              </div>
              <span className="clip-time">00:59</span>
            </div>
            <div className="clip-window-foot">
              <span>SELECTED MOMENT</span>
              <span>17 SEC <b>·</b> OF 20 SEC</span>
            </div>
          </div>
          <figcaption id="clip-caption">
            <span className="caption-index">FIG. 01</span>
            A precise moment, held onto.
          </figcaption>
        </figure>

        <div className="hero-footnote" aria-hidden="true">
          <span>Save what stays with you</span>
          <span>Scroll to explore&nbsp; ↓</span>
        </div>
      </section>

      <section className="intro-band" id="why-shevic" aria-labelledby="intro-title">
        <div className="page-wrap intro-grid">
          <p className="eyebrow intro-label">A little more than a bookmark</p>
          <div className="intro-copy">
            <h2 id="intro-title">
              Some videos are long.
              <br />
              <span>The part you want isn’t.</span>
            </h2>
            <p>
              Shevic is an AI-powered mobile app for capturing, organizing,
              and sharing meaningful YouTube moments. Instead of saving a
              whole video and hoping you remember where to look, keep the exact
              exchange, idea, or scene that made you pause.
            </p>
          </div>
          <div className="intro-stamp" aria-label="Clips up to 20 seconds">
            <span>UP TO</span>
            <strong>20</strong>
            <span>SECONDS</span>
          </div>
        </div>
      </section>

      <section className="workflow-section page-wrap" id="how-it-works" aria-labelledby="workflow-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="section-number">01 /</span> The simple part</p>
            <h2 id="workflow-title">From link to <em>keep-worthy.</em></h2>
          </div>
          <p className="section-aside">
            Find the passage, not the timestamp. Shevic keeps the act of saving
            a moment simple and deliberate.
          </p>
        </div>

        <div className="workflow-list">
          {workflow.map((step) => (
            <article className="workflow-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div className="step-main">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className="step-note">{step.note}</span>
            </article>
          ))}
        </div>

        <div className="editor-note">
          <span className="editor-note-symbol" aria-hidden="true">↗</span>
          <p>
            <strong>A small editor for the exact part.</strong> Scrub through
            frames, preview in real time, and replay the selection before you
            save. Every clip stays within a 20-second maximum.
          </p>
          <span className="editor-note-tag">THE CLIP EDITOR</span>
        </div>
      </section>

      <section className="destinations-section" aria-labelledby="destinations-title">
        <div className="page-wrap destinations-inner">
          <div className="section-heading destinations-heading">
            <div>
              <p className="eyebrow"><span className="section-number">02 /</span> Two ways to keep</p>
              <h2 id="destinations-title">For yourself, <em>or everyone.</em></h2>
            </div>
            <p className="section-aside">
              Not every moment needs an audience. Choose where yours belongs.
            </p>
          </div>

          <div className="destination-pair">
            <article className="destination destination-private">
              <div className="destination-index">01 <span>PERSONAL</span></div>
              <div className="destination-visual private-visual" aria-hidden="true">
                <span className="orbit orbit-one" />
                <span className="orbit orbit-two" />
                <span className="private-mark">S</span>
                <span className="visual-caption">YOUR COLLECTION</span>
              </div>
              <h3>A shelf of things<br />you want to remember.</h3>
              <p>
                Keep references, ideas, and favorite passages together in
                private collections, ready when you need them.
              </p>
            </article>
            <article className="destination destination-public">
              <div className="destination-index">02 <span>COMMUNITY</span></div>
              <div className="destination-visual public-visual" aria-hidden="true">
                <span className="public-signal signal-one" />
                <span className="public-signal signal-two" />
                <span className="public-signal signal-three" />
                <span className="public-center">S</span>
                <span className="visual-caption">OUT IN THE OPEN</span>
              </div>
              <h3>A good find,<br />found by someone else.</h3>
              <p>
                Share selected clips publicly so other people can discover
                meaningful moments and join the conversation around them.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="page-wrap">
          <div className="experience-heading">
            <div>
              <p className="eyebrow"><span className="section-number">A closer look /</span> More in the experience</p>
              <h2 id="experience-title">The details that make it <em>useful.</em></h2>
            </div>
            <p className="experience-summary">
              From the first link to the next time you press play, the small
              practicalities matter too.
            </p>
          </div>
          <div className="experience-grid">
            {experienceDetails.map((detail) => (
              <article className="experience-item" key={detail.number}>
                <span className="experience-index">{detail.number}</span>
                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="foundation-section page-wrap" aria-labelledby="foundation-title">
        <div className="foundation-lead">
          <p className="eyebrow"><span className="section-number">03 /</span> Under the surface</p>
          <h2 id="foundation-title">
            Thoughtful from
            <br />
            <em>first tap to playback.</em>
          </h2>
          <p>
            A lightweight mobile experience connects to a purpose-built
            processing service. Admin email alerts flag failures such as
            expired cookies, unavailable videos, or processing and FFmpeg errors.
          </p>
        </div>
        <div className="foundation-details">
          {platformDetails.map((detail) => (
            <article className="foundation-item" key={detail.label}>
              <span className="foundation-label">{detail.label}</span>
              <div>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </div>
              <span className="foundation-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
          <p className="stack-line">
            REACT NATIVE <i /> EXPO <i /> TYPESCRIPT <i /> NODE.JS / EXPRESS
            <i /> YT-DLP <i /> FFMPEG
          </p>
        </div>
      </section>

      <section className="roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
        <div className="page-wrap roadmap-inner">
          <div className="roadmap-heading">
            <p className="eyebrow"><span className="roadmap-spark" /> Still taking shape</p>
            <h2 id="roadmap-title">On the <em>roadmap.</em></h2>
            <p>
              A good library gets better when it helps you find the next thing
              worth keeping. These are future directions, not current features.
            </p>
          </div>
          <div className="roadmap-items">
            <div className="roadmap-item"><span>01</span><strong>Creator profiles</strong><i>→</i></div>
            <div className="roadmap-item"><span>02</span><strong>Following people you like</strong><i>→</i></div>
            <div className="roadmap-item"><span>03</span><strong>Recommendations &amp; trending clips</strong><i>→</i></div>
            <div className="roadmap-item"><span>04</span><strong>Planned AdMob monetization &amp; premium options</strong><i>→</i></div>
          </div>
          <p className="roadmap-footnote">A VISION IN PROGRESS <span>·</span> ALWAYS ABOUT THE MOMENT</p>
        </div>
      </section>

      <section className="closing-section page-wrap" aria-labelledby="closing-title">
        <p className="eyebrow"><span className="section-number">04 /</span> The bigger picture</p>
        <h2 id="closing-title">
          A searchable library
          <br />
          of <em>meaningful moments.</em>
        </h2>
        <p>
          Not more video. More of the parts that stay with us — easy to find,
          keep, and share.
        </p>
        <a className="closing-link" href="#top">
          Back to the beginning <span aria-hidden="true">↑</span>
        </a>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top" aria-label="Shevic, back to top">
          shevic<span className="wordmark-period">.</span>
        </a>
        <span className="footer-line">Keep the part that matters.</span>
        <span className="footer-copyright">A VIDEO MOMENT, MADE YOURS <i /> © SHEVIC</span>
      </footer>
    </main>
  );
}
