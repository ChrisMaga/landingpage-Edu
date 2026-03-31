import Image from "next/image"

export default function Logotipo() {
    return (

<div className="p-3 flex justify-start items-center shrink-0">
        <Image 
          src="/lightLogo.svg" 
          alt="Logo" 
          width={150} 
          height={40}
          className="w-24 h-8 sm:w-32 sm:h-10 md:w-36 md:h-12 lg:w-40 lg:h-14 object-contain" 
          priority 
        />
      </div>

    )
}