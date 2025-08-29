import React from 'react'
import './App.css'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import Showcase from './Showcase.jsx';

function App() {

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <div className='w-full text-center p-1 sticky top-0 bg-zinc-900 border-b border-zinc-700 text-zinc-100 z-30'>Demo Website</div>
      <main className='h-full'>

        <div className='hero-img mx-auto h-full'>
          <div className='flex flex-col items gap-6 max-w-[100rem] mx-auto h-full color'>

            <nav className='flex justify-between items-center p-4 '>
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
              <h1 className='text-8xl w-[60rem]'>Crafted with Care, Sipped with Joy.
              </h1>

              <p className='text-xl w-[50rem]'>Handcrafted Brews. Freshly Baked Delights. A Cozy Space Where Every Moment Finds Its Rhythm.</p>
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
              <h1 className='text-6xl'>Every Cup, Made with You in Mind.</h1>
              <p className='text-lg w-[40rem]'>Our organically grown beans are roasted in small batches over an open flame, bringing out a depth of flavor you can’t find anywhere else. At Acuppella Cafe, every cup sings with authenticity.</p>
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
                <h1 className='text-6xl'>Made In Subic</h1>
                <p className='text-lg w-[40rem]'>Welcome to Acuppella Cafe—where the warmth of community meets the harmony of freshly brewed coffee. A cozy haven where friends connect, ideas take flight, and every cup sings its own story.</p>
                <p className='text-lg w-[40rem]'>Come and experience the soul of Acuppella—where every sip and bite is crafted with heart. We can’t wait to welcome you!</p>
                <button className='rounded-xl border text-lg py-4 px-8 w-fit'>Learn more </button>
              </div>
              <img className='object-cover w-96 h-96 rounded-xl' src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/495653093_122250548240027101_7490492174083654998_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqQaZy6y8iCDyg9_1poFiXxXLEBvDu0-HFcsQG8O7T4Q22-Wqleh_BgIL8jW3ddvdBF3BGBbrB6SihxSJu92l6&_nc_ohc=WPRTbJrPsjsQ7kNvwGsGpXP&_nc_oc=AdkIyA7GvkfGZuN_Mp9iEbnp5OPUpwjoVjPpFWAnASVCyw2-Po5BSmC4MN5gbizrzJUmY0w5DhA7coLkYU4r0v6p&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=M-Xhk1oXSALW5OAnLrZYmg&oh=00_AfXZ8efyhCWofLLD7o7LLjWzPFa4lleEnSrqOgXnh-rMFA&oe=68B65B69" alt="" />

            </div>
          </div>
        </section>

        <section className='bg-brown  flex items-center justify-center gap-40 p-8'>
          <div className='flex items-center justify-center gap-4 color-2'>
            <IoLogoInstagram size={100} color='#EEDCC6' />
            <div>
              <h1 className='text-3xl mb-2'>#AcuppellaCafe</h1>
              <p className='text-2xl'>@Acuppellacafe</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-4 color-2'>
            <FaFacebookSquare size={100} color='#EEDCC6' />

            <div>
              <h1 className='text-3xl mb-2'>Follow Us</h1>
              <p className='text-2xl'>Acuppellacafe</p>
            </div>
          </div>
        </section>

        <Showcase />
        <section className='bg-light h-1/2'>
          <div className='grid grid-cols-2 w-full max-w-[100rem] mx-auto place-items-center h-full'>
            <div className='bg-light'>
              <img src="../public/logo.svg" className='w-100 ' alt="" />
              <h1 className='text-lg color'>Brewed To Perfection, Served With Love</h1>
            </div>
            <div>
              <h1 className='text-2xl w-[30rem] color mb-4'>Join our newsletter to recieve exclusive updates, and news!</h1>
              <div className='flex gap-2'>
                <input className='rounded-xl px-6 py-2 text-lg color border' type="text" placeholder='Enter Your Email' />
                <button className='py-4 px-6 rounded-xl text-lg btn-main'>Subscribe</button>
              </div>
            </div>
          </div>

        </section>

        <div className='w-full bg-dark color-2'>

          <div className='flex gap-4 w-full justify-between items-center p-4 max-w-[100rem] mx-auto'>


            <ul className='flex gap-4'>
              <li className='p-2 rounded-full bg-light color'><FaFacebookF size={25} /></li>
              <li className='p-2 rounded-full bg-light color'><IoLogoInstagram size={25} /></li>
              <li className='p-2 rounded-full bg-light color'><FaGoogle size={25} /></li>
            </ul>
            <ul className='flex gap-4'>
              <h1>Privacy</h1>
              <h1>Terms</h1>
              <h1>Cookies</h1>
            </ul>
          </div>
        </div>


        <footer className='w-full bg-dark color-2'>
          <div className='flex gap-4 w-full justify-between items-center p-4 max-w-[100rem] mx-auto border-t'>

            <h1>2024 Brussels Brewery, All Rights Reserved.</h1>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
