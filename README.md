# CentOS Official Documentation

## Documentation Structure

The documentation is broken up into two top level directories. The 'Legacy'
directory contains the debranded single-page html documentation. As the
directory name implies, the contents of this directory are to be considered
legacy and updates will likely not happen.

The asciidoc directory is for the new style documentation, which will be
published via asciidoc and asciibinder as the documentation is created.

**NOTE: AsciiDoc "new style" is still a conceptual work in progress, the
directory structure is just a placeholder.**

Currently you can use asciidoctor (packaged as rubygem-asciidoctor) to preview
the asciidoc content. To do so, first run **asciidoctor master.adoc** in the
`asciidoc/7/install-guide/` directory, and then use your browser to open
`master.html` which will appear in the same directory.

## Contributions

### Design and cleanup proposals

If you find a typo, an improper example command, or other cleanup, please
submit a pull request with the necessary changes, in one commit.
