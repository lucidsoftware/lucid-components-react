<h1 align="center">
  Lucid Components React
</h1>

Generic, themeable React components

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

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the React app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Create a release

- Update package.json version
- `yarn build-components`
- Commit new build files
- Create a PR and merge
- [Draft a new release](https://github.com/lbucio/lucid-components-react/releases)
  - Create a tag version matching package.json version targeting master branch
- Use a descriptive and concise release title
- List all changes and fixes in the release description
- Follow [Semantic Versioning](https://semver.org/)

## Using a dev release

If you are wanting to test changes before creating an official release, you can update the package.json in the repo consuming the component library to use your branch.

- Change from using a tag (v1.0.0) to use your branch name.
- Update your packages and it will pull in your changes.
- Make sure to run `yarn build-components` first and then push your branch up.

`lbucio/lucid-components-react.git#branch-name`

## Learn More

https://styled-system.com/custom-props
