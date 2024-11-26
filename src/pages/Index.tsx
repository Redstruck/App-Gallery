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
  {
    title: "E-commerce Template",
    image: "/placeholder.svg",
    liveLink: "https://ecom-template-genie.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/ecom-template-genie.git",
  },
  {
    title: "Landing Page Website Template",
    image: "/placeholder.svg",
    liveLink: "https://preview--landing-spark-template.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/landing-spark-template.git",
  },
  // ... Adding all remaining projects
  {
    title: "Gaming Website Landing Page",
    image: "/placeholder.svg",
    liveLink: "https://gamepage-heroic-74.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Gaming-Website-Landing-Page.git",
  },
];

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background p-4 sm:p-8">
        <header className="container mx-auto flex items-center justify-between mb-8 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">My Projects</h1>
          <ThemeToggle />
        </header>
        <main className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards"
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;