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
    <div className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:shadow-lg card-hover">
      <div className="aspect-video overflow-hidden rounded-md">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-all"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-lg text-card-foreground">{title}</h3>
        <div className="mt-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => window.open(liveLink, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
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