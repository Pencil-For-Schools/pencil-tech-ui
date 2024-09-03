## **Goal**
Develop an inventory system that tracks items available in the Pencil Box, manages stock levels, and records inventory intake activities.

### **Key Components:**
1. **Inventory Management**
2. **Item Intake and Adjustments**
3. **Location Management**

### **Implementation Phases**

---

### **Phase 1: Database and API Development (6 hours)**

#### **Main Tasks:**
1. **Set Up Database Tables**
   - [ ] **Create `inventory_item` table**:
     - Columns: `id`, `name`, `description`, `value`, `archived`.
     - Seed initial items for testing.
   - [ ] **Create `pencil_box_location` table**:
     - Columns: `id`, `name`, `address1`, `address2`, `city`, `state`, `zip`.
     - Add sample locations to test item distribution.
   - [ ] **Create `inventory_intake` table**:
     - Columns: `id`, `inventory_item_id`, `updated_by`, `donated_by`, `qty_donated`, `pencil_box_location_id`, `notes`, `updated_at`, `intake_type_id`.
   - [ ] **Create `intake_type` table**:
     - Columns: `id`, `name` (e.g., intake, adjustment), `description`.
   - [ ] **Create `pencil_box_location_inventory_item` table**:
     - Columns: `id`, `inventory_item_id`, `pencil_box_location_id`, `bin_number`, `low_stock`, `max_amt`, `sold`, `in_stock`, `last_audited`.

2. **API Endpoint Development**
   - [ ] **Develop `GET /inventory-items` endpoint**:
     - Fetch all inventory items with filtering options (location, archived status).
   - [ ] **Develop `POST /inventory-intake` endpoint**:
     - Log intake events, including donations and adjustments.
   - [ ] **Develop `GET /inventory-location/{location_id}` endpoint**:
     - View inventory status at a specific Pencil Box location.

---

### **Phase 2: Front-End Development (8 hours)**

#### **Main Tasks:**
1. **Inventory Dashboard**
   - [ ] **Design dashboard layout**:
     - Display item names, current stock, and alerts for low stock.
   - [ ] **Implement item list component**:
     - Fetch data from API and display inventory items.

2. **Item Intake Form**
   - [ ] **Build intake form**:
     - Fields: Item selection, quantity, location, updated by, donated by, and intake type.
   - [ ] **Form Submission Handling**:
     - Connect form to the backend to record inventory intake.

3. **Location Management Interface**
   - [ ] **Develop location overview page**:
     - Show inventory items available at each location with stock levels.
   - [ ] **Location details**:
     - Allow detailed view and adjustments of inventory per location.

---

### **Phase 3: Stock Management Logic (4 hours)**

#### **Main Tasks:**
1. **Stock Adjustment Logic**
   - [ ] **Implement stock calculation rules**:
     - Adjust stock levels based on intake events, sales, and adjustments.
   - [ ] **Low Stock Alert System**:
     - Highlight items that fall below the defined low stock threshold.

2. **Audit Functionality**
   - [ ] **Set up audit trails**:
     - Track all adjustments and intake actions with timestamps and user details.

---

### **Phase 4: Testing and Debugging (4 hours)**

#### **Main Tasks:**
1. **Front-End Testing**
   - [ ] **Test intake form validation**:
     - Ensure correct input handling and submission responses.
   - [ ] **Test inventory display**:
     - Verify accurate stock data is shown and updated in real time.

2. **End-to-End Testing**
   - [ ] **Simulate inventory management flow**:
     - From intake through to location-based stock adjustments.
   - [ ] **Edge case testing**:
     - Scenarios like high donation volumes or inventory discrepancies.

---

### **Phase 5: Deployment and Final Checks (2 hours)**

#### **Main Tasks:**
1. **Deploy Backend and Frontend to Production**
   - [ ] **Set up production environment**:
     - Ensure the database and APIs are correctly configured.

2. **Final Integration Testing**
   - [ ] **Test live system functionality**:
     - Confirm all data flows and stock adjustments work as expected.

3. **Launch System**
   - [ ] **Go live with the inventory system**:
     - Ensure all Pencil Box locations have access to the system for inventory management.

---

### **Stretch Goals:**
- **Unit Tests for Stock Management Logic**
- **Advanced Reporting on Inventory Trends and Adjustments**

---

### **GitHub Project Setup:**

#### **Columns for GitHub Project Board:**
1. **Backlog**: Place all tasks that have not been started.
2. **In Progress**: Tasks currently being worked on.
3. **Review/Testing**: Completed tasks awaiting review or testing.
4. **Done**: Finalized tasks that are fully tested and deployed.

This plan provides a detailed approach to setting up the inventory system, ensuring all critical aspects are covered to meet the MVP requirements. Let me know if you'd like further adjustments or if you’re ready to proceed to the next feature!
