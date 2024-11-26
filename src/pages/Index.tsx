import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "AI Image Generator",
    image: "/placeholder.svg",
    liveLink: "https://image-genie-hub.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/image-genie-hub.git",
  },
  // ... Add all 30 projects here
];

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background p-4 sm:p-8">
        <header className="container mx-auto flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">My Projects</h1>
          <ThemeToggle />
        </header>
        <main className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;