install :
		npm ci

commander :
		node bin/commander.js

publish :
		npm publish --dry-run

tests :
		NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

run :
		node ./src/index.js

lint :
		npx eslint .

.PHONY: tests