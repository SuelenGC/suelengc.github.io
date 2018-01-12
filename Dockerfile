FROM etelej/jekyll
RUN mkdir /app
WORKDIR /app
ADD . /app