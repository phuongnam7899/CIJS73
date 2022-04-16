export const fetchById = async (id) => {
    const response = await fetch(
      `https://625ad65f398f3bc782a709a9.mockapi.io/api/v1/expenses/${id}`
    );
    const data = await response.json();
    return data;
  };