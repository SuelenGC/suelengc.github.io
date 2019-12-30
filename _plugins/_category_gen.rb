module Jekyll
  class CategoryIndex < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category.html')
      self.data['category'] = category
      category_title_prefix = site.config['category_title_prefix'] || 'Categoria &ldquo;'
      category_title_suffix = site.config['category_title_suffix'] || '&ldquo;'
      self.data['title'] = "#{category_title_prefix}#{category}#{category_title_suffix}"
    end
  end
  class CategoryGenerator < Generator
    safe true
    def generate(site)
      if site.layouts.key? 'category'
        dir = site.config['category_dir'] || 'category'
        site.categories.keys.each do |category|
          category_slug = category.gsub(' ', '-').gsub('é', 'e').gsub('á', 'a').gsub('à', 'a').gsub('í', 'i').gsub('ú', 'u').gsub('ó', 'o').downcase
          write_category_index(site, File.join(dir, category_slug), category.split.map(&:capitalize).join(' '))
        end
      end
    end
    def write_category_index(site, dir, category)
      index = CategoryIndex.new(site, site.source, dir, category)
      index.render(site.layouts, site.site_payload)
      index.write(site.dest)
      site.pages << index
    end
  end
end