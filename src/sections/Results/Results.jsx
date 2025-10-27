import "./Results.scss"

import Section from "@/layouts/Section"
import { Image } from "minista"
import Button from "@/components/Button"

const Results = () => {
  const charts = [
    {
      title: "Программирование",
      value: "34,4%",
    },
    {
      title: "Дизайн",
      value: "27,7%",
    },
    {
      title: "Маркетинг",
      value: "21,5%",
    },
  ]

  return (
    <Section
      className="results container"
      title="Результаты"
      subtitle="Ознакомьтесь с результатами деятельности нашей компании"
    >
      <section className="results__hero">
        <div className="results__hero-info">
          <div>
            <h3 className="results__hero-title">106 000+</h3>
            <p className="results__hero-subtitle">
              человек нашли работу после обучения в lumen
            </p>
          </div>
          <Button
            className="results__button"
            label="Посмотреть отзывы"
            href="/reviews"
            isAccent
          />
        </div>
        <Image
          className="results__hero-image"
          src="/src/assets/images/frontend.png"
          alt=""
        />
      </section>
      <section className="results__researches">
        <div>
          <h4 className="results__researches-title">
            Данные исследования кластера EdTech от РАЭК
          </h4>
          <p>Трудоустройство выпускников цифровых платформ</p>
          <Button
            className="results__researches-button"
            label="Посмотреть отчёт"
            isAccent
          />
        </div>
        <div className="results__researches-info">
          <h4 className="results__researches-info-title">
            Более 170 предложения о сотрудничестве в месяц
          </h4>
          <p>получают пользователи lumen от компаний-работодателей.</p>

          <ul className="results__researches-chart-list">
            {charts.map(({ title, value }, index) => (
              <li className="results__researches-chart-list-item" key={index}>
                <span>{value}</span>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Section>
  )
}

export default Results
