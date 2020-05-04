.PHONY: default install start test

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project's dependencies
	@echo "Install project deps"
	wasm-pack build
	cd www && npm install

start: ## Start project
	@echo "Start the project"
	cd www && npm run start 

dev: ## Start project with debug and hot reload
	@echo "Start the project (dev)"
	cd www && npm run dev 

test: ## Launch the project's tests
	@echo "Launch the tests"
	wasm-pack test --headless --firefox