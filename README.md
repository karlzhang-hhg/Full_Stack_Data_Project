# full-stack-tinyurl-2

How to get start with Github:
1. Generate a SSH public/private key pair (see https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key);
2. Connect my computer with the my Github account using the SSH key pair (see  https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/);
3. echo "[project name or other information]" >> README.md
4. git init;
5. git add README.md;
6. git remote add origin [the http of the repository];
7. git push -u origin [branch name];
8. How to build a new branch (see https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches);


How to push to a branch of another repository:
1. Create a folder to the project;
2. cd to that folder;
3. Do whatever operations I need to do;
4. git add .;
5. git commit -m "[the message I need to send about this commit]";
6. git push [ssh of the repository] [branch name];
7. git pull [ssh of the repository] [branch name];
