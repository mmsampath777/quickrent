# QuickRent

QuickRent is a responsive and visually appealing landing page for a mock startup that offers a platform to rent gadgets like laptops, cameras, and gaming consoles. This project demonstrates modern UI design and coding best practices using React.js.

## Features

- **Hero Banner**: A slider showcasing the platform's tagline and a call-to-action button.
- **Responsive Navbar**: Navigation links with a sign-up button.
- **Features Section**: Highlights key platform features with icons and descriptions.
- **Gadget Listing**: Displays available gadgets with sample pricing and "Rent Now" buttons.
- **Contact Us Form**: A form for users to get in touch, with fields for Name, Email, and Message.
- **Footer**: Simple copyright information.
- **Responsiveness**: Seamless display across desktop, tablet, and mobile devices.

## Approach

1. **Modular Design**: Each section of the page (e.g., Navbar, Hero Banner, Features) is implemented as a separate reusable React component.
2. **Modern UI**: Styled using Bootstrap and custom CSS for a clean and visually appealing layout.
3. **Animations**: Subtle hover effects and animations for an interactive user experience.
4. **Responsive Design**: Ensured compatibility with all screen sizes using Bootstrap's grid system and media queries.

## Project Structure

```plaintext
quickrent/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── HeroBanner.js
│   │   ├── Features.js
│   │   ├── FeatureCard.js
│   │   ├── GadgetListing.js
│   │   ├── GadgetCard.js
│   │   ├── ContactForm.js
│   │   └── Footer.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Setup and Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quickrent.git
   ```

2. Navigate to the project directory:
   ```bash
   cd quickrent
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.


## Screenshots




markdown
Copy code
## Screenshots

### Hero Banner
![Hero Banner Screenshot](/images/header.jpg)

### Gadget Listing
![Features Section Screenshot](/images/gadgets.jpg)

### Contact
![Gadget Listing Screenshot](/images/contact.jpg)



## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
