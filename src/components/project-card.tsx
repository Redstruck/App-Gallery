import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  image: string;
  liveLink: string;
  sourceCode: string;
}

export function ProjectCard({ title, image, liveLink, sourceCode }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="aspect-video overflow-hidden rounded-md">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-lg text-card-foreground transition-colors duration-300">{title}</h3>
        <div className="mt-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open(liveLink, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open(sourceCode, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
}