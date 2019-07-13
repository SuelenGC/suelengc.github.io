all:
	rm -rf articles/tag
	mkdir -p articles/tag

	rm -rf articles/category
	mkdir -p articles/category

	jekyll build

	cp -rf _site/articles/tag/* articles/tag
	cp -rf _site/articles/category/* articles/category

	rm -rf _site