# Monova React Native Shoping App

This project is a **React Native (Expo)** implementation of the given assignment. The goal was to **recreate the exact UI and interaction flow** shown in the reference video and screenshots using **Expo Snack / Expo Go**.   It is built with **TypeScript**, **React Native Web**, and uses **mocked data** for the client-side state.

## 🚀 How to Run

### Expo Go (Mobile)

1. Clone this repository:

   ```sh
   git clone https://github.com/thesopan21/shoping.git
   cd shoping

2. Install dependencies:

   ```sh
    npm install

3. Start the project:

    ```sh
    npx expo start

4. Scan the QR code in your Expo Go app (Android/iOS).


## Expo Snack (Web)
[Open in Snack]()

Paste the code or use the provided Snack link: <your-snack-link-here>


## 📽️ Features Replicated (from Reference Video)
- Items Preview
  - Grid/list of items with images.
  - Category, color, and style badges.
  - Real-time filter chips with active pill states.
  - Empty/loading placeholders.

- Outfits & Collections
  - Scrollable outfit/collection cards.
  - Each card includes Top, Bottom, Footwear, and optional Outerwear image tiles.
  - Title and tag chips below each card.
  - Smooth swipe/scroll carousel transitions.

- Filters & Interactions
  - Toggleable filter chips with micro-interactions.
  - Active selections reflected instantly in the inventory view.
  - Responsive design for mobile layout.


## 🛠️ Tech Stack

- React Native (Expo)
- React Native Web (for Snack compatibility)
- TypeScript
- React Navigation (stack/tabs)
- Mock JSON Data (10–30 items & presets)

## 📂 Project Structure
(need to updated folder structure)
```text
  src/
    components/
      ItemCard.tsx
      OutfitCard.tsx
      FilterChip.tsx
      EmptyPlaceholder.tsx
    screens/
      ItemsScreen.tsx
      OutfitsScreen.tsx
      CollectionsScreen.tsx
    data/
      items.ts
      outfits.ts
    navigation/
      AppNavigator.tsx
  App.tsx
```

## 📌 Assumptions & Limitations

- No backend integration → all data is mocked.

- Animations → implemented with React Native Reanimated & Animated API.

- Responsiveness → optimized for mobile resolution (Expo Go / Snack Web).

- Design fidelity → closely matches provided video/screenshots (pixel spacing, colors, typography).


## 📎 Deliverables

- Expo Snack Link: [here]()

- GitHub Repository: [here](https://github.com/thesopan21/shoping)


## 👨‍💻 Author

Sopan Bhere – React Native Developer

[LinkedIn](https://www.linkedin.com/in/thesopan21) | [GitHub](https://github.com/thesopan21)