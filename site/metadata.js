module.exports = {
  dateFormat: `MMM D YYYY, H:m ZZ`,
  name: `Sanyam Kapoor`,
  description: `Website and knowledge base.`,
  author: `Sanyam Kapoor`,
  siteUrl:
    process.env.NODE_ENV === "production"
      ? `https://www.sanyamkapoor.com`
      : `http://localhost:8000`,
  menu: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "Drafts",
      url: "/blog/drafts",
    },
    {
      label: "Tags",
      url: "/blog/tags",
    },
    {
      label: "Knowledge Base",
      url: "/kb",
    },
  ],
  extMenu: [
    {
      label: "Wine Map",
      url: "https://wine.sanyamkapoor.com",
    },
  ],
  social: {
    scholar: "https://scholar.google.com/citations?user=p0NMtgsAAAAJ",
    github: "https://github.com/activatedgeek",
    yc: "https://news.ycombinator.com/user?id=activatedgeek",
    linkedin: "https://www.linkedin.com/in/sanyamkapoor",
    stackoverflow: "https://stackoverflow.com/users/2425365/activatedgeek",
    twitter: "https://twitter.com/activatedgeek",
  },
}
