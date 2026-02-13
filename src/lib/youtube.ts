export function toYouTubeEmbedUrl(url: string) {
  // Supports:
  // - https://www.youtube.com/watch?v=VIDEO
  // - https://youtu.be/VIDEO
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }
    const id = u.searchParams.get("v");
    if (id) return `https://www.youtube-nocookie.com/embed/${id}`;
  } catch {
    // ignore
  }
  return url;
}
