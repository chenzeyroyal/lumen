import "./Courses.scss";
import CourseCard from "@/components/CourseCard";
import Section from "@/layouts/Section";
import courseGroups from "@/utils/courseGroups";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Button from "@/components/Button";


const Courses = (props) => {
  const { title, id } = props;

  // slider params (оставляем ваш набор)
  const sliderParams = {
    slidesPerView: 3.6,
    slidesPerGroup: 3,
    spaceBetween: 20,
    breakpoints: {
      360: { slidesPerView: 1.7, slidesPerGroup: 1, spaceBetween: 10 },
      390: { slidesPerView: 1.7, slidesPerGroup: 1, spaceBetween: 10 },
      430: { slidesPerView: 1.9, slidesPerGroup: 1, spaceBetween: 10 },
      768: { slidesPerView: 3.6, slidesPerGroup: 3, spaceBetween: 10 },
      1024: { slidesPerView: 4.2, slidesPerGroup: 4, spaceBetween: 10 },
      1280: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
    },
  };

  // Вычисляем общий min/max длительности (в месяцах) из данных
  const allDurations = courseGroups
    .flatMap((g) => g.subCategories.flatMap((s) => s.items.map((i) => {
      const m = (i.duration || "").match(/(\d+)/);
      return m ? Number(m[1]) : null;
    })))
    .filter(Boolean);

  const globalMinDuration = allDurations.length ? Math.min(...allDurations) : 0;
  const globalMaxDuration = allDurations.length ? Math.max(...allDurations) : 24;

  // helper: render slide wrappers with data attributes
  const renderCourseSlides = (group, subCat) =>
    subCat.items.map((course, idx) => {
      const durationNumber = parseInt((course.duration || "").match(/(\d+)/)?.[0] || "0", 10);
      return (
        <div
          className="courses__slide"
          key={`${group.id}__${subCat.id}__${idx}`}
          data-js-course-item=""
          data-duration={durationNumber}
          data-subcategory={subCat.id}
          data-subcategory-title={subCat.title}
          data-group={group.id}
        >
          <CourseCard {...course} />
        </div>
      );
    });

  // фильтры отображаем всегда — в контейнере .courses__inner
  return (
    <Section className="courses container">
      <div className="courses__inner" data-js-courses="">
        {/* NAV (ваш существующий код) */}
        <nav
          className="courses__navigation"
          data-js-section-navigation=""
          data-js-display-container=""
        >
          <Button
            className="display-button visible-mobile"
            label={title}
            extraAttrs={{ "data-js-display-button": "" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down-icon lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Button>
          <div className="courses__wrapper" data-js-dropdown="">
            <ul className="courses__navigation-list">
              <li className="courses__navigation-list-item">
                <a
                  className="courses__navigation-list-link"
                  href="/courses"
                  data-js-section-navigation-link
                >
                  Все курсы
                </a>
              </li>
              {courseGroups.map(({ title, href }) => (
                <li className="courses__navigation-list-item" key={href}>
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
          </div>
        </nav>

        {/* ===== Панель фильтров ===== */}
        <div className="courses__filters" data-js-courses-filters="">
          <div className="filters__subcategories" data-js-subcategory-filters=""></div>

          <div className="filters__period" data-js-period-filter="">
            <label className="filters__period-label">
              Длительность:
              <span className="filters__period-value" data-js-period-value="">
                {globalMinDuration} — {globalMaxDuration} мес.
              </span>
            </label>

            <div className="filters__period-range">
              {/* двойной range input (min/max). Значения по умолчанию — глобальные min/max */}
              <input
                type="range"
                data-js-range-min=""
                min={globalMinDuration}
                max={globalMaxDuration}
                defaultValue={globalMinDuration}
                aria-label="Минимальная длительность курса в месяцах"
              />
              <input
                type="range"
                data-js-range-max=""
                min={globalMinDuration}
                max={globalMaxDuration}
                defaultValue={globalMaxDuration}
                aria-label="Максимальная длительность курса в месяцах"
              />
            </div>
          </div>
        </div>

        {/* ===== Секции курсов (остальная часть — слегка изменена: оборачиваем Slider в wrapper с data-js-slider-root) ===== */}
        {id === "all" &&
          courseGroups.map((group) => (
            <Section
              className="courses__categories"
              title={group.title}
              mode="inner"
              key={group.id}
              actions={
                <SliderNavigation
                  className="hidden-tablet"
                  title={group.title}
                  id={group.id}
                  isAccent
                />
              }
            >
              {/* обёртка корня слайдера — чтобы скрипт мог найти слайдер и попытаться обновить */}
              <div className="courses__slider-root" data-js-slider-root={group.id}>
                <Slider
                  navigationTargetElementId={group.id}
                  sliderParams={sliderParams}
                  children={group.subCategories.flatMap((subCat) =>
                    renderCourseSlides(group, subCat)
                  )}
                />
              </div>
            </Section>
          ))}

        {id != "all" &&
          courseGroups
            .filter((g) => g.id === id)
            .flatMap((g) =>
              g.subCategories.map((subCat) => (
                <Section
                  className="courses__categories"
                  title={subCat.title}
                  mode="inner"
                  key={subCat.id}
                  actions={
                    <SliderNavigation
                      className="hidden-tablet"
                      title={subCat.title}
                      id={subCat.id}
                      isAccent
                    />
                  }
                >
                  <div className="courses__slider-root" data-js-slider-root={subCat.id}>
                    <Slider
                      navigationTargetElementId={subCat.id}
                      children={renderCourseSlides(g, subCat)}
                      sliderParams={sliderParams}
                    />
                  </div>
                </Section>
              ))
            )}
      </div>
    </Section>
  );
};

export default Courses