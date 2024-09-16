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

// Initialize the page by displaying data
document.addEventListener('DOMContentLoaded', function() {
    displayTechnologies(data.localityScanCheck.technologyList);
    displayOffers(data.offerList);
});

// ----------- Technology Functions --------------- //

// Display all technologies
function displayTechnologies(techList) {
    const techTable = document.querySelector('.tech-table');
    techTable.innerHTML = ''; // Clear any previous content

    techList.forEach(tech => {
        const techFeature = createTechnologyCard(tech);
        techTable.appendChild(techFeature);
    });
}

// Create individual technology card
function createTechnologyCard(tech) {
    const techFeature = document.createElement('div');
    techFeature.classList.add('tech-feature');

    const techIcon = createTechnologyIcon(tech.type);
    const techContent = createTechnologyContent(tech);

    techFeature.appendChild(techIcon);
    techFeature.appendChild(techContent);

    return techFeature;
}

function createTechnologyIcon(type) {
    const techIcon = document.createElement('span');
    techIcon.classList.add('material-icons', 'tech-feature-icon');

    const icons = {
        'OPTICAL': 'lightbulb',        // Icon for Optical Fiber
        'VDSLBONDING': 'link',         // Icon for Bonding
        'AIRFIX': 'satellite',         // Icon for AirFix (use satellite)
        'VDSLVECTORING': 'network_check', // Icon for Vectoring (Signal/Network check)
        'VDSL': 'cable',               // Icon for VDSL (Cable)
        '5G': 'phone_iphone',          // Icon for 5G (Phone)
        'MULTIMEDIA': 'movie',         // Icon for Multimedia (Movie icon)
        'DEFAULT': 'build'             // Default icon
    };

    techIcon.innerText = icons[type] || icons['DEFAULT'];
    return techIcon;
}

// Create technology content (title and details)
function createTechnologyContent(tech) {
    const techContent = document.createElement('div');

    const techTitle = document.createElement('div');
    techTitle.classList.add('tech-feature-title');
    techTitle.innerText = tech.type;

    const techDetail = document.createElement('div');
    techDetail.classList.add('tech-feature-detail');
    techDetail.innerText = `${tech.maxDownSpeed} Mbps - Priority: ${tech.priority} - Area: ${tech.priorityArea}`;

    techContent.appendChild(techTitle);
    techContent.appendChild(techDetail);

    return techContent;
}

// ----------- Offer Functions --------------- //

// Display all offers
function displayOffers(offerList) {
    const offerCardsContainer = document.getElementById('offerCards');
    offerCardsContainer.innerHTML = ''; // Clear existing cards

    offerList.forEach(offer => {
        const card = createOfferCard(offer);
        offerCardsContainer.appendChild(card);
    });
}

// Create individual offer card
function createOfferCard(offer) {
    const card = document.createElement('div');
    card.classList.add('offer-card');

    card.innerHTML = createOfferHeader(offer);

    const priceSection = createPriceSection(offer.prices);
    card.appendChild(priceSection);

    offer.highlightedProducts.forEach(product => {
        const highlightProduct = createHighlightProduct(product);
        card.appendChild(highlightProduct);
    });

    const orderButton = createOrderButton('Order online');
    const orderPhone = createOrderLink('Order by phone');
    card.appendChild(orderButton);
    card.appendChild(orderPhone);

    return card;
}

// Create offer header (with code and description)
function createOfferHeader(offer) {
    return `<h3>${offer.code}</h3><p>Explore the best plans with a range of benefits suited for you</p>`;
}

// Create price section
function createPriceSection(prices) {
    const priceSection = document.createElement('div');
    priceSection.classList.add('price');

    const priceType = prices[0].type === 'ACTIVATION' ? '/ activation' : '/ month';
    priceSection.innerHTML = `${prices[0].priceWithVAT} CZK <span>${priceType}</span>`;

    return priceSection;
}

// Create highlight product section
function createHighlightProduct(product) {
    const highlightProduct = document.createElement('div');
    highlightProduct.classList.add('highlight-product');

    const productLabel = document.createElement('span');
    productLabel.innerHTML = `Product Code: ${product.productCode}`;

    const productPrice = document.createElement('span');
    productPrice.classList.add('highlight-price');
    productPrice.innerHTML = product.price ? ` ${product.price.priceWithVAT} ${product.price.currencyCode}` : '';

    highlightProduct.appendChild(productLabel);
    highlightProduct.appendChild(productPrice);

    return highlightProduct;
}

// Create order button
function createOrderButton(text) {
    const orderButton = document.createElement('button');
    orderButton.classList.add('order-online');
    orderButton.innerText = text;
    return orderButton;
}

// Create order by phone link
function createOrderLink(text) {
    const orderPhone = document.createElement('a');
    orderPhone.href = '#';
    orderPhone.classList.add('order-phone');
    orderPhone.innerText = text;
    return orderPhone;
}

// ----------- Hero Search Functions --------------- //

// Handle search input (trigger on 'Enter' key)
function heroSearch(event) {
    if (event.key === 'Enter') {
        triggerHeroSearch();
    }
}

// Trigger the hero search action
function triggerHeroSearch() {
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('show-content');

    document.body.style.overflow = 'auto';
    mainContent.scrollIntoView({ behavior: 'smooth' });

    const enteredLocation = document.getElementById('heroSearchInput').value.trim();
    updateLocationDisplay(enteredLocation);
}

// Update location display in the main heading
function updateLocationDisplay(location) {
    const locationDisplay = document.getElementById('locationDisplay');
    locationDisplay.textContent = location || 'Your Area';
}
