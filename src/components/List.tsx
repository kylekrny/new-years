/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { pageSize, Resolution, resolutionsRef } from '../firestore';
import ListItem from './ListItem';
import {
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore';
import AddListItem from './AddListItem';
import { AppContext } from './context';

const List = () => {
  const context = useContext(AppContext);
  const [resolutions, setResolutions] = useState<Resolution[]>([]);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchRecords = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    const firstQ = query(
      resolutionsRef,
      orderBy('datePosted', 'desc'),
      limit(pageSize)
    );

    const batchQ = query(
      resolutionsRef,
      orderBy('datePosted', 'desc'),
      limit(pageSize),
      startAfter(lastVisible)
    );

    try {
      const querySnapshot = await getDocs(lastVisible ? batchQ : firstQ);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
      })) as Resolution[];
      setResolutions((prev) => {
        const existingIds = new Set(prev.map((item) => item.id));
        const newItems = data.filter((item) => !existingIds.has(item.id));
        return [...prev, ...newItems];
      });
      const last = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastVisible(last);

      if (data.length < pageSize) {
        setHasMore(false);
      }
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchRecords();
    context?.setSubmitted(false);
  }, [context?.submitted]);

  return (
    <ul role='list' className=''>
      <AddListItem />
      {resolutions.map((resolution) => (
        <ListItem {...resolution} />
      ))}
    </ul>
  );
};
export default List;
