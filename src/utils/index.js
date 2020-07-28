export const convertNasaData = (data) => {
  return data.map((item) => {
    const dateCreated = new Date(item.data[0].date_created);
    console.log(123, item.data[0]);
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
