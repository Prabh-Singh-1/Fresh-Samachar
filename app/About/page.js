import React from 'react'

const page = () => {
  const journalists = [
    { image: "https://img.freepik.com/free-photo/front-view-female-journalist-taking-interview_23-2149032424.jpg", Role: "Investigative Reporter", Name: "Emily Davis" },
    { image: "https://akm-img-a-in.tosshub.com/aajtak/images/author/sudhir-chaudhary_0.jpg?size=250:250", Role: "Senior Reporter", Name: "Sudhir Chaudhary" },
    { image: "https://media.istockphoto.com/id/1394183500/photo/anchorman-reporting-live-news-in-a-city-at-night-news-coverage-by-professional-handsome.jpg?s=612x612&w=0&k=20&c=tHqMWCEEjor3hrNvY88ahdKYnjX9Zu4WxorCEYlb_r4=", Role: "Editor-in-Chief", Name: "John Doe" },
    { image: "https://akm-img-a-in.tosshub.com/aajtak/images/author/anjana-om-kashyap.jpg?size=250:250", Role: "Senior Reporter", Name: "Anjna om Kashyap" },
    { image: "https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2022-04/dsc_5207.jpeg", Role: "Political Correspondent", Name: "Sarah Lee" },
    { image: "https://static.indiatvnews.com/ins-web/images/rajat-sharma-ddca-elections-2018-1529495763.jpg", Role: "Senior Reporter", Name: "Rajat Sharma" }
  ];
  return (
    <>
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        <header className="py-3 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">Learn more about our E-newspaper</p>
        </header>

        <main className="max-w-7xl mx-auto px-6 sm:px-12 py-4">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At <span className="font-bold">E-News Daily</span>, our mission is to provide accurate, unbiased, and timely
              news to keep our readers informed about the world. We believe in empowering our community with the truth and
              promoting journalistic integrity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              Our vision is to become the most trusted and accessible source of news, fostering an informed and engaged
              global community. We aim to innovate in the digital space and set a benchmark for quality journalism.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our History</h2>
            <p className="text-lg leading-relaxed">
              Established in 2025, <span className="font-bold">E-News Daily</span> began as a small blog dedicated to tech
              news. Over the years, we expanded our coverage to include global politics, entertainment, sports, and more.
              Today, we proudly serve millions of readers worldwide.
            </p>
          </section>


          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {journalists.map((journalist, index) => (
                <div key={index} className="bg-white p-6 shadow-md rounded-md text-center">
                  <img src={journalist.image} alt={journalist.Name} className="w-24 h-24 bg-gray-600 mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-bold mb-2">{journalist.Name}</h3>
                  <p className="text-sm text-gray-600">{journalist.Role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg mb-6">
              Have questions or feedback? We'd love to hear from you. Reach out to us through the following channels:
            </p>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Email: <a href="mailto:sr.prabh.singh1313@gmail.com" className="text-blue-600">sr.prabh.singh1313@gmail.com</a></li>
              <li>Phone: <a href="tel:+919888544365" className="text-blue-600">+91 9888544365</a></li>
              <li>Address: Fresh Samachar, Airport Lane, Chandigarh</li>
            </ul>
          </section>

          <section className="bg-blue-100 p-6 rounded-md">
            <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-lg mb-4">
              Subscribe to our newsletter and never miss an update.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  )
}

export default page