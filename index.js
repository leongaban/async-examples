console.log('Before');

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => displayCommits(commits))
  .catch(err => console.log('Error', err.message));

console.log('After');

function displayCommits(commits) {
  console.log('commits:', commits);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Reading a user from a database...');
        resolve({ id, gitHubUsername: 'Leon' });
      }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Connecting to the Github Repo API...');
        resolve(['repo1', 'repo2', 'repo3']);
      }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Connecting to the Gihub Commits API...');
        resolve(['commit1', 'commit2', 'commit3']);
      }, 2000);
  });
}
