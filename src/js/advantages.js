import img1 from '../img/advantages/img1.png';
import img2 from '../img/advantages/img2.png';
import img3 from '../img/advantages/img3.png';
import img4 from '../img/advantages/img4.png';
import img5 from '../img/advantages/img5.png';
import img6 from '../img/advantages/img6.png';
import img7 from '../img/advantages/img7.png';
import img8 from '../img/advantages/img8.png';
import img9 from '../img/advantages/img9.png';
import img10 from '../img/advantages/img10.png';
import img11 from '../img/advantages/img11.png';
import img12 from '../img/advantages/img12.png';

const advantages = [
  {
    title: '1. EPIC STORY <br>CAMPAIGN:',
    alt: 'Epic Story Campaign',
    description: 'Experience an immersive fantasy world with look quests and powerful choices.',
    image: img1,
  },
  {
    title: '2. ROYAL PUZZLE <br>CHALLENGES:',
    alt: 'Royal Puzzle Challenges',
    description: 'Solve interactive logic puzzles, riddles, and artistic enigmas to progress.',
    image: img2,
  },
  {
    title: '3. MULTIPLE <br>PLAYSTYLES:',
    alt: 'Multiple Playstyles',
    description: 'Balance exploration, strategy, enhanced tactics, and decision-making.',
    image: img3,
  },
  {
    title: '4. KINGDOM <br>PROGRESSION:',
    alt: 'Kingdom Progression',
    description: 'Build, craft, settle, and manage resources, and watch your kingdom flourish.',
    image: img4,
  },
  {
    title: '5. MAGIC & ALCHEMY:',
    alt: 'Magic & Alchemy',
    description: 'Brew potions, cast spells, and collect relics to aid your journey.',
    image: img5,
  },
  {
    title: '6. CHARMING <br>CHARACTERS:',
    alt: 'Charming Characters',
    description: 'Meet charming characters — all with their own roles in your story.',
    image: img6,
  },
  {
    title: '7. BEAUTIFUL FANTASY <br>ART:',
    alt: 'Beautiful Fantasy Art',
    description: 'Gorgeous hand-drawn environments and animations bring the world to life.',
    image: img7,
  },
  {
    title: '8. CHOOSE YOUR PATH:',
    alt: 'Choose Your Path',
    description: 'Dialogue choices and actions affect the storyline and unlock alternate endings.',
    image: img8,
  },
  {
    id: '11',
    title: '',
    alt: 'Chest',
    description: '',
    image: img9,
  },
  {
    title: '9. SIDE QUESTS & <br>SECRETS:',
    alt: 'Side Quests & Secrets',
    description: 'Hidden collectibles, optional challenges, and legendary relics await.',
    image: img10,
  },
  {
    id: '12',
    title: '',
    alt: 'Green',
    description: '',
    image: img11,
  },
  {
    title: '10. FREE-TO-PLAY <br>ADVENTURE:',
    alt: 'Free-to-Play Adventure',
    description: 'Explore the main campaign at no cost, with optional bonus content.',
    image: img12,
  },
];

const advantagesList = document.querySelector('.grid');


const formattedAdvantages = advantages.map(item => {
  if (!item.title || !item.title.includes('<br>')) return item;

  const [firstPart, secondPart] = item.title.split('<br>');
  return {
    ...item,
    title: `${firstPart}<br><span class="indented">${secondPart}</span>`,
  };
});

function renderAdvantages(items) {
  const isDesktop = window.innerWidth >= 768;
  const markup = items
    .map(({ id, title, alt, description, image }) => {
      const isNoInfo = !title && !description;
     

      if (isNoInfo && !isDesktop) return '';
     
      

      return `
        <li class="advantages-item${isNoInfo ? 'no-info' : ''}">
          <img class="advantages-card-img"
            src="${image}" 
            alt="${alt}" 
            width="248" 
            height="140" 
          />
          ${
            !isNoInfo
              ? `<div class="advantages-info">
                  <h3 class="advantages-card-title">${title}</h3>
                  <p class="advantages-tech">${description}</p>
                </div>`
              : ''
          }
        </li>`;
    })
    .join('');

  advantagesList.insertAdjacentHTML('beforeend', markup);
}

renderAdvantages(formattedAdvantages);
