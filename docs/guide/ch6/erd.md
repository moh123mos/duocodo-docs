<style>
figure {
    text-align: center;
}
</style>

# Chapter 6: Database Design

## 6.1 Entity Relationship Diagram

Entity Relationship Diagrams (ERD) represent the data model of the DuoCodo platform, showing the entities, their attributes, and the relationships between them. This comprehensive database design ensures data integrity, efficient querying, and scalability.

[[toc]]

---

## Part 1: User Management and Authentication

This section presents the core entities for user management, including user accounts, roles, authentication mechanisms, and profile information. It establishes the foundation for user identity and access control.

<figure>
    <img src="/assets/CH06/ERD/Figure_6.47_ERD-Part1.svg" alt="Figure 6.47: User Management and Authentication ERD">
    <figcaption>Figure 6.47: Entity Relationship Diagram - User Management and Authentication</figcaption>
</figure>

---

## Part 2: Learning Content and Course Structure

This section illustrates the entities related to educational content organization, including courses, lessons, modules, exercises, and learning paths. It shows how content is structured and interconnected within the platform.

<figure>
    <img src="/assets/CH06/ERD/Figure_6.48_ERD-Part2.svg" alt="Figure 6.48: Learning Content and Course Structure ERD">
    <figcaption>Figure 6.48: Entity Relationship Diagram - Learning Content and Course Structure</figcaption>
</figure>

---

## Part 3: Progress Tracking and Gamification

This section demonstrates the entities that track learner progress, achievements, experience points (XP), badges, streaks, and leaderboard rankings. It shows how the platform motivates learners through gamification elements.

<figure>
    <img src="/assets/CH06/ERD/Figure_6.49_ERD-part3.svg" alt="Figure 6.49: Progress Tracking and Gamification ERD">
    <figcaption>Figure 6.49: Entity Relationship Diagram - Progress Tracking and Gamification</figcaption>
</figure>

---

## Part 4: Assessment and Certification

This section shows the entities for quizzes, assessments, test cases, submissions, grading, and certifications. It demonstrates how the platform evaluates learner competency and issues credentials.

<figure>
    <img src="/assets/CH06/ERD/Figure_6.50_ERD-part4.svg" alt="Figure 6.50: Assessment and Certification ERD">
    <figcaption>Figure 6.50: Entity Relationship Diagram - Assessment and Certification</figcaption>
</figure>

---

## Part 5: Social Features and Community

This section presents the entities that enable social interactions, including comments, discussions, friend connections, notifications, sharing, and community engagement features.

<figure>
    <img src="/assets/CH06/ERD/Figure_6.51_ERD-part5.svg" alt="Figure 6.51: Social Features and Community ERD">
    <figcaption>Figure 6.51: Entity Relationship Diagram - Social Features and Community</figcaption>
</figure>

---

## Part 6: Administration and System Management

This section illustrates the entities for platform administration, including system logs, analytics, content moderation, reports, backups, and monitoring capabilities.

<figure>
    <img src="/assets/CH06/ERD/Figure_6.52_ERD-part6.svg" alt="Figure 6.52: Administration and System Management ERD">
    <figcaption>Figure 6.52: Entity Relationship Diagram - Administration and System Management</figcaption>
</figure>

---

## Database Design Principles

The ERD design follows these key principles:

- **Normalization**: Entities are normalized to reduce data redundancy and improve data integrity
- **Referential Integrity**: Foreign key relationships ensure data consistency across tables
- **Scalability**: Design supports horizontal and vertical scaling for growing user base
- **Performance**: Indexed fields and optimized relationships for efficient queries
- **Flexibility**: Schema allows for future extensions and feature additions
- **Security**: Sensitive data fields include encryption and access control mechanisms

These diagrams provide a comprehensive view of the DuoCodo platform's data architecture, showing how information is stored, organized, and related to support all system functionalities.