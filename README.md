# Prerequisite

## Install Node

1. Make sure you're in your user's directory.
```
cd ~
```

2. Run the following command to download NVM. Change the version number as needed:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
* This command installs NVM into a new directory under your user named /.nvm
* This command also adds the following to your .bashrc file:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

3. Create/edit your existing .bash_profile. In this file, add the following line.
```
source ~/.bashrc
```

4. Run the following command to allow your shell to use this new version of nvm:

```
. ~/.bash_profile
```

5. To test if you can now use NVM, run the following which should respond with the version you have installed:

```
nvm --version
```

6. Check which versions of Node.js are available:
```
nvm ls-remote
```

7. Install any version of Node.js you wish:

```
nvm install 6.10.0
```

8. Check which version of Node.js is running by entering the following:

```
node -v
```

# Deployment Script
```
cd /[PUBLIC_WEBSITE]/wp-content/themes/
```
```
rm -rf wp-business
```
```
git init
```
```
git clone https://github.com/garyfagan1987/wp-business.git
```
```
cd wp-business
```
```
npm i
```
```
./node_modules/.bin/gulp
```

# Plugin Dependencies
* Advanced Custom Fields Pro
* Categories Images
* Formidable Forms
* Timber