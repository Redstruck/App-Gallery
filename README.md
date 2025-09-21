# Matrix Portfolio - Nishad Raghuvanshi

An ultra-interactive, Matrix-themed portfolio website designed to showcase coding skills for college applications. This portfolio features smooth animations, terminal-style navigation, and a hacker aesthetic that will impress admissions officers.

## 🚀 Features

### 🎨 Design Highlights
- **Matrix Rain Background**: Animated falling code effect using your actual code snippets
- **Terminal-Style Navigation**: Command-line inspired navigation with hover effects  
- **Typewriter Hero Section**: Progressive text reveal with authentic terminal feel
- **Interactive Project Cards**: 3D hover effects and live preview capabilities
- **Glitch Effects**: Subtle animation touches throughout
- **Responsive Design**: Optimized for all devices

### 📱 Sections
1. **Hero Section**: Animated introduction with typewriter effect
2. **About Me**: Personal information, skills, and interactive progress bars
3. **Projects**: Filterable grid of all your applications with live links
4. **Contact**: Professional contact information with copy-to-clipboard functionality

## 🎯 Perfect for College Applications

This portfolio showcases:
- **Technical Skills**: Modern web development proficiency
- **Creativity**: Unique visual design and interactions
- **Attention to Detail**: Polished animations and user experience
- **Project Portfolio**: All your coding projects in one place

## 🔧 Customization Guide

### 1. Personal Information
Edit `/src/data/personal.ts` to update your details

### 2. Projects  
Your projects are automatically loaded from `/src/data/projects.ts`

### 3. Contact Links
Update social links in `/src/components/ContactSection.tsx`

### 4. Add Your Photo
1. Add your photo to `/public/` directory
2. Update the `photo` field in `personal.ts`

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/1ad27c38-358a-447c-b3ad-058ccd18f4be) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
