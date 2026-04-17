export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0d0d0d] text-white text-center">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>

      <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
        Flawless IT Solutions is a forward-thinking technology company focused on
        delivering high-quality digital solutions. We help businesses transform,
        scale, and innovate using cutting-edge technologies and proven strategies.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold text-primary">10+</h3>
          <p className="text-gray-400">Years Experience</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">50+</h3>
          <p className="text-gray-400">Projects Delivered</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">100%</h3>
          <p className="text-gray-400">Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
