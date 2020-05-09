export function apiPaths(...ids: any[]): any {
  console.log(arguments);
  const basePath = 'https://jsonplaceholder.typicode.com';
  return {
    users: `${basePath}/users`,
    todos: `${basePath}/users/${ids[0]}/todos`
  };
}
