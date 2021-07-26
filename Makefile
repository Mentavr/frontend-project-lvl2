install :
		npm ci

commander :
		node bin/commander.js

publish :
		npm publish --dry-run

test :
		NODE_OPTIONS=--experimental-vm-modules npx jest

run :
		node ./src/index.js

lint :
		npx eslint .

test-coverage :
		NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

.PHONY: tests