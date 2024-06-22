
export default function Hero() {
  return (
    <>
      <div className="flex justify-center hero min-h-screen bg-base-100 flex-col  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
              <img className="w-64 lg:w-96" src="https://jerryj1.wordpress.com/wp-content/uploads/2022/04/11zon_cropped-1.png" alt="" />
            <div className="flex flex-col gap-6">
              <h1 className="text-primary"> Hello, my name is </h1>
              <h1 className="text-5xl font-bold ">JERRY</h1>
              <h1 className="text-5xl font-bold">I love exploring new things!</h1>
              <p className="text-xl">I am a student of the information technology study program at the South Tangerang Institute of Technology. Primarily interested in Web Development and Linux Networking   </p>
              <p className="text-sm"> I enjoy learning new skills and implementing them in real life!</p>
              <div className="flex gap-5">
                <button className="btn btn-primary border-2 max-w-max hover:bg-base-100  hover:text-secondary rounded-full">Get In Touch</button>

                <button className="btn btn-accent max-w-max border-2 border-primary hover:bg-primary hover:text-accent rounded-full">Download CV</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}




