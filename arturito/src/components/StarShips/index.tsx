import useSWR from 'swr';

import { starGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
    render: (manufacturer: string) =>
      parseInt(manufacturer)
        ? parseInt(manufacturer).toLocaleString('es-AR')
        : manufacturer,
  },
  {
    title: 'Films count',
    dataIndex: 'films',
    key: 'films_count',
    render: (films: string[]) => films.length,
  },
  {
    title: 'Passengers',
    dataIndex: 'passengers',
    key: 'passengers',
  },
];

const StarShips = () => {
  const { data, error } = useSWR('/starships', starGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} /* :D */ />
    </div>
  );
};

export default StarShips;
