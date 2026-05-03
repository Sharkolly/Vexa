import { experience_data } from "../../data/experience";

const Experience = () => {
  return (
    <section className="py-16 md:py-28 px-6 md:px-16 max-w-[1440px] mx-auto">
      <h3 className="font-semibold text-3xl text-on-surface text-center mb-16">
        The Vexa Experience
      </h3>
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 gap-6 w-full">
        {experience_data.map((experience) => (
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-1 text-primary-container mb-6">
              <span className="material-symbols-outlined text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined text-[20px]">
                star
              </span>
              <span className="material-symbols-outlined text-[20px]">
                star
              </span>
            </div>
            <p className="font-body-lg text-on-surface mb-8 italic">
              {experience.review}
            </p>
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                data-alt={experience.alt}
                src={experience.image}
              />
              <div className="text-left">
                <p className="font-label-md text-on-surface">
                  {experience.name}
                </p>
                <p className="font-label-sm text-outline">
                  {experience.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
