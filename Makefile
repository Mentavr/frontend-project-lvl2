install :
		npm ci

commander :
		node bin/genDiff.js

publish :
		npm publish --dry-run

test :
		npm test

lint :
		npx eslint .

test-coverage :
		npm test -- --coverage

.PHONY: tests