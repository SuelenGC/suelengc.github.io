all: 
	rm -rf articles/tag
	mkdir -p articles/tag
	jekyll build
	cp -rf _site/articles/tag/* articles/tag
	rm -rf _site