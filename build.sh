#!/bin/sh

if [ "$(uname)" == "Darwin" ]; then
    # Running on macOS.
    # Let's assume that the user has the Docker CE installed
    # which doesn't require a root password.
    docker run --rm -it -v $(pwd):/antora antora/antora --html-url-extension-style=indexify site.yml

elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    # Running on Linux.
    # Let's assume that it's running the Docker deamon
    # which requires root.
    if groups | grep -wq "docker"; then
        # Check if the current user is in the "docker" group. If true, no sudo is needed.
        echo ""
        echo "This build script is using Docker to run the build in an isolated environment."
        echo ""
        docker run --rm -it -v $(pwd):/antora:z antora/antora --html-url-extension-style=indexify site.yml
    else
        # User isn't in the docker group; run the command with sudo.
        echo ""
        echo "This build script is using Docker to run the build in an isolated environment. You might be asked for your password." 
        echo "You can avoid this by adding your user to the 'docker' group, but be aware of the security implications. See https://docs.docker.com/install/linux/linux-postinstall/."
        echo ""
        sudo docker run --rm -it -v $(pwd):/antora:z antora/antora --html-url-extension-style=indexify site.yml
    fi
fi
