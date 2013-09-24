require 'open3'
require 'uri'

DEST_DIR             = 'build'
BRANCH               = ENV['BRANCH'] || 'master'
GITHUB_TOKEN         = ENV['GITHUB_TOKEN']
REPOSITORY_SSH_URL   = URI.parse('ssh://git@github.com/aereal/aereal.github.com.git')
REPOSITORY_HTTPS_URL = URI.parse("https://#{GITHUB_TOKEN}@#{REPOSITORY_SSH_URL.host}#{REPOSITORY_SSH_URL.path}")
REPOSITORY_URL       = GITHUB_TOKEN ? REPOSITORY_HTTPS_URL : REPOSITORY_SSH_URL

def current_source_sha1
  out, * = Open3.capture2 'git', 'rev-parse', '--short', 'HEAD'
  out.strip
end

desc "Clone a repository from GitHub"
task :clone do
  sh 'git', 'clone', '--no-progress', '--branch', BRANCH, REPOSITORY_URL.to_s, DEST_DIR
end

task :commit do
  sha1 = current_source_sha1
  Dir.chdir DEST_DIR do
    sh 'git', 'add', '-A'
    sh 'git', 'commit', '--quiet', '--message', "Update to #{sha1}"
  end
end

desc "Build a site"
task :build do
  sh 'bundle exec middleman build'
end

desc "Publish current contents"
task :publish => [:clone, :build, :commit] do
  Dir.chdir DEST_DIR do
    sh 'git', 'push', '--quiet', REPOSITORY_URL.to_s, BRANCH
  end
end
