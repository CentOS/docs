# CentOS Docs website builder

This repository hosts the site builder for https://docs.centos.org/. It pulls content from other repositories defined in the `site.yml` Antora playbook, builds them together using a structure defined in this repository, and applies a UI bundle to them, creating the whole site. Submit PRs and issues to this repository for **publishing fixes**. The other repositories are:

* [CentOS_Docs_Web_UI](https://github.com/CentOS/docs-web-ui) for the site's user interface (e.g. CSS styling) sources
* [CentOS_Installation_Guide](https://github.com/CentOS/docs-installation-guide) - the content repository for the Installation Guide
* [CentOS_Docs_Web](https://github.com/CentOS/docs-web) - the repository that holds the built site. Do not use that repository for anything but publishing updates.

## Adding new content
To add a new content repository, you must:

1. Add the repository to the `site.yml` file. Use the repositories already defined for guidance.
1. Add a link to the front page of the new repository into `pages/homepage/modules/ROOT/pages/index.adoc`. Note that you will need to do this in raw HTML, the page uses a passthrough block. Again, use the other links already on the page for guidance.
1. Build this repository and publish - see below.

## Local preview

This repo includes scripts to build and preview the contents of this repository. Both scripts use docker, so please make sure you have it installed on your system. Please see below for instructions.

To build and preview the site, run:

```
$ ./build.sh && ./preview.sh
```

The result will be available at http://localhost:8080.

### Installing docker on Fedora

```
$ sudo dnf install docker
$ sudo systemctl start docker && sudo systemctl enable docker
```

## How to publish

1. Build the site using the `build.sh` script.
1. Open the [CentOS_Docs_Web](https://github.com/CentOS/docs-web) and switch to branch `prod`.
1. Copy the `public/` folder of this repository into the `en-US` folder of the `docs-web` repository.
1. Ask someone to pull from the repository and republish. (In the future this will happen automatically, this is only a temporary workaround.)
