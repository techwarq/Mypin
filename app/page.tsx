import Image from "next/image";
import Link from "next/link"
import "./globals.css";
import bat from "../public/bat.png"
import bat2 from "../public/bat2.jpeg"
import bat3 from "../public/bat3.jpeg"


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
       <header className="py-4 px-6 border-b border-green-500">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">
            Truenerds

          </h1>
          
        </nav>

       </header>
       <section className="py-20 px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 ">
            Connect With Your Nerd Tribe


          </h2>
          <p className="text-xl mb-8 roboto-mono font-semibold">
            truenerds: Where Geeks, Nerds, and Tech Enthusiasts Unite!

          </p>
          <Link href="truenerds-9ybq.vercel.app" className="bg-green-500 text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300">
          Join the Nerdverse
          </Link>
          <section id="features" className="py-16 px-6">
            <h3 className="text-3xl font-bold mb-24 text-center hero-font">
              Why Choose truenerds?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center rounded-xl border border-green-600 w-full h-40">
               
                <h4 className="text-xl  font-semibold text-green-500  mt-4">
                  Nerd-Centric Content
                </h4>
                <p className=" text-lg mt-6 roboto-mono ">
                  Currated Feeds Tailored to your geeky interests
                </p>

              </div>
              <div className="text-center rounded-xl border border-green-600 w-full h-40">
               
                <h4 className="text-xl font-semibold text-green-500  mt-4">
                  Nerdverse for every Post
                </h4>
                <p className=" text-lg mt-6 roboto-mono ">
                  Brainstrom ideas with nerds endlessly in chatrooms
                </p>

              </div>
              <div className="text-center rounded-xl border border-green-600 w-full h-40">
               
                <h4 className="text-xl  font-semibold text-green-500  mt-4">
                  Go Live and Show
                </h4>
                <p className=" text-lg mt-6 roboto-mono  ">
                  Stream to show and teach what you are doing
                </p>

              </div>

            </div>

          </section>
          <section id="testimonials" className="py-16 px-6 bg-green-900">
            <h3 className=" text-3xl font-bold mb-10 text-center ">What Nerds Are Saying</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black p-6 rounded-lg">
                <p className="mb-4 roboto-mono">
                  "Finally, a social platform where I can discuss quantum physics without judgement"
                </p>
                <p className="font-semibold roboto-mono"> -Schrdinger's cat Enthusiast</p>
              </div>
              <div className="bg-black p-6 rounded-lg">
                <p className="mb-4 roboto-mono">
                  "Truenerds helped me find my D&D group."
                </p>
                <p className="font-semibold roboto-mono"> -Level 20 Wizard IRl</p>
              </div>

            </div>

          </section>

          <section className="py-16 px-6 ">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center ">Nerd Out With Us!</h3>
              <div className=" justify-center items-center">
                <Image src={bat3} alt="Bat Image" className="w-full rounded-lg shadow-lg mb-8" />
              </div>
              

              <p className="text-center text-xl roboto-mono">
                "Experience the ultimate social platform for nerds. Join discussions, share your projects, and connect with fellow enthusiasts in a judgment-free zone"
              </p>

            </div>
          </section>
          <section id="newsletter" className="py-16 px-6 bg-green-900">
            <div className="max-w-md mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center">
                Join the Nerdvolution !
              </h3>
              <Link href="https://truenerds.substack.com/p/ready-player-one-in-real-life-are?r=2hq13o" className="bg-green-500 text-black mt-5 py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-400 transition duration-300 roboto-mono">
          Subscribe to Newsletter
          </Link>
            </div>
          </section>

        </section>

      </div>
      <footer className="py-6 px-6 border-t border-green-500 text-center">
        <p>© 2023 Truenerds. All rights reserved. May the source be with you.</p>
      </footer>
    </main>
    
  );
}
