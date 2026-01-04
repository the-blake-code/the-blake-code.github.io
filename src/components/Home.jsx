import React, {useCallback, useEffect, useRef, useState} from 'react';

import InstagramIcon from '../images/icons/instagram-icon.png';
import FacebookIcon from '../images/icons/facebook-icon.png';
// import styled, {keyframes, css} from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
const numImages = 28;

const OPTIONS = {loop: true};
const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);
const TWEEN_FACTOR_BASE = 0.84;
function Home() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const vwcGroupPhotos = importAll(
    require.context(
      '../images/vwc_group_fb_photos',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [
    Autoplay({stopOnMouseEnter: true, delay: 3000, stopOnInteraction: false}),
  ]);
  const tweenFactor = useRef(0);
  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);
  }, [emblaApi, setTweenFactor, tweenOpacity]);

  const handleFacebookClick = () => {
    window.open(
      'https://www.facebook.com/groups/vwcollectiveofmilwaukee',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleInstagramClick = () => {
    window.open(
      'https://www.instagram.com/vwcollectiveofmke/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className='app-page-container home-page'>
      <div className='mission-social-container'>
        <div className='mission-social-call-out-icons-container'>
          <h1>Welcome to the Volkswagen Collective of Milwaukee</h1>
          <p className='mission-social-call-out'>
            Follow our club's adventures and feel free to reach out about
            membership!
          </p>

          <div className='mission-social-icon-container'>
            <img
              onClick={handleInstagramClick}
              src={InstagramIcon}
              alt='Instagram Icon'
            />

            <img
              onClick={handleFacebookClick}
              src={FacebookIcon}
              alt='Facebook Icon'
            />
          </div>
        </div>
      </div>

      <div className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {vwcGroupPhotos.map((photo, index) => (
              <div className='embla__slide' key={index}>
                <img
                  className='embla__slide__img'
                  src={photo}
                  alt='From Volkswagen Collective of Milwaukee Facebook Group'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <SliderContainer>
        <SliderWrapper
          translateX={translateX}
          hoverTranslateX={0}
          animation={animation}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          {vwcGroupPhotos.map((groupPhoto, index) => {
            return (
              <img
                src={groupPhoto}
                alt='From Volkswagen Collective of Milwaukee Facebook Group'
              />
            );
          })}
        </SliderWrapper>
      </SliderContainer> */}
      {/* </div>
      </div> */}
    </div>
  );
}

export default Home;
