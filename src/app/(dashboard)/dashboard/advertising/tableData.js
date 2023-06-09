const tableData = {
  tagsList: [
    {
        id: 1,
        name: 'Тестовый',
        color: 'green'
    },
    {
        id: 2,
        name: "Центр",
        color: "blue"
    }
    ],
    adsList: [
      {
        id: 123,
        createdTime: '07.06.2023',
        image: 'productImage',
        adName: 'тестовый',
        location: 'Казань, Козина, 5',
        tags: [1],
        totalImpressions: 1024,
        totalViews: 400,
        status: 'Работает',
      },
      {
        id: 234,
        createdTime: '07.06.2023',
        image: 'productImage',
        adName: null,
        location: 'Казань, Козина, 5',
        tags: [2],
        totalImpressions: 1024,
        totalViews: 400,
        status: 'Работает',
      },
      {
        id: 345,
        createdTime: '07.06.2023',
        image: 'productImage',
        adName: null,
        location: 'Казань, Козина, 5',
        tags: [1, 2],
        totalImpressions: 1024,
        totalViews: 400,
        status: 'Работает',
      }
  ]
}

export default tableData;
