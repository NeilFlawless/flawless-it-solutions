import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formspree.io/f/xyklwwwv",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#111] text-white text-center">
      
      <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
        Contact Us
      </h2>

      <p className="text-gray-400 mb-8">
        Let’s discuss your project. We’d love to hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
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

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="p-3 w-64 text-black rounded"
          required
        />

        <button
          disabled={status === "sending"}
          className="px-6 py-3 bg-primary text-black font-semibold rounded hover:opacity-90 transition"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* ✅ SUCCESS MESSAGE */}
      {status === "success" && (
        <p className="mt-4 text-green-400 transition-opacity duration-500">
          ✅ Message sent successfully!
        </p>
      )}

      {/* ❌ ERROR MESSAGE */}
      {status === "error" && (
        <p className="mt-4 text-red-400">
          ❌ Something went wrong. Try again.
        </p>
      )}
    </section>
  );
}
