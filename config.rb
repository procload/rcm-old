require 'compass'

# Susy grids in Compass
require 'susy'

# Methods defined in the helpers block are available in templates
helpers do
  
  # Calculate the years for a copyright
  def copyright_years(start_year)
    end_year = Date.today.year
    if start_year == end_year
      start_year.to_s
    else
      start_year.to_s + '-' + end_year.to_s
    end
  end
end

activate :blog
set :blog_summary_separator, /READMORE/

#Set RSS layout
page "/index.xml", :layout => false

set :blog_summary_length, 500

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css
  
  # Minify Javascript on build
  activate :minify_javascript
  
  # Enable cache buster
  activate :cache_buster
  
  # Use relative URLs
  activate :relative_assets
  
  # Compress PNGs after build
  # First: gem install middleman-smusher
  #require "middleman-smusher"
  #activate :smusher
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end
