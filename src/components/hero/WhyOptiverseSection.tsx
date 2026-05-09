import topIllustration from "../../assets/section/bottom.png";
import bottomIllustration from "../../assets/section/top.png";
import wave from "../../assets/section/wavebg.png";

export default function WhyOptiverseSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-14 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        {/* Top Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2A7A] sm:text-4xl lg:text-5xl">
            Why Optiverse IT Solution
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base">
            Delivering quality tech solutions &amp; growth opportunities in Nepal.
            Digital services that empower your business for tomorrow.
          </p>
        </div>

        {/* First Row: LEFT TEXT / RIGHT IMAGE */}
        <div className="mt-10 grid items-center gap-8 lg:mt-1 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-1 max-w-2xl">
            <h3 className="inline-block px-0 py-2 text-2xl font-extrabold text-[#0B2A7A] sm:text-3xl lg:px-4">
              Where Innovation Meets Impact!
            </h3>

            <div className="mt-5 space-y-5 text-justify text-sm leading-8 text-gray-800 sm:text-base">
              <p>
                As a leading IT solutions provider in Nepal, we specialize in
                delivering custom web development, innovative branding, digital
                marketing, and video production services, all designed to drive
                growth, engagement, and measurable results.
              </p>

              <p>
                We craft digital experiences that help your business grow and
                succeed in the ever-evolving online world. From dynamic and
                custom web development to creative branding, video storytelling,
                and data-driven digital marketing, we provide end-to-end
                solutions tailored to your unique business goals.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[520px]">
              <img
                src={topIllustration}
                alt="Optiverse team collaboration"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Wave */}
      <div
        className="pointer-events-none absolute left-1/2 top-[40%] z-0 h-[190px] w-[150%] -translate-x-1/2 bg-cover bg-center bg-no-repeat sm:h-[300px] sm:w-[130%] md:h-[360px] lg:top-[41%] lg:h-[420px] lg:w-full"
        style={{
          backgroundImage: `url(${wave})`,
          transform: "translateX(-50%) rotate(180deg)",
        }}
      />

      <div className="relative z-10 mx-auto mt-8 max-w-7xl px-4 pb-6 sm:mt-12 sm:px-6 lg:px-8 lg:pb-10">
        {/* Second Row: LEFT IMAGE / RIGHT TEXT */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Image */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-[330px] sm:max-w-[390px] lg:max-w-[430px]">
              <img
                src={bottomIllustration}
                alt="Optiverse digital partnership"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-2 max-w-3xl">
            <h3 className="text-center text-3xl font-extrabold leading-tight text-[#0B2A7A] sm:text-4xl lg:text-left">
              Your best choice for
              <br />
              Technology and Digital Partner
            </h3>

            <p className="mt-4 text-center text-sm font-medium text-green-700 sm:text-base lg:text-left">
              Building Long-Term Partnerships Through Reliable Technology,
              Collaboration and Success.
            </p>

            <div className="mt-8 space-y-6 text-justify text-sm leading-8 text-gray-800 sm:text-base">
              <p>
                Our approach goes beyond simply building products, we focus on
                creating value through innovation that aligns with your business
                goals. We are fully committed to understanding your challenges
                and transforming them into opportunities for growth and success.
                Whether you require highly skilled professionals to seamlessly
                integrate with your team or need end-to-end project execution,
                we ensure excellence at every step. Our team is carefully
                curated not only for technical expertise but also for
                collaboration, adaptability, and a client-first mindset.
              </p>

              <p>
                Our focus is not just on building systems, but on understanding
                your challenges and turning them into opportunities for growth.
                When you entrust us with your project, we take ownership with
                accountability and precision—delivering results on time, without
                compromise. We believe in building long-term partnerships rooted
                in trust, transparency, and measurable outcomes.
              </p>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-700">
                Work with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}