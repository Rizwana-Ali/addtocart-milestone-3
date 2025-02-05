// import Image from "next/image"
// const CartSidebar = () => {
//     return (
//       <div className=" mt-24 fixed top-0 right-0 w-full sm:w-96 bg-white shadow-lg overflow-y-auto transition-transform transform translate-x-0 sm:translate-x-0">
//         {/* Header */}
//         <div className="p-4 sm:p-6 border-b">
//           <h2 className="text-xl sm:text-2xl font-bold">Shopping Cart</h2>
//         </div>


    
//       {/* Cart Items */}
//         <div className="p-4 sm:p-6">
//           <div className="flex items-center justify-between mb-4">
//             <div className="w-24">
//               <Image
//                 src="/Group 146.png"
//                 width={108}
//                 height={105}
//                 alt="sidebar image"
//                 className="w-full h-auto"
//               />
//             </div>
//             <div className="ml-4 flex-1">
//               <p className="font-medium text-sm sm:text-base">Asgaard Sofa</p>
//               <p className="text-gray-600 text-xs sm:text-sm">
//                 1 x <span className="text-[#B88E2F]">Rs. 250,000.00</span>
//               </p>
//             </div>
//           </div>
  
//           <div className="flex items-center justify-between mb-4">
//             <div className="w-24">
//               <Image
//                 src="/Group 146 (1).png"
//                 width={108}
//                 height={105}
//                 alt="sidebar image"
//                 className="w-full h-auto"
//               />
//             </div>
//             <div className="ml-4 flex-1">
//               <p className="font-medium text-sm sm:text-base">Casaliving Wood</p>
//               <p className="text-gray-600 text-xs sm:text-sm">
//                 1 x <span className="text-[#B88E2F]">Rs. 270,000.00</span>
//               </p>
//             </div>
//           </div>
//         </div>
  
//         {/* Subtotal */}
//         <div className="p-4 sm:p-6 border-t border-b">
//           <div className="flex justify-between">
//             <span className="font-medium text-sm sm:text-base">Subtotal</span>
//             <span className="font-bold text-[#B88E2F] text-sm sm:text-base">
//               Rs. 520,000.00
//             </span>
//           </div>
//         </div>
  
//         {/* Actions */}
//         <div className="p-4 sm:p-6">
//           <div className="flex flex-wrap gap-4">
//             <div className="border border-gray-400 rounded-full p-2 px-4">
//               <a href="/cart" className="text-sm sm:text-base">
//                 Cart
//               </a>
//             </div>
//             <div className="border border-gray-400 rounded-full p-2 px-4">
//               <a href="/check-out" className="text-sm sm:text-base">
//                 Check out
//               </a>
//             </div>
//             <div className="border border-gray-400 rounded-full p-2 px-4">
//               <a href="/product-comparison" className="text-sm sm:text-base">
//                 Comparison
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default CartSidebar;











"use client";


import { useCart } from "@/app/components/CartContext"; 
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";



const CartSidebar = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); 
  const formattedPrice = (price: number) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
    }).format(price);

  return (
    <div>
      

      <div>
        {/* Cart Items */}

        <div className=" mt-24 fixed top-0 right-0 w-full sm:w-96 bg-white shadow-lg overflow-y-auto transition-transform transform translate-x-0 sm:translate-x-0">       {/* Header */}
       <div className="p-4 sm:p-6 border-b">
           <h2 className="text-xl sm:text-2xl font-bold">Shopping Cart</h2>
         </div>
        
          <table className="bg-white border-collapse border border-gray-200 mr-10">
            
            <tbody>
              {cart.map((item: any) => (  
                <tr key={item.id}>
                  <td className="p-4 flex items-center gap-4">
                  


                   <Image
                                    src={urlFor(item.productImage).width(300).height(300).url()}
                                    alt={item.title || "Product Image"}
                                    width={80}
                                    height={80}
                                    className="rounded-lg"
                                  />
                  


                    <span>{item.title}</span>
                  </td>
                  <td className="p-4">{formattedPrice(item.price)}</td>
                
                  
                </tr>
              ))}
          

<div className="p-4 sm:p-6">
         <div className="flex  gap-4">
           <div className="border border-gray-400 rounded-full p-2 px-4">
             <a href="/cart" className="text-sm sm:text-base">
               Cart
             </a>
           </div>
            <div className="border border-gray-400 rounded-full p-2 px-4">
               <a href="/check-out" className="text-sm sm:text-base">
                 Check out
              </a>
            </div>
             <div className="border border-gray-400 rounded-full p-2 px-4">
             <a href="/product-comparison" className="text-sm sm:text-base">
                 Comparison
              </a>
            </div>
           </div>
         </div>
        <span>    {formattedPrice(
                cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0)
              )}
            </span>
          
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total</span>
            <span className="font-bold text-gold">
              {formattedPrice(
                cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0)
              )}
            </span>
          </div>
          <button
            onClick={() => console.log("Proceed to checkout")}
            className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-black font-semibold hover:shadow-md"
          >
            Check Out
          </button>

          </tbody>
          </table>
        </div>

        

        </div>

        
      </div>
  
  );
};
export default CartSidebar



