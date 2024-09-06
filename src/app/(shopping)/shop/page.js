import InventoryList from "@/components/inventory/InventoryList";

export default async function ShopPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/inventory`, { cache: 'no-store' });
  const data = await res.json();

  return <InventoryList items={data} />;
}
