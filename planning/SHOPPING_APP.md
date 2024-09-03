## **Goal**
Develop a cart system that allows teachers to add items in real time as they physically move through the Pencil Box, ensuring accurate tracking of inventory and streamlining the checkout process.

### **Key Components:**
1. **Cart Interface for Teachers**
2. **Real-Time Inventory Tracking**
3. **Checkout and Order Management**

### **Implementation Phases**

---

### **Phase 1: Database and API Development (6 hours)**

#### **Main Tasks:**
1. **Set Up Database Tables**
   - [ ] **Use `order` table**:
     - Columns: `id`, `teacher_id`, `pickup` (boolean), `created_at`, `fulfilled_at`, `approved`.
     - Track orders placed by teachers.
   - [ ] **Use `pencil_box_location_inventory_item_order` table**:
     - Columns: `id`, `order_id`, `pencil_box_location_inventory_item_id`, `qty`.
     - Link ordered items to the specific inventory items at the Pencil Box location.

2. **API Endpoint Development**
   - [ ] **Develop `GET /cart-items/{teacher_email}` endpoint**:
     - Fetch current items in the teacher’s cart based on their email.
   - [ ] **Develop `POST /add-to-cart` endpoint**:
     - Add an item to the teacher’s cart, updating quantity as needed.
   - [ ] **Develop `POST /submit-cart` endpoint**:
     - Finalize the cart, converting it to an order and updating inventory levels.

---

### **Phase 2: Front-End Development (8 hours)**

#### **Main Tasks:**
1. **Cart Interface**
   - [ ] **Design the cart UI**:
     - Display items being added in real-time, with quantity adjustments.
   - [ ] **Item Addition Flow**:
     - Allow teachers to scan items or select from a list to add to their cart.

2. **Real-Time Cart Updates**
   - [ ] **Implement cart updates on item addition**:
     - Update the cart display immediately upon adding an item.
   - [ ] **Visual Stock Feedback**:
     - Indicate if items are low in stock or no longer available.

3. **Checkout Flow**
   - [ ] **Develop checkout page**:
     - Display all items in the cart with a final submit button.
   - [ ] **Order Confirmation**:
     - Show a confirmation message once the cart is successfully submitted.

---

### **Phase 3: Inventory and Stock Management Logic (4 hours)**

#### **Main Tasks:**
1. **Inventory Sync with Cart**
   - [ ] **Implement stock reduction logic**:
     - Deduct items from stock when added to a cart and finalize on checkout.
   - [ ] **Prevent Overbooking**:
     - Block items from being added if stock is insufficient.

2. **Order Fulfillment Logic**
   - [ ] **Handle order status updates**:
     - Update the order status to fulfilled or pending based on availability and approval.

---

### **Phase 4: Testing and Debugging (4 hours)**

#### **Main Tasks:**
1. **Front-End Testing**
   - [ ] **Test cart interactions**:
     - Ensure items can be added, removed, and updated without errors.
   - [ ] **Test checkout process**:
     - Verify successful submission and order creation.

2. **End-to-End Testing**
   - [ ] **Simulate complete cart flow**:
     - From adding items in the Pencil Box to checkout and fulfillment.
   - [ ] **Edge case testing**:
     - Handle scenarios like trying to add out-of-stock items.

---

### **Phase 5: Deployment and Final Checks (2 hours)**

#### **Main Tasks:**
1. **Deploy Backend and Frontend to Production**
   - [ ] **Set up production environment**:
     - Ensure the database and APIs are correctly configured.

2. **Final Integration Testing**
   - [ ] **Test live system functionality**:
     - Confirm cart updates and order processing work seamlessly.

3. **Launch System**
   - [ ] **Go live with the cart system**:
     - Ensure all teachers can access and use the cart for real-time item tracking.

---

### **Stretch Goals:**
- **Pre-Shopping and Pickup Later Option**:
  - Implement a feature allowing teachers to shop online and schedule item pickup.
- **Advanced Order Management**:
  - Include notifications for order status changes and stock alerts.

---

### **GitHub Project Setup:**

#### **Columns for GitHub Project Board:**
1. **Backlog**: Place all tasks that have not been started.
2. **In Progress**: Tasks currently being worked on.
3. **Review/Testing**: Completed tasks awaiting review or testing.
4. **Done**: Finalized tasks that are fully tested and deployed.
