# Hearth Frontend Engineer Take Home Challenge

Hello and welcome, I took this opportunity to really dive deep into Next.JS App Router, it's surrounding patterns. I must say, huge fan! 🙌

I created a loom video describing my implementation [here](https://www.loom.com/share/f42bbf60c2e44108a62a62ce72878ca5?sid=cb6dd473-3006-49e3-b6fb-df78e4ac1c76)

## Overview

In a nutshell 🥜 this is is a responsive web app designed to showcase a contact table with detailed views of individual contacts. This app leverages the powerful features of Next.js and Tailwind CSS to provide a seamless, performant, and visually appealing user experience. The contact details include a "temperature" indicator, displaying a percentage score and a colorful blurred background that changes dynamically based on the score. Mock avatars are generated using an HTTP API from Dicebear.com that generate an avatar based off the first name of the contact.

### Features

- **Responsive Design**: Optimized for both desktop and mobile views.
- **Contact Table**: Displays all contacts from mock data.
- **ContactDetailCard**: Shows all available information for a selected contact in a popup/modal with a colorful background.
- **Temperature Indicator**: Highlights a contact's temperature score visually with an animated number and background color.
- **Animations**: Smooth fade-in effect usign tailwind, and bouncy physics-based animations from React Spring.
- **Reusability**: Modular components like `TemperatureDisplay` can be easily reused or extended.

## Technologies Used

- **Next.js 13**: Advanced web framework using App Router.
- **Tailwind CSS**: Modern utility-first CSS framework.
- **TypeScript**: Strictly typed JavaScript for more reliable and maintainable code.
- **SCSS**: Custom styles combined with Tailwind utilities.
- **React-Spring**: Really cool Animation Library for naturally fluid animations.
- **Jest**: Unit tests written with Jest/ RTL

Thank you for Reviewing! 🤝
-Justin Weisberg
