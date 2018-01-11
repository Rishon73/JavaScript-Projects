#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Illegal number of parameters."
    echo "Expecting a full path to a json config file"
    exit
fi


if [[ $(uname -s) == Linux ]]
then
    echo "--- This script only works on Mac."
    echo "--- To set evn var on Linux, use:"
    echo "--- export LFT_TEST_CONFIG=<FULL_PATH_TO_CONF_FILE>"
    exit
else
    launchctl setenv LFT_TEST_CONFIG $1
    echo "LFT_TEST_CONFIG environment variable is set to: " $(launchctl getenv LFT_TEST_CONFIG)
    #launchctl unsetenv LFT_TEST_CONFIG
fi
