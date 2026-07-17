const CDN_URL = process.env.CDN_URL!.replace(/\/$/, "");

export function getMediaUrl(path?: string | null) {
  if (!path) return "";

  // Already a full URL
  if (path.startsWith("http")) return path;

  return `${CDN_URL}/${path.replace(/^\/+/, "")}`;
}