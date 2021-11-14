import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div
          data-animation="default"
          class="header w-nav"
          data-easing2="ease"
          data-easing="ease"
          data-collapse="medium"
          role="banner"
          data-no-scroll="1"
          data-duration="400"
          data-doc-height="1"
        >
          <div class="header__announcement-box">
            🎉 Dover has raised a $20M Series A.
            <a
              href="https://blog.dover.io/announcing-dover-20m-series-a/"
              target="_blank"
            >Read more here!</a
            >
          </div>
          <div class="header__content">
            <a
              href="/"
              aria-current="page"
              class="header__content__logo-link w-nav-brand w--current"
            ><img
                src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d164066b66150295_dover-logo-script-aqua.svg"
                width="130"
                alt=""
                class="logo__default"
              /></a>
            <div class="header__content__menu">
              <nav role="navigation" class="menu__links w-nav-menu">
                <a
                  href="/"
                  aria-current="page"
                  class="menu__link w-nav-link w--current"
                >Home</a
                ><a
                  href="/customer-profiles/beacons-jess-li"
                  class="menu__link w-nav-link"
                >Customer profiles</a
                ><a href="/case-studies-home" class="menu__link w-nav-link"
                >Case studies</a
                >
                <div
                  data-hover="false"
                  data-delay="0"
                  class="menu__dropdown w-dropdown"
                >
                  <div class="menu__dropdown__toggle w-dropdown-toggle">
                    <div class="icon w-icon-dropdown-toggle"></div>
                    <div class="text-block-14">Tools</div>
                  </div>
                  <nav class="menu__dropdown_list w-dropdown-list">
                    <a
                      href="/tools/diversity-audit"
                      class="menu__dropdown_link w-dropdown-link"
                    >Diversity Audit</a
                    ><a
                      href="https://onesoftlanding.com"
                      target="_blank"
                      class="menu__dropdown_link w-dropdown-link"
                    >One Soft Landing</a
                    ><a
                      href="/tools/job-description-rewriter"
                      class="menu__dropdown_link w-dropdown-link"
                    >JD Rewriter</a
                    ><a
                      href="/tools/rejection-emails"
                      class="menu__dropdown_link w-dropdown-link"
                    >Rejection Emails</a
                    ><a
                      href="/tools/great-recruiting-emails"
                      class="menu__dropdown_link w-dropdown-link"
                    >Recruiting Emails</a
                    >
                  </nav>
                </div>
                <a href="/careers" class="menu__link w-nav-link">Careers</a
                ><a
                  href="http://blog.dover.io"
                  target="_blank"
                  class="menu__link w-nav-link"
                >Blog</a
                ><a href="/team" class="menu__link w-nav-link">About</a
                ><a
                  href="https://app.dover.io"
                  target="_blank"
                  class="menu__link w-nav-link"
                >Log in</a
                >
              </nav>
              <div class="button-menu-mobile w-nav-button">
                <img
                  src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d164060f961502af_menu-icon.png"
                  width="22"
                  alt=""
                  class="button-menu-mobile__icon"
                />
              </div>
            </div>
            <a href="/start" class="button--secondary cc-contact-us w-inline-block"
            ><div class="text-block-3">Talk to us</div></a
            >
          </div>
        </div>
        <div class="intro-header">
          <div class="hero w-container">
            <div class="w-row">
              <div class="column-29 w-col w-col-1"></div>
              <div class="column-31 w-col w-col-10">
                <div class="intro-content cc-homepage">
                  <div class="heading-jumbo">
                    Build your recruiting engine with Dover.
                  </div>
                  <div class="paragraph-bigger cc-bigger-light">
                    No more juggling recruiting tools––Dover finds and schedules
                    candidates you actually want to talk to, at a fraction of the
                    cost.<br />
                  </div>
                </div>
              </div>
              <div class="column-26 w-col w-col-1"></div>
            </div>
            <div class="columns-11 w-row">
              <div class="column-27 w-col w-col-1"></div>
              <div class="column-30 w-col w-col-5">
                <div class="form-block-2 w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    redirect="https://calendly.com/gillianroseobrien/consultation"
                    data-redirect="https://calendly.com/gillianroseobrien/consultation"
                    method="post"
                    action="https://onesoftlanding.us19.list-manage.com/subscribe/post?u=84045504ef144bb4c91b71993&amp;id=693686e142"
                    class="form-2"
                  >
                    <div class="div-block-11">
                      <div class="accent accent-aqua"></div>
                      <div class="heading-2">
                        <strong class="bold-text-5"
                        >Join the 100+ companies relying on Dover to find the best
                          talent</strong
                        >
                      </div>
                      <a
                        href="/start"
                        class="
                      button-primary--green button-primary--full-width
                      w-button
                    "
                      >Talk to us</a
                      >
                    </div>
                  </form>
                  <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
              <div class="column-28 w-col w-col-6"></div>
            </div>
          </div>
          <img
            src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d164069d0d1502c8_header-illo-mobile%402x.png"
            sizes="100vw"
            srcset="
          https://assets.website-files.com/604b1712d16406970c150253/604b1712d164069d0d1502c8_header-illo-mobile%25402x-p-500.png   500w,
          https://assets.website-files.com/604b1712d16406970c150253/604b1712d164069d0d1502c8_header-illo-mobile%25402x-p-800.png   800w,
          https://assets.website-files.com/604b1712d16406970c150253/604b1712d164069d0d1502c8_header-illo-mobile%25402x-p-1080.png 1080w,
          https://assets.website-files.com/604b1712d16406970c150253/604b1712d164069d0d1502c8_header-illo-mobile%402x.png          1196w
        "
            alt=""
            class="image-19"
          />
        </div>
        <div id="clients" class="section-logos wf-section">
          <div class="w-container">
            <h6 class="heading-logos">
              Trusted by some of the world&#x27;s best companies
            </h6>
            <div class="wrapper-new-logos-temp">
              <div class="columns-logos w-row">
                <div class="w-col w-col-3 w-col-small-6 w-col-tiny-6">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406958d1503cb_samsara.png"
                    loading="lazy"
                    alt=""
                    class="customer-logo-2"
                  />
                </div>
                <div class="w-col w-col-3 w-col-small-6 w-col-tiny-6">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406c2d71503b6_benchling.png"
                    loading="lazy"
                    alt=""
                    class="customer-logo-2"
                  />
                </div>
                <div class="w-col w-col-3 w-col-small-6 w-col-tiny-6">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406b3c71503cc_scale-ai.png"
                    loading="lazy"
                    alt=""
                    class="customer-logo-2"
                  />
                </div>
                <div class="w-col w-col-3 w-col-small-6 w-col-tiny-6">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d164068b461503bd_forge.png"
                    loading="lazy"
                    alt=""
                    class="customer-logo-2"
                  />
                </div>
              </div>
              <div class="columns-logos w-row">
                <div class="w-col w-col-3 w-col-small-6 w-col-tiny-6">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640630b31503d0_workos.png"
                    loading="lazy"
                    alt=""
                    class="customer-logo-2"
                  />
                </div>
                <div class="w-col w-col-3 w-col-small-6 w-col-tiny-6">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640633f81503c3_lattice.png"
                    loading="lazy"
                    alt=""
                    class="customer-logo-2"
                  />
                </div>
                <div class="w-col w-col-3 w-col-small-6 w-col-tiny-6">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640638b81503b9_clearbanc.png"
                    loading="lazy"
                    alt=""
                    class="customer-logo-2"
                  />
                </div>
                <div class="w-col w-col-3 w-col-small-6 w-col-tiny-6">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/60fa1634d8f1a26d13c1b7f3_descriptLogo_copy.png"
                    loading="lazy"
                    width="187"
                    sizes="(max-width: 479px) 42vw, (max-width: 767px) 187px, (max-width: 991px) 167px, 187px"
                    srcset="
                  https://assets.website-files.com/604b1712d16406970c150253/60fa1634d8f1a26d13c1b7f3_descriptLogo_copy-p-500.png 500w,
                  https://assets.website-files.com/604b1712d16406970c150253/60fa1634d8f1a26d13c1b7f3_descriptLogo_copy.png       627w
                "
                    alt=""
                    class="image-69"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="columns-35 w-row">
            <div class="w-col w-col-3"></div>
            <div class="column-72 w-col w-col-6">
              <div class="div-logos-link-case-studies">
                <a
                  href="https://www.dover.com/case-studies-home"
                  class="link-logos-case-studies-2"
                >See what they&#x27;re saying →</a
                >
              </div>
            </div>
            <div class="w-col w-col-3"></div>
          </div>
        </div>
        <div id="testimonial-2" class="testimonial-2 wf-section">
          <div class="w-container">
            <div class="block-aqua w-row">
              <div class="w-col w-col-1"><div class="div-block-6"></div></div>
              <div class="column-5 w-col w-col-9">
                <div class="html-embed-quote-purple w-embed">
                  <svg
                    width="68"
                    height="54"
                    viewBox="0 0 68 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 53.9999H67V27.9999H53.8C53.8 18.1999 61.2 11.7999 67.4 9.79991V0.399902C54 2.59991 40 12.1999 40 30.3999V53.9999ZM0.400024 53.9999H27.4V27.9999H14.2C14.2 18.1999 21.6 11.7999 27.8 9.79991V0.399902C14.4 2.59991 0.400024 12.1999 0.400024 30.3999V53.9999Z"
                      fill="#312F4A"
                    />
                  </svg>
                </div>
                <blockquote class="block-quote">
                  We hired an exceptional Staff Engineer and a Senior PM using
                  Dover. The product helped us reach candidates with decades of
                  experience.<br />
                </blockquote>
                <div class="div-block-12">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406d40e15029a_testimonial-nick%402x.png"
                    alt="Nic Bruno, Forge"
                    class="image-20"
                  />
                  <div class="text-block-2">
                    <strong>Nicholas Bruno<br /></strong>Talent, Forge<br />
                  </div>
                </div>
              </div>
              <div class="column-11 w-col w-col-2"></div>
            </div>
            <a
              href="/case-studies/forge"
              class="button-primary button-primary-aqua w-button"
            >Read the case study</a
            >
          </div>
        </div>
        <a
          href="/case-studies/forge"
          target="_blank"
          class="button-primary button-primary-blue w-button"
        >Read the case study</a
        >
        <div class="section wf-section">
          <div class="container-6 w-container">
            <div class="columns-9 w-row">
              <div class="column-13 w-col w-col-1 w-col-stack"></div>
              <div class="column-17 w-col w-col-5 w-col-stack">
                <div class="accent accent-salmon"></div>
                <h1 class="heading-12">
                  We discover candidates you actually want to talk to.
                </h1>
                <p class="paragraph-5">
                  Dover uses a robust calibration process to deeply understand your
                  requirements.
                </p>
                <p>
                  Then, our system evaluates prospective candidates on
                  <strong>50+ data points</strong> so we can find qualified
                  candidates who are the best possible fits.
                </p>
              </div>
              <div class="column-18 w-clearfix w-col w-col-6 w-col-stack">
                <img
                  src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d164067f421503d7_Orbit%201.png"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 991px) 523.609375px, 480px"
                  srcset="
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d164067f421503d7_Orbit%25201-p-500.png 500w,
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d164067f421503d7_Orbit%201.png         942w
              "
                  alt=""
                  class="image-16"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="stat" class="section wf-section">
          <div class="container-5 w-container">
            <div class="columns-6 w-row">
              <div class="column-16 w-col w-col-1"></div>
              <div class="column-14 w-col w-col-9">
                <div class="w-row">
                  <div class="column-7 w-col w-col-11">
                    <div class="accent accent-aqua"></div>
                    <h1 class="heading-26">
                      Our customers average<br /><span class="underline"
                      >5 interviews</span
                      >
                      per role, per week.
                    </h1>
                  </div>
                  <div class="column-8 w-col w-col-1"></div>
                </div>
              </div>
              <div class="column-15 w-col w-col-2"></div>
            </div>
          </div>
          <div class="columns-7 w-row">
            <div class="column-9 w-col w-col-4"></div>
            <div class="column-6 w-clearfix w-col w-col-8">
              <img
                src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640606651502d0_stat-bg%402x.png"
                width="850"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 1439px) 67vw, 786.65625px"
                srcset="
              https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640606651502d0_stat-bg%25402x-p-500.png   500w,
              https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640606651502d0_stat-bg%25402x-p-800.png   800w,
              https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640606651502d0_stat-bg%25402x-p-1080.png 1080w,
              https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640606651502d0_stat-bg%402x.png          1700w
            "
                alt=""
                class="image-15"
              />
            </div>
          </div>
        </div>
        <div id="testimonial-1" class="testimonial wf-section">
          <div class="w-container">
            <div class="block-salmon w-row">
              <div class="w-col w-col-1"><div class="div-block-6"></div></div>
              <div class="column-5 w-col w-col-9">
                <div class="html-embed-quote-purple w-embed">
                  <svg
                    width="68"
                    height="54"
                    viewBox="0 0 68 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 53.9999H67V27.9999H53.8C53.8 18.1999 61.2 11.7999 67.4 9.79991V0.399902C54 2.59991 40 12.1999 40 30.3999V53.9999ZM0.400024 53.9999H27.4V27.9999H14.2C14.2 18.1999 21.6 11.7999 27.8 9.79991V0.399902C14.4 2.59991 0.400024 12.1999 0.400024 30.3999V53.9999Z"
                      fill="#312F4A"
                    />
                  </svg>
                </div>
                <blockquote class="block-quote">
                  Dover helped us hire two phenomenal engineers for our first DevOps
                  and Test roles. The product held up our high quality bar — and
                  working with their team was fantastic!<br />
                </blockquote>
                <div class="div-block-12">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406987b1502aa_testimonial-headshot-jeff-b%402x.png"
                    alt=""
                    class="image-20"
                  />
                  <div class="text-block-2">
                    <strong>Jeff Chen<br /></strong>Co-founder &amp; CTO, Pixlee<br />
                  </div>
                </div>
              </div>
              <div class="column-11 w-col w-col-2"></div>
            </div>
            <a
              href="/case-studies/pixlee"
              class="button-primary button-primary-salmon w-button"
            >Read the case study</a
            >
          </div>
        </div>
        <div class="section wf-section">
          <div class="w-container">
            <div class="w-row">
              <div class="column-70 w-col w-col-6 w-col-stack">
                <img
                  src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406ed911503d8_Dover%20on%20Slack.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 80vw, (max-width: 991px) 498.703125px, 460px"
                  srcset="
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406ed911503d8_Dover%2520on%2520Slack-p-500.png   500w,
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406ed911503d8_Dover%2520on%2520Slack-p-800.png   800w,
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406ed911503d8_Dover%2520on%2520Slack-p-1080.png 1080w,
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406ed911503d8_Dover%2520on%2520Slack-p-1600.png 1600w,
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406ed911503d8_Dover%2520on%2520Slack-p-2000.png 2000w,
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406ed911503d8_Dover%20on%20Slack.png            2296w
              "
                  alt=""
                  class="image-56"
                />
              </div>
              <div class="column-71 w-col w-col-6 w-col-stack">
                <div class="accent accent-aqua"></div>
                <h1>Seamless feedback through Slack.</h1>
                <p>
                  We meet you where you are.
                  <strong>Dover will send candidates in Slack</strong> for your
                  review to help whittle down the search.<br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="section wf-section">
          <div class="w-row">
            <div class="w-col w-col-1"></div>
            <div class="w-col w-col-5">
              <div class="div-block-32"></div>
              <div class="container-testimonial-border w-container">
                <div class="block-grey w-row">
                  <div class="w-col w-col-1"></div>
                  <div class="column-5 w-col w-col-10">
                    <div class="html-embed-quote-left w-embed">
                      <svg
                        width="68"
                        height="54"
                        viewBox="0 0 68 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M40 53.9999H67V27.9999H53.8C53.8 18.1999 61.2 11.7999 67.4 9.79991V0.399902C54 2.59991 40 12.1999 40 30.3999V53.9999ZM0.400024 53.9999H27.4V27.9999H14.2C14.2 18.1999 21.6 11.7999 27.8 9.79991V0.399902C14.4 2.59991 0.400024 12.1999 0.400024 30.3999V53.9999Z"
                          fill="#312F4A"
                        />
                      </svg>
                    </div>
                    <blockquote class="block-quote-2">
                      Throughout our collaboration, Dover’s weekly updates and
                      success metrics helped us closely monitor progress.
                      <strong
                      >We appreciated how quickly the product worked in our
                        feedback to refine candidate sourcing.</strong
                      ><br />
                    </blockquote>
                    <div class="quote-name">
                      <img
                        src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d164061808150293_Henrik.jpeg"
                        width="70"
                        height="70"
                        alt=""
                        class="image-29"
                      />
                      <p class="paragraph-13">
                        <strong>Henrik<br /></strong>Founder, Steady Health
                      </p>
                    </div>
                  </div>
                  <div class="column-11 w-col w-col-1"></div>
                </div>
              </div>
            </div>
            <div class="w-col w-col-5">
              <div class="block-grey w-row">
                <div class="w-col w-col-1"></div>
                <div class="column-5 w-col w-col-10">
                  <div class="html-embed-quote-right w-embed">
                    <svg
                      width="68"
                      height="54"
                      viewBox="0 0 68 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 53.9999H67V27.9999H53.8C53.8 18.1999 61.2 11.7999 67.4 9.79991V0.399902C54 2.59991 40 12.1999 40 30.3999V53.9999ZM0.400024 53.9999H27.4V27.9999H14.2C14.2 18.1999 21.6 11.7999 27.8 9.79991V0.399902C14.4 2.59991 0.400024 12.1999 0.400024 30.3999V53.9999Z"
                        fill="#312F4A"
                      />
                    </svg>
                  </div>
                  <blockquote class="block-quote-2">
                    The Slack integration is phenomenal and
                    <strong>established a quick candidate feedback process</strong
                    >.<br />
                  </blockquote>
                  <div class="quote-name">
                    <img
                      src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406237b1502e9_Abhishek%20Das.jpeg"
                      width="70"
                      height="70"
                      alt=""
                      class="image-29"
                    />
                    <p class="paragraph-13">
                      <strong>Abhishek Das<br />‍</strong>VP Engineering, Onera
                    </p>
                  </div>
                </div>
                <div class="column-11 w-col w-col-1"></div>
              </div>
            </div>
            <div class="w-col w-col-1"></div>
          </div>
        </div>
        <div class="section wf-section">
          <div class="container-7 w-container">
            <div class="columns-10 w-row">
              <div class="column-19 w-col w-col-6 w-col-stack">
                <img
                  src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406195b1502e7_email-illo%402x.png"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 991px) 486.203125px, 480px"
                  srcset="
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406195b1502e7_email-illo%25402x-p-500.png  500w,
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406195b1502e7_email-illo%25402x-p-800.png  800w,
                https://assets.website-files.com/604b1712d16406970c150253/604b1712d16406195b1502e7_email-illo%402x.png         1020w
              "
                  alt=""
                  class="image-17"
                />
              </div>
              <div class="column-20 w-col w-col-6 w-col-stack">
                <div class="accent"></div>
                <h1 class="heading-12">
                  <strong>Make your voice resonate with candidates</strong>
                </h1>
                <p>
                  Dover <strong>builds your company&#x27;s brand</strong> and
                  leverages it for all candidate communication.<br />
                </p>
                <p>
                  Candidates are <strong>5x more likely to respond</strong> when
                  they see a thoughtful note from a future teammate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="testimonial-2" class="testimonial-2 wf-section">
          <div class="w-container">
            <div class="block-aqua w-row">
              <div class="w-col w-col-1"><div class="div-block-6"></div></div>
              <div class="column-5 w-col w-col-9">
                <div class="html-embed-quote-purple w-embed">
                  <svg
                    width="68"
                    height="54"
                    viewBox="0 0 68 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 53.9999H67V27.9999H53.8C53.8 18.1999 61.2 11.7999 67.4 9.79991V0.399902C54 2.59991 40 12.1999 40 30.3999V53.9999ZM0.400024 53.9999H27.4V27.9999H14.2C14.2 18.1999 21.6 11.7999 27.8 9.79991V0.399902C14.4 2.59991 0.400024 12.1999 0.400024 30.3999V53.9999Z"
                      fill="#312F4A"
                    />
                  </svg>
                </div>
                <blockquote class="block-quote">
                  As a founder, I&#x27;m balancing tens of things at a given time
                  and it was a relief to hand off sourcing candidates to Dover. They
                  ramped up instantly and helped steer us to great candidates for
                  our React Native roles.<br />
                </blockquote>
                <div class="div-block-12">
                  <img
                    src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640600401502d4_1516226660931.jpg"
                    width="70"
                    height="70"
                    alt=""
                    class="image-29"
                  />
                  <div class="text-block-2">
                    <strong>Alex Black<br />‍</strong>Founder, Invoice Simple<br />
                  </div>
                </div>
              </div>
              <div class="column-11 w-col w-col-2"></div>
            </div>
            <a
              href="/case-studies/forge"
              class="button-primary button-primary-blue w-button"
            >Read the case study</a
            ><a
              href="/case-studies/forge"
              class="button-primary button-primary-aqua w-button"
            >Read the case study</a
            >
          </div>
        </div>
        <div class="section-5 wf-section">
          <div class="container-9 w-container">
            <h1 class="heading-partner">We partner closely with you.</h1>
            <div class="w-row">
              <div class="column-21 w-col w-col-1 w-col-small-small-stack"></div>
              <div class="w-col w-col-5 w-col-small-small-stack">
                <ul role="list" class="detail-list">
                  <li class="detail-list-item dover-benefit-slack">
                    Dedicated support over Slack
                  </li>
                  <li class="detail-list-item dover-benefit-atsintegrations">
                    ATS integrations
                  </li>
                  <li class="detail-list-item dover-benefit-strategymeetings">
                    Strategy meetings to hone in the search
                  </li>
                </ul>
              </div>
              <div class="w-col w-col-5 w-col-small-small-stack">
                <ul role="list" class="detail-list">
                  <li class="detail-list-item dover-benefit-scheduling">
                    Scheduling management
                  </li>
                  <li class="detail-list-item dover-benefit-performancereports">
                    Weekly performance reports
                  </li>
                  <li
                    class="detail-list-item dover-benefit-jdmessagingconsultation"
                  >
                    Consultation on job description and messaging
                  </li>
                </ul>
              </div>
              <div class="column-22 w-col w-col-1 w-col-small-small-stack"></div>
            </div>
          </div>
        </div>
        <div class="press wf-section">
          <div class="press__container w-container">
            <h2 class="press__heading">Dover in the News</h2>
            <p class="press__details">
              For press inquiries, please reach out at
              <a href="#" class="press__link--email">hello@dover.com</a>
            </p>
            <div class="press__container__columns w-row">
              <div class="press__container__column w-col w-col-4 w-col-stack">
                <a
                  href="https://elpha.com/posts/32e6589k/office-hours-i-m-the-co-founder-and-cto-of-dover-a-tiger-global-founders-fund-and-yc-backed-recruiting-orchestration-company?v1=r03"
                  target="_blank"
                  class="press__container__link-block w-inline-block"
                ><img
                    src="https://assets.website-files.com/604b1712d16406970c150253/610b4ba5a1ba2e8cd8fb1ce1_elpha.jpeg"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, 147.8125px"
                    srcset="
                  https://assets.website-files.com/604b1712d16406970c150253/610b4ba5a1ba2e8cd8fb1ce1_elpha-p-500.jpeg 500w,
                  https://assets.website-files.com/604b1712d16406970c150253/610b4ba5a1ba2e8cd8fb1ce1_elpha.jpeg       813w
                "
                    alt=""
                    class="press__article-logo"
                  />
                  <div class="press__article-heading">
                    <h4 class="press__article-company">Elpha</h4>
                    <h6 class="press__article-date">July 2021</h6>
                  </div>
                  <p class="press__article-paragraph">
                    Office Hours: I&#x27;m the co-founder and CTO of Dover, a Tiger
                    Global, Founders Fund, and YC backed recruiting company.
                    (Anvisha Pai)
                  </p></a
                >
              </div>
              <div class="press__container__column w-col w-col-4 w-col-stack">
                <a
                  data-w-id="5c6f1d48-c4e2-83fc-b649-334eb8dd76fa"
                  href="https://techcrunch.com/2021/07/19/dover-raises-20m-to-bring-the-concept-of-orchestration-to-recruitment/"
                  target="_blank"
                  class="press__container__link-block w-inline-block"
                ><img
                    src="https://assets.website-files.com/604b1712d16406970c150253/610b4b304f911b40f2ef7ddf_techcrunch.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, 140px"
                    srcset="
                  https://assets.website-files.com/604b1712d16406970c150253/610b4b304f911b40f2ef7ddf_techcrunch-p-500.png  500w,
                  https://assets.website-files.com/604b1712d16406970c150253/610b4b304f911b40f2ef7ddf_techcrunch.png       1280w
                "
                    alt=""
                    class="press__article-logo"
                  />
                  <div class="press__article-heading">
                    <h4 class="press__article-company">TechCrunch</h4>
                    <h6 class="press__article-date">July 2021</h6>
                  </div>
                  <p class="press__article-paragraph">
                    Dover raises $20M to bring the concept of ‘orchestration’ to
                    recruitment
                  </p></a
                >
              </div>
              <div class="press__container__column w-col w-col-4 w-col-stack">
                <a
                  href="https://www.forbes.com/sites/anniebrown/2021/06/02/automation-and-the-future-of-workhow-engineered-systems-are-improving-the-workplace/?sh=43a0b0ce7372"
                  target="_blank"
                  class="press__container__link-block w-inline-block"
                ><img
                    src="https://assets.website-files.com/604b1712d16406970c150253/610b4c2b87ec863392887d0c_forbes.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, 124.4375px"
                    srcset="
                  https://assets.website-files.com/604b1712d16406970c150253/610b4c2b87ec863392887d0c_forbes-p-500.png  500w,
                  https://assets.website-files.com/604b1712d16406970c150253/610b4c2b87ec863392887d0c_forbes-p-800.png  800w,
                  https://assets.website-files.com/604b1712d16406970c150253/610b4c2b87ec863392887d0c_forbes.png       3840w
                "
                    alt=""
                    class="press__article-logo"
                  />
                  <div class="press__article-heading">
                    <h4 class="press__article-company">Forbes</h4>
                    <h6 class="press__article-date">June 2021</h6>
                  </div>
                  <p class="press__article-paragraph">
                    Automation And The Future Of Work - How Engineered Systems Are
                    Improving The Workplace
                  </p></a
                >
              </div>
            </div>
            <a
              href="https://www.ycombinator.com/companies/women-founders"
              target="_blank"
              class="
            press__container__link-block press__container__link-block--bottom
            w-inline-block
          "
            ><img
                src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640620c515038b_ycombinator-logo.png"
                loading="lazy"
                alt=""
                class="press__article-logo"
              />
              <div class="press__article-heading horizontal-block-right">
                <h4 class="press__article-company left">Y Combinator</h4>
                <h6 class="press__article-date left">March 2021</h6>
                <p class="press__article-paragraph">
                  List of women-founded YC companies includes our co-founder,
                  Anvisha Pai.
                </p>
              </div></a
            >
          </div>
        </div>
        <div id="cta" class="cta-bottom wf-section">
          <div class="cta-bottom__block-wrapper">
            <div class="cta-bottom__content w-container">
              <h1 class="heading-16">
                Ready to take your company growth to the next level?
              </h1>
              <div class="cta-bottom__content__button">
                <a
                  href="/start"
                  class="button-primary--green button-primary--full-width w-button"
                >Talk to us</a
                >
              </div>
            </div>
          </div>
          <div class="cta-bottom__block-backing"></div>
        </div>
        <footer class="footer">
          <section class="footer__content">
            <div class="footer__content__wrap">
              <div class="footer__content__navigation w-container">
                <img
                  src="https://assets.website-files.com/604b1712d16406970c150253/604b1712d1640699ce1502e0_dover-logo-script-white.svg"
                  width="140"
                  alt=""
                  class="footer__content__logo"
                /><a href="/team" target="_blank" class="footer__link">About</a
                ><a
                  href="/customer-profiles/beacons-jess-li"
                  target="_blank"
                  class="footer__link"
                >Customer profiles</a
                ><a href="/case-studies-home" target="_blank" class="footer__link"
                >Case studies</a
                ><a href="/careers" class="footer__link">Careers</a
                ><a href="/privacy-policy" target="_blank" class="footer__link"
                >Privacy</a
                ><a
                  href="/terms-and-conditions"
                  target="_blank"
                  class="footer__link"
                >Terms</a
                ><a
                  href="mailto:hello@dover.io"
                  class="footer__link footer__link--email"
                >hello@dover.com</a
                >
              </div>
            </div>
          </section>
        </footer>
      </div>
    )
  }


}

export default App;
