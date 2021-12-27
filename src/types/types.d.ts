interface IUser {
  id: number;
  name: string;
  type: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: boolean;
  twitter_username: boolean;
  login: string;
  html_url: string;
  followers: string;
  following: string;
  public_repos: string;
  public_gists: string;
  hireable: boolean;
}

interface IRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  forks: number;
  open_issues: number;
  watchers_count: number;
  stargazers_count: number;
}

type Change = React.ChangeEvent<HTMLInputElement>;
type Submit = React.FormEvent<HTMLFormElement>;
