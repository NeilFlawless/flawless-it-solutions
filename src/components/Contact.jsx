export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#111] text-white text-center">
      
      <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
        Contact Us
      </h2>

      <p className="text-gray-400 mb-8">
        Let’s discuss your project. We’d love to hear from you.
      </p>

      {/* ✅ FORM START */}
      <form
        action="https://formspree.io/f/xyklwwwv"
        method="POST"
        className="flex flex-col items-center gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 w-64 text-black rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 w-64 text-black rounded"
          required
        />

        {/* 🔥 NEW MESSAGE BOX */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="p-3 w-64 text-black rounded"
          required
        />

        <button className="px-6 py-3 bg-primary text-black font-semibold rounded hover:opacity-90 transition">
          Send Message
        </button>
      </form>
      {/* ✅ FORM END */}
    </section>
  );
}
