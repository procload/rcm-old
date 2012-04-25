desc "Build the website from source"
task :build do
  puts "## Building website"
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "deploy basic rack app to heroku"
multitask :deploy do
  puts "## Deploying to Github pages "
  (Dir["_deploy/*"]).each { |f| rm_rf(f) }
  system "cp -R build/* _deploy/"
  puts "\n## copying build to _deploy"
  system "cp source/CNAME _deploy/CNAME"
  cd "_deploy" do
    system "git add ."
    system "git add -u"
    puts "\n## Committing: Site updated at #{Time.now.utc}"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m '#{message}'"
    puts "\n## Pushing generated website"
    system "git push origin master"
    puts "\n## Github deploy complete"
  end
end

desc "Build and deploy website"
  task :gen_deploy => [:build, :deploy] do
end
