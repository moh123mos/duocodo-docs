# Chapter 5: System Architecture

## 5.1 Use Cases Model

| Actor | Goals |
|-------|-------|
| **Learner** | 1. Register, log in, and manage their own profiles.<br>2. Choose preferred programming languages and interface languages.<br>3. Follow structured learning paths and unlock lessons progressively.<br>4. Learn via text, videos, and interactive demos.<br>5. Practice coding using Monaco Editor with syntax highlighting, auto-completion, and real-time feedback.<br>6. Receive AI-powered hints, explanations, and recommendations.<br>7. Complete exercises, earn XP, badges, and certifications.<br>8. Track progress, mastery, and performance analytics.<br>9. Participate in leaderboards, streaks, and challenges. |
| **Content Creator / Instructor** | 1. Create and manage courses, lessons, and coding exercises.<br>2. Categorize exercises by difficulty and validate before publishing.<br>3. Add multimedia (videos, images) and localized content.<br>4. Review and update educational materials.<br>5. Generate content in different formats (text, code, interactive demos). |
| **Administrator** | 1. Manage user accounts and assign roles/permissions.<br>2. Monitor platform analytics and logs.<br>3. Moderate content and enforce warnings or removals.<br>4. Oversee data security, backups, and system performance. **"*-*"**<br>5. Configure integrations and APIs for external services. **"*-*"** |
| **AI System<br>(Gemini / OpenRouter)** | 1. Provide contextual hints and adaptive learning recommendations.<br>2. Analyze learner code to detect errors and suggest improvements.<br>3. Generate additional exercises and code examples. **"*-*"**<br>4. Adjust hint complexity based on user skill level. **"*-*"** |
| **System<br>(Platform / App)** | 1. Securely store and manage user data.<br>2. Execute and validate user code safely.<br>3. Deliver responsive and cross-platform experiences.<br>4. Integrate with external authentication and AI APIs.<br>5. Enforce data protection, input validation, and DDoS prevention. |
