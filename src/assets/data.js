import reacticon from './react.svg'
import js from './javascriptthumb.jpg'
import lsmTheme from './lsm-theme.png'
import lnkIN from './lnk-theme.png'
import foodDeliveryImage from './foodDelevery-image.png'
import blinkitImage from './blinkit-Image.png'
import ecommerceLaravelImage from './laravelShop.png'
import spamClassifierImage from './sms-spam.png'
import spotifyImage from './spotify-clone.png'
import dashboardImage from './admin-dash-theme.png'
import pricriptoTheme from './pricripto-theme.png'

export const skills = [
    { title: "React", icon: reacticon},
    { title: "NodeJS", icon: reacticon },
    { title: "Express", icon: reacticon},
    { title: "MongoDB", icon: reacticon},
    { title: "MySql", icon: reacticon},
    { title: "Git", icon: reacticon },
    { title: "C/C++", icon: reacticon },
    { title: "Python", icon: reacticon },
    { title: "Java", icon: reacticon },
    { title: "DSA", icon: reacticon },
]

export const projects = [
    {
      title: "Learning Management System",
      description: "A platform for managing courses, students, and instructors with features like quizzes, progress tracking, and certification.",
      technologies: ["React", "Node.js", "MongoDB", "Express",  "stripe", "clerk"],
      image: lsmTheme,
      link: "https://lms-frontend-ebon-beta.vercel.app/",
      gitLink: "https://github.com/Rammuwel/LMS",
    },
    {
      title: "Doctor's Appointment System",
      description: "A complete appointment booking system for doctors and patients with real-time scheduling, secure payments via Razorpay, and image/document upload using Cloudinary.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary"],
      image: pricriptoTheme,
      link: "https://prescripto-frontend-mv9f.onrender.com",
      gitLink: "https://github.com/Rammuwel/prescripto",
    },
    {
      title: "LinkedIn Clone",
      description: "A real-time professional networking platform featuring user authentication, post sharing, messaging, and notifications using Socket.io.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
      image: lnkIN,
      link: "https://linkedin-clone-frontend-f6p8.onrender.com/",
      gitLink: "https://github.com/Rammuwel/LinkedIn-clone",
    },
    {
      title: "Admin Dashboard",
      description: "An interactive and modern admin dashboard for managing users, analytics, and system metrics. Integrated dynamic data visualizations using Recharts and smooth UI animations with Framer Motion for an enhanced user experience.",
      technologies: ["React", "Recharts", "Framer Motion"],
      image: dashboardImage,
      link: "https://react-admin-dashboard-eight-psi.vercel.app/", 
      gitLink: "https://github.com/Rammuwel/react-admin-dashboard",
    }, 
    {
      title: "SMS Spam Classifier",
      description: "A real-time machine learning web app to classify text messages as Spam or Not Spam. Built with Streamlit and deployed on Render, it uses a trained Naive Bayes model and TF-IDF vectorizer for prediction. NLP preprocessing includes stemming, tokenization, and stopword removal using NLTK.",
      technologies: ["Python", "Streamlit", "Scikit-learn", "NLTK", "Render"],
      image: spamClassifierImage, 
      link: "https://sms-spam-classifier-yrc0.onrender.com/", 
      gitLink: "https://github.com/Rammuwel/sms-spam-classifier", 
    },    
    {
      title: "E-commerce Website",
      description: "A fully-featured e-commerce platform built using Laravel, offering user authentication, product management, shopping cart, order tracking, and secure payment integration. Admin panel allows category and inventory control. Designed with responsiveness and user experience in mind.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      image: ecommerceLaravelImage, 
      link: "https://github.com/Rammuwel/backup_laravel_online_shop", 
      gitLink: "https://github.com/Rammuwel/backup_laravel_online_shop",
    },
    {
      title: "Spotify Clone",
      description: "A sleek music streaming interface replicating core features of Spotify, including responsive UI, play/pause controls, progress tracking, and playlist navigation — built purely with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: spotifyImage, 
      link: "https://rammuwel.github.io/spotify-_clone/index.html",
      gitLink: "https://github.com/Rammuwel/spotify-_clone", 
    },       
    
    {
      title: "Blinkit Clone",
      description: "A front-end clone of Blinkit, simulating an instant grocery delivery service. Features include responsive product listings, category filtering, cart functionality, and a clean, modern UI built without any frameworks.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: blinkitImage, 
      link: "https://rammuwel.github.io/blinkit_clone/", 
      gitLink: "https://github.com/Rammuwel/blinkit_clone", 
    },
    {
      title: "Food Delivery App UI",
      description: "A visually appealing front-end design for a food delivery platform, inspired by apps like Zomato and Swiggy. Features include a homepage with popular dishes, restaurant listings, food categories, and a modern, fully responsive layout.",
      technologies: ["HTML", "CSS"],
      image: foodDeliveryImage, 
      link: "https://rammuwel.github.io/foodybaba/", 
      gitLink: "https://github.com/Rammuwel/foodybaba", 
    },
    
    
  
  ];
  


