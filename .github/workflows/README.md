# GitHub Workflows for ttpui

## build-images

This workflow creates the Docker Image and push it to the artifact repository.

## on-branch-push

This workflow is run when a push is made to `develop` or `release-*` branch.

If build is successful, then it calls `build-images`.

## on-pull-request

This workflow is run when a pull request to `develop` or `release-**` is made. It will run a build but not push the images anywhere.
