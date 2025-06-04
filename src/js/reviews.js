
import img1 from '../img/reviews/features/img1.png';
import img2 from '../img/reviews/features/img2.png';
import img3 from '../img/reviews/features/img3.png';
import img4 from '../img/reviews/features/img4.png';
import img5 from '../img/reviews/features/img5.png';
import img6 from '../img/reviews/features/img6.png';
import img7 from '../img/reviews/features/img7.png';


import rating from '../img/reviews/reviews/rating.png';
import images1 from '../img/reviews/reviews/images1.png';
import images2 from '../img/reviews/reviews/images2.png';
import images3 from '../img/reviews/reviews/images3.png';
import images4 from '../img/reviews/reviews/images4.png';
import images5 from '../img/reviews/reviews/images5.png';
import images6 from '../img/reviews/reviews/images6.png';


const features = [
    {
        title: "GUIDE THE QUEEN",
        description: "Navigate rich environments, interact with characters, and manage quests.",
        img: img1,
    },
    {
        title: "STORY ChOISES MATTER: ",
        description: "Select dialogue and actions that influence the fate of your kingdom.",
        img: img2
    },
    {
        title: "PUZZLE AAVANTURE: ",
        description: "From rotating runes to mirror mazes, every obstacle is a challenge to your wits.",
        img: img3
    },
    {
        title: "CASTLE UPGREIDS: ",
        description: "Restore your throne room, royal gardens, and magical towers over time.",
        img: img4
    },
    {
        title: "CRAFT & COLLECT: ",
        description: "Gather rare ingredients to craft royal items, elixirs, and mystical gear.",
        img: img5
    },
    {
        title: "MYSTIC ALLIES:",
        description: "Befriend loyal guardians who join you in your missions and battles.",
        img: img6
    },
    {
        title: "SEASONAL EVENTS: ",
        description: "Participate in royal festivals and magical events with limited-time rewards.",
        img: img7
    }
];



const reviews = [
    {
        name: "ISABELLA V.",
        review: "Absolutely magical! The storyline, the puzzles, the art — I feel like I’m reading a living fantasy book!",
        rating: rating,
        img: images1
    },
    {
        name: "LIAM J.",
        review: "A refreshing mix of decision-making and puzzles. Every choice feels meaningful.",
        rating: rating,
        img: images2
    },
    {
        name: "AURORA S.",
        review: "The visuals are stunning, and the music gives me chills. A top-tier fantasy game!",
        rating: rating,
        img: images3
    },
    {
        name: "NATHAN C.",
        review: "Loved how the queen isn’t just royal but also active, wise, and powerful. Amazing concept!",
        rating: rating,
        img: images4
    },
    {
        name: "SOFIA L.",
        review: "Crafting and castle building kept me engaged for hours. The quests are beautifully written.",
        rating: rating,
        img: images5
    },
    {
        name: "ELIAS M.",
        review: "It feels like a hidden gem in mobile gaming — deep, relaxing, and rewarding.",
        rating: rating,
        img: images6
    }
];

const featuresList = document.querySelector('.section-features-list');
const reviewsList = document.querySelector('.section-reviews-list');

function renderFeatures(items) { 
    const marcup = items.map(({ title, description, img }) => { 
        return `
        <li class="feature-item">
        <img src="${img}" alt="${title}" class="feature-image">
      <div class="feature-content">
        <h3 class="feature-title">${title}</h3>
        <p class="feature-description">${description}</p> 
        </div>  
        </li> `;
    }).join('');

    featuresList.innerHTML = marcup;
}
renderFeatures(features);

function renderReviews(items) { 
    const marcup = items.map(({ name, review, rating, img }) => { 
        return `
        <li class="review-item">
        <img src="${img}" alt="${name}" class="review-image">
        <div class="review-rating">
         <h3 class="review-name">${name}</h3>
         <img src="${rating}" alt="Rating" class="review-rating">
        </div>
        <p class="review-text">"${review}"</p>
        </li>
        `    ;
    }).join('');

    reviewsList.innerHTML = marcup;
}
renderReviews(reviews);