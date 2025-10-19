import "./CourseDetails.scss"
import Section from "@/layouts/Section"
import Banner from "@/components/Banner"
import IMAGE_FRONTEND from "@/assets/images/frontend.png"
import Accordion from "@/components/Accordion"
import Slider from "@/components/Slider"
import BenefitCard from "@/components/BenefitCard"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Form from "@/components/Form"

const CourseDetails = () => {
  const sliderNavigationId = "benefits-slider-navigation"

  const description = [
    "Прокачайте навыки и приблизьтесь к уровню middle",
    "Учитесь на реальных проектах компаний",
    "Познакомьтесь с React, TypeScript и Git",
  ]

  const accordionItems = [
    {
      title: "HTML и CSS: лейаут, доступность и интерактив",
      subtitle:
        "Узнаете, как работает компьютер и интернет, познакомитесь с профессией JavaScript-разработчика и основными инструментами.",
      tags: ["6 тем", "2 проекта", "6 недель"],
      description: [
        "Прокачайте навыки и приблизьтесь к уровню middle",
        "Учитесь на реальных проектах компаний",
        "Познакомьтесь с React, TypeScript и Git",
      ],
    },
    {
      title: "Дизайн, адаптивная верстка и декорирование",
      subtitle:
        "Научитесь создавать полноценные адаптивные и анимированные страницы в интерактивном формате.",
      tags: ["8 тем", "2 проекта", "3 недели"],
      description: [
        "Прокачайте навыки и приблизьтесь к уровню middle",
        "Учитесь на реальных проектах компаний",
        "Познакомьтесь с React, TypeScript и Git",
      ],
    },
    {
      title: "Базовый JavaScript",
      subtitle:
        "Научитесь оживлять веб-страницы, сможете настраивать взаимодействие с сервером и создавать простые веб-приложения.",
      tags: ["16 тем", "3 проекта", "6 недель"],
      description: [
        "Прокачайте навыки и приблизьтесь к уровню middle",
        "Учитесь на реальных проектах компаний",
        "Познакомьтесь с React, TypeScript и Git",
      ],
    },
    {
      title: "Продвинутый JavaScript",
      subtitle:
        "Научитесь оживлять веб-страницы, сможете настраивать взаимодействие с сервером и создавать сложные веб-приложения.",
      tags: ["16 тем", "2 проекта", "6 недель"],
      description: [
        "Прокачайте навыки и приблизьтесь к уровню middle",
        "Учитесь на реальных проектах компаний",
        "Познакомьтесь с React, TypeScript и Git",
      ],
    },
    {
      title: "TypeScript и ООП",
      subtitle:
        "Освоите востребованный язык программирования TypeScript, которым пользуется большинство фронтенд-разработчиков.",
      tags: ["16 тем", "2 проекта", "6 недель"],
      description: [
        "Прокачайте навыки и приблизьтесь к уровню middle",
        "Учитесь на реальных проектах компаний",
        "Познакомьтесь с React, TypeScript и Git",
      ],
    },
    {
      title: "React",
      subtitle:
        "Научитесь создавать и тестировать React-компоненты с использованием хуков, сможете строить серьёзные веб-приложения с нуля.",
      tags: ["16 тем", "2 проекта", "6 недель"],
      description: [
        "Прокачайте навыки и приблизьтесь к уровню middle",
        "Учитесь на реальных проектах компаний",
        "Познакомьтесь с React, TypeScript и Git",
      ],
    },
  ]

  const sliderItems = [
    {
      title: "Результаты работы видно сразу",
      subtitle:
        "Пишете код - и сразу видите, как изменяется интерфейс сайта. Приятно и наглядно!",
      image: IMAGE_FRONTEND,
    },
    {
      title: "Результаты работы видно сразу",
      subtitle:
        "Пишете код - и сразу видите, как изменяется интерфейс сайта. Приятно и наглядно!",
      image: IMAGE_FRONTEND,
    },
    {
      title: "Результаты работы видно сразу",
      subtitle:
        "Пишете код - и сразу видите, как изменяется интерфейс сайта. Приятно и наглядно!",
      image: IMAGE_FRONTEND,
    },
    {
      title: "Результаты работы видно сразу",
      subtitle:
        "Пишете код - и сразу видите, как изменяется интерфейс сайта. Приятно и наглядно!",
      image: IMAGE_FRONTEND,
    },
  ]

  const sliderParams = {
    slidesPerView: 3.3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    breakpoints: {
      390: {
        slidesPerView: 1.3,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      430: {
        slidesPerView: 1.3,
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
        slidesPerView: 3.3,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  }

  return (
    <Section className="course-details">
      <Banner
        className="course-details__banner"
        title="JavaScript-разработчик"
        subtitle="Освойте JavaScript с нуля и начните карьеру программиста"
        bannerType="Курс"
        tag="middle"
        isAccent
        description={description}
      >
        <Form
          title="Отправьте заявку, чтобы забронировать место на курсе"
          buttonLabel="Записаться на курс"
        />
      </Banner>
      <Section className="course-details__description container">
        <div className="course-details__description-body">
          <div className="course-details__description-text">
            <h3 className="course-details__description-title">
              Фронтендеры создают сайты, которыми мы пользуемся каждый день
            </h3>
            <p className="course-details__description-subtitle">
              Сайты нужны всем — от районной пекарни и барбершопа до крупного
              онлайн-банка и «Госуслуг». Поэтому фронтенд-разработчик — одна из
              самых востребованных профессий в IT.
            </p>
          </div>
          <img
            className="course-details__description-image"
            src={IMAGE_FRONTEND}
          />
        </div>
      </Section>
      <Section
        className="course-details__benefits container"
        title="Преимущества профессии"
        actions={
          <SliderNavigation
            isAccent
            mode="circle"
            id={sliderNavigationId}
            hasPagination={false}
          />
        }
      >
        <Slider
          className="course-details__slider"
          sliderParams={sliderParams}
          navigationTargetElementId={sliderNavigationId}
        >
          {sliderItems.map((item, index) => (
            <BenefitCard {...item} key={index} />
          ))}
        </Slider>
      </Section>
      <Section
        className="course-details__stages container"
        title="Программа обучения"
      >
        {accordionItems.map((item) => (
          <Accordion name="stage" {...item}>
            <ul>
              {item.description.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
          </Accordion>
        ))}
      </Section>
      <section className="course-details__slider container"></section>
    </Section>
  )
}

export default CourseDetails
