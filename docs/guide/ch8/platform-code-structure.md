# 8.6 Platform Code Structure

The platform codebase is organized into modular frontend dashboards for each user role and a comprehensive set of backend API endpoints that power the core functionality of the learning ecosystem.

<div class="ui-gallery">

<figure id="Figure839" class="ui-item">
    <img src="/assets/CH08/Figure_8.39_Platform-Code-Frontend-Student_Dashboard.png" alt="Frontend Student Dashboard Code">
    <figcaption><strong>Figure 8.39:</strong> Frontend Student Dashboard Code</figcaption>
</figure>

<figure id="Figure840" class="ui-item">
    <img src="/assets/CH08/Figure_8.40_Platform-Code-Frontend-Creator_Dashboard.png" alt="Frontend Creator Dashboard Code">
    <figcaption><strong>Figure 8.40:</strong> Frontend Creator Dashboard Code</figcaption>
</figure>

<figure id="Figure841" class="ui-item">
    <img src="/assets/CH08/Figure_8.41_Platform-Code-Frontend-Admin_Dashboard.png" alt="Frontend Admin Dashboard Code">
    <figcaption><strong>Figure 8.41:</strong> Frontend Admin Dashboard Code</figcaption>
</figure>

<figure id="Figure842" class="ui-item">
    <img src="/assets/CH08/Figure_8.42_Platform-Code-Backend_API-Skill_Tree.png" alt="Backend API Skill Tree">
    <figcaption><strong>Figure 8.42:</strong> Backend API - Skill Tree</figcaption>
</figure>

<figure id="Figure843" class="ui-item">
    <img src="/assets/CH08/Figure_8.43_Platform-Code-Backend_API-Code_Submission.png" alt="Backend API Code Submission">
    <figcaption><strong>Figure 8.43:</strong> Backend API - Code Submission</figcaption>
</figure>

<figure id="Figure844" class="ui-item">
    <img src="/assets/CH08/Figure_8.44_Platform-Code-Backend_API-Generate_Chat_Script_By_AI.png" alt="Backend API Generate Chat Script">
    <figcaption><strong>Figure 8.44:</strong> Backend API - Generate Chat Script By AI</figcaption>
</figure>

<figure id="Figure845" class="ui-item">
    <img src="/assets/CH08/Figure_8.45_Platform-Code-Backend_API-Manage_Creators_Applications_By_Admin.png" alt="Backend API Manage Creator Applications">
    <figcaption><strong>Figure 8.45:</strong> Backend API - Manage Creator Applications By Admin</figcaption>
</figure>

</div>

<style>
.ui-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.ui-item {
    border: 1px solid var(--vp-c-divider);
    max-height: 200mm;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    img {
        max-height: 160mm;
        max-width: 100%;
        border-radius: 5px;
    }
}

.ui-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.ui-item img {
    width: 100%;
    height: auto;
    display: block;
}

.ui-item figcaption {
    padding: 1rem;
    margin: 0;
    text-align: center;
    background: var(--vp-c-bg-soft);
    font-size: 0.9rem;
}
</style>

