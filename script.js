/* Base Styles */
body, html {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    color: #002B7F; /* O2 Primary Blue */
    scroll-behavior: smooth;
    background-color: #F5F7FA; /* Light grey background for contrast */
    overflow: hidden;
    width: 100%;
    height: 100%;
}

/* Hide scrollbars but maintain functionality */
body {
    overflow: auto;
}

/* For Chrome, Safari, and Opera */
body::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge, and Firefox */
body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
}

/* Hero Section */
.hero {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(225deg, #00BFFF 0%, #002B7F 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.hero-content {
    text-align: center;
    color: #FFFFFF;
    padding: 20px;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 40px;
    user-select: none;
    cursor: default;
}

.hero-search {
    position: relative;
    display: inline-block;
}

.hero-search-input {
    width: 400px;
    max-width: 80vw;
    padding: 15px 20px;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    outline: none;
    transition: width 0.4s ease;
}

.hero-search-input:focus {
    width: 500px;
    max-width: 90vw;
}

.hero-search-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #0076CE;
    font-size: 28px;
    cursor: pointer;
}

.hero-search-button:focus {
    outline: none;
}

/* Main Content */
main {
    display: none;
    padding: 40px;
}

.show-content {
    display: block;
}

/* Section Styling */
.section {
    margin: 40px 20px;
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #002B7F;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #E6F2FF;
    font-size: 24px;
}

/* Table Styles */
.tech-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

.tech-table th, .tech-table td {
    padding: 12px;
    text-align: left;
    position: relative;
}

.tech-table th {
    background-color: #002B7F;
    color: #FFFFFF;
    font-weight: 600;
    text-transform: uppercase;
}

.tech-table td {
    background-color: #FFFFFF;
    color: #424242;
    border-bottom: 1px solid #E0E0E0;
}

.tech-table tbody tr:last-child td {
    border-bottom: none;
}

.tech-table tbody tr:nth-child(odd) td {
    background-color: #F9FBFD;
}

.tech-table tbody tr:hover td {
    background-color: #E6F2FF;
    cursor: pointer;
}

/* Offer Cards */
.offer-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.offer-card {
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    width: calc(33% - 20px);
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.offer-card .card-header {
    display: flex;
    align-items: center;
    padding: 16px;
    background: linear-gradient(90deg, #E6F2FF 0%, #F0F8FF 100%);
}

.offer-card .avatar {
    background-color: #0076CE;
    color: #FFFFFF;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin-right: 16px;
}

.offer-card .card-title {
    font-size: 20px;
    font-weight: 600;
    color: #002B7F;
}

.offer-card .card-subtitle {
    font-size: 14px;
    color: #757575;
}

.offer-card .card-content {
    padding: 16px;
    font-size: 14px;
    color: #424242;
}

.offer-card .card-actions {
    display: flex;
    justify-content: flex-start;
    padding: 8px 16px;
    border-top: 1px solid #E0E0E0;
}

.offer-card .card-actions button {
    background: none;
    border: none;
    color: #0076CE;
    cursor: pointer;
    margin-right: 8px;
    font-size: 24px;
    display: inline-flex;
    align-items: center;
    transition: color 0.3s;
}

.offer-card .card-actions button:hover {
    color: #005B99;
}

/* Highlighted Products Section */
.offer-card .highlighted-products {
    padding: 16px;
    background: linear-gradient(90deg, #F0F8FF 0%, #E6F2FF 100%);
    border-top: 1px solid #E0E0E0;
}

.highlighted-product-card {
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.highlighted-product-card h4 {
    margin: 0 0 8px 0;
    color: #002B7F;
    font-size: 16px;
}

.highlighted-product-card p {
    margin: 0;
    font-size: 14px;
    color: #424242;
}

/* Groups as Light Blue Bubbles */
.groups-container {
    margin-top: 10px;
}

.group-bubble, .tag-bubble {
    display: inline-block;
    padding: 6px 12px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 20px;
    background-color: #E6F2FF;
    color: #002B7F;
    font-size: 12px;
    font-weight: bold;
}

/* No Offers Message */
.no-offers {
    font-size: 18px;
    color: #757575;
    text-align: center;
    margin-top: 20px;
}

/* Footer Styles */
.footer {
    text-align: center;
    padding: 10px;
    font-size: 12px;
    color: #002B7F;
    opacity: 0.5;
    position: fixed;
    bottom: 20px;
    width: 100%;
    background-color: transparent;
    user-select: none;
    cursor: default;
}

.footer p {
    margin: 0;
    user-select: none;
    cursor: default;
}

/* Even Subtler Credits */
.subtle-credits {
    text-align: center;
    padding: 5px;
    font-size: 10px;
    color: #002B7F;
    opacity: 0.3;
    position: fixed;
    bottom: 5px;
    width: 100%;
    background-color: transparent;
    user-select: none;
    cursor: default;
}

/* Responsive Design */
@media (max-width: 900px) {
    .offer-card {
        width: calc(50% - 20px);
    }
}

@media (max-width: 600px) {
    .offer-card {
        width: 100%;
    }
    .hero h1 {
        font-size: 32px;
    }
    .hero-search-input {
        width: 80vw;
    }
    .hero-search-input:focus {
        width: 90vw;
    }
    .section {
        margin: 20px 10px;
        padding: 15px;
    }
}
