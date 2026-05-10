const Collections = () => {
  return (
           <section className="py-20 md:py-24 px-6 md:px-16 max-w-360 mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h3 className="font-semibold text-4xl">
                  Curated Collections
                </h3>
                <p className="text-md mt-2">
                  Browse our exclusive departments.
                </p>
              </div>
              <button className="font-label-md text-sm flex items-center gap-2 hover:underline">
                View All{" "}
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div> 

            
            <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-2 gap-6 ">
              
              <div className="col-span-8 row-span-1 group relative overflow-hidden rounded-xl bg-slate-900">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  data-alt="A high-tech workspace featuring a minimalist mechanical keyboard and high-end studio monitors in a dimly lit, professional studio. The color palette is dominated by deep blues and slate grays, with subtle indigo accent lighting that gives the scene a modern corporate and luxury tech aesthetic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQL7dHBgXpgSmMikVNG2f-R1qSzl0wEnIb23nr5DVwfi8ZuV8suyeyW7XD7US28Sd-w5Z8DENb4W414hzhwQGiN4EHZywtpNIFqV-CrPn9SVCqeUbJ7Mq8xZ0cIjAlsdrJSNJu-uJXUaqPpQ-kJ65m6x86e_jNLIUmZdMl4kO14my8j4tiNTulKhNSF9IUyYeNtziiZFJUxFBPZtIfO5i7jGcsMM1aAMGRyK43oIcr7WRRaQrFBWQmTVb4Yy051QfF0eeYd5zHXYs"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <span
                    className="material-symbols-outlined text-white mb-4"
                    data-icon="smart_toy"
                  >
                    smart_toy
                  </span>
                  <h4 className="font-headline-md text-white">Tech</h4>
                  <p className="text-white/70 font-body-md">
                    Precision engineered essentials.
                  </p>
                </div>
              </div>

              <div className="col-span-4 row-span-2 group relative overflow-hidden rounded-xl bg-slate-900">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  data-alt="An editorial fashion shot of a model wearing high-end designer streetwear in a minimalist architectural setting with clean concrete lines. The lighting is bright and natural, using a palette of crisp whites, neutral beiges, and deep indigo accents to create a sophisticated, high-end e-commerce mood."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT-cVRl0jK0gx90ylC09PaO54K1vkKTFPi3oLCgdNtog0VnPqes9hnLC6n1qkjoMNUVtBhCKV4PcxPSM-SwkwTyWDg5eiBiKjjN8sgsklhBXacBo5ZWkiPf0RWEcemxvvfaKSJeq5YOIutrZwk_cGDzKPtiiBBjsAujWi8tA-iDhWROWuh1gxuuPpmeIFYhxGrGku0PztXexUGGgsd_VVIZGHiB1XMP3JW1ge7LuD_nZih6wJZKYGh3_6lVcUyB7T_NzIThaAqG14"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <span
                    className="material-symbols-outlined text-white mb-4"
                    data-icon="checkroom"
                  >
                    checkroom
                  </span>
                  <h4 className="font-headline-md text-white">Fashion</h4>
                  <p className="text-white/70 font-body-md">
                    Editorial styles for the bold.
                  </p>
                </div>
              </div>

              <div className="col-span-3 row-span-1 group relative overflow-hidden rounded-xl bg-slate-900">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  data-alt="Ultra-luxury designer sneakers presented in a gallery-style display case with soft ambient spotlighting. The textures of the premium leather and technical materials are highlighted against a clean, minimalist off-white background with subtle indigo shadows that align with a high-end e-commerce branding."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVIsifrNDZuHHH1vT2mNZkCi_R2yF4BJykIp5PLMqmV4_daM6EoG2nYCBay2Lli4FR0jYFYKdTsazDkYco9YS9SEYpJF3WoFyTT_oLEq1V4RPPQBOUGyj3ppsBKcP5ZKuumpwcRhVsxyAQOiB40O8sfrpe3SgB4tKUbi9pQVxQjVXxXQGb-B00uGDTE7PmJ8-awf1El_Ii2i76onSNJhQBCwYMY3ni0-4n-FdaQWVCEGNmX2PCtYtDyfeq9XZN9gUY7TqxYV2Sjkw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <span
                    className="material-symbols-outlined text-white mb-4"
                    data-icon="steps"
                  >
                    steps
                  </span>
                  <h4 className="font-headline-md text-white text-[20px]">
                    Shoes
                  </h4>
                </div>
              </div>

              <div className="col-span-3 row-span-1 group relative overflow-hidden rounded-xl bg-slate-900">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  data-alt="A close-up of a sleek, modern electric luxury vehicle's interior cockpit, featuring high-resolution digital displays and premium carbon fiber finishes. The mood is futuristic and expensive, using a color palette of deep blacks and vibrant electric indigo highlights in a minimalist, corporate style."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq6xBFPQrIG9N6Y_2h-ttL4OeIIV-fAQTcLPMerJaZBtekjKHs2hPMe1e-Oy2AvrkctKUfTHQuAews-5MYWfXaOwPGxd179pZM8EkxxF7UzgXBWRjtC0ASTBtAJEwWLOhPwXl36x_rhS00psiHY-lRjuwtH4sDxyNP3od32iESr9teSwqpDYdVP6c1C1qtSeoxTT9U1v8wwta2r75yHa1F6cjJF2sCFI-0uMGcp16S1fQec_7tRH0B_j91Wv9Qp_XVJ3I8RE1GSqM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <span
                    className="material-symbols-outlined text-white mb-4"
                    data-icon="directions_car"
                  >
                    directions_car
                  </span>
                  <h4 className="font-headline-md text-white text-[20px]">
                    Cars
                  </h4>
                </div>
              </div>

              <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-xl bg-indigo-600">
                <div className="absolute inset-0 bg-primary/20 p-8 flex flex-col justify-end">
                  <span
                    className="material-symbols-outlined text-white mb-4 text-4xl"
                    data-icon="build"
                  >
                    build
                  </span>
                  <h4 className="font-headline-md text-white text-[20px]">
                    Services
                  </h4>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Collections
