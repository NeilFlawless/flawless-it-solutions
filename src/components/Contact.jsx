export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#111] text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

      <p className="text-gray-400 mb-8">
        Let’s discuss your project. We’d love to hear from you.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 w-64 text-black rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 w-64 text-black rounded"
        />
        <button className="px-6 py-3 bg-primary text-black font-semibold rounded">
          Send Message
        </button>
      </div>
    </section>
  );
}
