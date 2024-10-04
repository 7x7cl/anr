import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="bg-gray-800 text-yellow-400 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Academia Nacional de Robótica
            </h1>
            <nav>
              <ul className="flex space-x-4">
                {[
                  "Inicio",
                  "Misión y Visión",
                  "Nosotros",
                  "Valores",
                  "Equipo",
                  "Galería",
                  "Actividades",
                  "Descargas",
                  "Contáctenos",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-yellow-200 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Nuestra Misión
            </h2>
            <p className="text-gray-300 mb-6">
              Nuestra misión en la Academia Nacional de Robótica es proporcionar
              una educación de calidad en robótica, creando un entorno de
              aprendizaje donde los estudiantes puedan explorar, innovar y
              desarrollar habilidades en la educación tecnológica, promoviendo
              la investigación y la innovación en robótica y automatización.
            </p>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Nuestra Visión
            </h2>
            <p className="text-gray-300 mb-6">
              La Academia Nacional de Robótica aspira a ser la principal
              institución educativa en el área de robótica a nivel nacional,
              destacándose por su compromiso con la excelencia académica y la
              innovación tecnológica. La academia busca inspirar a la próxima
              generación de ingenieros y científicos, contribuyendo al avance de
              la sociedad a través de la educación y el desarrollo tecnológico.
            </p>
            <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Más Información
            </Button>
          </div>
          <div className="relative">
            <img
              alt="Estudiante de robótica"
              className="rounded-lg object-cover w-full h-[400px]"
              src="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-40 rounded-lg"></div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                Contacto
              </h3>
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
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                Boletín
              </h3>
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
              © 2024 Academia Nacional de Robótica. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const dynamic = "force-static";

export const runtime = "edge";
