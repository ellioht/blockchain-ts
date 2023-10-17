# Default target
.DEFAULT_GOAL := run

run:
	@echo "Running nodemon.."
	@nodemon index.ts

.PHONY: test
test:
	@echo "Running tests.."
	@npm test