# import config.
# You can change the default config with `make cnf="config_special.env" build`
cnf ?= _config.$(CTX)$(CTX_NO).env
include $(cnf)

TAG ?= $(shell git describe --tags --abbrev=0)
ACCOUNTID ?= $(shell aws sts --profile $(AWS_PROFILE) get-caller-identity --query Account --output text)


CONF_FILE := $(strip $(wildcard .$(CTX)$(CTX_NO).env))

default: help

deploy: 
	echo "Running as: $(shell aws sts --profile $(AWS_PROFILE) get-caller-identity --query Arn --output text)"

	aws cloudformation deploy \
		--profile $(AWS_PROFILE) \
		--template-file deploy-recipe.yaml \
		--stack-name $(APPNAME)-$(ENV)-$(ENV_NO) \
		--capabilities CAPABILITY_IAM \
		--parameter-overrides EnvironmentName=$(ENV) EnvironmentNumber=$(ENV_NO) \
			Domain=$(DOMAIN) AppName=$(APPNAME) Tag=$(TAG) \
			CertificateArn=$(CERTIFICATEARN) SubDomain=$(SUBDOMAIN) HostedZoneId=$(HOSTEDZONEID)

invalidate:
	aws --profile $(AWS_PROFILE) cloudfront create-invalidation --distribution-id $(shell aws --profile $(AWS_PROFILE) cloudformation list-exports | jq -rM '.Exports[] | select(.Name == "${APPNAME}-$(ACCOUNTID)-${ENV}-${ENV_NO}-distribution-id").Value') --paths "/*"

web-deploy:
	AWS_PROFILE=$(AWS_PROFILE) BUCKET=$(APPNAME)-$(ACCOUNTID)-$(ENV)-$(ENV_NO).$(DOMAIN) REGION=$(REGION) npm run build

#	no encoding files
	aws --profile $(AWS_PROFILE) s3 cp ./build/ s3://$(APPNAME)-$(ACCOUNTID)-$(ENV)-$(ENV_NO).$(DOMAIN) \
	--recursive \
	--cache-control no-cache

release: deploy invalidate web-deploy

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## Please read README.md.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help
