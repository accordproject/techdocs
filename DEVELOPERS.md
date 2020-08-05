# Accord Project Development Guide

* [Development Setup][developers.setup]
* [Coding Rules][developers.rules]
* [Commit Message Guidelines][developers.commits]
* [Writing Documentation][developers.documentation]
* [Development Build][developers.build]

## <a name="setup"> Development Setup

This document describes how to set up your development environment to build and test Accord Project libraries.

### Installing Dependencies

Before you can build one of our libraries, you must install and configure the following dependencies on your machine:

* [Git][git]: The [Github Guide to Installing Git][git-setup] is a good source of information.

* [Node.js (LTS)][node]: We use Node to generate the documentation, run a development web server, run tests, and generate distributable files. Depending on your system you can install Node either from source or as a pre-packaged bundle.

  We recommend using [nvm][nvm] (or [nvm-windows][nvm-windows]) to manage and install Node.js, which makes it easy to change the version of Node.js per project.

### Forking Accord Project repositories on Github

To contribute code to Accord Project, you must have a GitHub account so you can push code to your own fork of an Accord Project repository and open Pull Requests in the repository.

To create a Github account, follow the instructions [here][github-signup]. Afterwards, go ahead and [fork][github-forking] the specific Accord Project repository.

### Keeping In Sync

It is good practice to always keep your `origin/master` in sync with `upstream/master`. You don’t have to, but it makes your life easier. Do your work in branches of your fork, and periodically sync up your `master` with the `master` of `upstream` as follows. You should definitely do this before creating a pull request.

```shell
    git checkout master
    git fetch --all --prune
    git rebase upstream/master
    git push origin master
```

### <a name="unit-tests"></a> Running the Unit Test Suite

We write unit and integration tests with Enzyme and execute them with Jest. To run all of the
tests once on Chrome run:

```shell
    npm run test
```

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more [specs][developers.unit-tests].
* All public API methods **must be documented** with JSDoc. To see how we document our APIs, please check out the existing source code and see the section about [writing documentation][developers.documentation]
* With the exceptions listed below, we follow the rules contained in [Google's JavaScript Style Guide][google].

## <a name="commits"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more readable messages** that are easy to follow when looking through the **project history** and **git logs**. But also, we use the git commit messages to **generate the Cicero-UI change log**.

The commit message formatting can be added using a version of typical git workflow.

### Commit Message Format
Each commit message consists of a mandatory **type**, **scope**, **subject**, and **footer**. This is a specific format:

```shell
    <type>(<scope>): <subject> - <footer>
```

This allows the message to be easier to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the subject, where it should say: `this reverts commit <hash>.`, where the hash is the SHA of the commit being reverted. A commit with this format is automatically created by the [`git revert`][git-revert] command.

### Type
Must be one of the following:

* **`feat`**: A new feature
* **`fix`**: A bug fix
* **`docs`**: Documentation only changes
* **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **`refactor`**: A code change that neither fixes a bug nor adds a feature
* **`perf`**: A code change that improves performance
* **`test`**: Adding missing or correcting existing tests
* **`chore`**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope
The scope will be specifying the place of the commit change; the focal point of new code or best  description for where changes can be found.

You can use `*` when the change affects more than a single scope.

### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* kept under 50 characters
* no dot (.) at the end

### Footer
The footer should contain reference GitHub Issues that this commit addresses.

## <a name="pullrequests"></a> GitHub Pull Request Guidelines
Pull Requests should consist of a complete addition to the code which contains value. Because the commits inside follow a pattern, the title should be an extension or summary of all the commits inside.

Pull Request titles should follow [commit message formatting][developers.commits].

Formatting for the body is displayed in this example:

```shell
# Issue #20

### Changes
- Change one
  - Subchange one
  - Subchange two
- Change two
- Theoretically this should be listing all the commit messages included in this PR

### Flags
- Possible issues or holds for reviewers to note
- List any breaking changes here.

### Related Issues
- Link any issues or pull requests relating to this
```

When approved and ready to merge, a Pull Request should be squashed down to a single buildable commit and merged into master.

## <a name="documentation"></a> Writing Documentation

The Accord Project repositories use [JSDoc][jsdoc] for all of its code documentation.

This means that all the docs are stored inline in the source code and so are kept in sync as it changes.

This means that since we generate the documentation from the source code, we can easily provide version-specific documentation by checking out a version of Cicero-UI and running the build.

## <a name="build"> Development Build for This Repository

### Building a Project

To build a project, you clone the source code repository and use npm to build:

```shell
# Clone your Github repository:
git clone https://github.com/<GITHUB USERNAME>/techdocs.git

# Go to the directory:
cd techdocs

# Add the main repository as an upstream remote to your repository:
git remote add upstream "https://github.com/accordproject/techdocs.git"

# Go to website directory
cd website

# Install node.js dependencies:
npm install
```

### Running the Project Locally

This project uses [Docusaurus][docusaurus] to build and manage the public Accord Project documentation website. To run the documentation website on your local machine, first, follow the instructions above to [build the project](#building-a-project).

```shell
# Change to the website directory
cd website

# Start the docusaurus server
npm start
```

Changes that you make to markdown files in the `/docs` folder will automatically be reflected in your local running version of the documentation website. 

## <a name="techdocs"></a> Technical Documentation Specifics

### <a name="updating"></a> Updating Documentation through Docusaurus

[Docusaurus][docusaurus] is used for maintaining our documentation. The process for this involves generation of markdown files concerning the API, as well as incrementing the docs version. These two steps are  done individually. Updates to the documentation are merged into master, which will generate the new markdown files. Once this is complete, a new pull request should be submitted with the version incremented.

#### Step 1 - Generating Markdown

Make updates to the source code to improve documentation. Merging this into master will automatically generate Markdown from JSDocs, most notably being the `cicero-api.md` and `ergo-api.md` files.

#### Step 2 - Incrementing Version

Increment the version with the [Docusaurus][versioning] script command through `npm`.

  ```text
    npm run version X.X.X
  ```

Once this merges into master, the new version number will be recognized and trigger the update and refresh
of the [Accord Project documentation][apdoc].

## License <a name="license"></a>

Accord Project source code files are made available under the [Apache License, Version 2.0][apache].

Accord Project documentation files are made available under the [Creative Commons Attribution 4.0 International License][creativecommons] (CC-BY-4.0).

[developers.setup]: DEVELOPERS.md#setup
[developers.build]: DEVELOPERS.md#build
[developers.rules]: DEVELOPERS.md#rules
[developers.commits]: DEVELOPERS.md#commits
[developers.documentation]: DEVELOPERS.md#documentation
[developers.unit-tests]: DEVELOPERS.md#unit-tests

[git]: http://git-scm.com/
[git-setup]: https://help.github.com/en/articles/set-up-git
[node]: https://nodejs.org/en/
[nvm]: https://github.com/creationix/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows
[github-signup]: https://github.com/signup/free
[github-forking]: http://help.github.com/forking
[google]: https://google.github.io/styleguide/jsguide.html
[commit]: https://github.com/commitizen/cz-cli
[jsdoc]: http://usejsdoc.org/
[docusaurus]: https://docusaurus.io
[versioning]: https://docusaurus.io/docs/en/versioning
[apdoc]: https://docs.accordproject.org/

[apache]: https://github.com/accordproject/techdocs/blob/master/LICENSE
[creativecommons]: http://creativecommons.org/licenses/by/4.0/
