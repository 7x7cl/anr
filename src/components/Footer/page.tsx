import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Contacto</h3>
            <p>Email: info@anr.edu</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Enlaces Rápidos
            </h3>
            <ul>
              <li>
                <a href="#" className="hover:text-yellow-200">
                  Programas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-200">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-200">
                  Recursos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Boletín</h3>
            <p className="mb-4">
              Suscríbete para recibir noticias y actualizaciones.
            </p>
            <div className="flex">
              <Input className="mr-2" placeholder="Tu email" type="email" />
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Suscribir
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            © 2024 Academia Nacional de Robótica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
