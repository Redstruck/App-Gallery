import { ExternalLink, Github, ChevronDown, ChevronUp, Info } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  liveLink: string;
  sourceCode?: string;
  description?: string;
}

export function ProjectCard({ title, image, liveLink, sourceCode, description }: ProjectCardProps) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

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
        <h3 className="font-semibold text-lg text-card-foreground transition-colors duration-200">{title}</h3>
        
        {description && (
          <div className="mt-3">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between p-2 h-auto text-left transition-all duration-300 hover:bg-muted"
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-muted-foreground transition-colors duration-200" />
                <span className="text-sm font-medium transition-colors duration-200">Description</span>
              </div>
              {isDescriptionOpen ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground transition-colors duration-200" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-colors duration-200" />
              )}
            </Button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              isDescriptionOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}>
              <p className="text-sm text-muted-foreground leading-relaxed p-2 bg-muted/50 rounded-md transition-colors duration-200">
                {description}
              </p>
            </div>
          </div>
        )}
        
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
{sourceCode && (
          <Button
            variant="outline"
            size="sm"
            className="w-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open(sourceCode, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
        )}
        </div>
      </div>
    </div>
  );
}