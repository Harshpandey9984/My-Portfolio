# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases both design and development work with a beautiful split-screen layout and modern UI components.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 🔍 Portfolio filtering by category
- 📝 Blog section
- 📬 Contact form
- 🔗 Social media integration

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   ├── blog/
│   ├── portfolio/
│   ├── contact/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navigation.tsx
├── public/
│   └── images/
└── styles/
    └── globals.css
```

## Customization

1. Update the content in `app/page.tsx` to modify the homepage
2. Edit portfolio items in `app/portfolio/page.tsx`
3. Modify blog posts in `app/blog/page.tsx`
4. Update contact form handling in `app/api/contact/route.ts`
5. Customize the navigation in `components/Navigation.tsx`

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 