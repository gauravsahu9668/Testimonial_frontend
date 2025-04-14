import CodeComponent from "./CodeComponent"
const Main = () => {
  return (
  <main className="pt-16 bg-zinc-900">
  {/* Hero Section */}
  <section className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Get reviews from your customers with ease <span className="text-emerald-400">reviewCraft</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Collecting and managing reviews is hard, we get it! So we built reviewCraft. In minutes, you can collect text and video reviews from your customers and add to your websites.
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Get Started
          </button>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
            alt="Developer workspace"
            className="rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Features Section */}
  <section className="py-20 px-4 bg-black/30">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-[50%] rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300">
          <CodeComponent></CodeComponent>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Share Text & Video Reviews <span className="text-emerald-400">Instantly</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
          Easily embed an iFrame on your website to showcase both text and video reviews — seamless, customizable, and ready in seconds
          </p>
          <button className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* Integration Section */}
  <section className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Craft. Preview. <span className="text-emerald-400">Create</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
          Preview every part of your testimonial experience in real time — from the review collection page to the thank you screen and notification messages — so you always know exactly what your customers will see.
          </p>
          <button className="bg-black/40 text-white hover:bg-black/60 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            View Integrations
          </button>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974"
            alt="Integration visualization"
            className="rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  </section>
  </main>
  )
}

export default Main