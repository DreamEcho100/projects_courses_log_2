function build() {
	const solarSystemPlantsCardsHolder = document.getElementById(
		'solar-system-plants-cards-holder'
	);

	let planet;
	for (planet of solarSystemData.planets) {
		const card = document.createElement('div');
		card.classList.add('card');

		// Card Image
		const cardMainImageImage = document.createElement('img');
		cardMainImageImage.classList.add('card-image');
		cardMainImageImage.src = planet.main_image.src;
		cardMainImageImage.alt = planet.main_image.alt;

		// Card Header
		const cardHeader = document.createElement('header');
		cardHeader.classList.add('card-header');
		cardHeader.innerHTML = `<h2>${planet.name}</h2>`;

		// Card Body
		const cardBody = document.createElement('div');
		cardBody.classList.add('card-body');

		// Card Body Extra Info
		const cardBodyExtraInfo = document.createElement('div');
		cardBodyExtraInfo.classList.add('extra-info');

		let info;
		for (info in planet.extra_info) {
			cardBodyExtraInfo.innerHTML += `
        <div class='info'>
          <strong>${info}: </strong><em>${planet.extra_info[info]}</em>
        </div>
      `;
		}

		// Card Body Description
		const cardBodyDescription = document.createElement('div');
		cardBodyDescription.classList.add('description');
		cardBodyDescription.innerHTML = `<br><p>${planet.description}</p>`;

		cardBody.append(cardBodyExtraInfo, cardBodyDescription);

		// Card Footer
		const cardFooter = document.createElement('footer');
		cardFooter.classList.add('card-footer');

		// Card Footer Main Header
		cardFooter.innerHTML += `
      <header class='footer-main-header'>
        <h4>Useful Links</h4>
      </header>
    `;

		// Card Footer Useful Links
		const cardUsefulLinks = document.createElement('div');
		cardUsefulLinks.classList.add('useful-links');

		let useful_link;
		for (useful_link of planet.useful_links) {
			cardUsefulLinks.innerHTML += `<a href='${useful_link.href}' title='${useful_link.title}" class='link'>${useful_link.title}</a>`;
		}

		cardFooter.append(cardUsefulLinks);

		card.append(cardMainImageImage, cardHeader, cardBody, cardFooter);
		solarSystemPlantsCardsHolder.appendChild(card);
	}
}

build();
/*
function build() {
	var solarSystemPlantsCardsHolder = document.getElementById(
		'solar-system-plants-cards-holder'
	);

	var planet;
	for (planet of solarSystemData.planets) {
		var card = document.createElement('div');
		card.classList.add('card');

		// Card Image
		var cardMainImageImage = document.createElement('img');
		cardMainImageImage.classList.add('card-image');
		cardMainImageImage.src = planet.main_image.src;
		cardMainImageImage.alt = planet.main_image.alt;

		// Card Header
		var cardHeader = document.createElement('header');
		cardHeader.classList.add('card-header');
		cardHeader.innerHTML = `<h2>${planet.name}</h2>`;

		// Card Body
		var cardBody = document.createElement('div');
		cardBody.classList.add('card-body');

		// Card Body Extra Info
		var cardBodyExtraInfo = document.createElement('div');
		cardBodyExtraInfo.classList.add('extra-info');

		var info;
		for (info in planet.extra_info) {
      cardBodyExtraInfo.innerHTML +=
        "<div class='info'>" +
        "<strong>" + info + "</strong><em>" + planet.extra_info[info] + "</em>" +
        "</div>";
		}

		// Card Body Description
		var cardBodyDescription = document.createElement('div');
		cardBodyDescription.classList.add('description');
    cardBodyDescription.innerHTML = "<br><p>" + planet.description + "</p>";

		cardBody.append(cardBodyExtraInfo, cardBodyDescription);

		// Card Footer
		var cardFooter = document.createElement('footer');
		cardFooter.classList.add('card-footer');

		// Card Footer Main Header
		cardFooter.innerHTML += 
      "<header class='footer-main-header'>" +
        "<h4>Useful Links</h4>" +
      "</header>";

		// Card Footer Useful Links
		var cardUsefulLinks = document.createElement('div');
		cardUsefulLinks.classList.add('useful-links');

		var useful_link;
		for (useful_link of planet.useful_links) {
			cardUsefulLinks.innerHTML += "<a href='" + useful_link.href + "' title='" + useful_link.title + "' target='_blank' class='link'>" + useful_link.title + "</a>";
		}

		cardFooter.append(cardUsefulLinks);

		card.append(cardMainImageImage, cardHeader, cardBody, cardFooter);
		solarSystemPlantsCardsHolder.appendChild(card);
	}
}

build();
*/
