import "./Form.scss"
import Field from "./components/Field"
import Checkbox from "./components/Checkbox"
import Button from "../Button"
import classNames from "classnames"
import Select from "./components/Select"

const Form = (props) => {
  const {
    className,
    title,
    subtitle,
    buttonLabel,
    hasTextArea = false,
    mode = "column",
  } = props

  return (
    <form className={classNames(className, "form", `form--${mode}`)} method="">
      {title && (
        <header className="form__header">
          <h3 className="form__title">{title}</h3>
          {subtitle && <p className="form__subtitle">{subtitle}</p>}
        </header>
      )}
      <fieldset>
        <Field
          className="form__field"
          label="Имя"
          isLabelHidden
          placeholder="Имя"
          isRequired
        />
        <Field
          className="form__field"
          label="Email"
          type="email"
          isLabelHidden
          placeholder="E-mail"
          isRequired
        />
        <Field
          className="form__field"
          label="Phone Number"
          isLabelHidden
          placeholder="(999) 999-99-99"
          inputMode="tel"
          mask="(000) 000-00-00"
          renderBefore={(buttonClassName) => (
            <Select
              buttonClassName={buttonClassName}
              label="Phone number prefix"
              options={[
                { value: "+7", isSelected: true },
                { value: "+1" },
                { value: "+2" },
                { value: "+3" },
              ]}
            />
          )}
        />
        {hasTextArea && (
          <Field
            className="contacts__form-cell"
            label="Ваш вопрос"
            type="textarea"
            placeholder="Привет! У меня есть вопрос..."
            isRequired
            isLabelHidden
          />
        )}
        <Checkbox
          className="form__checkbox"
          label="Я согласен на обработку персональных данных"
          isRequired
        />
        <Button
          className="form__submit-button"
          label={buttonLabel}
          type="submit"
          isAccent
        />
      </fieldset>
    </form>
  )
}

export default Form
