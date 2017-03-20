# Versioning Angular-DataTable

Version maintenance is a critical aspect of maintaining a public NPM package. New versions must be carefully managed to ensure they properly publish. Moreso, proper linting and testing must be performed on each version before publishing to ensure a bad version is never published to the public NPM repository.

Please follow this procedure to version angular-datatable before publishing:

## Versioning Procedure

On your development branch:

1. Verify that you have the latest changes from development by rebasing or merging into your branch.
2. Run linting to ensure the code conforms to necessary style rules.
3. Run unit tests to ensure the code properly functions.
4. Bump the version number in package.json:
  - Use revisions for small updates that fix bugs that do not otherwise change the functionality
  - Use minor versions for small updates to functionality, if changes to not break backwards compatibility
  - Use major versions for large updates to functionality, particularly if they involve breaking changes to backwards compatibility
5. PR your changes with the updated version into the develop branch
6. Request a repository owner to merge the changes into master, which will automatically invoke a publish to the public NPM repo