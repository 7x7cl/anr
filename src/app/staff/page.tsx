import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const staffMembers = [
  {
    name: "Tino",
    role: "Jefe de Desarrollo de Software",
    image: "/staff/tino.webp",
    description:
      "Tino es un pingüino curioso y aventurero, siempre dispuesto a descubrir nuevas tecnologías y aprender cosas nuevas. En su comunidad, es conocido por su espíritu explorador y su habilidad para resolver problemas con ingenio y creatividad. Aunque no es un experto programador, Tino aporta frescura e ideas innovadoras a cualquier equipo en el que participe.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Programas",
    image: "/placeholder.svg?height=100&width=100",
    description: "Supervisa todos los programas y proyectos de la fundación.",
  },
];

export default function StaffList() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Nuestro Equipo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffMembers.map((member, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{member.name}</CardTitle>
                <Badge variant="secondary" className="mt-1">
                  {member.role}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
