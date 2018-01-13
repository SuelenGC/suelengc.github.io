all: 
	jekyll build
	mkdir -p articles/tag
	cp -rf _site/articles/tag/* articles/tag
	rm -rf _site