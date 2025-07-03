export const dynamic = "force-static"

export default function sitemap() {
  return [
    {
      url: 'https://adamlindqvist.se',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}