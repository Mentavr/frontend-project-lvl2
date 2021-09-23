install :
		npm ci

commander :
		node bin/commander.js

publish :
		npm publish --dry-run

test :
		npm test

lint :
		npx eslint .

test-coverage :
		npm test -- --coverage

.PHONY: tests