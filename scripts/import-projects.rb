#!/usr/bin/env ruby

require 'bundler/setup' unless defined?(Bundler)
require 'nokogiri'
require 'open-uri'
require 'yaml'

original_url    = 'http://aereal.org/'
doc             = Nokogiri::HTML(open(original_url))
project_section = doc.css('section:nth-child(2)')
projects        = project_section.css('.section-item')
serialized      = projects.map {|node|
  {
    name: node.css('[itemprop=name]').text.strip,
    itemtype: node.attr('itemtype').strip,
    url: (node.css('[itemprop=name] > a[href]').attr('href').value.strip),
    time: node.css('time[itemprop=datePublished]').attr('datetime').value.strip,
    description: node.css('.description').text.each_line.drop(1).first.strip,
  }
}

puts YAML.dump(serialized)
