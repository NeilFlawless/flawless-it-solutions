import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-black">

      {/* 🔥 Particles */}
      <ParticlesBackground />

      <h1 className="text-5xl md:text-6xl font-bold mb-6 z-10">
        Flawless IT Solutions
      </h1>

      <p className="text-lg text-gray-300 max-w-xl z-10">
        Digital transformation, cloud solutions, and scalable IT services.
      </p>

      <button className="mt-8 px-6 py-3 bg-secondary text-black font-semibold rounded z-10">
        Get Started
      </button>
    </section>
  );
}
