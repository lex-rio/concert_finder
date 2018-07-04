#!/usr/bin/env python

from setuptools import setup, find_packages

setup(
    name='Concert Finder',
    version='1.0',
    long_description=__doc__,
    packages=find_packages(),
    author_email='oleksandr.oryshchuk@globallogic.com',
    include_package_data=True,
    zip_safe=False,
    install_requires=['Flask', 'requests']
)