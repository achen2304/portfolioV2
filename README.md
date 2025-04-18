# Portfolio V2

A modern, responsive portfolio website built with React, Tailwind CSS, and DaisyUI. This portfolio showcases projects, certifications, and professional experience with a clean, minimalist design.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🎭 Smooth animations and transitions
- 🖼️ Project showcase with interactive carousel
- 📄 Professional experience timeline
- 📧 Contact form with email integration
- 🌙 Dark mode support
- 🚀 Optimized performance
- 🔍 SEO friendly

## Tech Stack

- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **UI Components:** DaisyUI
- **Icons:** React Icons
- **Routing:** React Router
- **Form Handling:** EmailJS
- **Deployment:** Vercel

## Project Structure

```
src/
├── components/         # Reusable components
├── pages/             # Page components
├── data/              # Content data
├── utils/             # Utility functions
├── assets/            # Static assets
└── App.jsx            # Main application component
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolioV2.git
cd portfolioV2
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Deployment

The project is configured for deployment on Vercel. To deploy:

1. Push your changes to your GitHub repository
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

## Customization

### Content

Edit the content in `src/data/content.json` to update:

- Projects
- Certifications
- Experience
- Skills
- Contact information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Typography in `src/index.css`
- Component styles in individual component files

### Images

Add your images to `public/images/` and update the paths in `content.json`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
