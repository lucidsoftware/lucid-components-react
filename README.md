# Lucid Components React

Generic, themeable, React components.

## Getting started

## Components

| Component         | Description |
| ----------------- | ----------- |
| Accordian         |             |
| Button            |             |
| Card              |             |
| Collection        |             |
| Icon              |             |
| Input             |             |
| Link              |             |
| Navbar            |             |
| Paper             |             |
| Video Player      |             |
| Video Play Button |             |

## Theming

Explanation coming soon.

## Example

To run the example app:

- Run `yarn start`
- Navigate to [http://localhost:3000](http://localhost:3000)

## Github release

When a non-`master` branch is pushed to, Github Actions will automatically build the distribution and add it to the branch. When the branch has PR approval and is merged to master, the **patch** level ([Semantic Versioning](https://semver.org/)) will automatically be bumped, and a tagged release created.

In order to merge to `master`:

- Checkout a new branch:
  - `git checkout -b {BRANCH_NAME}`
- Set `version` in `package.json` to the **major** and **minor** version you desire.
  - Note: The build will always determine the correct **patch** level, so setting the **patch** level of `version` in `package.json` will do nothing.
- Commit (one or more) changes locally:
  - `git commit -m "{MESSAGE}"`
- Push **with force**:
  - `git push -f`
  - This is not necessary on the first push, but on subsequent pushes on the same PR. The reason is Github Actions amends your latest commit with the build (`./dist` directory) when it is built. Because of this, branch history has diverged and requires force to push.
- Create a PR
- Merge
  - Build must finish, and PR must be reviewed and approved.

## Install dependency in React app

### Released version

To use a released version of the components:

- Run `yarn add https://github.com/lucidsoftware/lucid-components-react#v{VERSION}`
- Do not forget the `v` in front of the version.

### Dev branch

If you are wanting to test changes before creating an official release, you can use a branch ref. To use:

- Run `yarn add https://github.com/lucidsoftware/lucid-components-react#{BRANCH_NAME}`
