export const fetchExpense = async ({ title }) => {
  const response = await fetch(
    `https://625ad65f398f3bc782a709a9.mockapi.io/api/v1/expenses?title=${title}`
  );
  const data = await response.json();
  return data;
};

export const createNewExpense = ({ title, amount }) => {
  fetch("https://625ad65f398f3bc782a709a9.mockapi.io/api/v1/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, amount }),
  });
};

export const updateExpenseById = (id, updatedData) => {
  fetch(
    `https://625ad65f398f3bc782a709a9.mockapi.io/api/v1/expenses/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }
  );
};

export const deleteExpenseById = async (id) => {
  await fetch(
    `https://625ad65f398f3bc782a709a9.mockapi.io/api/v1/expenses/${id}`,
    {
      method: "DELETE",
    }
  );
};
export * from './fetchById';