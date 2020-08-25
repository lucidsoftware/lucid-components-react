<h1 align="center">
  Lucid Components React
</h1>

Generic, themeable, React components.

# Getting started

## Components

| Component         | Description |
| ----------------- | ----------- |
| Accordian         |             |
| Button            |             |
| Card              |             |
| Icon              |             |
| Input             |             |
| Link              |             |
| Navbar            |             |
| Paper             |             |
| Video Player      |             |
| Video Play Button |             |

# Theming

# Example

To run the example app:
  - Run `yarn start`
  - Navigate to [http://localhost:3000](http://localhost:3000)

# Github release

Github Actions will automatically build the distribution, bump the **patch** level ([Semantic Versioning](https://semver.org/)), and tag the commit. A release is automatically created with a merge to `master`.

In order to merge to `master`:

- Checkout a new branch
  - `git checkout -b {BRANCH_NAME}`
- If a **major** or **minor** version bump is needed, increment `version` in `package.json` by 1, and set lower levels to 0.
  - Example: Bump the **minor** version from `1.2.3` by setting the **minor** version to 3, and **patch** level to 0 (leave **major** version alone): `1.3.0`.
  - Example: Bump the **major** version from `1.2.3` by setting the **major** version to 2, and both **minor** version and **patch** level to 0: `2.0.0`.
  - Note: The build always bumps the **patch** level, so the above would be released as `1.3.1` and `2.0.1`, respectively.
- Commit (one or more) changes locally
  - `git commit -m "{MESSAGE}"`
- Push **with force**
  - `git push -f`
  - This is not necessary on the first push, but on subsequent pushes on the same PR. The reason is Github Actions amends your latest commit with the build (`./dist` directory) when it is built. Because of this, branch history has diverged and requires force to push.
- Create a PR
- Merge
  - Build must finish, and PR must be reviewed and approved

# Install dependency in React app

## Released version

To use a released version of the components:
- Run `yarn add lucidsoftware/lucid-components-react#v{VERSION}`

## Dev branch

If you are wanting to test changes before creating an official release, you can use a branch ref. To use:
- Run `yarn add lucidsoftware/lucid-components-react#{BRANCH_NAME}`
