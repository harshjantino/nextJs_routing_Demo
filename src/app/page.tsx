import { Inter } from 'next/font/google' // Import the Inter font from Google Fonts
import App from "./App"; // Import the App component

// Load the Inter font with the "latin" character subset
const inter = Inter({ subsets: ['latin'] })

// Define the Home component as the default export
export default function Home() {
  return (
    <main>
      <div>
        <App /> {/* Render the App component */}
      </div>
    </main>
  )
}
