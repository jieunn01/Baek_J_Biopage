const sorts = [
{
	type: 'Designer',
	image: 'images/design.png',
	desc: "I was born in Korea and I am learning English as a second language. To tell you a story about my dream of becoming a designer, Ever since I was young, I liked to make something with my hands. I like drawing, crafting, coloring, and especially using all the colors in the world. Maybe that is why I liked paints and palettes, never learned art, but I liked to see and imitate cartoons and paintings that I liked, but I never learned professionally, so I chose another major, and I dreamed of re-entering Canada when I was a sophomore in another university. I think it is amazing to make what I thought on a computer, and it is worth it."},
{
	type: 'Developer',
	image: 'images/dev.png',
	desc: " The first time I encountered coding subject was when I was in the 8th grade of high school. It was interesting to learn an unknown computer language and I had fun learning it. It was interesting that even one web page was created by mixing various programs and languages. It is still unfamiliar and difficult for me, but I think I should try until I get used to it someday. I wish I could make a better computer out of what I drew from my head. The coding that I learn for the first time sometimes makes me tired, but I want to work harder because I have a sense of accomplishment. I hope the day comes when I can understand things more than now."

	}]

let inFormation = document.querySelectorAll('.type'),
	topPage = document.querySelector('#page'),
	closing = document.querySelector('.close'),
	bioType = document.querySelector('#title_work'),
	bioPics = document.querySelector('#design_'),
	bioDesc = document.querySelector('#desc');

	inFormation.forEach((type, i) => 
	{type.addEventListener('click', Method, false)
	 });

function Method() {
	pageInfo = sorts[this.dataset.id];
	bioType.innerHTML = pageInfo.type;
	bioPics = pageInfo.image;
	bioDesc.innerHTML= pageInfo.desc;
	topPage.classList.toggle('upper_page');
	// debugger;

}

closing.addEventListener('click', () => {
	topPage.classList.toggle('upper_page');
})
	