import { useEffect, useState } from 'react';
import { getBatch, pageSize, Resolution, resolutionsRef } from '../firestore';
import ListItem from './ListItem';
import {
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore';

const firstQuery = query(
  resolutionsRef,
  orderBy('description'),
  limit(pageSize)
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBatch = async (lastVisible: any) => {
  if (!lastVisible) {
    const documentSnapshots = await getDocs(first);

    const last = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    return { docs: documentSnapshots, last };
  } else {
    const next = query(
      resolutionsRef,
      orderBy('description'),
      startAfter(lastVisible),
      limit(pageSize)
    );
    const docSnapshots = await getDocs(next);

    const last = docSnapshots.docs[docSnapshots.docs.length - 1];
    return { docSnapshots, last };
  }
};

const List = () => {
  const [resolutions, setResolutions] = useState<Resolution[]>([]);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot>();

  const fetchRecords = async () => {
    try {
      const querySnapshot = await getDocs(firstQuery);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);

      setResolutions(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Resolution[]
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <ul role='list' className=''>
      {resolutions.map((resolution) => (
        <ListItem {...resolution} />
      ))}
    </ul>
  );
};
export default List;
