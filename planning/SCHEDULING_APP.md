
## **Goal**
Replace Calendly with an internal scheduling and registration system that allows teachers to book available slots at the Pencil Box locations using their email as the unique identifier.

### **Key Components:**
1. **Teacher Registration and Schedule Booking**
2. **Schedule Display and Management**
3. **Booking Confirmation and Notifications**

### **Implementation Phases**

---

#### **Phase 1: Database and API Development (6 hours)**

**Tasks:**
1. **Set Up Database Tables**
   - `teacher`: Manage teacher details.
   - `schedule_item`: Define available booking slots.
   - `teacher_schedule_item`: Track bookings associated with teachers.

2. **API Endpoint Development**
   - **Fetch Available Slots** (`GET /schedule-items`):
     - Returns a list of available schedule slots for booking.
   - **Book a Slot** (`POST /teacher-schedule-item`):
     - Accepts teacher email and slot details to create a booking.
     - Checks for slot availability to avoid double booking.
   - **View Teacher Bookings** (`GET /teacher-schedule-items/{email}`):
     - Returns booked slots for the specific teacher based on email.

**Dependencies:**
- Requires the initial database setup and correct table relationships.
- Endpoint testing with dummy data to ensure functionality.

---

#### **Phase 2: Front-End Development (8 hours)**

**Tasks:**
1. **Design the UI**
   - Create wireframes for the registration, schedule view, and booking confirmation pages.
   - Ensure the design is clean and intuitive, focusing on ease of use for teachers.

2. **Teacher Registration Form**
   - Simple form collecting the teacher’s email to identify them.
   - Front-end validation for email format and required fields.

3. **Schedule Display Page**
   - Implement a calendar or list view showing available slots fetched from the API.
   - Highlight available slots distinctly; disable already booked slots.

4. **Booking Confirmation Page**
   - Show a confirmation message after successful booking.
   - Include details of the booked slot and options to view or cancel.

**Dependencies:**
- Front-end functionality relies on the availability of back-end endpoints.
- Mock API responses can be used during initial development to simulate the data flow.

---

#### **Phase 3: Real-Time Booking Logic (4 hours)**

**Tasks:**
1. **Booking Validation**
   - Ensure that bookings are validated against available slots.
   - Handle edge cases where multiple teachers try to book the same slot simultaneously.

2. **Conflict Resolution**
   - Implement backend logic to handle slot conflicts and return appropriate error messages.

**Dependencies:**
- Accurate handling of slot availability requires the backend API to be fully operational.
- Real-time conflict handling needs thorough testing to prevent booking errors.

---

#### **Phase 4: Testing and Debugging (4 hours)**

**Tasks:**
1. **Unit Testing for APIs**
   - Test all API endpoints to ensure correct data handling and validation logic.
   
2. **Front-End Testing**
   - Test form submissions, schedule displays, and booking confirmation workflows.
   - Ensure that all user interactions are smooth and error messages are clear.

3. **End-to-End Testing**
   - Simulate a complete booking flow from registration to booking confirmation.
   - Verify the system tracks bookings accurately without any authentication.

**Dependencies:**
- Complete backend and frontend integration.
- Test data should reflect realistic scenarios to validate the system’s stability.

---

#### **Phase 5: Deployment and Final Checks (2 hours)**

**Tasks:**
1. **Deploy Backend and Frontend to Production Environment**
   - Ensure the database is correctly configured and all tables are populated with initial data.

2. **Final Integration Testing**
   - Perform a final round of testing in the production environment to confirm everything works as expected.
   - Adjust any configurations needed to optimize performance.

3. **Launch System**
   - Announce the switch to the internal scheduling system to relevant stakeholders.

**Dependencies:**
- Stable versions of both backend and frontend applications.
- Final confirmation of data integrity and booking flow correctness.

---

### **Total Time Estimate: 24 hours**







### **Phase 1: Database and API Development (6 hours)**

#### **Main Tasks:**
1. **Set Up Database Tables**
   - [ ] **Create `teacher` table**:
     - Columns: `id`, `first_name`, `last_name`, `school_id`, `email`, `phone`.
     - Add sample data for testing.
   - [ ] **Create `schedule_item` table**:
     - Columns: `id`, `shopper_qty`, `date_time`, `pencil_box_location_id`.
     - Populate with initial schedule slots.
   - [ ] **Create `teacher_schedule_item` table**:
     - Columns: `id`, `teacher_id`, `order_id` (nullable), `schedule_item_id`.
     - Set up relationships to `teacher` and `schedule_item`.

2. **API Endpoint Development**
   - [ ] **Develop `GET /schedule-items` endpoint**:
     - Fetch available schedule items.
     - Implement filters for date and location.
   - [ ] **Develop `POST /teacher-schedule-item` endpoint**:
     - Handle booking creation using teacher email and slot details.
     - Check availability before creating a booking.
   - [ ] **Develop `GET /teacher-schedule-items/{email}` endpoint**:
     - Return all bookings for a teacher based on email.

---

### **Phase 2: Front-End Development (8 hours)**

#### **Main Tasks:**
1. **Design the UI**
   - [ ] **Create wireframes**:
     - Design layouts for registration, schedule display, and booking confirmation.

2. **Teacher Registration Form**
   - [ ] **Build registration form**:
     - Inputs: email (required, unique), name fields.
     - Validate email format on submit.
   - [ ] **Form Submission Handling**:
     - Connect to the backend to register or update teacher info.

3. **Schedule Display Page**
   - [ ] **Develop calendar view component**:
     - Fetch available slots from the API and display them.
   - [ ] **Highlight availability**:
     - Clearly show available vs. booked slots.
   - [ ] **Slot selection**:
     - Allow teachers to click and select a slot.

4. **Booking Confirmation Page**
   - [ ] **Create confirmation message layout**:
     - Display slot details, teacher name, and confirmation status.
   - [ ] **Backend confirmation**:
     - Verify booking against backend data and update status.

---

### **Phase 3: Real-Time Booking Logic (4 hours)**

#### **Main Tasks:**
1. **Booking Validation**
   - [ ] **Implement availability checks**:
     - Ensure no double bookings; lock slots once selected.
   - [ ] **Error handling**:
     - Return clear error messages if slot selection fails.

2. **Conflict Resolution**
   - [ ] **Develop conflict logic**:
     - If simultaneous requests occur, reject conflicting bookings.
   - [ ] **Backend updates**:
     - Update `teacher_schedule_item` accordingly.

---

### **Phase 4: Testing and Debugging (4 hours)**

#### **Main Tasks:**
1. **Front-End Testing**
   - [ ] **Test registration form validation**:
     - Ensure proper error handling for incorrect inputs.
   - [ ] **Test schedule display and slot selection**:
     - Verify slots load correctly and can be booked.

2. **End-to-End Testing**
   - [ ] **Simulate full booking flow**:
     - From registration to booking confirmation.
   - [ ] **Edge case testing**:
     - Test scenarios like multiple teachers booking the same slot.

---

### **Phase 5: Deployment and Final Checks (2 hours)**

#### **Main Tasks:**
1. **Deploy Backend and Frontend to Production**
   - [ ] **Set up production environment**:
     - Ensure the database and APIs are correctly configured.

2. **Final Integration Testing**
   - [ ] **Test live system functionality**:
     - Confirm data integrity and booking flow.

3. **Launch System**
   - [ ] **Go live with the new system**:
     - Communicate the transition from Calendly to internal scheduling.

---

### **Stretch Goals:**
- **Unit Tests for APIs and Front-End Components**
- **High-Fidelity Mockups for UI Enhancement**

---

### **GitHub Project Setup:**

#### **Columns for GitHub Project Board:**
1. **Backlog**: Place all tasks that have not been started.
2. **In Progress**: Tasks currently being worked on.
3. **Review/Testing**: Completed tasks awaiting review or testing.
4. **Done**: Finalized tasks that are fully tested and deployed.
