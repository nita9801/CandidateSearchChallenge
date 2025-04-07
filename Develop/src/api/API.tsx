const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    // console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    // console.log('Response:', response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    // console.log('Data:', data);
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.error(`User not found: ${username}`);
        return {
          id: 0,
          login: username,
          avatar_url: '',
          html_url: '',
          name: 'User Not Found',
          email: '',
          bio: '',
        };
      }
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      id: data.id || 0,
      login: data.login || '',
      avatar_url: data.avatar_url || '',
      html_url: data.html_url || '',
      name: data.name || '',
      email: data.email || '',
      bio: data.bio || '',
    };
  } catch (err) {
    console.error('Error fetching user:', err);
    return {
      id: 0,
      login: '',
      avatar_url: '',
      html_url: '',
      name: '',
      email: '',
      bio: '',
    };
  }
};

export { searchGithub, searchGithubUser };