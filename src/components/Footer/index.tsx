import Logotipo from "../Logotipo"

export default function Footer() {
    return (
        <footer className="bg-primary flex flex-col items-center justify-center min-h-[20vh] md:min-h-[20vh]">
            <Logotipo />
            <div className="text-quaternary text-center mt-4  text-xs md:text-sm">
                <p>OAB/SP - 293.029</p>
                <p>© 2026 - Todos os direitos reservados</p>
            </div>

        </footer>
    )
}