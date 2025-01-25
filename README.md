# YouTube Netflix Clone

## Overview
This project is a Netflix-style video player application built with React and Tailwind CSS, integrating YouTube videos using the YouTube Data API. It allows users to browse trending videos, filter by categories, and search for specific videos. Videos can be played directly within the application using a modal player.

## Features
- Netflix-style UI/UX with a clean, dark-themed design.
- YouTube API integration for dynamic video content.
- Responsive layout for mobile, tablet, and desktop.
- Category filtering for organized video browsing.
- Search functionality with live video fetching.
- Modal-based video player with smooth animations.

## Tech Stack
- **React**: Frontend framework for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **YouTube API**: For fetching and displaying video data.
- **Lucide Icons**: For modern and sleek icons.

## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.
- A YouTube API key.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/youtube-netflix-clone.git
   cd youtube-netflix-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your YouTube API key:
   ```
   REACT_APP_YOUTUBE_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Folder Structure
- **public/**: Contains the `index.html` file and static assets.
- **src/components/**: Reusable components such as Navbar, Footer, VideoCard, VideoModal, etc.
- **src/pages/**: Page-level components like Home, Search, and Category.
- **src/utils/**: Utility functions for API interactions and constants.
- **tailwind.config.js**: Configuration file for Tailwind CSS.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is open-source and available under the MIT License.
