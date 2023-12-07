import {useEffect, useState} from 'react';
import {Affix, Anchor, Image, Layout, Timeline, Typography} from "antd";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiReact,
  SiPhp,
  SiPhpstorm,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNpm,
  SiGit,
  SiWordpress,
  SiStorybook,
  SiArtstation,
  SiTwitter,
  SiInstagram,
  SiLinkedin
} from "@icons-pack/react-simple-icons";

import "./modules/DarkSwitch.scss";
import "./modules/Hero.scss";
import Hero from "./modules/Hero.tsx";
import DarkSwitch from "./modules/DarkSwitch.tsx";

const {Footer, Content} = Layout;
const {Title} = Typography;

export default function App(){

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const heroStyle: string = `:root { --scroll: ${scrollTop}px; }`;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: heroStyle}} />
      <header id="top" className="header">
        <Hero>
          <DarkSwitch/>
          <h1 className="main-title">
            Minh Doan
            <br/>
            Senior Frontend Developer
          </h1>
          <p className="motto">When coding meets art...</p>
        </Hero>
        <Affix offsetTop={0} className="main-menu">
          <Anchor
            className="main-nav"
            direction="horizontal"
            items={[
              {
                key: "top",
                href: "#top",
                title: "Top",
              },
              {
                key: "who-i-am",
                href: "#who-i-am",
                title: "Who I am",
              },
              {
                key: "works",
                href: "#works",
                title: "Works",
              },
              {
                key: "technologies",
                href: "#technologies",
                title: "technologies",
              },
              {
                key: "studies",
                href: "#studies",
                title: "Studies",
              },
              {
                key: "interests",
                href: "#interests",
                title: "Interests",
              },
            ]}
          />
        </Affix>
      </header>
      <Content className="content">
        <section id="who-i-am" className="content__section">
          <figure className="content__image">
            <img src={process.env.PUBLIC_URL + '/images/minh_park.png'} width="256" height="256" alt="Minh Doan"/>
          </figure>
          <div className="content__sheet">
            <Title level={2}>Who I am</Title>
            <p>
              My ongoing journey in Web Development started in 2007 in Paris when{" "}
              <abbr title="Internet Explorer 6">IE6</abbr> was still on the market
              and where transparency could only be achieved with PNG images.
              <br/>
              My passion for art and illustration has led me to focus and
              specialize on Frontend Development, in which I am able to bring
              beautiful designs to life.
              <br/>
              That journey continues today in Germany where in the past few years,
              I've been writing mainly PHP plugins, React editorial components and
              HTML/CSS themes for WordPress, as well as diverse React applications.
            </p>
          </div>
        </section>
        <section id="works" className="content__section">
          <div className="content__sheet">
            <Title level={2}>The companies I've worked for</Title>
            <Timeline
              mode="alternate"
              items={[
                {
                  label: "2007-2010",
                  children: (
                    <>
                      <Title level={3}>Direct Interactive</Title>
                      <p>
                        My first work started in a Web agency in Paris.
                        Integration of design in HTML/CSS into an internal
                        company-built{" "}
                        <abbr title="Content Management System">CMS</abbr> written
                        in PHP.
                      </p>
                    </>
                  ),
                },
                {
                  label: "2010-2011",
                  children: (
                    <>
                      <Title level={3}>Best of Media (Purch)</Title>
                      <p>
                        Frontend development for digital publishing platforms such
                        as Tom's Hardware and Tom's Guide.
                        <br/>
                        Implementation of A/B Testing, event tracking and conversion
                        tracking. Worked with PHP Smarty template engine.
                      </p>
                    </>
                  ),
                },
                {
                  label: "June 2012 - April 2013",
                  children: (
                    <>
                      <Title level={3}>Net-Mobile AG (NTT Docomo)</Title>
                      <p>
                        My first job in Düsseldorf after moving to Germany.
                        Cloning and maintaining mobile shop portals built in PHP
                      </p>
                    </>
                  ),
                },
                {
                  label: "April 2013 - August 2015",
                  children: (
                    <>
                      <Title level={3}>Fundsters AG (GEBAB)</Title>
                      <p>
                        Frontend developer for a crowdfunding platform in Django.
                      </p>
                    </>
                  ),
                },
                {
                  label: "August 2015 - January 2018",
                  children: (
                    <>
                      <Title level={3}>Springlane GmbH</Title>
                      <p>
                        Frontend developer for the shop portal built with OXID,
                        and fullstack developer for the Springlane Magazine built
                        with WordPress. Optimisation with Google{" "}
                        <abbr title="Accelerated Mobile Page">AMP</abbr>
                      </p>
                    </>
                  ),
                },
                {
                  label: "Since February 2018",
                  children: (
                    <>
                      <Title level={3}>
                        Ruhr24 - Rumble GmbH (Verlag Lensing-Wolff)
                      </Title>
                      <p>
                        Full stack developer and designer for the Coolibri online
                        magazine, built with WordPress and full{" "}
                        <abbr title="Accelerated Mobile Page">AMP</abbr>
                      </p>
                      <p>
                        Frontend developer for 11 web newsportals including
                        Ruhrnachrichten. Development of WordPress themes, plugins
                        and React editing components (Gutenberg blocks)
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </section>
        <section id="technologies" className="content__section">
          <div className="content__sheet">
            <Title level={2}>The technologies and tools I use</Title>
            <ul className="brand-list">
              <li>
                <SiJavascript/> Javascript
              </li>
              <li>
                <SiCss3/> CSS3
              </li>
              <li>
                <SiHtml5/> HTML5
              </li>
              <li>
                <SiPhp/> PHP
              </li>
              <li>
                <SiPhpstorm/> PHPStorm
              </li>
              <li>
                <SiReact/> React
              </li>
              <li>
                <SiStorybook/> Storybook
              </li>
              <li>
                <SiAdobephotoshop/> Photoshop
              </li>
              <li>
                <SiAdobeillustrator/> Illustrator
              </li>
              <li>
                <SiGit/> Git
              </li>
              <li>
                <SiNpm/> Npm
              </li>
              <li>
                <SiWordpress/> WordPress
              </li>
            </ul>
          </div>
        </section>
        <section id="studies" className="content__section">
          <div className="content__sheet">
            <Title level={2}>What I studied</Title>
            <Timeline
              mode="left"
              items={[
                {
                  label: "2003",
                  children: (
                    <>
                      <Title level={3}>Baccalauréat Scientifique au lycée Camille Claudel à Troyes</Title>
                      <p>French Scientific High school degree with specialization in Maths.</p>
                    </>
                  ),
                },
                {
                  label: "2006",
                  children: (
                    <>
                      <Title level={3}>Diplôme Universitaire de Technologie à l'IUT de Troyes</Title>
                      <p>Diploma in electricity and industrial IT.</p>
                    </>
                  ),
                },
                {
                  label: "2007",
                  children: (
                    <>
                      <Title level={3}>Licence professionnelle en ingénierie du Web et du Multimédia à l'IUT de
                        Troyes</Title>
                      <p>Professional license in Multimedia and Web Engineering.</p>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </section>
        <section id="interests" className="content__section">
          <div className="content__sheet">
            <Title level={2}>What I'm interested in</Title>
            <Title level={3}>Art</Title>
            <div className="image-grid">
              <Image
                width={150}
                src="https://cdna.artstation.com/p/assets/images/images/034/860/078/smaller_square/aruveinx-link-x.jpg?1613439018"
                preview={{
                  src: 'https://cdna.artstation.com/p/assets/images/images/034/860/078/large/aruveinx-link-x.jpg?1613439018',
                }}
              />
              <Image
                width={150}
                src="https://cdnb.artstation.com/p/assets/images/images/034/447/267/smaller_square/aruveinx-simisage-fight.jpg?1612310463"
                preview={{
                  src: 'https://cdnb.artstation.com/p/assets/images/images/034/447/267/large/aruveinx-simisage-fight.jpg?1612310463',
                }}
              />
              <Image
                width={150}
                src="https://cdna.artstation.com/p/assets/images/images/034/243/720/smaller_square/minh-cross-noctilum.jpg?1611778516"
                preview={{
                  src: 'https://cdna.artstation.com/p/assets/images/images/034/243/720/large/minh-cross-noctilum.jpg?1611778516',
                }}
              />
              <Image
                width={150}
                src="https://cdnb.artstation.com/p/assets/images/images/034/243/085/smaller_square/minh-elma-cross.jpg?1611777222"
                preview={{
                  src: 'https://cdnb.artstation.com/p/assets/images/images/034/243/085/large/minh-elma-cross.jpg?1611777222',
                }}
              />
            </div>
            <p>Since my childhood I've been drawing and sketching whenever I had a pen in the hand. Nowadays, I call
              myself "a casual fanartist" as I do digital manga coloring and video games fanarts whenever I have
              time.</p>
            <p>You can follow some of my work on <a href="https://aruveinx.artstation.com/" target="_blank"
                                                    rel="noreferrer"><SiArtstation/> Artstation</a>, <a
              href="https://www.instagram.com/aruveinx/" target="_blank"
              rel="noreferrer"><SiInstagram/> Instagram</a> or <a href="https://twitter.com/AruveinX" target="_blank"
                                                                  rel="noreferrer"><SiTwitter/> Twitter</a>.</p>
            <Title level={3}>Child cause</Title>
            <figure className="content__image">
              <img src={process.env.PUBLIC_URL + '/images/quartierkids.jpg'} width="640" height="360" alt="Minh Doan"/>
            </figure>
            <p>Since May 2021, I've been part of a parent initiative named <a href="https://quartierkids.de"
                                                                              target="_blank"
                                                                              rel="noreferrer">Quartierkids</a>. The
              movement created in our neighbourhood, claimed for the right for every kids to access the nearest school,
              under the motto "Kurze Beine, Kurze Wege" and led our city of Viersen to its first citizen decision
              ("Bürgerentscheid") in June 2023.</p>
            <p>Due to my professional and artistic background, I gave technical support to our group from being web
              developer, graphic designer, street artist to even video maker! :)</p>
            <p>We sadly lost the citizen decision due to a lack of voting participants but we won't give up on the
              children...</p>
          </div>
        </section>
      </Content>
      <Footer className="footer">
        <div className="content__sheet">
          <Title level={2}>Contact</Title>
          <p><a
            href="mailto:&#x67;&#x6d;&#46;&#x6d;&#x64;&#x6f;&#x61;&#x6e;&#64;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#46;&#x63;&#x6f;&#x6d;">Reach
            me by email.</a> or on <a href="" target="_blank" rel="noreferrer"><SiLinkedin/> Linkedin</a></p>
        </div>
      </Footer>
    </>
  );
}
