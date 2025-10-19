import "./Contacts.scss"

import Form from "@/components/Form"
import Section from "@/layouts/Section"
import Accordion from "@/components/Accordion"

const Contacts = () => {
  const links = [
    {
      title: "hello@lumen.ru",
      subtitle:
        "Общие вопросы и вопросы по учебному процессу, если вы уже проходите курс",
      href: "mailto:hello@lumen.ru",
    },
    {
      title: "pr@lumen.ru",
      subtitle: "Пресс-служба",
      href: "mailto:pr@lumen.ru",
    },
    {
      title: "8 (800)-800-80-80",
      subtitle: "Вопросы по покупке, оплате и содержанию курсов",
      href: "tel:8(800)-800-80-80",
    },
    {
      title: "15647, г. Москва, Тверская улица, д.6, строение 20",
      subtitle: "Почтовый адрес",
      href: "",
    },
  ]
  const accordionItems = [
    {
      title: "Что будет, если я пропущу занятие?",
      description:
        "В конце каждого урока мы выкладываем запись урока и все материалы к нему в облачное хранилище. Вы можете ознакомиться с файлами в любой момент и ничего не пропустите!",
    },
    {
      title: "Как я могу связаться с куратором?",
      description:
        "При прохождении нашего курса куратор даёт все необходимые контакты для связи. Вы можете связаться с ним с 09:00 до 17:00 по Московскому времени.",
    },
    {
      title: "Могу ли я оформить рассрочку на курс?",
      description: "Да, мы предоставляем рассрочку от банка.",
    },
  ]

  return (
    <Section
      className="contacts container"
      title="Контакты"
      subtitle="Чтобы всегда был способ связаться с нами"
    >
      <ul className="contacts__list">
        {links.map(({ title, subtitle, href }, index) => (
          <li className="contacts__list-item" key={index}>
            {href ? (
              <a className="contacts__list-link" href={href}>
                {title}
              </a>
            ) : (
              <span className="contacts__list-title">{title}</span>
            )}
            <p className="contacts__list-subtitle">{subtitle}</p>
          </li>
        ))}
      </ul>
      <section className="contacts__questions">
        <h3>Часто задаваемые вопросы</h3>
        {accordionItems.map((item) => (
          <Accordion name="questions" {...item}>
            <span>{item.description}</span>
          </Accordion>
        ))}
      </section>
      <Form
        className="contacts__form"
        title="Свяжитесь с нами"
        subtitle="Вы можете написать нам по любому интересущему Вас вопросу: от обучения до сотрудничества"
        mode="row"
        buttonLabel="Отправить"
      />
    </Section>
  )
}

export default Contacts
