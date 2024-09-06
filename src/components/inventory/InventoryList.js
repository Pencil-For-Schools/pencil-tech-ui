// components/InventoryList.js (Client Component)
"use client";

import { useRouter } from 'next/navigation';
import InventoryListItem from "@/components/inventory/InventoryListItem";

export default function InventoryList({ items }) {
  const router = useRouter();

  const handleReviewOrder = () => {
    router.push('/cart');
  };

  return (
    <div>
      {items.map((item) => (
        <InventoryListItem key={item.id} item={item} orderId={12345} />
      ))}
      <button onClick={handleReviewOrder} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        Review Order
      </button>
    </div>
  );
}
