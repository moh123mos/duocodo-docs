# Chapter 5: System Architecture

## 5.3 Use Case Formats

This section presents use cases for the DuoCodo platform organized by user role. The cases progress from administrative functions through content creation to learner interactions, using three format levels: Brief (one-line), Casual (structured scenarios), and Fully Dressed (comprehensive specifications).

[[toc]]

## Administrator Use Cases

### Brief Format Use Cases

#### 1. Check Platform Statistics

The administrator views key metrics including total users, active learners, course enrollments, and system performance indicators.

#### 2. View User List

The administrator displays a searchable list of all registered users with basic information and account status.

---

### Casual Format Use Cases

#### 3. Assign User Roles

**Actor:** Administrator

**Main Success Scenario:**
1. The administrator navigates to "Role Management" in the admin panel.
2. The system displays available roles:
   - Learner (default)
   - Content Creator
   - Administrator
3. The administrator searches for a specific user.
4. The administrator selects the user and clicks "Change Role."
5. The system displays current role and available role options.
6. The administrator selects the new role from the dropdown.
7. If promoting to Content Creator or higher, the system prompts:
   - *"This role grants elevated permissions. Confirm you want to proceed?"*
8. The administrator confirms the role change.
9. The system updates the user's role and permissions.
10. The system sends notification to the user:
    - *"Your account role has been updated to [New Role]. You now have access to [features]."*
11. The system logs the role change with timestamp and admin identifier.
12. The user's interface updates to reflect new capabilities on next login.

**Alternative Scenarios:**

**A1. Insufficient Permissions**
- At Step 6, if the admin lacks authority to assign certain roles:
  - The system displays: *"You cannot assign [Role Name]. Only Super Administrators can grant this role."*

**A2. User Already Has Role**
- At Step 6, if attempting to assign current role:
  - The system displays: *"This user already has the [Role Name] role."*

**A3. Content Creator Requirements Not Met**
- At Step 8, if promoting to Content Creator but user hasn't met criteria:
  - The system warns: *"This user hasn't completed Content Creator training. Assign role anyway?"*
  - Admin can proceed with override or require training first.

**A4. Demoting Active Content Creator**
- At Step 8, if demoting a creator with published content:
  - The system warns: *"This user has [X] published courses. Demoting will affect content management. Reassign content?"*
  - Admin must decide how to handle existing content.

---

## Content Creator Use Cases

---

### Brief Format Use Cases

#### 1. View Created Content

The content creator views a list of all courses, lessons, and exercises they have authored.

#### 2. Preview Lesson

The content creator previews how learners will see and interact with a lesson before publishing.

#### 3. Delete Draft

The content creator removes unpublished course materials or exercises from their drafts.

---

### Casual Format Use Cases
#### 4. Create Path

**Actor:** Content Creator

**Main Success Scenario:**
1. The content creator logs into the platform.
2. The content creator navigates to "My Paths" section.
3. The content creator clicks "Create New Path."
4. The system displays a Path creation form with fields:
   - Path title
   - Path description
   - Difficulty level (Beginner/Intermediate/Advanced)
   - Path category (e.g., Programming, Data analysis)
   - Path thumbnail image
   - Estimated duration
5. The content creator fills in all required information.
6. The content creator organizes the Path into modules:
   - Adds module titles
   - Orders modules sequentially
   - Assigns estimated time per module
7. The content creator clicks "Create Path."
8. The system validates all inputs and generates a unique Path ID.
9. The system creates the Path structure and saves it as a draft.
10. The system displays: *"Path created successfully! Now you can add lessons and exercises."*
11. The content creator is redirected to the Path dashboard to begin adding content.

**Alternative Scenarios:**

**A1. Missing Required Fields**
- At Step 7, if required fields are empty:
  - The system displays: *"Please complete all required fields: [Field Names]."*
  - Incomplete fields are highlighted in red.

**A2. Duplicate Path Title**
- At Step 8, if a path with the same title exists:
  - The system displays: *"A path with this title already exists. Please choose a different title or modify the existing path."*

**A3. Path Creation Limit Reached**
- At Step 3, if the creator has reached their path limit:
  - The system displays: *"You've reached the maximum number of draft paths (5). Please publish or delete existing drafts."*

---

#### 5. Create Lesson Node

**Actor:** Content Creator

**Main Success Scenario:**
1. The content creator selects an existing path from their dashboard.
2. The content creator selects a module within the path.
3. The content creator clicks "Add New Node."
4. The system displays the Node creation interface with sections:
   - Node title
   - Node Description
   - Node type selection (Lesson/Quiz/Challenge)
   - Content type selection (Text/Video)
   - Prerequisite Node selection
5. The content creator enters the Node title and description.
6. The content creator selects multi-format content:
   - Uploads or embeds video tutorial
   - Interactive conversation with AI tutor
   - Writes explanatory text with rich formatting (Articles)
7. The content creator adds code snippets with syntax highlighting.
8. The content creator previews the Node to see how it will appear to learners.
9. The content creator sets Node order within the module.
10. The content creator clicks "Save Node."
11. The system validates content and saves the Node.
12. The system displays: *"Node saved successfully!"*

**Alternative Scenarios:**

**A1. Video Upload Fails**
- At Step 6, if video upload encounters an error:
  - The system displays: *"Video upload failed. Please ensure the file is under 500MB and in MP4 format."*
  - Text content is saved as draft automatically.

**A2. Content Too Short**
- At Step 11, if the lesson content is minimal:
  - The system warns: *"This lesson appears brief. Consider adding more detail to help learners understand the concept."*
  - The creator can proceed or add more content.

---

### Fully Dressed Format Use Cases

#### 6. Create Coding Exercise

**Primary Actor:** Content Creator

**Stakeholders and Interests:**
- **Content Creator:** Wants to design effective, fair exercises that test specific skills.
- **Learners:** Need clear instructions, fair test cases, and appropriate difficulty.
- **Platform:** Needs quality-controlled exercises that can be auto-graded reliably.

**Preconditions:**
- Content creator must be logged in and authorized.
- Content creator must have at least one path created.

**Postconditions:**
- Exercise is created with complete problem statement, test cases, and model solution.
- Exercise is saved as draft and ready for validation.
- Exercise metadata is stored in the database.

**Main Success Scenario:**
1. The content creator navigates to a path module.
2. The content creator clicks "+ Add Node."
3. The content creator selects "Challenge" as the node type.
4. The content creator clicks "Add Challenge."
5. The system displays the exercise creation wizard:
   - Problem Details
   - Test Cases
   - Model Solution
   - Hints
   - Metadata
6. **Problem Details:** The content creator enters:
   - Exercise title (clear, concise)
   - Problem statement with context
   - Constraints (time limits, input ranges)
7. The content creator writes starter code template (optional).
8. **Test Cases:** The content creator creates test cases:
   - At least 3 test cases (minimum requirement)
   - Mix of edge cases, typical cases, and boundary cases
   - For each test case: input data, expected output, visibility (public/hidden)
   - Test case descriptions explaining what is being tested
9. The content creator marks 2-3 test cases as public (visible to learners).
10. The content creator marks remaining cases as hidden (for final validation).
11. **Model Solution:** The content creator writes a reference solution:
   - Correct, efficient code in the target language
   - Well-commented for educational value
   - Multiple approaches (optimal, brute-force, alternative methods)
12. The content creator runs the model solution against all test cases.
13. The system validates that the model solution passes all test cases.
14. **Hints:** The content creator creates progressive hints:
    - Level 1: Conceptual hint (approach suggestion)
    - Level 2: Algorithmic hint (specific strategy)
    - Level 3: Implementation hint (code structure)
15. **Metadata:** The content creator sets:
    - Difficulty level (Beginner/Intermediate/Advanced)
    - Estimated time to complete
    - Skill tags (e.g., "arrays", "sorting", "dynamic-programming")
    - XP reward value
16. The content creator clicks "Save as Draft."
17. The system saves the exercise in draft status.
18. The system displays: *"Exercise saved successfully! Proceed to validation when ready."*
19. The content creator can:
    - Continue editing
    - Submit for validation
    - Delete draft
20. The content creator clicks "Submit for Validation."
21. The system transitions to Use Case 16 (Validate Exercise Before Publishing).

**Alternative Scenarios:**

**A1. Insufficient Test Cases**
- At Step 16, if fewer than 3 test cases exist:
  - The system displays: *"Add at least 3 test cases before saving."*
  - Save is blocked until minimum requirement is met.

**A2. Model Solution Fails Test Cases**
- At Step 13, if the model solution doesn't pass all tests:
  - The system displays: *"Your model solution failed test case [X]. Expected: [Y], Got: [Z]."*
  - The creator must fix either the solution or the test case before saving.

**A3. Missing Required Fields**
- At Step 16, if mandatory fields are empty:
  - The system displays: *"Complete all required fields: [List]"*
  - Incomplete sections are highlighted in red.

**Extensions:**

**E1. Complexity Analysis Addition**
- Creator adds Big O notation explanations:
  - Time complexity of optimal solution
  - Space complexity analysis
  - Comparison with alternative approaches
- This enhances educational value.

**E2. Interactive Test Case Builder**
- System provides GUI to build test cases:
  - Generate random inputs within constraints
  - Automatically compute expected outputs using model solution
  - Visualize test coverage

**E3. Import from External Sources**
- Creator can import exercise templates from:
  - Other platforms (with proper attribution)
  - Previous exercises (as starting point)
  - Community-contributed templates

**E4. Multiple Programming Languages**
- If the exercise supports multiple languages:
  - Creator must provide model solutions in each language.
  - Each solution is validated independently before saving.
  - Language-specific hints may be needed.

**Special Requirements:**
- All data must be auto-saved every 2 minutes to prevent loss.
- Draft exercises are only visible to the creator.
- Model solutions must be encrypted in the database.
- System must support Python, JavaScript, and eventually Java/C++.
- Problem statements must pass basic grammar check before saving.
- Exercise creation interface must be accessible via keyboard navigation.

**Frequency of Use:**
- High frequency during initial course development.
- Moderate ongoing use as creators add content.
- Estimated 10-20 exercises created per active content creator per month.

**Open Issues:**
- Should we allow saving incomplete exercises with warnings?
- How long should drafts be retained before auto-deletion?
- Should creators earn points for creating quality exercises?

---


## Learner Use Cases

---

### Brief Format Use Cases

#### 1. View Profile

The learner views their profile information including avatar, bio, learning goals, and XP progress.

#### 2. Change Theme

The learner switches between dark and light mode in the editor settings (or using switch sun/moon icon).

#### 3. View Badges

The learner views their earned badges and achievements in their profile gallery.

#### 4. Check Streak

The learner checks their current daily learning streak and streak milestones.

#### 5. View Leaderboard

The learner views global, weekly, or friend-based leaderboards showing XP rankings.

---

### Casual Format Use Cases

#### 6. Track Progress and View Learning Analytics

**Actor:** Learner

**Main Success Scenario:**
1. The learner navigates to the "Progress & Analytics" section from the dashboard.
2. The system displays a comprehensive dashboard with two main views:
   - **Progress Overview**
   - **Detailed Analytics**
3. **Progress Overview Section** displays:
   - Completed modules and lessons
   - Current XP and level
   - Skill mastery percentages
   - Time spent learning
   - Streak information
4. **Detailed Analytics Section** displays:
   - Accuracy rates per skill
   - Time-to-completion trends
   - Learning velocity
   - Performance metrics with charts and graphs

**Alternative Scenarios:**

**A1. No Progress Data**
- At Step 2, if the learner hasn't completed any content:
  - The system displays: *"Start your learning journey! Complete lessons to see your progress and analytics here."*
  - Shows sample analytics dashboard with demo data

**A2. Data Loading Delays**
- At Step 2, if analytics take time to compile:
  - The system displays progress indicator: *"Loading your analytics... This may take a moment."*
  - Shows cached data with timestamp while fresh data loads

---

#### 7. Earn XP and Level Up

**Actor:** Learner

**Main Success Scenario:**
1. The learner completes a lesson, quiz, or challenge.
2. The system calculates earned XP based on:
   - Task difficulty
   - Completion time
   - Accuracy
   - Streak bonuses
3. The system adds XP to the learner's total.
4. If the learner reaches a level threshold, the system triggers level-up animation.
5. The learner sees a congratulatory message with new level badge.
6. The system unlocks new content or features appropriate to the new level.

**Alternative Scenarios:**

**A1. Bonus XP Earned**
- At Step 2, if the learner completes on the first attempt or maintains a streak, the system displays:
  *"Bonus XP! You earned +[X] extra points for [reason]."*

---
