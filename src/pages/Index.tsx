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
  {
    title: "YouTube Thumbnail Downloader",
    image: "/placeholder.svg",
    liveLink: "https://youtube-thumbnail-downloader-nu.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/YouTube-Thumbnail-Downloader.git",
  },
  {
    title: "Typography Scale Generator",
    image: "/placeholder.svg",
    liveLink: "https://typography-scale-generator.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/typofolio-explorer.git",
  },
  {
    title: "Color Palette Generator",
    image: "/placeholder.svg",
    liveLink: "https://color-palette-generator-lilac.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/Color-Palette-Generator.git",
  },
  {
    title: "Markdown Live Preview",
    image: "/placeholder.svg",
    liveLink: "https://seamless-markdown-interaction.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/Markdown-Live-Preview.git",
  },
  {
    title: "QR Code Generator",
    image: "/placeholder.svg",
    liveLink: "https://preview--qrflow-magic.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/QR-Code-Generator2.git",
  },
  {
    title: "Simple Drawing App",
    image: "/placeholder.svg",
    liveLink: "https://playful-sketches-app.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/Simple-Drawing-App.git",
  },
  {
    title: "HTML/CSS Playground",
    image: "/placeholder.svg",
    liveLink: "https://html-css-playground-lab.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/Simple-Drawing-App.git",
  },
  {
    title: "Spotify Music Downloader",
    image: "/placeholder.svg",
    liveLink: "https://spotify-music-downloader-cyan.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/Spotify-Music-Downloader.git",
  },
  {
    title: "Prompt Enhancer",
    image: "/placeholder.svg",
    liveLink: "https://prompt-polisher.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/prompt-polisher.git",
  },
  {
    title: "Mood-Based Playlist Generator",
    image: "/placeholder.svg",
    liveLink: "https://moodify-music-magic.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/Mood-Based-Playlist-Generator.git",
  },
  {
    title: "Hacker News Top Stories",
    image: "/placeholder.svg",
    liveLink: "https://story-scanner-35.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/Hacker-News-Top-Stories.git",
  },
  {
    title: "SAAS Landing Page",
    image: "/placeholder.svg",
    liveLink: "https://modern-landing-boost.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/SAAS-Landing-Page.git",
  },
  {
    title: "AI Chatbot (Google Gemini Family)",
    image: "/placeholder.svg",
    liveLink: "https://ai-chatbot-eight-gray.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/AI-Chatbot.git",
  },
  {
    title: "Astronomy Picture of the Day (APOD)",
    image: "/placeholder.svg",
    liveLink: "https://astronomy-picture-of-the-day-tau.vercel.app/",
    sourceCode: "https://github.com/NebeyouMusie/Astronomy-Picture-of-the-Day.git",
  },
  {
    title: "Trending Movies Explorer",
    image: "/placeholder.svg",
    liveLink: "https://movie-mosaic-explorer.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/Trending-Movies-Explorer.git",
  },
  {
    title: "Personal Portfolio Website Template",
    image: "/placeholder.svg",
    liveLink: "https://portfolio-glow.gptengineer.run/",
    sourceCode: "https://github.com/NebeyouMusie/Personal-Portfolio-Website-Template.git",
  },
  {
    title: "Blog Website Template",
    image: "/placeholder.svg",
    liveLink: "https://bloggleberry-template.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Blog-Website-Template.git",
  },
  {
    title: "NFT Landing Page",
    image: "/placeholder.svg",
    liveLink: "https://pixel-perfect-responsive-93.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/NFT-Landing-Page.git",
  },
  {
    title: "Free Images Explorer",
    image: "/placeholder.svg",
    liveLink: "https://pixie-gallery.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Free-Images-Explorer.git",
  },
  {
    title: "Dashboard Template",
    image: "/placeholder.svg",
    liveLink: "https://salescape-dashboard-86.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Free-Images-Explorer.git",
  },
  {
    title: "Travel Agency Website Template",
    image: "/placeholder.svg",
    liveLink: "https://travel-trove-explorer.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Travel-Agency-Website-Template.git",
  },
  {
    title: "Beauty Website Landing Page",
    image: "/placeholder.svg",
    liveLink: "https://style-harmony.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Beauty-Landing-Page.git",
  },
  {
    title: "Digital Marketing Agency Website Landing Page",
    image: "/placeholder.svg",
    liveLink: "https://modern-landing-illustration-12.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Digital-Marketing-Agency-Landing-page.git",
  },
  {
    title: "E-Learning Website Landing Page",
    image: "/placeholder.svg",
    liveLink: "https://e-learning-responsive-magic.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/E-Learning-Landing-Page.git",
  },
  {
    title: "Online Job Marketplace Website Landing Page",
    image: "/placeholder.svg",
    liveLink: "https://modern-job-hub.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Online-Job-MarketPlace-Landing-Page.git",
  },
  {
    title: "Healthcare Website Landing Page",
    image: "/placeholder.svg",
    liveLink: "https://whimsical-responsive-theme.lovable.app/",
    sourceCode: "https://github.com/NebeyouMusie/Healthcare-Landing-Page.git",
  },
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