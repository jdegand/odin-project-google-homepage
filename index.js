let phrases = [
  "I'm Feeling Lucky ",
  "I'm Feeling Artistic ",
  "I'm Feeling Funny ",
  "I'm Feeling Hungry ",
  "I'm Feeling Puzzled ",
  "I'm Feeling Stellar ",
  "I'm Feeling Curious ",
  "I'm Feeling Adventurous ",
  "I'm Feeling Playful ",
  "I'm Feeling Doodley"
];

let luckyBtn = document.getElementById('lucky-btn');

function randomPhrase(){
  let index = Math.floor(Math.random() * (phrases.length - 1))
  luckyBtn.innerText = phrases[index];
}

luckyBtn.addEventListener('mouseover', randomPhrase)
