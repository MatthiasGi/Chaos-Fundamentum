Chaos-Fundamentum - Documentation
=================================

This branch contains the documentation of the [Chaos-Fundamentum-Framework](https://github.com/chaoticlabs/Chaos-Fundamentum). A preview / built version can be found at http://chaoticlabs.github.io/Chaos-Fundamentum/.

Usage
-----

To run your own version of the documentation, you will need [Jekyll](http://jekyllrb.com/). Then just pull the branch and run `jekyll build` followed by `jekyll run` in the directory.

Modification
------------

Grunt is used to speed up development of this documentation. After installing [node.js](http://nodejs.org/), run `npm install` and `grunt`. It will watch the important files and update the jekyll-server automagically.

Updating Chaos
--------------

To update the version of the framework, just merge the master branch in, as described in [Subtree Merging](http://git-scm.com/book/ch6-7.html). Basically:
```Shell
git read-tree --prefix=chaos/ -u master
git checkout master
git pull
git checkout gh-pages
git merge --squash -s subtree --no-commit master
```
