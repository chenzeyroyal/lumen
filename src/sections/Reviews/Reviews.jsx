import "./Reviews.scss"
import Section from "@/layouts/Section"
import ReviewCard from "@/components/ReviewCard"
import { Image } from "minista"

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
      avatar: 'src/assets/images/people/employee.jpg',
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
            avatar: 'src/assets/images/people/employee.jpg',

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
           avatar: 'src/assets/images/people/employee.jpg',

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
            avatar: 'src/assets/images/people/employee.jpg',

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
            avatar: 'src/assets/images/people/employee.jpg',

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
        <Image
          className="reviews__image"
          src='/src/assets/images/reviews/reviews.png'
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
