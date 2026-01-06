# 🎮 Poketex

A beautiful and interactive Pokémon explorer app built with React Native and Expo. Browse through Pokémon, search for your favorites, and view detailed information about each creature.

## ✨ Features

- 📱 **Cross-platform** - Works on iOS, Android, and Web
- 🔍 **Real-time Search** - Instantly search through Pokémon by name
- 🎨 **Type-based Colors** - Each Pokémon card displays with colors based on its type
- 📊 **Detailed Information** - View height, weight, types, and sprites for each Pokémon
- 🎯 **Smooth Navigation** - Seamless navigation between list and detail views
- 🌐 **PokeAPI Integration** - Fetches real-time data from the official Pokémon API

## 🛠️ Tech Stack

- **Framework:** React Native (0.81.5)
- **Platform:** Expo (~54.0)
- **Language:** TypeScript (5.9.2)
- **Navigation:** Expo Router (6.0.21)
- **API:** [PokeAPI](https://pokeapi.co/)
- **Icons:** React Native Vector Icons
- **HTTP Client:** Axios

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/poketex.git
   cd poketex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Run on your preferred platform:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser
   - Scan the QR code with Expo Go app on your phone

## 🚀 Scripts

```bash
npm start          # Start Expo development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web browser
npm run lint       # Run ESLint
```

## 📂 Project Structure

```
poketex/
├── app/
│   ├── _layout.tsx      # Root layout and navigation setup
│   ├── index.tsx        # Home screen with Pokémon list
│   └── details.tsx      # Detail screen for individual Pokémon
├── components/
│   └── Search.tsx       # Search input component
├── constants/
│   └── theme.ts         # Theme colors and fonts
├── assets/
│   └── images/          # Image assets
└── package.json         # Dependencies and scripts
```

## 🎨 Features Breakdown

### Home Screen
- Displays a grid of Pokémon cards
- Each card shows the Pokémon's name, type, and both front and back sprites
- Cards are color-coded based on the Pokémon's primary type
- Real-time search functionality

### Details Screen
- Shows detailed information about selected Pokémon
- Displays name, type(s), height, and weight
- Shows both front and back sprites
- Presented as a modal sheet with grab handle

### Search Component
- Reusable search input with icon
- Real-time filtering of Pokémon list
- Clean and intuitive UI

## 🎯 Type Colors

The app uses distinct colors for each Pokémon type:
- 🌿 Grass: `#78C850`
- 🔥 Fire: `#F08030`
- 💧 Water: `#6890F0`
- ⚡ Electric: `#F8D030`
- 🐛 Bug: `#A8B820`
- 🧚 Fairy: `#EE99AC`
- And more...

## 📱 Screenshots

> Add your app screenshots here

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data
- [Expo](https://expo.dev) for the amazing development platform
- All Pokémon fans around the world!

## 📧 Contact

Created by [@tamarkhuskivadze](https://github.com/tamarkhuskivadze)

---

**Made with ❤️ and ⚛️ React Native**
