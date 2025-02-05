import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";


export default function ProductComperison(){
    return(
        <div>
            

 <div className="relative w-full mb-6">
        <Image src="/shop.png" alt="Banner" width={1200} height={400} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Product Comparison</h1>
          <p className="mt-2 text-lg">Home &gt; Shop</p>
        </div>
      </div>

            <div className="flex flex-col md:flex-row gap-16">
                <div className="mt-28 ml-8">
                <h1 className="text-2xl font-bold">Go to Product<br/> Page For More <br/>Product</h1>
                <p className="underline mt-3">View More</p>
                </div>
                <div>
                <Image
     src={"/Group 156.png"}
      width={300} 
      height={100} 
      alt="sofa image" className="mt-20 "/>

      <h1 className="font-bold text-2xl mt-4">Asgaard Sofa</h1>
      <h1 className="font-bold">Rs. 250,000.00</h1>
      <div className="flex gap-2">
      <h1 className="font-bold ">4.7</h1>
      <Image
     src={"/Group 88.png"}
      width={124} 
      height={20} 
      alt="star image"/>
       <h1>|</h1>
      <h1>145 Review</h1>
      </div>


      </div>
<div>
<Image
     src={"/Group 157.png"}
      width={300} 
      height={100} 
      alt="sofa image" className="mt-10"/>

<h1 className="font-bold text-2xl mt-4">Outdoor Sofa Set</h1>
      <h1 className="font-bold">Rs. 224,000.00</h1>
      <div className="flex gap-2">
      <h1 className="font-bold ">4.2</h1>
      <Image
     src={"/Group 88.png"}
      width={124} 
      height={20} 
      alt="star image"/>
      <h1>|</h1>
      <h1>145 Review</h1>
      </div>
</div>

<div>
    <h1 className="font-bold text-3xl mt-28">Add A Product</h1>
    <div className=" flex gap-10 border border-gray-400 rounded-md pr-10 p-2 px-20 mt-5 bg-[#B88E2F] text-white  ">
    <h1>Choose a Product </h1>
      <MdOutlineKeyboardArrowDown className="w-[24px] mt-1"/>
    </div>    
</div>

      </div>
    


     

        <div className="p-5">
          {/* Horizontal line */}
          <div className="border-t-2 border-gray mb-4"></div>
    
          {/* Grid container */}
          <div className="relative grid grid-cols-4 gap-0">
            {/* Vertical lines */}
            <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-black"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-black"></div>
    
            {/* First column */}
            <div className="p-4">
              <div className="font-bold text-lg mt-4">General</div>
              <ul className="list-none mt-2 space-y-2">
                <li>Sales Package</li>
                <li>Model Number</li>
                <li>Secondary Material</li>
                <li>Configuration</li>
                <li>Upholstery Material</li>
                <li>Upholstery Color</li>
              </ul>
    
              <div className="font-bold text-lg mt-10">Product</div>
              <ul className="list-none mt-2 space-y-2">
                <li>Filling Material</li>
                <li>Finish Type</li>
                <li>Adjustable Headrest</li>
                <li>Maximum Load Capacity</li>
                <li>Origin of Manufacture</li>
              </ul>
    
              <div className="font-bold text-lg mt-8">Dimensions</div>
              <ul className="list-none mt-2 space-y-2">
                <li>Width</li>
                <li>Height</li>
                <li>Depth</li>
                <li>Weight</li>
                <li>Seat Height</li>
                <li>Leg Height</li>
              </ul>
    
              <div className="font-bold text-lg mt-8">Warranty</div>
              <ul className="list-none mt-2 space-y-2">
                <li>Warranty Summary</li>
                <li>Warranty Service Type</li>
                <li>Covered in Warranty</li>
                <li>Not Covered in Warranty</li>
                <li>Domestic Warranty</li>
              </ul>
            </div>
    
            {/* Second column */}
            <div className="p-4">
              <ul className="list-none mt-2 space-y-2">
                <li>1 sectional sofa</li>
                <li>TFCBLIGRBL6SRHS</li>
                <li>Solid Wood</li>
                <li>L-shaped</li>
                <li>Fabric + Cotton</li>
                <li>Bright Grey & Lion</li>

              </ul>
    
              <ul className="list-none mt-20 space-y-2 ">
                <li>Foam</li>
                <li>Bright Grey & Lion</li>
                <li>No</li>
                <li>280 KG</li>
                <li>india</li>
              </ul>

              <ul className="list-none mt-20 space-y-2">
                <li>265.32 cm</li>
                <li>76 cm</li>
                <li>167.76 cm</li>
                <li>45 KG</li>
                <li>41.52 cm</li>
                <li>5.46 cm</li>

              </ul>

              <ul className="list-none mt-20 space-y-2">
                <li>1 Year Manufacturing Warranty</li>
                <li>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</li>
                <li>Warranty Against Manufacturing Defect</li>
                <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
                <li>1 Year</li>
              </ul>
              <button className="border border-gray-400 p-2 px-5 bg-[#B88E2F] mt-16 text-white ">
              Add To Cart</button>
            </div>
    
            {/* Third column */}
            <div className="p-4">
              <ul className="list-none mt-2 space-y-2">
                <li>1 Three Seater, 2 Single Seater</li>
                <li>DTUBLIGRBL568</li>
                <li>Solid wood</li>
                <li>L-Shaped</li>
                <li>Fabric + Cotton</li>
                <li>Bright Grey & Lion</li>

              </ul>
    
              <ul className="list-none mt-20 space-y-2">
                <li>Matte</li>
                <li>Bright Grey & Lion</li>
                <li>yes</li>
                <li>300 KG</li>
                <li>india</li>
              </ul>

              <ul className="list-none mt-20 space-y-2">
                <li>265.32 cm</li>
                <li>76 cm</li>
                <li>167.76 cm</li>
                <li>65 KG</li>
                <li>41.52 cm</li>
                <li>5.46 cm</li>

              </ul>

              <ul className="list-none mt-20 space-y-2">
                <li>1.2 Year Manufacturing Warranty</li>
                <li>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</li>
                <li>Warranty of the product is limited to manufacturing defects only.</li>
                <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
                <li>3 Months</li>
              </ul>
              <button className="border border-gray-400 p-2 px-5 bg-[#B88E2F] mt-10  text-white">
             Add To Cart</button>
            </div>
    
            {/* Fourth column */}
            <div className="p-4"></div>
          </div>

        </div>


<div className="flex flex-col md:flex-row bg-[#F6F1E7] w-full max-w-[1340px] mx-auto h-auto mt-10 gap-10 md:gap-20 p-4">
  {/* High Quality Section */}
  <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left">
    <span className="flex justify-center items-center md:mr-4">
      <SlTrophy className="w-[50px] h-[50px]" />
    </span>
    <div>
      <h2 className="text-lg font-semibold">High Quality</h2>
      <p className="text-sm text-gray-700">Crafted from top materials</p>
    </div>
  </div>

  {/* Warranty Protection Section */}
  <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left">
    <span className="flex justify-center items-center md:mr-4">
      <SiTicktick className="w-[50px] h-[50px]" />
    </span>
    <div>
      <h2 className="text-lg font-semibold">Warranty Protection</h2>
      <p className="text-sm text-gray-700">Over 2 years</p>
    </div>
  </div>

  {/* Free Shipping Section */}
  <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left">
    <span className="flex justify-center items-center md:mr-4">
      <Image
        src="/shipping.png"
        alt="Free Shipping"
        width={60}
        height={60}
        className="object-contain"
      />
    </span>
    <div>
      <h2 className="text-lg font-semibold">Free Shipping</h2>
      <p className="text-sm text-gray-700">Order Over $150</p>
    </div>
  </div>

  {/* 24/7 Support Section */}
  <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left">
    <span className="flex justify-center items-center md:mr-4">
      <Image
        src="/customer-support.png"
        alt="24/7 Support"
        width={60}
        height={60}
        className="object-contain"
      />
    </span>
    <div>
      <h2 className="text-lg font-semibold">24/7 Support</h2>
      <p className="text-sm text-gray-700">Dedicated support</p>
    </div>
  </div>
</div>

                <hr className="text-gray-400 mt-10"/>
        
      
      </div>
         
    )
}

ProductComperison();







