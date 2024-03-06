import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "../utils/currency"
import { FaWhatsapp } from "react-icons/fa";

const CardMotor = (props) =>{
  const {data} = props
  console.log(data, 'datatat')
  return (
      <div className="group flex w-full max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md dark:bg-trueGray-800 dark:border-trueGray-800">
        <Link href={"/"} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <Image alt="/" src={data.image} width={315} height={118} className="aspect-w-5 aspect-h-1" />          
          <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
            <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div> 
            <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
            <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
          </div> 
          {/* <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg> */}
          {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>  */}
        </Link>
        <div className="mt-4 px-5 pb-5">
          <Link href={"/"}>
            <h5 className="text-xl tracking-tight text-slate-900 dark:text-white font-bold">{data.merk} {data.title}</h5>
          </Link>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <div className="flex flex-col divide-y w-full">
              <div className="flex flex-col pb-2 font-bold">                
                <p>{formatCurrency(data.extend[0].price)} / <span>{data.extend[0].duration} jam</span></p>                
              </div>
              <div className="flex flex-col pt-2">
                <p className="font-bold">Sewa Lebih Lama</p>
                {data.extend.map((item, index)=>{
                  return(
                    index !== 0 && 
                    <div className="flex items-center space-x-2">
                      <p>{`${item.day} Hari - `}</p>
                      <div className="flex items-center space-x-2">
                        <p key={index}>{formatCurrency(item.price)}</p>
                        {item.duration !== 0 &&  <span>/ {item.duration} jam</span>}
                      </div>
                    </div> 
                  )
                })}
              </div>
            </div>
          </div>
          <Link href={"/"} className="flex items-center space-x-2 justify-center rounded-md bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <FaWhatsapp />
            <p>Sewa / Rent</p>
          </Link>
        </div>
      </div>          
  )
}

export default CardMotor