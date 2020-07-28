export const convertNasaData = (data) => {
  return data.map((item) => {
    const dateCreated = new Date(item.data[0].date_created);
    return {
      ...item,
      data: [
        {
          title: item.data[0].title,
          date_created: `${dateCreated.getFullYear()}/${dateCreated.getMonth()}/${dateCreated.getDate()}`,
          // keywords:
          //   item.data[0].keywords !== undefined
          //     ? item.data[0].keywords.length === 1
          //       ? item.data[0].keywords
          //       : item.data[0].keywords.join(", ")
          //     : "",
        },
      ],
    };
  });
};

export const sortData = (arr, cond) => {
  if (cond.sort === "desc") {
    return arr.sort((a, b) =>
      a.data[0][cond.orderBy] > b.data[0][cond.orderBy] ? -1 : 1
    );
  }
  return arr.sort((a, b) =>
    a.data[0][cond.orderBy] > b.data[0][cond.orderBy] ? 1 : -1
  );
};
