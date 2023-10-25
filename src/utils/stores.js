import { writable } from "svelte/store";

const localSettings = JSON.parse(localStorage.getItem("userSettings"));

// to store the current page
export const currentPageStore = writable("home");

// to store the chapter number
export const chapterNumberStore = writable(1);

// to store the chapter data fetched from the API
export const chapterDataStore = writable(null);

// to store the local user settings from LocalStorage
export const userSettingsStore = writable(JSON.stringify(localSettings));

// to store the word type - Uthmani, IndoPak, etc...
export const wordTypeStore = writable(localSettings.displaySettings.wordType);

// to store the word translation
export const wordTranslationStore = writable(localSettings.translations.word);

// to store the verse translations
export const verseTranslationsStore = writable(localSettings.translations.verse);

// to store the display type - WBW, Normal, Continuous, etc...
export const displayTypeStore = writable(localSettings.displaySettings.displayType);

// to store a random number (for now) when changing verses due to some issues while re-rendering the component (probably because I'm still learning Svelte)
export const pageURLStore = writable(null);

// to store the toggle boolean for top navbar,
export const topNavbarVisible = writable(true);

// to store the toggle boolean for bottom navbar
export const bottomNavbarVisible = writable(false);
