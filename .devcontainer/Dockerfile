FROM ruby:3.3

RUN apt-get update && apt-get install -y ruby-full build-essential zlib1g-dev imagemagick

RUN useradd -m -s /bin/bash ruby
RUN chown -R ruby:ruby /usr/local/bundle

USER ruby
WORKDIR /workspace
