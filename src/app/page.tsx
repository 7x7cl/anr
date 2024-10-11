import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-gray-300 mb-6">
            Nuestra misión en la Academia Nacional de Robótica es proporcionar
            una educación de calidad en robótica, creando un entorno de
            aprendizaje donde los estudiantes puedan explorar, innovar y
            desarrollar habilidades en la educación tecnológica, promoviendo la
            investigación y la innovación en robótica y automatización.
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
  );
}

export const dynamic = "force-static";

export const runtime = "edge";
