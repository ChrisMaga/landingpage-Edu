import Image from "next/image";

export default function BackgroundLight() {
    return (

        // Background repetido: Múltiplas instâncias do monogramaLight 
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

            {/* Central (original) */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src="/monogramaLight.svg"
                    alt="Logo marca d'água"
                    width={150}
                    height={45}
                    className="w-102 h-100 sm:w-130 sm:h-112 md:w-148 md:h-114 lg:w-164 lg:h-120 object-contain mix-blend-multiply opacity-50"
                />
            </div>

            {/* Top-esquerda */}
            <div className="absolute top-10 left-10 w-24 h-20 sm:w-32 sm:h-28 md:w-40 md:h-32 opacity-50 mix-blend-multiply">
                <Image
                    src="/monogramaLight.svg"
                    alt=""
                    width={120}
                    height={36}
                    className="w-full h-full object-contain"
                />
            </div>
            {/* Top-direita */}
            <div className="absolute top-10 right-10 w-24 h-20 sm:w-32 sm:h-28 md:w-40 md:h-32 opacity-50 mix-blend-multiply">
                <Image
                    src="/monogramaLight.svg"
                    alt=""
                    width={120}
                    height={36}
                    className="w-full h-full object-contain"
                />
            </div>
            {/* Bottom-esquerda */}
            <div className="absolute bottom-10 left-10 w-20 h-16 sm:w-28 sm:h-24 md:w-36 md:h-28 opacity-50 mix-blend-multiply">
                <Image
                    src="/monogramaLight.svg"
                    alt=""
                    width={100}
                    height={30}
                    className="w-full h-full object-contain"
                />
            </div>
            {/* Bottom-direita */}
            <div className="absolute bottom-10 right-10 w-20 h-16 sm:w-28 sm:h-24 md:w-36 md:h-28 opacity-50 mix-blend-multiply">
                <Image
                    src="/monogramaLight.svg"
                    alt=""
                    width={100}
                    height={30}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}