const LandingPage = () => {
  return (
       <section className="relative min-h-150 md:h-217.5 w-full overflow-hidden bg-surface-container-lowest pb-20">
            <div className="absolute inset-0 z-0">
              <img
                alt="Premium Tech and Fashion"
                className="w-full h-full object-cover"
                data-alt="A cinematic, high-fashion wide shot featuring premium tech gadgets like minimalist metallic headphones and a sleek smartphone resting on high-end silk fabric. The lighting is dramatic and moody, with cool blue and deep indigo shadows highlighting the crisp textures of the tech and the soft sheen of the fashion material. The aesthetic is ultra-modern and corporate, reflecting a luxurious e-commerce environment."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5-YybHnrzLcYNjR8-NZzb3Jp6yLQX4CfGbpSfE3H2NhsjJvYPEBWrP0_ksmOzss8nZzXArpPBUkYNCUZmTTzghlE49wPi0KKTrdtPRiBj6gu4JA8qA2mDLjftxEpB7hkWfE2Pzq8BhOrR_nc5scQPNyUz5ZVZ-Ri_04flCk1k2JWd8fs4bd5XvUT-ZFRxaF__r4TCoFzNi_tqjF0L2hR0lmek9aepA-nR8FS74Bn_mzFarTvYzHn0Ooqe3De7k70AGxIepjSGSbA"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-cente mt-50  h-full px-6 md:px-16 max-w-360 mx-auto">
              <span className="font-sm text-blue-900  tracking-[0.3em] uppercase mb-4">
                Summer Collection 2024
              </span>
              <h2 className="font-display-xl text-5xl max-md:text-4xl md:text-display-xl font-extrabold mb-6 max-w-2xl leading-[1.1]">
                The Convergence of{" "}
                <span className="text-nav-blue-active italic">Precision</span> &amp;
                Style
              </h2>
              <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-lg mb-10">
                Curated excellence for the modern professional. Discover tech
                that performs and fashion that defines the future.
              </p>
              <div className="flex gap-4 max-md:flex-col">
                <button className="px-8 py-4 bg-nav-blue-active cursor-pointer text-white font-label-md rounded-lg shadow-xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 font-semibold">
                  Shop Now
                </button>
                <button className="px-8 py-4 bg-white cursor-pointer font-label-md rounded-lg hover:bg-surface-container-low transition-all active:scale-95 font-semibold">
                  Explore Categories
                </button>
              </div>
            </div>
          </section>

  )
}

export default LandingPage
