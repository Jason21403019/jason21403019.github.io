const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://jason21403019.github.io/my-blog/",
  },
  () => {
    console.log("Deploy Complete")
  }
)
