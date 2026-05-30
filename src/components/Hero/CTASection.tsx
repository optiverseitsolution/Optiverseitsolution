export default function CTASection() {
  return (
    <section className="w-full bg-yellow-600 py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Your Partner in Digital Innovation
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
            Optiverse I.T. Solution is a premier digital solutions provider
            dedicated for helping businesses to achieve success digitally.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <p className="text-lg font-semibold text-black">
            Connect with us.
          </p>

          <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Call Now...
          </button>
        </div>

      </div>
    </section>
  );
}