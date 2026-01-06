<div align="center">

# 🎮 Poketex

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" width="200" alt="Pikachu"/>

### ⚡ A beautiful and interactive Pokémon explorer app

[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61dafb?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~54.0-000020?style=for-the-badge&logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

Browse through Pokémon, search for your favorites, and view detailed information about each creature!

[Features](#-features) • [Installation](#-installation) • [Screenshots](#-screenshots) • [Contributing](#-contributing)

</div>

---

## ✨ Features

- 📱 **Cross-platform** - Works on iOS, Android, and Web
- 🔍 **Real-time Search** - Instantly search through Pokémon by name
- 🎨 **Type-based Colors** - Each Pokémon card displays with colors based on its type
- 📊 **Detailed Information** - View height, weight, types, and sprites for each Pokémon
- 🎯 **Smooth Navigation** - Seamless navigation between list and detail views
- 🌐 **PokeAPI Integration** - Fetches real-time data from the official Pokémon API

## 🛠️ Tech Stack

<div align="center">

| Technology | Description |
|:----------:|:------------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40"/> | **React Native** (0.81.5) - Cross-platform framework |
| <img src="https://raw.githubusercontent.com/expo/expo/main/.github/resources/banner.png" width="40"/> | **Expo** (~54.0) - Development platform |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40"/> | **TypeScript** (5.9.2) - Type-safe JavaScript |
| 🧭 | **Expo Router** (6.0.21) - File-based navigation |
| 🌐 | **PokeAPI** - Real-time Pokémon data |
| 🎨 | **React Native Vector Icons** - Beautiful icons |

</div>

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
<div align="center">

The app uses distinct colors for each Pokémon type:

| Type | Color | Hex |
|:----:|:-----:|:---:|
| 🌿 Grass | ![#78C850](https://via.placeholder.com/100x30/78C850/78C850.png) | `#78C850` |
| 🔥 Fire | ![#F08030](https://via.placeholder.com/100x30/F08030/F08030.png) | `#F08030` |
| 💧 Water | ![#6890F0](https://via.placeholder.com/100x30/6890F0/6890F0.png) | `#6890F0` |
| ⚡ Electric | ![#F8D030](https://via.placeholder.com/100x30/F8D030/F8D030.png) | `#F8D030` |
| 🐛 Bug | ![#A8B820](https://via.placeholder.com/100x30/A8B820/A8B820.png) | `#A8B820` |
| 🧚 Fairy | ![#EE99AC](https://via.placeholder.com/100x30/EE99AC/EE99AC.png) | `#EE99AC` |
| 👻 Ghost | ![#705898](https://via.placeholder.com/100x30/705898/705898.png) | `#705898` |
| 🧊 Ice | ![#98D8D8](https://via.placeholder.com/100x30/98D8D8/98D8D8.png) | `#98D8D8` |

</div>F08030`
- 💧 Water: `#6890F0`
- ⚡ Electric: `#F8D030`
- 🐛 Bug: `#A8B820`
- 🧚 Fairy: `#EE99AC`
- And more...

## 📱 Screenshots

<div align="center">

### 🎬 App Demo

<p>
  <img src="https://via.placeholder.com/300x600/78C850/ffffff?text=Home+Screen" width="250" alt="Home Screen"/>
  <img src="https://via.placeholder.com/300x600/F08030/ffffff?text=Search" width="250" alt="Search"/>
  <img src="https://via.placeholder.com/300x600/6890F0/ffffff?text=Details" width="250" alt="Details Screen"/>
</p>

> 💡 **Tip:** Replace placeholders with actual app screenshots or GIFs

</div>

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<div align="center">

Created by **[@tamarkhuskivadze](https://github.com/tamarkhuskivadze)**

[![GitHub](https://img.shields.io/badge/GitHub-TamarCoder-181717?style=for-the-badge&logo=github)](https://github.com/TamarCoder)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail)](mailto:your.email@example.com)

---

### ⭐ Star this repo if you found it helpful!

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" width="50"/>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif" width="50"/>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif" width="50"/>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif" width="50"/>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif" width="50"/>

**Made with ❤️ and ⚛️ React Native**

</div>
## 🙏 Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data
- [Expo](https://expo.dev) for the amazing development platform
- All Pokémon fans around the world!

## 📧 Contact

Created by [@tamarkhuskivadze](https://github.com/tamarkhuskivadze)

---

**Made with ❤️ and ⚛️ React Native**
