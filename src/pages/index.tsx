import dynamic from "next/dynamic";

const DynamicDatagridComponent = dynamic(() => import('@/components/datagrid/datagrid-component'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function Home() {
  return <DynamicDatagridComponent />;
}
