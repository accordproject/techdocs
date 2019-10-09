# Contributing to Accord Project Documentation

> Thanks to the AngularJS team for the bulk of this text!

We'd love for you to contribute to our source code and to make Accord Project documentation even better than it is today! Here are the guidelines we'd like you to follow:

* [Code of Conduct][contribute.coc]
* [Questions and Problems][contribute.question]
* [Issues and Bugs][contribute.issue]
* [Feature Requests][contribute.feature]
* [Improving Documentation][contribute.docs]
* [Updating Documentation][contribute.updating]
* [Issue Submission Guidelines][contribute.submit]
* [Pull Request Submission Guidelines][contribute.submitpr]

## <a name="coc"></a> Code of Conduct

Help us keep the Accord Project open and inclusive. Please read and follow our [Code of Conduct][coc].

## <a name="requests"></a> Questions, Bugs, Features

### <a name="question"></a> Got a Question or Problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports
and feature requests. You've got much better chances of getting your question answered on dedicated
support platforms, the best being the [Accord Project Slack Channel][apslack]

### <a name="issue"></a> Found an Issue or Bug?

If you find a bug in the documentation, you can help us by submitting an issue to our
[GitHub Repository][github]. Even better, you can submit a Pull Request with a fix.

**Please see the [Submission Guidelines][contribute.submit] below.**

### <a name="feature"></a> Missing a Feature?

You can request a new feature by submitting an issue to our [GitHub Repository][github-issues].

If you would like to implement a new feature then consider what kind of change it is:

* **Major Changes** that you wish to contribute to the project should be discussed first in a
  [GitHub issue][github-issues] that clearly outlines the changes and benefits of the feature.
* **Small Changes** can directly be crafted and submitted to the [GitHub Repository][github]
  as a Pull Request. See the section about [Pull Request Submission Guidelines][contribute.submitpr], and
  for detailed information the [core development documentation][developers].

### <a name="docs"></a> Want a Doc Fix?

Should you have a suggestion for the documentation, you can open an issue and outline the problem
or improvement you have - however, creating the doc fix yourself is much better!

If you want to help improve the docs, it's a good idea to let others know what you're working on to
minimize duplication of effort. Create a new issue (or comment on a related existing one) to let
others know what you're working on.

If you're making a small change (typo, phrasing) don't worry about filing an issue first. Use the
friendly blue "Improve this doc" button at the top right of the doc page to fork the repository
in-place and make a quick change on the fly. The commit message is preformatted to the right type
and scope, so you only have to add the description.

For large fixes, please build and test the documentation before submitting the PR to be sure you
haven't accidentally introduced any layout or formatting issues. You should also make sure that your
commit message follows the **[Commit Message Guidelines][developers.commits]**.

### <a name="updating"></a> Updating Documentation through Docusaurus

[Docusaurus][docusaurus] is used for maintaining our documentation. The process for this involves generation of
markdown files concerning the API, as well as incrementing the docs version. These two steps are 
done individually. Updates to the documentation are merged into master, which will generate the new
markdown files. Once this is complete, a new pull request should be submitted with the version incremented.

#### Step 1 - Generating Markdown

Make updates to the source code to improve documentation. Merging this into master will automatically
generate Markdown from JSDocs, most notably being the `cicero-api.md` and `ergo-api.md` files.

#### Step 2 - Incrementing Version

Increment the version with the [Docusaurus][versioning] script command through `npm`.

  ```text
    npm run version X.X.X
  ```

Once this merges into master, the new version number will be recognized and trigger the update and refresh
of the [Accord Project documentation][apdoc].

## <a name="submit"></a> Issue Submission Guidelines
Before you submit your issue search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize
the effort we can spend fixing issues and adding new features, by not reporting duplicate issues.

The "[new issue][github-new-issue]" form contains a number of prompts that you should fill out to
make it easier to understand and categorize the issue.

**If you get help, help others. Good karma rulez!**

## <a name="submit-pr"></a> Pull Request Submission Guidelines

Before you submit your pull request consider the following guidelines:

* Ensure there is an open [Issue][github-issues] for what you will be working on. If there is not, open one up by going through [these guidelines][contribute.submit].
* Search [GitHub][pulls] for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.
* Create the [development environment][developers.setup]
* Make your changes in a new git branch: techdocs

  ```text
    git checkout -b name-issue-tracker-short-description master
  ```

  Name can be initials or GitHub username. An example of this could be:

  ```text
    git checkout -b irmerk-issue75-readme-typos master
  ```

* Create your patch commit, **including appropriate test cases**.
* Follow our [Coding Rules][developers.rules].
* Ensure you provide a DCO sign-off for your commits using the -s option of git commit. For more information see [how this works][dcohow].
* If the changes affect public APIs, change or add relevant [documentation][developers.documentation].
* Run the [unit][developers.unit-tests] test suite, and ensure that all tests pass.

* Commit your changes using a descriptive commit message that follows our [commit message conventions][developers.commits]. Adherence to the [commit message conventions][developers.commits] is required, because release notes are automatically generated from these messages.

  ```text
    git commit -a
  ```

  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Before creating the Pull Request, ensure your branch sits on top of master (as opposed to branch off a branch). This ensures the reviewer will need only minimal effort to integrate your work by fast-fowarding master:

  ```text
    git rebase upstream/master
  ```

* Last step before creating the Pull Request, package and run all tests a last time:

  ```text
    npm run test
  ```

* Push your branch to GitHub:

  ```text
    git push origin name-issue-tracker-short-description
  ```

* In GitHub, send a pull request to `techdocs:master` by following our [pull request conventions][developers.pullrequest]. This will trigger the check of the [Contributor License Agreement][contribute.cla] and the Travis integration.
* If you find that the Travis integration has failed, look into the logs on Travis to find out if your changes caused test failures, the commit message was malformed etc. If you find that the tests failed or times out for unrelated reasons, you can ping a team member so that the build can be restarted.
* If we suggest changes, then:
  * Make the required updates.
  * Re-run the test suite to ensure tests are still passing.
  * Commit your changes to your branch \(e.g. `name-issue-tracker-short-description`\).
  * Push the changes to your GitHub repository \(this will update your Pull Request\).

    You can also amend the initial commits and force push them to the branch.

    ```text
    git rebase master -i
    git push origin name-issue-tracker-short-description -f
    ```

    This is generally easier to follow, but separate commits are useful if the Pull Request contains iterations that might be interesting to see side-by-side.

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main \(upstream\) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```text
    git push origin --delete name-issue-tracker-short-description
  ```

* Check out the master branch:

  ```text
    git checkout master -f
  ```

* Delete the local branch:

  ```text
    git branch -D name-issue-tracker-short-description
  ```

* Update your master with the latest upstream version:

  ```text
    git checkout master
    git fetch --all --prune
    git merge --ff-only upstream/master
    git push origin master
  ```

## License <a name="license"></a>

Accord Project source code files are made available under the [Apache License, Version 2.0][apache].

Accord Project documentation files are made available under the [Creative Commons Attribution 4.0 International License][creativecommons] (CC-BY-4.0).

[coc]: https://github.com/accordproject/docs/blob/master/Accord%20Project%20Code%20of%20Conduct.pdf
[apslack]: https://accord-project-slack-signup.herokuapp.com

[contribute.coc]: CONTRIBUTING.md#coc
[contribute.cla]: CONTRIBUTING.md#cla
[contribute.question]: CONTRIBUTING.md#question
[contribute.issue]: CONTRIBUTING.md#issue
[contribute.feature]: CONTRIBUTING.md#feature
[contribute.docs]: CONTRIBUTING.md#docs
[contribute.updating]: CONTRIBUTING.md#updating
[contribute.submit]: CONTRIBUTING.md#submit
[contribute.submitpr]: CONTRIBUTING.md#submit-pr


[developers]: DEVELOPERS.md
[developers.setup]: DEVELOPERS.md#-development-setup
[developers.commits]: DEVELOPERS.md#commits
[developers.rules]: DEVELOPERS.md#rules
[developers.documentation]: DEVELOPERS.md#documentation
[developers.unit-tests]: DEVELOPERS.md#-running-the-unit-test-suite

[docusaurus]: https://docusaurus.io/en/
[versioning]: https://docusaurus.io/docs/en/versioning
[apdoc]: https://docs.accordproject.org/

[github-issues]: https://github.com/accordproject/techdocs/issues
[github-new-issue]: https://github.com/accordproject/techdocs/issues/new
[github]: https://github.com/accordproject/techdocs
[pulls]: https://github.com/accordproject/techdocs/pulls

[dcohow]: https://github.com/probot/dco#how-it-works

[apache]: https://github.com/accordproject/techdocs/blob/master/LICENSE
[creativecommons]: http://creativecommons.org/licenses/by/4.0/
