"use client";
import InventoryListItem from "@/components/InventoryListItem";

export default function ShopPage() {
  return (
    <>
      <InventoryListItem
        name="test item 1"
        id={12345}
        orderId={56789}
        max={5}
      />
      <InventoryListItem name="test item 2" id={123} orderId={56789} max={4} />
      <InventoryListItem name="test item 3" id={12} orderId={56789} max={3} />
    </>
  );
}
