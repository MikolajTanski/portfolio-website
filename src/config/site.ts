/** Production site URL — no trailing slash, no hash (canonical for OG / SEO). */
export const SITE_URL = "https://mikolajtanski.vercel.app";

/** W buildzie produkcyjnym (`vite build`) ukryty: hero + generowane CV bez numeru telefonu. */
export const showPublicPhone = !import.meta.env.PROD;
