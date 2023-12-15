import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

export default function CreateEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
}
