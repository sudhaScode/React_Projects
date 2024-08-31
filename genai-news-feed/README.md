
# TO DO
- Fetching rss Feeds fro latest news
- Acordion for diiferent industries news
  - carousel for individual news

- Functional programming with Java Script , HTML, CSS,Bootstrap for faster development
- DOM manipulation for interactivity and Dynamic news feed generation

Browse here -> https://generativenewsfeed.netlify.app

## Fetch RSS Feeds for latest news
The server data is formated in xml format.
so convert the data into JSON format fro easier manipulation.
- make a prefix to the url to convert xml to json
   - https://api.rss2json.com/v1/api.json?rss_url= "{rss_url}"
- append the api end point to the prefix
   - https://api.rss2json.com/v1/api.json?rss_url="https://flipboard.com/@dfletcher/india-tech-b2meqpd6z.rss" 

rss2json.com, acts as an intermediary to convert RSS feeds into JSON format. this api only supports a RSS feeds url as a parameter to convert it into JSON format. {must be in xml format}
.
https://api.rss2json.com/v1/api.json?rss_url=https://www.bbc.com/news/rss.xml