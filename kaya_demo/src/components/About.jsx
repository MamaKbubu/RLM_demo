import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Growing Your Money Beyond Borders</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.rlm} alt="" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'> At Kayalako Properties, we are passionate about empowering individuals with financial knowledge and real estate investment strategies. Our mission is to educate people on Real-Life Monopoly—helping you navigate the world of property ownership, investments, and wealth-building through strategic decision-making.

            Beginner Course: Your First Step to Financial Freedom
            Our beginner course is designed for anyone looking to grow and invest their money wisely in real estate. This 100% online program is structured to provide you with practical insights into property investment, covering key topics such as:

            ✅ Understanding the basics of property investment
            ✅ How to identify profitable real estate opportunities
            ✅ Strategies for building long-term wealth
            ✅ Risk management in property investing
            ✅ Smart financial planning and leveraging your assets

            Mentorship That Accelerates Your Success
            Investing can feel overwhelming, but with the right guidance, you can confidently make informed decisions. That’s why we offer mentorship at an affordable fee of R6000. Our experienced mentors will provide personalized support, helping you:

            ✔️ Develop a strategic investment plan
            ✔️ Avoid common real estate pitfalls
            ✔️ Make smarter financial choices
            ✔️ Grow your wealth through sustainable investment methods

            If you’re ready to take control of your financial future and start playing the Real-Life Monopoly the smart way, Kayalako Properties is here to guide you every step of the way!

            Enroll today and turn your money into a long-term investment!</p>
          <button className='bg-blue-600 text-white px-8 py-2 rounded' >
            <a href="https://drive.google.com/drive/folders/1zjAUOMCdjM2XCvBCdCHNowxC_q1TjYeP">Learn more</a></button>
        </div>
      </div>
    </motion.div >
  )
}

export default About
