# lamanblog-wisp

A lightweight blog platform built with **Laman.js** and powered by **Wisp CMS** for seamless content management.

## Features

- **Fast and Simple**: Built with Laman.js, ensuring a fast, lightweight, and efficient experience.
- **Content Management**: Powered by Wisp CMS for easy and flexible content creation and management.
- **SEO Optimized**: SEO-friendly structure out of the box.
- **Easy Deployment**: One-click deployment with LamanHub.

## Getting Started

### Installation

Install via [Laman.js showcase](https://lamanhub.site/showcase) with the following command:

1. Run the following command:

   ```bash
   npm init lamanjs my-blog --showcase lamanhub/lamanblog-wisp
   ```

2. Navigate into the project directory:

   ```bash
   cd my-blog
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

This will run the Laman.js development server. Open your browser and navigate to `http://localhost:3000`.

### Customization

You can customize your blog by editing the `./src/config.ts` file. Here's a breakdown of the key configuration options:

```ts
export default {
  title: "Akbar Aditama", // The title of your blog
  description: "Full Stack Developer", // A short description for SEO
  image: "/profile.jpeg", // Path to your profile image
  navlinks: [
    // Navigation links
    {
      link: "/",
      title: "Home",
    },
  ],
  socials: [
    // Social media profiles
    {
      link: "https://www.facebook.com/profile.php?id=100004231035942",
      title: "Facebook",
      icon: "bxl:facebook",
    },
    {
      link: "https://instagram.com/akbaraditamasp",
      title: "Instagram",
      icon: "bxl:instagram",
    },
    {
      link: "https://github.com/akbaraditamasp",
      title: "Github",
      icon: "bxl:github",
    },
    {
      link: "https://www.linkedin.com/in/akbar-aditama-supriyono-putra-14b00b161",
      title: "LinkedIn",
      icon: "bxl:linkedin",
    },
  ],
  wisp_blog_id: "cm192kote0000muzvatd87r81", // Your Wisp CMS blog identifier
};
```

#### Key Configurations:

- **Title**: Set your blog's title.
- **Description**: This short description will be used for SEO purposes.
- **Image**: The profile image displayed on the blog.
- **Navlinks**: Customize your navigation menu with links to different sections of the site.
- **Socials**: Add or edit your social media links.
- **Wisp Blog ID**: Your unique Wisp CMS blog identifier.

### Build

To build the project for production:

```bash
npm run build
```

This will output your static files into the `dist` folder, ready for deployment.

### Deployment

To deploy this blog to **LamanHub**, simply run:

```bash
npm run deploy
```

Your project will automatically be deployed to LamanHub with SSL and a custom domain option.

For more details, check the official documentation: [Laman.js Documentation](https://lamanjs.lamanhub.site).

## License

This project is licensed under the MIT License.
