export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, fast, and scalable web applications built using the latest technologies.",
    },
    {
      title: "Cloud Solutions",
      desc: "Deploy, scale, and manage applications securely on AWS, Azure, and GCP.",
    },
    {
      title: "IT Consulting",
      desc: "Expert guidance to optimize your IT infrastructure and business processes.",
    },
    {
      title: "Automation",
      desc: "Streamline workflows and improve efficiency with smart automation solutions.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#111] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-[#1e1e1e] border border-gray-800 hover:border-primary transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">
              {s.title}
            </h3>
            <p className="text-gray-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
