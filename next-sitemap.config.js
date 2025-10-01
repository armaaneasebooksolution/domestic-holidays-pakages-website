/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://goairfare.online", // Change this to your domain
  generateRobotsTxt: true, // Generates robots.txt file
  sitemapSize: 5000, // Optional: Limits the number of URLs per sitemap file
  exclude: ["/admin", "/dashboard"], // Optional: Exclude pages from sitemap
};
