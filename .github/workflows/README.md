# GitHub Workflows for ttpui

## build-images

This workflow creates the Docker Image and push it to the artifact repository.

## on-branch-push

This workflow is run when a push is made to `develop` or `release-*` branch.

If build is successful, then it calls `build-images`.
