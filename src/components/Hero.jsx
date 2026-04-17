export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6
      bg-gradient-to-br from-[#1e1e1e] via-[#3a0ca3] to-[#7209b7]">

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Flawless IT Solutions
      </h1>

      <p className="text-lg text-gray-300 max-w-xl">
        Digital transformation, cloud solutions, and scalable IT services.
      </p>

      <button className="mt-8 px-6 py-3 bg-secondary text-black font-semibold rounded">
        Get Started
      </button>
    </section>
  );
}
