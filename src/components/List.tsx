import ListItem from './ListItem';

// id: string;
//   description: string;
//   category: string,
//   datePosted: string,
//   likes: number,

const resolutions = [
  {
    id: '1',
    description: 'This is a resolution description',
    category: 'Health and Fitness',
    likes: 25,
    datePosted: 'string',
  },
];

const List = () => {
  return (
    <ul role='list' className='divide-y divide-gray-100'>
      {resolutions.map((resolution) => (
        <ListItem {...resolution} />
      ))}
    </ul>
  );
};
export default List;
