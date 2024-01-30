import dynamic from "next/dynamic";

const DynamicDatagridComponent = dynamic(() => import('@/components/datagrid/datagrid-component'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

const DataGridComponent: React.FC = () => {
  return <DynamicDatagridComponent />;
};

export default DataGridComponent;
