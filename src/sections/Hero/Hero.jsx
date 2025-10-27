import "./Hero.scss"

import Section from "@/layouts/Section"
import Slider from "@/components/Slider"
import LinkCard from "@/components/LinkCard"
import SliderCard from "@/components/SliderCard"
import sliderItems from "./sliderItems"

const Hero = () => {
  const sliderParams = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: true,
    },
  }

  return (
    <Section className="hero container" title="Главная секция" isHeaderHidden>
      <div className="hero__grid">
        <div className="hero__grid-column hero__grid-column--large">
          <div className="hero__grid-content">
            <Slider
              className="hero__slider"
              sliderParams={{ ...sliderParams }}
              hasButtons={false}
            >
              {sliderItems.map((item, index) => (
                <SliderCard
                  className="hero__slider-card"
                  {...item}
                  key={index}
                />
              ))}
            </Slider>
          </div>
          <div className="hero__grid-content hero__grid-content--side">
            <LinkCard
              className="hero__grid-card"
              title="Курсы"
              href="/сourses"
            />

            <LinkCard
              className="hero__grid-card"
              title="Контакты"
              href="/contacts"
            />

            <LinkCard
              className="hero__grid-card"
              title="Отзывы"
              href="/reviews"
            />
          </div>
        </div>
        <div className="hero__grid-column hero__grid-column--small">
          <LinkCard
            className="hero__grid-card"
            title="Результаты"
            image="/src/assets/images/links/results.jpg"
            href="/results"
          />
          <LinkCard
            className="hero__grid-card"
            title="Войти в IT"
            image="/src/assets/images/links/it.png"
            href="/courses/code/"
          />
        </div>
      </div>
    </Section>
  )
}

export default Hero
