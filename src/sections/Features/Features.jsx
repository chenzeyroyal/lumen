import "./Features.scss"
import Section from "@/layouts/Section"
import Tabs from "@/components/Tabs"
import featuresGroups from "./featuresGroups"
import CourseCard from "@/components/CourseCard"

const Features = () => {
  const tabsTitle = "features-tabs"

  return (
    <Section
      className="features container"
      title="Программы"
      subtitle="Выберите лучшее для себя. Если не можете определиться - мы поможем"
    >
      <Tabs
        className="features__tabs"
        title={tabsTitle}
        items={featuresGroups.map((featureGroup) => ({
          title: featureGroup.title,
          isActive: featureGroup.isActive,
          children: (
            <ul className="features__list">
              {featureGroup.items.map((feature, index) => (
                <li className="features__list-item">
                  <CourseCard {...feature} key={index} />
                </li>
              ))}
            </ul>
          ),
        }))}
      />
    </Section>
  )
}

export default Features
