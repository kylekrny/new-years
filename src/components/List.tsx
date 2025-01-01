/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { pageSize, Resolution, resolutionsRef } from '../firestore';
import ListItem from './ListItem';
import {
  DocumentData,
  getDocs,
  limit,
  orderBy,
  Query,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore';
import AddListItem from './AddListItem';
import { AppContext } from './context';

const List = () => {
  const context = useContext(AppContext);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot>();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const initialQ = query(
    resolutionsRef,
    orderBy('datePosted', 'desc'),
    limit(pageSize)
  );

  const fetchRecords = async (query: Query<DocumentData>) => {
    if (!loading && hasMore) {
      setLoading(true);

      try {
        const querySnapshot = await getDocs(query);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = querySnapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        })) as Resolution[];
        context?.setResolutions((prev) => {
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
    }
  };

  useEffect(() => {
    fetchRecords(initialQ);
  }, []);

  const handleLoadMore = () => {
    const batchQ = query(
      resolutionsRef,
      orderBy('datePosted', 'desc'),
      limit(pageSize),
      startAfter(lastVisible)
    );

    if (lastVisible !== undefined) {
      fetchRecords(batchQ);
    }
  };

  return (
    <>
      <ul role='list' className=''>
        <AddListItem />
        {context?.resolutions.map((resolution) => (
          <ListItem {...resolution} key={resolution.id} />
        ))}
      </ul>
      {context?.resolutions && context?.resolutions.length >= pageSize && (
        <div
          className={`w-full flex justify-center ${
            hasMore ? 'text-blue-500' : 'text-gray-500'
          } font-medium pt-4`}
        >
          <button onClick={() => handleLoadMore()} disabled={!hasMore}>
            {hasMore ? 'load more' : 'end of results'}
          </button>
        </div>
      )}
    </>
  );
};
export default List;
