import IMAGE_PYTHON from "@/assets/images/python.png"
import IMAGE_DESIGNER from "@/assets/images/designer.png"
import IMAGE_AI from "@/assets/images/ai.png"
import IMAGE_1C from "@/assets/images/1c.png"
import IMAGE_ANALYTIC from "@/assets/images/analytic.png"
import IMAGE_ACCOUNTING from "@/assets/images/accounting.png"
import IMAGE_3D from "@/assets/images/accounting.png"
import IMAGE_GRAPHIC from "@/assets/images/graphic.png"
import IMAGE_MARKETING from "@/assets/images/marketing.png"
import IMAGE_MARKETPLACE from "@/assets/images/marketplace.png"
import IMAGE_UNITY from "@/assets/images/unity.png"

const courseGroups = [
  {
    title: "Программирование",
    href: "/code",
    id: "code",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-code-xml-icon lucide-code-xml"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
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
            href: "/",
            image: IMAGE_PYTHON,
          },
          {
            title: "Веб-дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "10 месяцев",
            href: "/",
            image: IMAGE_DESIGNER,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "/",
            image: IMAGE_AI,
          },
          {
            title: "Графический дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_GRAPHIC,
          },
          {
            title: "Разработчик игр на Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "10 месяцев",
            href: "/",
            image: IMAGE_UNITY,
          },
          {
            title: "Интернет-маркетинг",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "/",
            image: IMAGE_MARKETING,
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
            href: "/",
            image: IMAGE_PYTHON,
          },
          {
            title: "Веб-дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "/",
            image: IMAGE_DESIGNER,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "/",
            image: IMAGE_AI,
          },
          {
            title: "Графический дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "10 месяцев",
            href: "/",
            image: IMAGE_GRAPHIC,
          },
          {
            title: "Разработчик игр на Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "10 месяцев",
            href: "/",
            image: IMAGE_UNITY,
          },
          {
            title: "Интернет-маркетинг",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_MARKETING,
          },
        ],
      },
    ],
  },

  {
    title: "Аналитика",
    href: "/analytic",
    id: "analytic",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chart-column-icon lucide-chart-column"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
    isActive: false,

    subCategories: [
      {
        title: "Бизнес",
        id: "buisness",
        items: [
          {
            title: "Финансирование",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "/",
            image: IMAGE_PYTHON,
          },
          {
            title: "Веб-дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_DESIGNER,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "6 месяцев",
            href: "/",
            image: IMAGE_AI,
          },
          {
            title: "Графический дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "10 месяцев",
            href: "/",
            image: IMAGE_GRAPHIC,
          },
          {
            title: "Разработчик игр на Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_UNITY,
          },
          {
            title: "Интернет-маркетинг",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_MARKETING,
          },
        ],
      },
      {
        title: "Банковское дело",
        id: "bank",
        items: [
          {
            title: "Программист JavaScript",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_PYTHON,
          },
          {
            title: "Веб-дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_DESIGNER,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_AI,
          },
          {
            title: "Графический дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_GRAPHIC,
          },
          {
            title: "Разработчик игр на Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_UNITY,
          },
          {
            title: "Интернет-маркетинг",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_MARKETING,
          },
        ],
      },
    ],
  },

  {
    title: "Игры",
    href: "/games",
    id: "games",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chart-column-icon lucide-chart-column"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
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
            href: "/",
            image: IMAGE_PYTHON,
          },
          {
            title: "Веб-дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_DESIGNER,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_AI,
          },
          {
            title: "Графический дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_GRAPHIC,
          },
          {
            title: "Разработчик игр на Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_UNITY,
          },
          {
            title: "Интернет-маркетинг",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_MARKETING,
          },
        ],
      },
      {
        title: "C++",
        id: "c-plus",
        items: [
          {
            title: "Веб-дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_DESIGNER,
          },
          {
            title: "Нейросети: полный курс",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_AI,
          },
          {
            title: "Графический дизайнер",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_GRAPHIC,
          },
          {
            title: "Разработчик игр на Unity",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_UNITY,
          },
          {
            title: "Интернет-маркетинг",
            subTitle: "Курс",
            description:
              "Глубокое изучение самого популярного языка программирования: станьте разработчиком программ или сайтов",
            duration: "9 месяцев",
            href: "/",
            image: IMAGE_MARKETING,
          },
        ],
      },
    ],
  },
]
export default courseGroups
