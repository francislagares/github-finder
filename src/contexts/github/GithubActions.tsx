// Get search results
export const searchUsers = async (text: string): Promise<IUser[]> => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
  );
  const { items } = await response.json();

  return items;
};

// Get single user
export const getUser = async (login: string): Promise<IUser> => {
  const response = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
  );

  if (response.status === 404) {
    window.location.href = '/notfound';
  }

  const data = await response.json();

  return data;
};

export const getUserRepos = async (login: string): Promise<IRepo[]> => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

  const response = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`,
  );

  const data = await response.json();

  return data;
};
