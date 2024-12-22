
import featuredata from '../data/feature data'
import { nextfeatureData } from '../data/feature data';
const Features = () => {
  return (
    <div className="bg-gray-50 py-10">
      {featuredata.map((feature, index) => (
        <div
          key={feature.id}
          className={`container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 py-10 ${
            index % 2 === 0 ? "lg:flex-row-reverse " : ""
          }`}
        >
          <div className="lg:w-1/2 text-center ml-8 lg:text-left">
            <h5 className="text-indigo-500 text-sm font-bold uppercase">{feature.title}</h5>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold mt-2">{feature.header}</h2>
            <p className="text-gray-600 text-lg mt-4">{feature.paragraph}</p>
            {feature.buttonText && (
              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition duration-200">
                {feature.buttonText}
              </button>
            )}
          </div>
          <div className="lg:w-1/2 ml-8">
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-lg shadow-md mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      ))}
       <section className="py-16 px-8 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Everything you need to leverage testimonials
        </h2>
        <p className="text-gray-600 mt-4">
          We support all these features for you to collect and manage all
          testimonials. Features with the lock are only available for the paid
          plans.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {nextfeatureData.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center border rounded-lg p-6 shadow-md bg-gray-50 hover:shadow-lg transition"
          >
            <div
              className={`w-10 h-10 mb-4 rounded-full flex items-center justify-center ${
                feature.isLocked ? "bg-orange-300" : "bg-green-300"
              }`}
            >
              {feature.isLocked ? (
                <span className="text-lg font-semibold">🔒</span>
              ) : (
                <span className="text-lg font-semibold">✅</span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Features;
