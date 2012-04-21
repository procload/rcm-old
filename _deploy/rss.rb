require 'rss/maker'

version = "2.0" # ["0.9", "1.0", "2.0"]
destination = "index.xml" # local file to write

content = RSS::Maker.make(version) do |m|
m.channel.title = "Example Ruby RSS feed"
m.channel.link = "http://www.rubyrss.com"
m.channel.description = "Old news (or new olds) at Ruby RSS"

m.items.do_sort = true # sort items by date

  data.blog.articles.each do |article|
    i = m.items.new_item
    i.title = article.title
    i.link = article.url
    i.description = article.description
    i.date = article.date
  end

end

File.open(destination,"w") do |f|
f.write(content)
end