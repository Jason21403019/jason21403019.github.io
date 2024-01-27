const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://jason21403019.github.io",
  },
  () => {
    console.log("Deploy Complete")
  }
)
