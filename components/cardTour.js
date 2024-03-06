import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "../utils/currency"
import { FaWhatsapp } from "react-icons/fa";

const CardTour = (props) =>{
  const {data} = props
  console.log(data, 'datatat')
  return (
      <div className="group flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md dark:bg-trueGray-800 dark:border-trueGray-800">
        <div className="flex flex-col">
          <Link href={"/"} className="relative flex h-60 overflow-hidden rounded-t-xl">
            <Image alt="/" src={data.image} width={315} height={118} className="object-cover w-full brightness-75" />                    
          </Link>
          <div className="flex flex-col mt-4 px-5">
            <h5 className="text-xl tracking-tight text-slate-900 dark:text-white font-bold">{data.title}</h5>          
            <div className="mt-2 mb-5 flex items-center justify-between">
              <div className="flex flex-col divide-y w-full">
                <div className="flex flex-col pb-2 font-bold">                
                  <p>{formatCurrency(data.price)} / <span>pax</span></p>                
                </div>
                <div className="flex flex-col pt-2">
                  <p className="font-bold">Itinerary:</p>
                  {data.itinerary.slice(0,3).map((item, index)=>{
                    return( 
                      <div className="flex flex-col">
                        <p className="font-bold">{`Hari ke - ${item.day}`}</p>
                        <div className="flex items-center">
                          <p key={index}>{item.destination}</p>
                        </div>
                      </div> 
                    )
                  })}
                  <Link href={'#'} className="mt-2 text-indigo-500">Lihat selengkapnya</Link>
                </div>
              </div>
            </div>            
          </div>
        </div>
        <div className="mt-4 px-5 pb-5">
          
          <Link href={"https://wa.me/6287839761812"} className="flex self-end space-x-2 justify-center rounded-md bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <FaWhatsapp />
            <p>Yuk Explore</p>
          </Link>
        </div>
      </div>          
  )
}

export default CardTour