import React from 'react'
import { Link } from 'react-router-dom';


function AboutUs() {
  return (

    <>
      <div className="px-4 sm:px-10" id='about'>
        <div className="min-h-[500px]">
          <div className="grid md:grid-cols-2 justify-center items-center gap-10">
            <div className="max-md:order-1">

              <h1 id='about1' className="md:text-5xl text-4xl font-bold mb-4 md:!leading-[65px]">About Trade Vista</h1>
              <h5 className="md:text-3xl text-3xl  mb-4">Connecting Wholesalers and Retailers for <br /> Quality Computer Parts.</h5>
              <p id='main_home_head' className="mt-4 text-base  text-gray-400 leading-relaxed">Trade Vista is a premier platform connecting wholesalers and retailers in the computer parts industry. Our mission is to
                streamline the supply chain, ensuring seamless
                transactions and high-quality products.At Trade Vista, our goal is to act as a bridge between wholesalers and retailers, enhancing business efficiency and productivity. We are committed to providing the best experience for our customers, with a team that continuously improves our services by adopting the latest industry trends and technologies.</p>

            </div>
            <div className="max-md:mt-12 h-full image-container">
              <img src="https://www.shutterstock.com/image-vector/computer-main-parts-simple-detailed-600nw-2171882527.jpg" alt="banner img" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-28 px-4 sm:px-10 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="md:text-center max-w-2xl mx-auto">
              <h2 className="md:text-4xl text-3xl font-bold mb-6">Our Mission</h2>
              <p id='main_home_head' className="text-base text-gray-400">Our mission is to revolutionize the computer parts market by providing an efficient, reliable, and user-friendly platform for wholesalers and retailers to connect and conduct business.</p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-14">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block" viewBox="0 0 32 32">
                  <path
                    d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                    data-original="#000000" />
                  <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                    data-original="#000000" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Customization</h3>
                <p>Tailor our product to suit your needs.</p>

              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block"
                  viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g fill="none" className="stroke-blue-600" stroke-linecap="round" stroke-linejoin="round"
                    stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                      data-original="#000000" />
                    <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                  </g>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p>Your data is protected by the latest security measures.</p>

              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block"
                  viewBox="0 0 512.001 512.001">
                  <path
                    d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                    data-original="#000000" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p>24/7 customer support for all your inquiries.</p>

              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block" viewBox="0 0 24 24">
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path
                      d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                      data-original="#000000" />
                    <path
                      d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                      data-original="#000000" />
                    <path
                      d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                      data-original="#000000" />
                  </g>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p>Experience blazing-fast performance with our product.</p>

              </div>



              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block" viewBox="0 0 32 32">
                  <path
                    d="M29 0H3C1.346 0 0 1.346 0 3v12.35a1 1 0 1 0 2 0V3c0-.552.449-1 1-1h26c.551 0 1 .448 1 1v26c0 .552-.449 1-1 1H16.65a1 1 0 1 0 0 2H29c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3z"
                    data-original="#000000" />
                  <path
                    d="M11 18H3c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm1 11c0 .552-.449 1-1 1H3c-.551 0-1-.448-1-1v-8c0-.552.449-1 1-1h8c.551 0 1 .448 1 1zm4.707-12.293L23 10.414V12a1 1 0 1 0 2 0V8c0-.536-.456-1-1-1h-4a1 1 0 1 0 0 2h1.586l-6.293 6.293a1 1 0 0 0 0 1.414c.378.378 1.024.39 1.414 0z"
                    data-original="#000000" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Scalability</h3>
                <p>Easily scale your resources to meet growing demands.</p>

              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block"
                  viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g fill="none" className="stroke-blue-600" stroke-linecap="round" stroke-linejoin="round"
                    stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                      data-original="#000000" />
                    <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                  </g>
                </svg>
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p>Your data is protected by the latest security measures.</p>

              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Our Values</h2>
            <p id='main_home_head' className="text-gray-400">Our values shape our mission to provide unparalleled service and products</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-16">
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl" viewBox="0 0 32 32">
                <path
                  d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                  data-original="#000000" />
                <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                  data-original="#000000" />
              </svg>
              <h3 className="text-xl mb-4">Customer Focus</h3>
              <p className="text-gray-400">Prioritizing customer satisfaction and needs. Creating the best experience for every customer and taking their feedback seriously.</p>

            </div>
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                  stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path
                    d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                    data-original="#000000" />
                  <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                </g>
              </svg>
              <h3 className="text-xl mb-4">Intigrity</h3>
              <p className="text-gray-400">Ensuring honesty and strong moral principles in all dealings. Being transparent and truthful with every customer and partner.</p>
            </div>
            <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl" viewBox="0 0 512.001 512.001">
                <path
                  d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                  data-original="#000000" />
              </svg>
              <h3 className="text-xl mb-4">Quality</h3>
              <p className="text-gray-400">PProviding top-notch products and services. Our aim is to consistently meet and exceed our customers' expectations.</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-28">
        <div className="md:text-center max-w-2xl mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold mb-6">Explore Our Unique Offerings</h2>
          <p>Discover a range of exclusive features designed to elevate your experience. Learn how our distinct
            offerings can redefine your journey and empower you to accomplish more.</p>
        </div>
        <div className="mt-14">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <img src="https://readymadeui.com/image-1.webp"
                className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" />
            </div>
            <div className="max-w-lg">
              <h3 className="text-xl font-semibold mb-4">Tailored Customization</h3>
              <p>Experience unparalleled customization options tailored to suit your unique needs. Our platform provides
                a wide array of features, ensuring you have the flexibility to personalize your journey.</p>
              <button type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all">
                Learn More
              </button>
            </div>
            <div className="max-md:order-1 max-w-lg">
              <h3 className="text-xl font-semibold mb-4">Optimized Performance</h3>
              <p>Unlock top-notch performance with our advanced optimization techniques. We prioritize speed,
                efficiency, and reliability to ensure a seamless experience, no matter the complexity of your tasks.</p>
              <button type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all">
                Learn More
              </button>
            </div>
            <div>
              <img src="https://readymadeui.com/contact.webp"
                className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" />
            </div>
          </div>
        </div>
      </div> */}





        <div className="mt-28  px-4 sm:px-10 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="space-y-6 bg-gray-100 rounded-md p-6 max-w-md max-md:order-1">
                <div className="flex sm:items-center max-sm:flex-col-reverse">
                  <div className="mr-3 text-black" >
                    <h4 className="text-base font-semibold">Laiba Waqar</h4>
                    <p className="mt-2">The service was amazing. I never had to wait that long for my food. The staff was
                      friendly and attentive, and the delivery was impressively prompt.</p>
                  </div>
                  <img src='https://readymadeui.com/profile_6.webp' className="w-16 h-16 rounded-full max-sm:mb-2" />
                </div>
                <div
                  className="flex sm:items-center max-sm:flex-col-reverse p-6 relative lg:left-12 bg-white shadow-[0_2px_20px_-4px_rgba(93,96,127,0.2)] rounded-md">
                  <div className="mr-3 text-black">
                    <h4 className="text-base font-semibold">Umair Ahmed</h4>
                    <p className="mt-2">The service was amazing. I never had to wait that long for my food. The staff was
                      friendly and attentive, and the delivery was impressively prompt..</p>
                  </div>
                  <img src='https://readymadeui.com/profile_6.webp' className="w-16 h-16 rounded-full max-sm:mb-2" />
                </div>
                <div className="flex sm:items-center max-sm:flex-col-reverse">
                  <div className="mr-3 text-black">
                    <h4 className="text-base font-semibold">Palwasha Qasim</h4>
                    <p className="mt-2">The service was amazing. I never had to wait that long for my food. The staff was
                      friendly and attentive, and the delivery was impressively prompt.</p>
                  </div>
                  <img src='https://readymadeui.com/profile_6.webp' className="w-16 h-16 rounded-full max-sm:mb-2" />
                </div>
              </div>
              <div>
                <div className="mb-16 max-w-2xl text-center mx-auto">
                  <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6"> Testimonials</h2>
                  <p id='main_home_head' className="text-gray-400">Trade Vista has transformed the way we do business. The platform is user-friendly and the customer support is exceptional.</p>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="mt-28">
          <div className="grid md:grid-cols-2 justify-center items-center gap-10">
            <div>
              <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Contact Information</h2>
              <p id='main_home_head' className="text-gray-400">For any inquiries, reach us at contact@tradevista.com.</p>
              <button type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-6 transition-all">
                <Link to={'/contact-us'}>Contact Us</Link>
              </button>
            </div>
            <div className="text-center">
              <img src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="Premium Benefits" className="w-full mx-auto" />
            </div>
          </div>
        </div>




      </div>
    </>
  )
}

export default AboutUs