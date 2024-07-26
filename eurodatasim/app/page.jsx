'use client'

import { useState } from "react";
import Header from "../components/Header"; // Import the Header component
import Image from "next/image";

export default function Home() {
  const [modal, setModal] = useState(false);
          

            console.log(modal)


  return (
    <main className="min-h-screen flex flex-col flex-wrap overflow-hidden max-w-[1800px] m-auto">
      <Header />
      <section className="section1 flex justify-end flex-wrap items-center bg-[#FFFFFF] sm:h-[35em] w-full relative sm:mb-0 mb-10 mt-10">
        <img src="https://i.ibb.co/s2TdyfZ/eurodatasim-Iphone-Blackcropped.png" alt="Iphone Black" className="h-[500px] w-fit absolute left-0 top-28 z-10 -translate-x-32 hidden sm:block"/> 
      <div className="flex flex-col gap-7 justify-end lg:mr-8 sm:p-5 ">
        <h1 className="sm:text-[55px] text-[50px] max-w-[90%] min-w-[900px] sm:m-0 m-auto">Stay connected with Eurodatasim!</h1>
        <p className="sm:max-w-[45em] max-w-[90%]">Your ultimate European travel 5G data plans. <br></br><br></br>
Are you planning a trip to Europe and need a fastspeed 5G data connection?<br></br><br></br>
Are you planning a trip to Europe and worried about staying connected? Look no further than
Eurodatasim, your ultimate solution for reliable and affordable mobile 5G data while traveling across
Europe. Here you can choose from 3 tailored products designed to keep you connected seamlessly
wherever you go. Just chose your SIM or eSIM and enjoy your holiday. <br></br><br></br>
Our products are designed to offer seamless connectivity without the hidden data speed throttling
that many other companies impose after a certain usage limit.
          </p>
      </div>
      </section>
      <section className="section2 flex flex-wrap justify-center bg-[#E9E9E9] sm:h-auto w-full relative">
      <div className="flex flex-col gap-7 justify-center p-5 sm:p-0 text-center ">
        <h2 className=" m-auto font-normal">How it works</h2>
        <p className="sm:max-w-[45em] max-w-[90%] m-auto">Order Your SIM or eSIM: Choose the plan that best fits your needs and order your SIM card or eSIM
online.<br></br><br></br>
Activate Your SIM or eSIM: Follow the simple instructions to activate your SIM card or eSIM upon
arrival in Europe.<br></br><br></br>
Stay Connected: Enjoy seamless internet connectivity throughout your trip.
          </p>
      </div>

<div id="products" className="flex w-full justify-center gap-10 flex-wrap my-14">
  
  <div className=" bg-white w-[378px] h-[730px] flex flex-col gap-4 p-8 rounded-lg items-center">

   <div className="text-center">
    <div className="bg-slate-500 rounded-[16px] w-fit m-auto text-center py-2 px-5 ">
     <p className="text-white font-bold text-[16px]">POPULAR</p>
    </div>
    <h2 className=" m-auto font-extrabold text-[40px] mt-2">Unltd. Spanish calls</h2>
   </div>
<div>
   <div className="grid grid-cols-2 grid-rows-2 gap-x-1 max-h-[70px]">
    <p className="text-right col-span-1 row-span-2 text-[50px] font-extrabold">29</p>
    <p className="max-h-[20px] mt-4 font-extrabold">&apos;00</p>
    <p className="max-h-[25px] font-extrabold">€/month</p>
   </div>
   <p className="-translate-y-[10px]">Without permanency</p>
   </div>

   <div className="w-[250px] min-h-[48px] h-[48px] text-center bg-slate-500 rounded-md flex items-center justify-center">
    <p className="text-white font-medium">View plan</p>
   </div>

   <div className="flex flex-col gap-5">
    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/mFCNmVN/2876882.png" alt="" />
      <p className="w-fit font-bold">25 GB data<span className="block font-normal"> In Spain</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/n7GFJj1/2207360-200-1.png" alt="" />
      <p className="w-fit font-bold">16 GB data <span className="block font-normal">Europe zone 1</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[33px]" src="https://i.ibb.co/T1Xp7mk/downloadsms-2.png" alt="" />
       <div className="flex flex-col">
        <p className="w-fit font-bold">1000 Free SMS</p>
        
        <p className="">in Spain </p>
       </div>
    </div>

    <div className="w-[130px] h-[1px] bg-[#aaa] m-auto mt-5"></div>
   <div className="text-center">
    <p className=" text-[#aaa] font-medium">Do you want mobile phone?</p>
    <a href=""><p className=" font-bold text-[#11abc2]">Configure your plan and saves</p></a>
   </div>
  </div>
   
 </div>
 
 <div className=" bg-white w-[378px] h-[650px] flex flex-col gap-4 p-8 rounded-lg items-center">

   <div className="text-center">
    <h2 className=" m-auto font-extrabold text-[40px] mt-2">National Spain</h2>
   </div>
<div>
   <div className="grid grid-cols-2 grid-rows-2 gap-x-1 max-h-[70px]">
    <p className="text-right col-span-1 row-span-2 text-[50px] font-extrabold">29</p>
    <p className="max-h-[20px] mt-4 font-extrabold">&apos;00</p>
    <p className="max-h-[25px] font-extrabold">€/month</p>
   </div>
   <p className="-translate-y-[10px]">Without permanency</p>
   </div>

   <div className="w-[250px] min-h-[48px] h-[48px] text-center bg-slate-500 rounded-md flex items-center justify-center">
    <p className="text-white font-medium">View plan</p>
   </div>

   <div className="flex flex-col gap-5">
    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/F5BQvCz/download.png" alt="" />
      <p className="w-fit font-bold">Roaming <span className="block font-normal">4G / 5G</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[35px]" src="https://i.ibb.co/QkfCBym/download-1.png" alt="" />
      <p className="w-fit font-bold">No Data Limitation <span className="block font-normal">ZERO reduction in speed</span></p>
    </div>

    <div className="flex gap-4">
      <img className="h-[40px]" src="https://i.ibb.co/NSXSSPb/467978-200.png" alt="" />
       <div className="flex flex-col">
        <p className="w-fit font-bold">Contract</p>
        
        <p className="">No binding period </p>
       </div>
    </div>

    <div className="w-[130px] h-[1px] bg-[#aaa] m-auto mt-5"></div>
   <div className="text-center">
    <p className=" text-[#aaa] font-medium">Do you want mobile phone?</p>
    <a href=""><p className=" font-bold text-[#11abc2]">Configure your plan and saves</p></a>
   </div>
  </div>
   
 </div>

 <div className=" bg-white w-[378px] h-[650px] flex flex-col gap-4 p-8 rounded-lg items-center">

<div className="text-center">
 <h2 className=" m-auto font-extrabold text-[40px] mt-2">Europe Zone 1</h2>
</div>
<div>
<div className="grid grid-cols-2 grid-rows-2 gap-x-1 max-h-[70px]">
 <p className="text-right col-span-1 row-span-2 text-[50px] font-extrabold">29</p>
 <p className="max-h-[20px] mt-4 font-extrabold">&apos;00</p>
 <p className="max-h-[25px] font-extrabold">€/month</p>
</div>
<p className="-translate-y-[10px]">Without permanency</p>
</div>

<div className="w-[250px] min-h-[48px] h-[48px] text-center bg-slate-500 rounded-md flex items-center justify-center">
 <p className="text-white font-medium">View plan</p>
</div>

<div className="flex flex-col gap-5">
 <div className="flex gap-4">
   <img className="h-[40px]" src="https://i.ibb.co/F5BQvCz/download.png" alt="" />
   <p className="w-fit font-bold">Roaming <span className="block font-normal">4G / 5G</span></p>
 </div>

 <div className="flex gap-4">
   <img className="h-[35px]" src="https://i.ibb.co/QkfCBym/download-1.png" alt="" />
   <p className="w-fit font-bold">No data limitation <span className="block font-normal">ZERO reduction in speed</span></p>
 </div>

 <div className="flex gap-4">
   <img className="h-[40px]" src="https://i.ibb.co/NSXSSPb/467978-200.png" alt="" />
    <div className="flex flex-col">
     <p className="w-fit font-bold">Contract</p>
     
     <p className="">No binding period </p>
    </div>
 </div>

 <div className="w-[130px] h-[1px] bg-[#aaa] m-auto mt-5"></div>
<div className="text-center">
 <p className=" text-[#aaa] font-medium">Do you want mobile phone?</p>
 <a href=""><p className=" font-bold text-[#11abc2]">Configure your plan and saves</p></a>
</div>
</div>

</div>

</div>

      </section>
      <section id="work" className="section2 flex flex-wrap justify-start items-center bg-gradient-to-b from-[#FBF6F5] bg-[#FDF0ED] sm:h-[35em] w-full relative">
       <img src="https://i.ibb.co/qJFgXTJ/eurodatasim-sim-card-cropped.png" alt="" className="h-[500px] w-fit absolute right-0 bottom-0 -rotate-90  hidden sm:block" />
      <div className="flex flex-col gap-7 justify-end sm:ml-8 p-5 sm:p-0">
        <h3>Beware of hidden data speed <br></br>throttling!</h3>
        <p className="max-w-[45em]">Many companies hide the fact that their data speed is throttled after you reach a certain usage limit.
With Eurodatasim, what you see is what you get. We offer true high-speed 5G data with no hidden
throttling, ensuring you get the best internet experience throughout your travels.
          </p>
          
          <button onClick={() => setModal(true)} className="bg-[#E9E9E9] w-fit p-3 rounded-md text-[#939191] font-bold hover:scale-110 transition-all">What countries is zone 1?</button>

      {
        modal && (
    <div className="fixed inset-0 m-auto p-3 rounded-md w-fit h-fit z-50 border-[#E9E9E9] border bg-[#F7F7F7] bg-opacity-95">
      <h3 className="underline underline-offset-4 decoration-2 text-center">Zone 1 includes:</h3>
      <p className="font-bold mb-1 text-center">Portugal - France - Italy - Germany - United Kingdom</p>
      <p className="font-bold mb-1 text-center">Belgium - Netherlands - Luxembourg - Switzerland</p>
      <p className="font-bold mb-1 text-center">Ireland - Greece - Denmark - Sweden - Finland - Austria</p>
      <p className="font-bold text-center">Norway - Iceland - Andorra - Monaco - Liechtenstein</p>
      <div className="flex justify-center">
      <button onClick={() => setModal(false)} className="bg-[#E9E9E9] font-bold w-fit p-2 rounded-md hover:scale-110 transition-all mt-4">Close</button>
      </div>
     </div>
     
        )
      }

      

      </div>
      </section>
      <section id="connection" className="section2 flex flex-wrap justify-end items-center bg-[#CACACA] sm:h-[35em] w-full relative">
      <img src="https://i.ibb.co/bJ1Lkrt/Iphone-headphones-eurodatasim.png" alt="" className="h-[500px] w-fit absolute ml-5 translate-y-24 left-0 bottom-0 -translate-x-40 hidden sm:block" />
      <div className="flex flex-col gap-7 justify-end sm:mr-8 p-5 sm:p-0">
        <h3>Join thousands of satisfied travellers</h3>
        <p className="max-w-[45em]">Don’t just take our word for it. Join thousands of happy customers who have experienced the
convenience and affordability of Eurodatasim.
          </p>
      </div>
      </section>
      <footer className="w-full h-[5em] bg-[#FFFFFF] relative"> 
      
      <div className="w-full h-fit absolute flex justify-center bg-[#FFFFFF] bottom-0">
      <p className="">Copyright - EURODATASIM [2024] </p>
      </div>
      </footer>

      

    </main>
  );
}

