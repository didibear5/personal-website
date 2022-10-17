import React, { useState, useEffect, useCallback } from 'react';

import CustomHead from './CustomHead';
import {
  Wrapper,
  Navbar,
  RightNavBar,
  IntroWrapper,
  Section,
  Popup,
  CustomModal,
  ModalContent,
  PanelsWrapper,
  Panel,
  Footer,
  ArrowUp,
} from './Components';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Index = (props) => {
  const [scrollDistanceLargeThan500, setScrollDistanceLargeThan500] =
    useState(false);
  const [showRightNavBar, setShowRightNavBar] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showPaintingModal, setShowPaintingModal] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState({});
  const [paintings, setPaintings] = useState([
    {
      src: '/images/asphyxia.jpg',
    },
    {
      src: '/images/peacock.jpg',
      position: '55% 35%',
      size: '230%',
    },
    {
      src: '/images/sunshine.jpg',
    },
    {
      src: '/images/2017horti.jpg',
      position: '10%',
    },
    {
      src: '/images/tokyo_godfathers.jpg',
    },
    {
      src: '/images/cherry_radish.jpg',
    },
    {
      src: '/images/ddbear.jpg',
    },
    {
      src: '/images/flowers.jpg',
    },
    {
      src: '/images/hedgehog.jpg',
    },
    {
      src: '/images/fox.jpg',
    },
    {
      src: '/images/falling.jpg',
    },
  ]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const el = document.scrollingElement;
      if (el.scrollTop > 100) {
        setScrollDistanceLargeThan500(true);
      } else {
        setScrollDistanceLargeThan500(false);
      }
    });
    return () => {};
  }, []);

  const onHambugerClick = useCallback(() => {
    setShowRightNavBar(true);
  });

  const onCloseRightNavBarClick = useCallback(() => {
    setShowRightNavBar(false);
  });

  const onNavBarItemClick = useCallback((id) => {
    const offsetTop = document.getElementById(id).offsetTop;
    window.scroll({ top: offsetTop - 60, behavior: 'smooth' });
  });

  const onLinkClick = useCallback((url) => {
    window.location = url;
  });

  const onOpenProjectModalClick = useCallback(() => {
    setShowProjectModal(true);
  });

  const onCloseProjectModalClick = useCallback(() => {
    setShowProjectModal(false);
  });

  const onScrollDownClick = useCallback(() => {
    const offsetTop = document.getElementById('about-me').offsetTop;
    window.scroll({ top: offsetTop - 60, behavior: 'smooth' });
    window.scroll({ top: 0, behavior: 'smooth' });
  });

  const onScrollTopClick = useCallback(() => {
    window.scroll({ top: 0, behavior: 'smooth' });
  });

  const onOpenPaintingModalClick = useCallback((painting) => {
    setShowPaintingModal(true);
    setSelectedPainting(painting);
  });

  const onClosePaintingModalClick = useCallback(() => {
    console.log('test');
    setShowPaintingModal(false);
    setSelectedPainting({});
  });

  return (
    <Wrapper>
      <CustomHead />
      <header>
        <Navbar changed={scrollDistanceLargeThan500}>
          <div className="nav-name">Chia-He Chiu</div>
          <div className="top-navbar">
            <Button
              className="top-navbar-link"
              onClick={() => onNavBarItemClick('about-me')}
            >
              About Me
            </Button>
            <Button
              className="top-navbar-link"
              onClick={() => onNavBarItemClick('project')}
            >
              Project
            </Button>
            <Button
              className="top-navbar-link"
              onClick={() => onNavBarItemClick('gallery')}
            >
              Gallery
            </Button>
            <FontAwesomeIcon
              className="nav-toggle"
              icon={faBars}
              onClick={onHambugerClick}
            />
          </div>
        </Navbar>

        <Modal open={showRightNavBar} onClose={onCloseRightNavBarClick}>
          <Slide
            direction="left"
            in={showRightNavBar}
            mountOnEnter
            unmountOnExit
          >
            <RightNavBar>
              <Popup>
                <a className="nav-close" onClick={onCloseRightNavBarClick}>
                  &times;
                </a>
                <a
                  className="left-navbar-link"
                  onClick={() => onNavBarItemClick('about-me')}
                >
                  About Me
                </a>
                <a
                  className="left-navbar-link"
                  onClick={() => onNavBarItemClick('project')}
                >
                  Project
                </a>
                <a
                  className="left-navbar-link"
                  onClick={() => onNavBarItemClick('gallery')}
                >
                  Gallery
                </a>
              </Popup>
            </RightNavBar>
          </Slide>
        </Modal>

        <IntroWrapper>
          <div className="inner">
            <h2>Hi, I'm Chia-He Chiu</h2>
            <h4>Front-End Web Developer</h4>
            <img
              className="arrow-down"
              src="/images/icon/arrow_down.svg"
              onClick={onScrollDownClick}
            />
          </div>
        </IntroWrapper>
      </header>

      <Section id="about-me">
        <h2>About Me</h2>
        <div className="row">
          <div className="col-about-me-photo">
            <img
              className="my-photo"
              src="/images/DSC_0778.jpg"
              alt="Chia-He Chiu"
            />
          </div>
          <div className="col-about-me-text">
            <h4>Chia-He Chiu / 邱佳禾</h4>
            <p className="align-left">
              我畢業於台灣大學園藝暨景觀學系，因大三時修了網頁設計的課程，開啟了對網頁開發的興趣。
              <br />
              未來希望能作為一名前端工程師，讓使用網站的人們，能夠使用親切友善的介面。
            </p>
            <br />
            <Box p={'10px 0'}>
              <FontAwesomeIcon
                icon={faGithub}
                className="icon"
                onClick={() => onLinkClick('https://github.com/didibear5')}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon"
                onClick={() =>
                  onLinkClick(
                    'https://www.linkedin.com/in/chia-he-chiu-92676816a'
                  )
                }
              />
            </Box>
            <Box p={'5px 0'}>
              <FontAwesomeIcon
                icon={faPhone}
                className="icon"
                href="tel:+886 963 525 305"
              />
              +886 963 525 305
              <br />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon"
                href="mailto:box5151@gmail.com"
              />
              box5151@gmail.com
            </Box>
          </div>
        </div>
      </Section>

      <Section id="project">
        <h2>Project</h2>
        <div className="row">
          <div className="col-project-text">
            <h4>Meow Meow Chat</h4>
            <p className="align-left">保有隱私的輕量級聊天室</p>
            <p className="align-left">
              我主要負責介面設計與前端的部分。系統框架為Django，使用語言主要有JavaScript、jQuery、Python。
            </p>
            <Button
              className="btn"
              href="https://github.com/didibear5/MeowMeowChat"
              target="_blank"
            >
              Learn More
            </Button>
          </div>
          <div className="col-project-photo">
            <img
              className="project-img"
              src="/images/meowmeowchat.jpg"
              alt="meowmeowchat"
              onClick={onOpenProjectModalClick}
            />
          </div>

          <CustomModal
            open={showProjectModal}
            onClose={onCloseProjectModalClick}
          >
            <ModalContent>
              <div className="modal-content">
                <img src="/images/meowmeowchat.jpg" alt="meowmeowchat" />
                <a className="modal-close" onClick={onCloseProjectModalClick}>
                  &times;
                </a>
              </div>
            </ModalContent>
          </CustomModal>
        </div>
      </Section>

      <Section id="gallery">
        <h2>Gallery</h2>
        <PanelsWrapper>
          {paintings.map((painting) => {
            return (
              <Panel
                key={painting.src}
                background={painting.src}
                position={painting.position}
                size={painting.size}
                onClick={() => onOpenPaintingModalClick(painting)}
              ></Panel>
            );
          })}
        </PanelsWrapper>
        <CustomModal
          open={showPaintingModal}
          onClose={onClosePaintingModalClick}
        >
          <ModalContent>
            <div className="modal-content">
              <img src={selectedPainting.src} />
              <a className="modal-close" onClick={onClosePaintingModalClick}>
                &times;
              </a>
            </div>
          </ModalContent>
        </CustomModal>
      </Section>

      <Footer>
        <ArrowUp
          visible={scrollDistanceLargeThan500}
          src="/images/icon/arrow_up.svg"
          onClick={onScrollTopClick}
        />
        <p>Copyright © 2018 by Chia-He Chiu.</p>
      </Footer>
    </Wrapper>
  );
};

export default Index;
