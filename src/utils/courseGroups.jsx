import frontendImg from "/src/assets/images/courses/frontend.png"
import designerImg from "/src/assets/images/courses/designer.png"
import aiImg from "/src/assets/images/courses/ai.png"
import graphicImg from "/src/assets/images/courses/graphic.png"
import unityImg from "/src/assets/images/courses/unity.png"
import marketingImg from "/src/assets/images/courses/marketing.png"
import pythonImg from "/src/assets/images/courses/python.png"
import accountingImg from "/src/assets/images/courses/accounting.png"
import oneCImg from "/src/assets/images/courses/1c.png"
import dataImg from "/src/assets/images/courses/data.png"

const courseGroups = [
  {
    title: "Программирование",
    href: "courses/code",
    id: "code",
    icon: "code",
    isActive: true,
    subCategories: [
      {
        title: "Фронтенд-разработка",
        id: "frontend",
        items: [
          {
            title: "Программист JavaScript",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "12 месяцев",
            href: "courses/course",
            image: frontendImg,
          },
          {
            title: "Веб-дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "10 месяцев",
            href: "courses/course",
            image: designerImg,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "courses/course",
            image: aiImg,
          },
          {
            title: "Графический дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "courses/course",
            image: graphicImg,
          },
          {
            title: "Разработчик игр на Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "10 месяцев",
            href: "courses/course",
            image: unityImg,
          },
          {
            title: "Интернет-маркетинг",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "courses/course",
            image: marketingImg,
          },
        ],
      },
      {
        title: "Бэкенд-разработка",
        id: "backend",
        items: [
          {
            title: "Программист Python",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "12 месяцев",
            href: "courses/course",
            image: pythonImg,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "courses/course",
            image: aiImg,
          },
          {
            title: "Разработчик игр на Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "10 месяцев",
            href: "courses/course",
            image: unityImg,
          },
        ],
      },
    ],
  },

  {
    title: "Аналитика",
    href: "courses/analytic",
    id: "analytic",
    icon: "analytic",
    isActive: false,
    subCategories: [
      {
        title: "Бизнес",
        id: "buisness",
        items: [
          {
            title: "Бухгалтерия",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "courses/course",
            image: accountingImg,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "courses/course",
            image: aiImg,
          },
        ],
      },
      {
        title: "Банковское дело",
        id: "bank",
        items: [
          {
            title: "Аналитик 1С",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "courses/course",
            image: oneCImg,
          },
          {
            title: "Data-аналитик",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "courses/course",
            image: dataImg,
          },
        ],
      },
    ],
  },

  {
    title: "Игры",
    href: "courses/games",
    id: "games",
    icon: "games",
    isActive: false,
    subCategories: [
      {
        title: "Unity",
        id: "unity",
        items: [
          {
            title: "Программист Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "courses/course",
            image: unityImg,
          },
          {
            title: "Веб-дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "courses/course",
            image: designerImg,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "courses/course",
            image: aiImg,
          },
        ],
      },
    ],
  },
]

export default courseGroups