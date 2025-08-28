import React from 'react'
import './App.css'
import { IoLogoInstagram } from "react-icons/io";
import Showcase from './Showcase.jsx';

function App() {

  return (
    <div className='w-screen h-screen border'>
      <main className='h-full'>

        <div className='hero-img mx-auto h-full'>
          <div className='flex flex-col items gap-6 max-w-[100rem] mx-auto h-full color'>
        
              <nav className='flex justify-between items-center p-4'>
                <img className='w-50 ' src="../public/logo.svg" alt="" />
                <ul className='flex gap-8 items-center'>
                  <li className='text-lg'>Shop</li>
                  <li className='text-lg'>About</li>
                  <li className='text-lg'>Location</li>
                  <li className='text-lg'>Contact</li>
                <li className='rounded-xl border text-lg py-4 px-8 btn-main'>Order Now</li>
                </ul>
              </nav>
        
            <div className='flex flex-col justify-center gap-6 h-full'>
              <h1 className='text-8xl w-[80rem]'>Brewed To Perfection,
                Served With Love
              </h1>

              <p className='text-xl w-[50rem]'>Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere design to inspire and unwind.</p>
              <div className='flex gap-8'>
                <button className='rounded-xl border text-lg py-4 px-8 btn-main'>Order Now</button>
                <button className='rounded-xl border text-lg py-4 px-8'>Find Location</button>
              </div>
            </div>
          </div>
        </div>
        <section className='bg-dark color-2 h-1/2 flex justify-center items-center'>
          <div className='max-w-[100rem] h-full flex justify-center items-center gap-20'>
     
          
            <img className='object-cover w-96 h-96 rounded-xl' src="https://scontent.fcrk2-2.fna.fbcdn.net/v/t51.75761-15/479186511_17923963290017187_4806089436405740257_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGy6KDlzBwIzXCFspFJA-nSiJJxbr1piJeIknFuvWmIl8shB4mNDOYPowy8pdWTbGDCMek-ygCgF1UL5KFMhio1&_nc_ohc=nq_zyfH4UdAQ7kNvwHBF4hw&_nc_oc=AdnN8e9J7ExhsJBVjkFbcfqg9CFgFa0qT5zqEhjBxXmSvpumoZ0WXXatT8-G9CaIuRQ&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=2cAWWSeSm8M_BfO1wyc0-w&oh=00_AfUFjHTfvsJnxq1NzwjDZP19sTY6AM9hlcfXx39C6RtUMQ&oe=68B63EC6" alt="" />
          
            <div className='flex flex-col gap-8'>
              <h1 className='text-6xl'>Handmade Just For You</h1>
              <p className='text-lg w-[40rem]'>Our organically grown coffee beans are roasted over an open flame in a one-of-a-kind, brick roaster. There's nothing quite like a cup of Brussels Brewery coffee.</p>
            <button className='rounded-xl border text-lg py-4 px-8 w-fit'>
                View our menu
              </button>
            </div>
          </div>
       
        </section>

        <section className='bg-dark color-2 h-1/2 flex justify-center items-center'>
        <div>
            <div className='max-w-[100rem] h-full flex justify-center items-center gap-20'>
              <div className='flex flex-col gap-8'>
                <h1 className='text-6xl'>Made In Brussels</h1>
                <p className='text-lg w-[40rem]'>Welcome to brussels brewery, where the charm of brussels meets the aroma of fresly brewed coffee our cafe is a cozy haven where friends gather, ideas spark, and every sip tells a story.</p>
                <p className='text-lg w-[40rem]'>come and experience the soul of brussels in every cupo and bite - we cant wait to welcome you!</p>
                <button className='rounded-xl border text-lg py-4 px-8 w-fit'>Learn more </button>
            </div>
              <img className='object-cover w-96 h-96 rounded-xl' src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/495653093_122250548240027101_7490492174083654998_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqQaZy6y8iCDyg9_1poFiXxXLEBvDu0-HFcsQG8O7T4Q22-Wqleh_BgIL8jW3ddvdBF3BGBbrB6SihxSJu92l6&_nc_ohc=WPRTbJrPsjsQ7kNvwGsGpXP&_nc_oc=AdkIyA7GvkfGZuN_Mp9iEbnp5OPUpwjoVjPpFWAnASVCyw2-Po5BSmC4MN5gbizrzJUmY0w5DhA7coLkYU4r0v6p&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=M-Xhk1oXSALW5OAnLrZYmg&oh=00_AfXZ8efyhCWofLLD7o7LLjWzPFa4lleEnSrqOgXnh-rMFA&oe=68B65B69" alt="" />

            </div>
          </div>
        </section>

        <section className='bg-brown  flex items-center justify-center gap-40 p-8'>
          <div className='flex items-center justify-center gap-4'>
            <IoLogoInstagram   size={100} color='red' className='border text-red-500 bg-black'/>
            <div>
              <h1 className='text-4xl mb-2'>#Brusselsbrewery</h1>
              <p className='text-2xl'>@Brusselsbrewery</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-4'>
            <IoLogoInstagram size={100} color='red' className='border text-red-500 bg-black' />

            <div>
              <h1 className='text-4xl mb-2'>Follow Us</h1>
              <p className='text-2xl'>Brusselsbrewery</p>
            </div>
          </div>
        </section>

        {/* <section className='flex w-full h-[30rem] border'>
          <img className='object-cover' src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='object-cover' src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='object-cover' src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='object-cover' src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </section> */}

        <Showcase />
        <section>
          <div>
            <img src="" alt="" />
            <h1>Brewed To Perfection, Served With Love</h1>
          </div>
          <div>
            <h1>Join our newsletter to recieve exclusive updates, and news!</h1>
            <div>
              <input type="text" placeholder='Enter Your Email' />
              <button>Subscribe</button>
            </div>
          </div>
        </section>

        <div>

          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <h1>Privacy</h1>
            <h1>Terms</h1>
            <h1>Cookies</h1>
          </ul>
        </div>
        <footer>
          <h1>2024 Brussels Brewery, All Rights Reserved.</h1>
        </footer>
      </main>
    </div>
  )
}

export default App
