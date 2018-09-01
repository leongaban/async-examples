console.log('Before');
getUser(1, fetchUser);
console.log('After');

function fetchUser(user) {
  console.log(user);
  const { gitHubUsername } = user;
  return getRepositories(gitHubUsername, fetchReports)
}

function fetchReports(repos) {
  console.log(repos);
  return getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id, gitHubUsername: 'Leon' });
  }, 2000);
}

function getRepositories(username, callback) {
  console.log('Calling GitHub API...');
  callback(['repo1', 'repo2', 'repo3']);
}

function getCommits(repo, callback) {
  console.log('Calling GitHub Commits API...');
  callback(['commit1', 'commit2', 'commit3']);
}
