import Section from "@/layouts/Section"
import "./Hero.scss"
import Slider from "@/components/Slider"
import LinkCard from "@/components/LinkCard"

import SLIDE_ONE from "@/assets/images/dark.jpg"
import DefaultCard from "@/components/DefaultCard"
import defaultItems from "@/components/DefaultCard/defaultItems"

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
    <Section className="hero container">
      <div className="hero__grid grid">
        <div className="grid__column grid__column--large">
          <div className="grid__content grid__content--main">
            <Slider
              className="hero__slider"
              hasPagination={false}
              sliderParams={{ ...sliderParams }}
            >
              {defaultItems.map((item, index) => (
                <DefaultCard
                  className="hero__slider-card"
                  {...item}
                  key={index}
                />
              ))}
            </Slider>
          </div>
          <div className="grid__content grid__content--side">
            <LinkCard
              className="grid__content-card"
              title="Курсы"
              image={SLIDE_ONE}
              href="/"
            />

            <LinkCard
              className="grid__content-card"
              title="Контакты"
              image={SLIDE_ONE}
              href="/"
            />

            <LinkCard
              className="grid__content-card"
              title="Отзывы"
              image={SLIDE_ONE}
              href="/"
            />
          </div>
        </div>
        <div className="grid__column grid__column--small">
          <div className="grid__content grid__content--side">
            <LinkCard
              className="grid__content-card"
              title="Результаты"
              image={SLIDE_ONE}
              href="/"
            />
            <LinkCard
              className="grid__content-card"
              title="О компании"
              image={SLIDE_ONE}
              href="/"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
