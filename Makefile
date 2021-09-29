.PHONY: all
all: install build

.PHONY: install
install:
	npm install

.PHONY: build
build:
	./node_modules/typescript/bin/tsc --lib ES2021 --lib dom --outDir dist/ main.ts
