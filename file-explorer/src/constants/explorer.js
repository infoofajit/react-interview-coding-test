export const explorer = {
  id: 1,
  name: 'root',
  isFolder: true,
  items: [
    {
      id: 2,
      name: 'public',
      isFolder: true,
      items: [
        {
          id: 3,
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              id: 4,
              name: 'public nested 2',
              isFolder: true,
              items: [
                {
                  id: 5,
                  name: 'file2.js',
                  isFolder: false,
                }
              ]
            },
            {
              id: 6,
              name: 'file.html',
              isFolder: false,
            }
          ]
        }
      ]
    },
    {
      id: 7,
      name: 'src',
      isFolder: true,
      items: [
        {
          id: 8,
          name: 'App.js',
          isFolder: false,
        },
        {
          id: 9,
          name: 'Index.js',
          isFolder: false,
        },
        {
          id: 10,
          name: 'style.css',
          isFolder: false,
        }
      ]
    },
    {
      id: 11,
      name: 'package.json',
      isFolder: false,
    },
  ]
};
