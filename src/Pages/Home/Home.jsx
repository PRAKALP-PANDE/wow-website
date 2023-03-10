import React from "react";
import "./home.css";
import gdscpune from "../../assets/gdscpune.png";
import Wow from "../../assets/wow.svg";
import Calender from "../../assets/Calender.svg";
import Map from "../../assets/Map.svg";

export default function Home() {
  return (
    <div
      id="home"
      className="pt-12 h-[100vh] flex flex-col items-center justify-center relative bg-[rgba(0,0,0,0.0)] overflow-hidden"
    >
      <div className="w-full max-w-lg">
        <div className="absolute left-15 top-0 w-72 h-72 bg-gblue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-5 w-72 h-72 bg-gred rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2s"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gyellow rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2s"></div>
        <div className="absolute bottom-1 right-0 w-72 h-72 bg-ggreen rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4s"></div>
      </div>
      <div className="text-center opacity-100">
        <div className="flex top-0 left-0 w-full md:items-center justify-center">
          <img src={gdscpune} className="w-[15%]" alt="Google Developer Student Clubs Pune" />
        </div>
        <div className="flex w-[100%] items-center justify-center p-5 pt-0">
          <div>
            <h1 className="text-xl lg:text-3xl whitespace-nowrap">
              Google Developer Student Clubs
            </h1>
            <p className="text-[18px] lg:text-3xl">Pune</p>
          </div>
        </div>
        <p className="text-center text-xl lg:text-2xl">Presents</p>
        <div className="flex items-center justify-center">
          <img
            src={Wow}
            alt="WOW Pune 2023"
            className="w-[50%] lg:w-[450px] inline-block"
          />
          <span className="text-2xl lg:text-8xl ml-2 whitespace-nowrap">
            | Pune
          </span>
        </div>
        <div className="lg:text-4xl">
          <h2>Pune's most awaited developer conference</h2>
          <div className="flex items-center justify-center text-[14px] lg:text-2xl">
            {/* <img src={Calender} alt="date" className="w-[30px] lg:w-[50px]" />
            <p>text</p>
            <span className="w-[20px] aspect-square bg-[rgb(128,128,128)] m-2 mx-4 rounded-xl"></span>
            <p>text</p> */}
          </div>

          <a
            href="https://goo.gl/maps/YfNRv8if2RX164Uh6"
            target="_blank"
            className="flex justify-center items-center text-[14px] lg:text-2xl text-inherit"
          >
            <img src={Calender} alt="date" className="w-[30px] lg:w-[50px]" />
            <img src={Map} alt="location" className="w-[30px] lg:w-[50px]" />
            <p> Venue and Date Revealing Soon !</p>
          </a>
          <div className="pt-10">
            {/* <a className="text-white" href="#register">
              <button className="bg-gyellow mr-3 transition-all ease-in-out duration-500 px-4 py-2 text-lg hover:translate-y-1">
                Register Now
              </button>
            </a> */}

            <button className="bg-ggreen text-white transition-all ease-in-out duration-500 px-4 py-2 text-lg hover:translate-y-1">
              <a className="text-white" href="https://forms.gle/8XTH7vGBMmT1SsHh6" target="_blank">Call for Speakers</a>
            </button>
            {/* <!-- Button to trigger modal --> */}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Contact us
                        </button>

                        {/* <!-- Modal for contact us form --> */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Contact us</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="inputName" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="inputName" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="inputEmail4" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                                <input type="text" className="form-control" id="inputAddress" placeholder="Enter your address" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputCity" className="form-label">City</label>
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
