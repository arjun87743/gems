export default function decorate(block) {

  console.log("hero block")
  console.log(block);
  const anchor = block.getElementsByTagName('a');
  console.log(anchor);


  //const heroBlock = document.querySelector('.hero.block');
  const pictureElement = document.querySelector('.hero.block div');
  const titleElement = document.querySelector('#hello-title');
  const descriptionElement = document.querySelector('.hero-wrapper > .hero.block > div:nth-child(3) > div > p');
  const linkElement = document.querySelector('.hero.block div a');

  // Create the hero container
  const heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-component');

  // Create and set up the title element
  const heroTitle = document.createElement('h1');
  heroTitle.textContent = titleElement.textContent;

  // Create and set up the description element
  const heroDescription = document.createElement('p');
  heroDescription.textContent = descriptionElement.textContent;

  // Create and set up the button element
  const heroButton = document.createElement('a');
  heroButton.href = linkElement.href;
  heroButton.textContent = 'Click here';  // You can customize the button text if needed
  heroButton.classList.add('hero-button');
  heroButton.setAttribute('role', 'button');

  // Append the title, description, and button to the hero container
  heroContainer.appendChild(pictureElement);
  heroContainer.appendChild(heroTitle);
  heroContainer.appendChild(heroDescription);
  heroContainer.appendChild(heroButton);

  console.log("hero container");
  console.log(heroContainer);
  // Replace the existing hero block with the new hero container
  // block.innerHTML = '';
  // block.appendChild(heroContainer);

}

