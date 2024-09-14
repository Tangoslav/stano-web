// Local JSON data stored in a variable
const data = {
  "localityScanCheck": {
    "apReturnCode": "0",
    "technologyList": [
      {
        "availableDate": "2000-01-01",
        "codeList": ["codeItem"],
        "maxDownSpeed": 1000,
        "priority": 1,
        "priorityArea": "GENERAL",
        "type": "OPTICAL"
      },
      {
        "availableDate": "2000-01-01",
        "codeList": ["codeItem"],
        "maxDownSpeed": 512,
        "priority": 5,
        "priorityArea": "GENERAL",
        "type": "VDSLBONDING"
      },
      {
        "availableDate": "2000-01-01",
        "codeList": ["codeItem"],
        "maxDownSpeed": 256,
        "priority": 8,
        "priorityArea": "GENERAL",
        "type": "AIRFIX"
      },
      {
        "availableDate": "2000-01-01",
        "codeList": ["codeItem"],
        "maxDownSpeed": 256,
        "priority": 10,
        "priorityArea": "GENERAL",
        "type": "VDSLVECTORING"
      },
      {
        "availableDate": "2000-01-01",
        "codeList": ["codeItem"],
        "maxDownSpeed": 100,
        "priority": 12,
        "priorityArea": "GENERAL",
        "type": "VDSL"
      },
      {
        "availableDate": "2000-01-01",
        "codeList": ["codeItem"],
        "maxDownSpeed": 0,
        "priority": 15,
        "priorityArea": "GENERAL",
        "type": "5G"
      },
      {
        "availableDate": "2000-01-01",
        "codeList": ["codeItem"],
        "maxDownSpeed": 0,
        "priority": 15,
        "priorityArea": "MULTIMEDIA",
        "type": "MULTIMEDIA"
      }
    ]
  },
  "offerList": [
    {
      "technologyList": [
        {
          "priority": 10,
          "type": "VDSLVECTORING"
        }
      ],
      "code": "OFFER_CODE_1",
      "groups": [
        {
          "code": "GROUP_EXPENSIVE",
          "priority": 1
        },
        {
          "code": "OGC",
          "priority": 6
        }
      ],
      "highlightedProducts": [
        {
          "groups": [
            {
              "code": "NEW_GROUP",
              "priority": 1
            }
          ],
          "price": {
            "chargingCode": "chargingCode1",
            "currencyCode": "CZK",
            "priceWithoutVAT": "100.00",
            "priceWithVAT": "120",
            "type": "ACTIVATION",
            "vat": "20.00",
            "vatRatePercent": "20",
            "vatType": "STANDARD"
          },
          "productCode": "productCode1"
        },
        {
          "groups": [],
          "productCode": "productCode2"
        }
      ],
      "prices": [
        {
          "originType": "PRODUCT",
          "priceWithVAT": "120",
          "type": "ACTIVATION",
          "chargingCode": "chargingCode1",
          "productCode": "productCode1"
        },
        {
          "originType": "PRODUCT",
          "priceWithVAT": "240",
          "type": "ACTIVATION",
          "chargingCode": "chargingCode2",
          "productCode": "productCode2"
        }
      ],
      "tags": ["tag1", "tag2"],
      "validFrom": "2000-02-09T10:20:30Z"
    },
    {
      "technologyList": [],
      "code": "OFFER_CODE_4",
      "groups": [
        {
          "code": "GROUP_EXPENSIVE",
          "priority": 1
        },
        {
          "code": "OGC",
          "priority": 6
        }
      ],
      "highlightedProducts": [
        {
          "groups": [
            {
              "code": "NEW_GROUP",
              "priority": 1
            }
          ],
          "price": {
            "chargingCode": "chargingCode1",
            "currencyCode": "CZK",
            "priceWithoutVAT": "100.00",
            "priceWithVAT": "120",
            "type": "ACTIVATION",
            "vat": "20.00",
            "vatRatePercent": "20",
            "vatType": "STANDARD"
          },
          "productCode": "productCode1"
        },
        {
          "groups": [],
          "productCode": "productCode2"
        }
      ],
      "prices": [
        {
          "originType": "PRODUCT",
          "priceWithVAT": "120",
          "type": "ACTIVATION",
          "chargingCode": "chargingCode1",
          "productCode": "productCode1"
        },
        {
          "originType": "PRODUCT",
          "priceWithVAT": "240",
          "type": "ACTIVATION",
          "chargingCode": "chargingCode2",
          "productCode": "productCode2"
        }
      ],
      "tags": ["tag1", "tag2"],
      "validFrom": "2000-02-09T10:20:30Z"
    },
    {
      "technologyList": [],
      "code": "OFFER_CODE_5",
      "groups": [
        {
          "code": "GROUP_EXPENSIVE",
          "priority": 1
        },
        {
          "code": "OGC",
          "priority": 6
        }
      ],
      "highlightedProducts": [
        {
          "groups": [
            {
              "code": "NEW_GROUP",
              "priority": 1
            }
          ],
          "price": {
            "chargingCode": "chargingCode1",
            "currencyCode": "CZK",
            "priceWithoutVAT": "100.00",
            "priceWithVAT": "120",
            "type": "ACTIVATION",
            "vat": "20.00",
            "vatRatePercent": "20",
            "vatType": "STANDARD"
          },
          "productCode": "productCode1"
        },
        {
          "groups": [],
          "productCode": "productCode2"
        }
      ],
      "prices": [
        {
          "originType": "PRODUCT",
          "priceWithVAT": "120",
          "type": "ACTIVATION",
          "chargingCode": "chargingCode1",
          "productCode": "productCode1"
        },
        {
          "originType": "PRODUCT",
          "priceWithVAT": "240",
          "type": "ACTIVATION",
          "chargingCode": "chargingCode2",
          "productCode": "productCode2"
        }
      ],
      "tags": ["tag1", "tag2"],
      "validFrom": "2000-02-09T10:20:30Z"
    }
  ]
};

// Function to display technologies
function displayTechnologies(data) {
    const techList = data.localityScanCheck.technologyList;
    const tbody = document.getElementById('technologyList');
    tbody.innerHTML = ''; // Clear existing content
    techList.forEach(tech => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${tech.type}</td>
            <td>${tech.availableDate}</td>
            <td>${tech.maxDownSpeed}</td>
            <td>${tech.priority}</td>
            <td>${tech.priorityArea}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Function to display offers as Material UI-like cards
function displayOffers(data) {
    const offerList = data.offerList;
    const offerCardsContainer = document.getElementById('offerCards');
    offerCardsContainer.innerHTML = ''; // Clear existing cards

    offerList.forEach(offer => {
        const card = document.createElement('div');
        card.classList.add('offer-card');

        // Card Header
        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');

        // Avatar
        const avatar = document.createElement('div');
        avatar.classList.add('avatar');
        avatar.textContent = offer.code.charAt(0); // First letter of the offer code
        cardHeader.appendChild(avatar);

        // Title and Subtitle
        const titleContainer = document.createElement('div');

        const offerCode = document.createElement('div');
        offerCode.classList.add('card-title');
        offerCode.textContent = offer.code;
        titleContainer.appendChild(offerCode);

        const validFrom = document.createElement('div');
        validFrom.classList.add('card-subtitle');
        validFrom.textContent = `Valid From: ${new Date(offer.validFrom).toLocaleDateString()}`;
        titleContainer.appendChild(validFrom);

        cardHeader.appendChild(titleContainer);

        card.appendChild(cardHeader);

        // Card Content
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        // Tags as Bubbles
        if (offer.tags && offer.tags.length > 0) {
            const tagsContainer = document.createElement('div');
            tagsContainer.classList.add('groups-container');

            offer.tags.forEach(tag => {
                const tagBubble = document.createElement('span');
                tagBubble.classList.add('tag-bubble');
                tagBubble.textContent = tag;

                tagsContainer.appendChild(tagBubble);
            });

            cardContent.appendChild(tagsContainer);
        }

        // Groups as Light Blue Bubbles
        if (offer.groups && offer.groups.length > 0) {
            const groupsContainer = document.createElement('div');
            groupsContainer.classList.add('groups-container');

            offer.groups.forEach(group => {
                const groupBubble = document.createElement('span');
                groupBubble.classList.add('group-bubble');
                groupBubble.textContent = group.code;

                groupsContainer.appendChild(groupBubble);
            });

            cardContent.appendChild(groupsContainer);
        }

        // Prices
        if (offer.prices && offer.prices.length > 0) {
            const prices = document.createElement('p');
            prices.innerHTML = offer.prices.map(price => `<strong>${price.type}:</strong> ${price.priceWithVAT} CZK`).join('<br>');
            cardContent.appendChild(prices);
        }

        card.appendChild(cardContent);

        // Card Actions
        const cardActions = document.createElement('div');
        cardActions.classList.add('card-actions');

        // Action Buttons (Icons)
        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('material-icons');
        favoriteButton.textContent = 'favorite_border';
        favoriteButton.setAttribute('aria-label', 'Add to favorites');
        cardActions.appendChild(favoriteButton);

        const shareButton = document.createElement('button');
        shareButton.classList.add('material-icons');
        shareButton.textContent = 'share';
        shareButton.setAttribute('aria-label', 'Share');
        cardActions.appendChild(shareButton);

        card.appendChild(cardActions);

        // Highlighted Products
        if (offer.highlightedProducts && offer.highlightedProducts.length > 0) {
            const highlightedProductsDiv = document.createElement('div');
            highlightedProductsDiv.classList.add('highlighted-products');

            offer.highlightedProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('highlighted-product-card');

                const productTitle = document.createElement('h4');
                productTitle.textContent = `Product Code: ${product.productCode}`;
                productCard.appendChild(productTitle);

                const productPrice = document.createElement('p');
                productPrice.textContent = `Price: ${product.price ? product.price.priceWithVAT + ' ' + product.price.currencyCode : 'N/A'}`;
                productCard.appendChild(productPrice);

                highlightedProductsDiv.appendChild(productCard);
            });

            card.appendChild(highlightedProductsDiv);
        }

        offerCardsContainer.appendChild(card);
    });
}

// Hero Search Functionality
function heroSearch(event) {
    if (event.key === 'Enter') {
        triggerHeroSearch();
    }
}

function triggerHeroSearch() {
    // Display the main content
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('show-content');

    // Reset overflow to allow scrolling
    document.body.style.overflow = 'auto';

    // Scroll to main content
    mainContent.scrollIntoView({ behavior: 'smooth' });

    // Get the entered location
    const enteredLocation = document.getElementById('heroSearchInput').value.trim();

    // Update the location display in the heading
    const locationDisplay = document.getElementById('locationDisplay');
    locationDisplay.textContent = enteredLocation || 'Your Area';
}

// Initialize the page by displaying data
document.addEventListener('DOMContentLoaded', function() {
    displayTechnologies(data);
    displayOffers(data);
});
