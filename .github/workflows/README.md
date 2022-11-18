# GitHub Workflows for ttpui


## build-images

This workflow creates the Docker Image and push it to the artifact repository.

## on-pull-request

This workflow is run when a pull request is created or updated targeting the `develop` branch.

After successful execution it calls `build-images`.

## on-branch-push

This workflow is run when a push is made to `develop` branch.

It builds the debian package and the docker image (but does not push them anywhere).

If build is successful, then it calls `build-images`.
