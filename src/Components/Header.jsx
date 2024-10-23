function Header() {
  return (
    <div className="w-full  bg-cover bg-no-repeat bg-center rounded-2xl banner-cover">
      <div className="max-w-4xl mx-auto px-5 py-40 text-center space-y-5">
        <h1 className="text-white text-3xl sm:text-5xl leading-tight sm:leading-tight font-bold ">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-gray-200 text-sm">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex gap-5 justify-center">
          <button className="btn bg-green-500 text-white border-none rounded">
            Explore Now
          </button>
          <button className="btn btn-outline text-white border-white rounded">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
