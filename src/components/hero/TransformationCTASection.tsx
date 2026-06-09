export default function TransformationCTASection() {
  return (
    <section className="bg-[#bf7a00] py-10 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Start Your Transformation from Today
            </h2>

            <p className="mt-3 text-lg font-medium text-white/95 sm:text-xl">
              Ready to Write Your Success Story ?
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-2xl border-2 border-white bg-transparent px-8 py-4 text-lg font-extrabold text-white transition hover:bg-white hover:text-[#bf7a00]">
                Quick Chat
              </button>

              <button className="rounded-2xl bg-green-600 px-8 py-4 text-lg font-extrabold text-white shadow-[0_10px_24px_rgba(22,163,74,0.22)] transition hover:bg-green-700">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="text-left lg:text-right">
            <p className="text-xl leading-8 text-white/95">
              Transformed your business with our expertise.
            </p>
            <p className="mt-2 text-xl leading-8 text-white/95">
              Let&apos;s discuss your vision.
            </p>

            <h3 className="mt-6 text-2xl font-black leading-tight text-white whitespace-nowrap drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] sm:text-3xl lg:text-4xl xl:text-5xl">
  Your Success <span className="text-green-500">Our Mission</span>
</h3>
          </div>
        </div>
      </div>
    </section>
  );
}