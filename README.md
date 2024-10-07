# Dev Encyclopedia; 

### [devpedia.pages.dev](https://devpedia.pages.dev/) | [devpedia.dev](https://devpedia.dev/)

A simple project simplifies technical terms, concepts, jargon, and whatnot: Open-source and ad-free. It is fueled by contributions and donations (and coffee, of course).


[![featured-on-dev-community](https://github.com/user-attachments/assets/b7d701ae-643c-4a24-b274-d6c46dd63351)](https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-k9b#:~:text=%40buzzpy%20introduces%20Dev%20Encyclopedia)
[![featured-on-hackernoon](https://github.com/user-attachments/assets/7c3c9037-d46a-4fd8-938a-26f905d8331a)](https://hackernoon.com/9-1-2024-techbeat#:~:text=Introducing%20Dev%20Encyclopedia%3A%20A%20Wikipedia%20Specifically%20for%20Developers)
[![featured-on-fountn design](https://github.com/user-attachments/assets/a1c8531d-c554-4265-822a-e8b33001e9ec)](https://fountn.design/resource/dev-encyclopedia-encyclopedia-for-developers/)


![Copy of Github Banner (1)](https://github.com/user-attachments/assets/b5bb0925-f173-479f-99ba-4b044ae78339)
> This project is launched but much space for improvement is left. Help me build this project by contributing to this repository

_________
### Tech Stack

[![Astro](https://img.shields.io/badge/Astro-%23644098.svg?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Bootstrap CSS](https://img.shields.io/badge/Bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Prettier](https://img.shields.io/badge/Prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
_______

### Quick Links
[License](#license-cc-by-nc-sa-40) | [Sponsoring](#sponsoring) | [How to Contribute](#contributing) | [Notable Contributors](https://github.com/Buzzpy/Dev-Encyclopedia/tree/master#%EF%B8%8F-notable-contributors) | [Installation and Deployment](#installation-and-deployment)

_________

## Installation and Deployment

Install all the requirements with **npm install** after forking and cloning the repository:

```bash
  npm install
```
To deploy this project in a local environment, run the following:
```bash
  npm run dev
```

To build your site for deployment, run the following. By default, this will generate static files and place them in a dist/ directory. If SSR is enabled, this will generate the necessary server files to serve your site.

```bash
  npm run build
```

The [preview](https://docs.astro.build/en/reference/cli-reference/#astro-preview) command allows you to preview your site locally after building to catch any errors in your build output before deploying it by starting a local server to serve the contents of your static directory (*dist/* by default) created by running *astro build*. 
**_The command is not designed to be run in production._**

```bash
  npm run preview
```

## Tech Stack

**Client:** 
  - [Astro](https://astro.build/)
  - [Boostrap CSS](https://getbootstrap.com/) 
  - [Prettier](https://prettier.io/)
  - [TypeScript](https://www.typescriptlang.org/)

**Server:** 
 - [Node](https://nodejs.org/en)

## Installation

Install all the requirements with **npm install** after forking and cloning the repository

```bash
  npm install
```

## Deployment

To deploy this project in a local environment, run the following 

```bash
  npm run dev
```

To build your site for deployment. run the following. By default, this will generate static files and place them in a dist/ directory. If SSR is enabled, this will generate the necessary server files to serve your site.

```bash
  npm run build
```

The [preview](https://docs.astro.build/en/reference/cli-reference/#astro-preview) command allows you to preview your site locally after building to catch any errors in your build output before deploying it by starting a local server to serve the contents of your static directory (*dist/* by default) created by running *astro build*. 
**_The command is not designed to be run in production._**

```bash
  npm run preview
```

## Contributing

Found some important information missing? Please open a Pull Request and help improve this project. We welcome contributions of all kinds, whether it's adding new terms, fixing typos, or suggesting new features.

### Issue Templates
- To add new terms: [View Template](https://github.com/Buzzpy/Dev-Encyclopedia/issues/new?assignees=&labels=&projects=&template=add-a-new-term.md&title=New+Term+-)
- To report a bug: [View Template](https://github.com/Buzzpy/Dev-Encyclopedia/issues/new?assignees=&labels=&projects=&template=bug_report.md&title=Bug+-)
- Feature requests or anything else: Create your own issue 🐳


### How to Contribute (PRs)

1. **Fork the Repository:**
   - Start by forking this repository to your own GitHub account. This creates a copy of the repository under your GitHub account where you have full control.

2. **Clone the Repository:**
   - Once you have forked the repository, clone your fork to your local machine to start working on the project.
   - Use the following command to clone the repository:
     ```bash
     git clone https://github.com/your-username/Dev-Encyclopedia.git
     ```
   - Replace `your-username` with your GitHub username.

3. **Create a New Branch (Optional but Recommended):**
   - We recommend creating a new branch for your changes to keep your `develop` branch clean and to isolate your work.
   - Use the following command:
     ```bash
     git checkout -b feature-branch
     ```
   - Replace `feature-branch` with a name that reflects the work you’re doing (e.g., `add-content`, `fix-typo`).

4. **Make Your Changes:**
   - Make the necessary changes to the HTML files or any other content in the repository.

5. **Commit Your Changes:**
   - After making your changes, commit them with a brief and descriptive message:
     ```bash
     git add .
     git commit -m "Brief description of the changes"
     ```

6. **Push to GitHub:**
   - Push your changes to your forked repository:
     ```bash
     git push origin feature-branch
     ```

7. **Open a Pull Request:**
   - Go to the original repository on GitHub and open a Pull Request (PR) from your branch to the `develop` branch.
   - Make sure to describe the changes you’ve made and why they’re beneficial to the project.

8. **Get Your PR Merged:**
   - Once your PR is reviewed and approved, it will be merged into the `develop` branch. After thorough testing, the `develop` branch will be merged into the `main` branch for deployment (please note that this may take 2-3 days).

> `IMPORTANT`: This project uses the `main` branch for **deployment** and the `develop` branch for **active development**. All contributions should be made to the `develop` branch, which will be tested and reviewed before being merged into the main branch for deployment.

![Copy of assets (2)](https://github.com/user-attachments/assets/43d3e163-e279-4f0e-8d70-2a49fcef1632)

Thank you for contributing to the Dev Encyclopedia!


### 🎖️ Notable Contributors

We are grateful to our outstanding contributors who have significantly impacted this project. Check out their profiles below!

| Contributor Name | LinkedIn | GitHub |
|:------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|
| **Ray Mathew (@RayMathew)**                                  | [![LinkedIn](https://img.shields.io/badge/-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/ray-mathew7/) | [![GitHub](https://img.shields.io/badge/-Profile-black?style=flat&logo=github)](https://github.com/RayMathew) |
| **Amine Naqi (@Rodelph)**                              | [![LinkedIn](https://img.shields.io/badge/-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/amine-naqi-aa898724b/) | [![GitHub](https://img.shields.io/badge/-Profile-black?style=flat&logo=github)](https://github.com/Rodelph) |
| **Sudharshaun Mugundan (@Sudharshaun)**                              | [![LinkedIn](https://img.shields.io/badge/-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/sudharshaun/) | [![GitHub](https://img.shields.io/badge/-Profile-black?style=flat&logo=github)](https://github.com/Sudharshaun) |
| **Kwong Cheong N. (@KC900201)**                              | [![LinkedIn](https://img.shields.io/badge/-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/kwongcheongng) | [![GitHub](https://img.shields.io/badge/-Profile-black?style=flat&logo=github)](https://github.com/KC900201) |




### Sponsoring
A few dollars toward hosting and domain costs would be appreciated! Also, a sponsor page would be dedicated to the website so it's a win-win.


<a href='https://ko-fi.com/B0B011RLVN' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

#### License: CC BY-NC-SA 4.0
This project, Dev Encyclopedia, is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. You are free to share and adapt the content for non-commercial purposes, as long as you give appropriate credit and share any derivative works under the same license. [For more details, see the full license.](https://github.com/Buzzpy/Dev-Encyclopedia/blob/main/LICENSE)
