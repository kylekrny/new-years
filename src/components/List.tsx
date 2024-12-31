import ListItem from './ListItem';

const resolutions = [
  {
    id: 1,
    description: 'This year I would like to get to lose 26 pounds.',
    category: 'Health and Fitness',
    likes: 25,
    datePosted: 'string',
  },
  {
    id: 2,
    description: 'This year I would like to propose to my girlfriend.',
    category: 'Health and Fitness',
    likes: 25,
    datePosted: 'string',
  },
  {
    id: 3,
    description:
      'This year I would like to start my side hustle and quit my day job by the end of the year.',
    category: 'Health and Fitness',
    likes: 25,
    datePosted: 'string',
  },
  {
    id: 4,
    description:
      'This year I want to learn to love myself and appreciate the person I see in the mirror.',
    category: 'Health and Fitness',
    likes: 25,
    datePosted: 'string',
  },
  {
    id: 5,
    description:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Nostra laoreet accumsan parturient magna ac vulputate donec.',
    category: 'Health and Fitness',
    likes: 25,
    datePosted: 'string',
  },
];

const List = () => {
  return (
    <ul role='list' className=''>
      {resolutions.map((resolution) => (
        <ListItem {...resolution} />
      ))}
    </ul>
  );
};
export default List;
