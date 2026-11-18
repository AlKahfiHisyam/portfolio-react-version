import { useState, useEffect } from 'react';

// GitHub has no public contributions endpoint, so this reads a community mirror of the profile calendar.
export const useGitHubContributions = (username) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch contributions');
        return response.json();
      })
      .then((json) => setData({ total: json.total?.lastYear ?? 0, days: json.contributions ?? [] }))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      });

    return () => controller.abort();
  }, [username]);

  return { data, error };
};
