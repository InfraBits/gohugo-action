.PHONY: all
all: install build

.PHONY: install
install:
	npm install

.PHONY: build
build:
	./node_modules/.bin/tsc --lib ES2021 --lib dom --outDir lib/ main.ts
	./node_modules/.bin/ncc build lib/*.js -o dist
