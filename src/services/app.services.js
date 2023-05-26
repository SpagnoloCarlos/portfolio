export const submitForm = async (values) => {
  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/af7303d30869090e9336063f527b2dc6",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    return response;
  } catch (error) {
    console.log({ Message: "error in submitForm()", error });
  }
};
