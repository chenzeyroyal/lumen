import "./Team.scss"
import Section from "@/layouts/Section"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import TeamCard from "@/components/TeamCard"
import teamCollection from "./teamCollection"

const Team = () => {
  const sliderParams = {
    slidesPerView: 4.3,
    slidesPerGroup: 1.3,
    spaceBetween: 20,
    breakpoints: {
      390: {
        slidesPerView: 2.3,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      430: {
        slidesPerView: 2.3,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.3,
        slidesPerGroup: 3,
        spaceBetween: 15,
      },

      1024: {
        slidesPerView: 4.3,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4.3,
        slidesPerGroup: 4,
        spaceBetween: 25,
      },
    },
  }

  const sliderNavigationId = "team-slider-navigation"

  return (
    <Section
      className="team container"
      title="Команда"
      subtitle="Познакомьтесь с нашими преподавателями"
      actions={
        <SliderNavigation isAccent mode="circle" id={sliderNavigationId} />
      }
    >
      <Slider
        className="team__slider"
        sliderParams={sliderParams}
        navigationTargetElementId={sliderNavigationId}
      >
        {teamCollection.map((item, index) => (
          <TeamCard className="team__card" {...item} key={index} />
        ))}
      </Slider>
    </Section>
  )
}

export default Team
