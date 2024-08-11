# Overview

Hi there! Here is my attempt of solving the **Subvisual Challenge**!

Overall I think I did well, even tho I am learning React by myself.
This project taught me a lot of things, how are components rendered, how does the Virtual DOM work, how to fetch data from an API, among others.

And mainly, I had fun coding it!

## Struggles
My main struggle was using useEffect since I've didn't had a lot of experience with it, but after completing this project, I got a pretty good grasp of how it works.

## Features
In terms of features, I've added a few things:

1. **Added a Preview List**: while the user is searching, a list will appear with the possible matches. Since I was already trying to compare the best matches, I saw this as an opportunity to show the user what Pokémon he might be trying to find.
2. **Created a Reset Button**: in case the user wants to go back to the start.

I did not complete automated tests since I did not had the time for it

# Installation

In order to install this project, you'll need node and npm installed on your system:


## Package Manager

1. **Install NodeJS and NPM**

   If you prefer using a package manger, use your preferred one to install it

   ```bash
   # Ubuntu
   sudo apt install npm

   # Arch
   sudo pacman -S nodejs npm

   # Choco (Windows)
   choco install nodejs-lts

   # Homebrew (macOS)
   brew install node
   
   # Others...
   ```

   You should see the version numbers for Node.js and npm.

## Windows

If you're on Windows, follow these steps:

1. **Download Node.js Installer**

   Go to the [Node.js official website](https://nodejs.org/) and download the Windows installer (`.msi` file). Choose the LTS (Long Term Support) version for stability.

2. **Run the Installer**

   Open the downloaded `.msi` file and follow the installation wizard:
   
   - Click "Next" on the welcome screen.
   - Accept the license agreement and click "Next".
   - Choose the installation path or leave it as default and click "Next".
   - Ensure that the options to install Node.js and npm (Node Package Manager) are checked, then click "Next".
   - Click "Install" to begin the installation.

3. **Verify if everything was installed correctly**

    Open your Command Prompt (cmd) and run the following commands:

    ```bash
    node -v
    npm -v
    ```

    You should see the version numbers for Node.js and npm.

# macOS

1. **Download Node.js Installer**

   Visit the [Node.js official website](https://nodejs.org/) and download the macOS installer (`.pkg` file). Choose the LTS (Long Term Support) version for stability.

2. **Run the Installer**

   Open the downloadead `.pkg` file and follow the installation prompts:

   - Click "Continue" through the welcome screens.
   - Accept the license agreement.
   - Choose the installation location or leave it as default.
   - Click "Install" to start the installation.

3. **Verify Installation**

   Open Terminal and run the following commands to verify the installation:

   ```bash
   node -v
   npm -v
   ```

# Setup

1. **Clone the repository**

   - Click on the pointing down arrow inside of the green button where it says Code.
   - Switch to HTTPS from the options listed (HTTPS, SSH, GitHub CLI).
   - Click on the icon in front of a link, to copy it.
   - Using git (ensure you have it installed), we can clone the project locally into your machine.

   ```bash
   git clone https://github.com/hvieira512/subvisual-challenge.git
   ```

   After the project was downloaded, let's enter the directory and install the dependencies

   ```bash
   cd subvisual-challenge
   npm i # or npm install
   ```
   
   After the dependencies were installed, let's finally start the project!

   ```bash
   npm start
   ```

# Troubleshooting
If you encounter any issues, try the following:

- Ensure you have the correct versions of Node.js and npm/yarn installed.
- Delete the `node_modules` directory and `package-lock.json` file , then run `npm install` again.
- Check the project's documentation for specific setup instructions or dependencies.
