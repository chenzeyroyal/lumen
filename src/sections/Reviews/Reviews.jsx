import Section from "@/layouts/Section"
import IMAGE_REVIEWS from "@/assets/images/reviews/reviews.png"
import IMAGE_EMPLOYEE from "@/assets/images/employee.jpg"

import "./Reviews.scss"
import ReviewCard from "@/components/ReviewCard"

const Results = () => {
  const ratings = [
    {
      rate: "4.8",
      description: "средний рейтинг курсов",
    },
    {
      rate: "97%",
      description: "высоко оценили материал курсов",
    },
    {
      rate: "92%",
      description: "оценили общение с куратором",
    },
    {
      rate: "88%",
      description: "нашли работу в течение года",
    },
  ]

  const reviews = [
    {
      username: "Надежда Валюкова",
      avatar: IMAGE_EMPLOYEE,
      course: {
        title: "Курс «Frontend-разработчик»",
        href: "/courses/course",
      },
      rate: 5,
      review:
        "Я очень благодарна за сотрудничество! Преподаватели очень грамотно и понятно объясняют. Много интересного и нужного материала. Много полезной информации, взятой из-за рубежа.",
    },
    {
      username: "Надежда Валюкова",
      avatar: IMAGE_EMPLOYEE,
      course: {
        title: "Курс «Frontend-разработчик»",
        href: "/courses/course",
      },
      rate: 5,
      review:
        "Я очень благодарна за сотрудничество! Преподаватели очень грамотно и понятно объясняют. Много интересного и нужного материала. Много полезной информации, взятой из-за рубежа.",
    },
    {
      username: "Надежда Валюкова",
      avatar: IMAGE_EMPLOYEE,
      course: {
        title: "Курс «Frontend-разработчик»",
        href: "/courses/course",
      },
      rate: 5,
      review:
        "Я очень благодарна за сотрудничество! Преподаватели очень грамотно и понятно объясняют. Много интересного и нужного материала. Много полезной информации, взятой из-за рубежа.",
    },
    {
      username: "Надежда Валюкова",
      avatar: IMAGE_EMPLOYEE,
      course: {
        title: "Курс «Frontend-разработчик»",
        href: "/courses/course",
      },
      rate: 4,
      review:
        "Я очень благодарна за сотрудничество! Преподаватели очень грамотно и понятно объясняют. Много интересного и нужного материала. Много полезной информации, взятой из-за рубежа.",
    },
    {
      username: "Надежда Валюкова",
      avatar: IMAGE_EMPLOYEE,
      course: {
        title: "Курс «Frontend-разработчик»",
        href: "/courses/course",
      },
      rate: 5,
      review:
        "Я очень благодарна за сотрудничество! Преподаватели очень грамотно и понятно объясняют. Много интересного и нужного материала. Много полезной информации, взятой из-за рубежа.",
    },
  ]
  return (
    <Section
      className="reviews container"
      title="Отзывы"
      mode="center"
      subtitle="Собрали для Вас честные мнения пользователей lumen - так Вы сможете оценить все плюсы и минусы"
    >
      <Section className="reviews__hero">
        <img
          className="reviews__image"
          src={IMAGE_REVIEWS}
          alt=""
          width={600}
        />
        <ul className="reviews__rate-list">
          {ratings.map(({ rate, description }, index) => (
            <li className="reviews__rate-list-item" key={index}>
              <span>{rate}</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="reviews__reviews">
        <ul className="reviews__reviews-list">
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </ul>
      </Section>
    </Section>
  )
}

export default Results
