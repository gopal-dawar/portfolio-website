import Sphere from "../components/Sphere";

const Home = () => {
  return (
    <section className="min-h-screen bg-black flex items-center px-6 md:px-20">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Sphere */}

        {/* Right Content */}
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-orange-500">Gopal</span>, <br />
            I build modern web <br />
            applications that work
            <span className="text-orange-500">.</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            I’m a Java Full Stack Developer building scalable backend systems
            and responsive frontend applications.
          </p>

          <button className="mt-8 bg-orange-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-orange-400 transition">
            Let’s Talk
          </button>
        </div>
        <div className="hidden md:flex justify-center">
          <Sphere />
        </div>
      </div>
    </section>
  );
};

export default Home;
