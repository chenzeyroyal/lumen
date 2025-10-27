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
    <Section className="courses container" title={title} isHeaderHidden>
      <Button
        className="courses__filter-button courses__filter-button-- visible-mobile"
        label="Открыть фильтры"
        iconName='filter'
        extraAttrs={{ "data-js-filter-button": "display" }}
        isLabelHidden
      >
      </Button>

      <nav className="courses__navigation">
        <ul className="courses__navigation-list" data-js-section-navigation="">
          <li className="courses__navigation-list-item visible-mobile">
            <a
              className="courses__navigation-list-link"
              href="#"
              data-js-section-navigation-link=""
            >
              {title}
            </a>
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
          {courseGroups.map(({ title, href }, index) => (
            <li className="courses__navigation-list-item" key={index}>
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
      <ul className="courses__applied-filters visible-mobile">
        <li className="courses__applied-filters-item" data-js-applied-filter='category'>
          <span data-js-applied-filter-text=''></span>
                  <Button
          className="courses__applied-filters-button"
          label="Отменить фильтр"
          iconName='x'
          isLabelHidden
          extraAttrs={{ "data-js-applied-filter-button": "" }}
        />
        </li>
        <li className="courses__applied-filters-item" data-js-applied-filter='range'>
          <span data-js-applied-filter-text=''></span>
        <Button
          className="courses__applied-filters-button"
          label="Отменить фильтр"
          iconName='x'
          isLabelHidden
          extraAttrs={{ "data-js-applied-filter-button": "" }}
        />
        </li>

      </ul>
      <div className="courses__body">
        <Filters className="courses__filters" items={filteredCourseGroups()} />
        <div className="courses__cards">
          <h3 className="courses__cards-title" data-js-courses-title=""></h3>
          <ul className="courses__list">
            {filteredCourseGroups().map(({ subCategories }) =>
              subCategories.map((subCat) =>
                subCat.items.map((course, index) => (
                  <li
                    className="courses__list-item"
                    key={index}
                    data-js-course-item={JSON.stringify({
                      title: subCat.title,
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
