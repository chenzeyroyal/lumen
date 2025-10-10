import "./Courses.scss"
import CourseCard from "@/components/CourseCard"
import Section from "@/layouts/Section"
import courseGroups from "@/utils/courseGroups"
import Button from "@/components/Button"
import Filters from "@/components/Filters"

const Courses = (props) => {
  const { title, id } = props

  const filteredCourseGroups = () => {
    if (id === "all") return courseGroups
    return courseGroups.filter((group) => group.id === id)
  }

  return (
    <Section className="courses container" title={title}>
      <Button
        className="display-button display-button--filters visible-mobile"
        label="Фильтры"
        extraAttrs={{ "data-js-display-button": "filters" }}
        isLabelHidden
      >
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
          class="lucide lucide-list-filter-plus-icon lucide-list-filter-plus"
        >
          <path d="M12 5H2" />
          <path d="M6 12h12" />
          <path d="M9 19h6" />
          <path d="M16 5h6" />
          <path d="M19 8V2" />
        </svg>
      </Button>
      <nav className="courses__navigation" data-js-popup="navigation">
        <ul className="courses__navigation-list" data-js-section-navigation="">
          <li className="courses__navigation-list-item courses__navigation-list-item--special is-active visible-mobile">
            {title}
          </li>
          <li className="courses__navigation-list-item">
            <a
              className="courses__navigation-list-link"
              href="/courses"
              data-js-section-navigation-link=""
            >
              Все курсы
            </a>
          </li>
          {courseGroups.map(({ title, href }) => (
            <li className="courses__navigation-list-item">
              <a
                className="courses__navigation-list-link"
                href={href}
                data-js-section-navigation-link=""
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="courses__body">
        <Filters className="courses__filters" items={filteredCourseGroups()} />
        <div className="courses__cards">
          <h3 className="courses__cards-title" data-js-courses-title=""></h3>
          <ul className="courses__list">
            {filteredCourseGroups().map(({ subCategories }) =>
              subCategories.map((subCat) =>
                subCat.items.map((course) => (
                  <li
                    className="courses__list-item"
                    data-js-course-item={JSON.stringify({
                      id: subCat.id,
                      duration: course.duration,
                    })}
                  >
                    <CourseCard {...course} />
                  </li>
                ))
              )
            )}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Courses
