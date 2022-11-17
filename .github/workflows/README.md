# GitHub Workflows for butlerui

## on-pull-request

This workflow is run when a pull request is created or updated targeting the `develop` branch.

First it checks if there are any changes required to the PO template file. If so, it commits those changes in the current feature branch and stops the workflow.
Note that the POT file is not pushed to zanata at this stage. It will only be pushed once this PR is merged.
A new run of the workflow will start due to this new commit.

If there are no changes, or if the latest commit on this branch is an automatic commit done by this workflow, then it tests that creating debian package and docker image is successful or not.


## on-branch-push

This workflow is run when a push is made to `develop` branch.

It builds the debian package and the docker image (but does not push them anywhere).

If build is successful, then it pushes the POT file to Zanata.


## create-build

This is a manually-triggered workflow. It takes two inputs:

1. Branch name to build (can also provide commit id, but the next input must be checked)
2. Checkbox to control whether to pull translation files from Zanata. By default, it will pull.

First, this pulls the latest translated files from Zanata and converts it to required format. If there are any changes, it commits those changes into the target branch and makes this new commit the target of this workflow.

If "Don't pull Translations" checkbox is ticked, then it will only build the latest commit from passed branch or the passed commit id.

Then, it creates a debian package and pushes to https://console.cloud.google.com/storage/browser/greymatter-build-artifacts

It also creates a docker image and pushes to https://us-docker.pkg.dev/greymatter-development/apps/butlerui
