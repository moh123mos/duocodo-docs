# 8.5 Mobile Architecture

The mobile application follows a clean architecture pattern with well-defined repository and service layers for authentication, user profiles, and learning path management.

<div class="ui-gallery">

<figure id="Figure831" class="ui-item">
    <img src="/assets/CH08/Figure_8.31_mobile-auth_repo_1.png" alt="Mobile Auth Repository 1">
    <figcaption><strong>Figure 8.31:</strong> Mobile Auth Repository 1</figcaption>
</figure>

<figure id="Figure832" class="ui-item">
    <img src="/assets/CH08/Figure_8.32_mobile-auth_repo_2.png" alt="Mobile Auth Repository 2">
    <figcaption><strong>Figure 8.32:</strong> Mobile Auth Repository 2</figcaption>
</figure>

<figure id="Figure833" class="ui-item">
    <img src="/assets/CH08/Figure_8.33_mobile-auth_service_1.png" alt="Mobile Auth Service 1">
    <figcaption><strong>Figure 8.33:</strong> Mobile Auth Service 1</figcaption>
</figure>

<figure id="Figure834" class="ui-item">
    <img src="/assets/CH08/Figure_8.34_mobile-auth_service_2.png" alt="Mobile Auth Service 2">
    <figcaption><strong>Figure 8.34:</strong> Mobile Auth Service 2</figcaption>
</figure>

<figure id="Figure835" class="ui-item">
    <img src="/assets/CH08/Figure_8.35_mobile-user_model.png" alt="Mobile User Model">
    <figcaption><strong>Figure 8.35:</strong> Mobile User Model</figcaption>
</figure>

<figure id="Figure836" class="ui-item">
    <img src="/assets/CH08/Figure_8.36_mobile-profile_repo.png" alt="Mobile Profile Repository">
    <figcaption><strong>Figure 8.36:</strong> Mobile Profile Repository</figcaption>
</figure>

<figure id="Figure837" class="ui-item">
    <img src="/assets/CH08/Figure_8.37_mobile-learning_path_repo_1.png" alt="Mobile Learning Path Repository 1">
    <figcaption><strong>Figure 8.37:</strong> Mobile Learning Path Repository 1</figcaption>
</figure>

<figure id="Figure838" class="ui-item">
    <img src="/assets/CH08/Figure_8.38_mobile-learning_path_repo_2.png" alt="Mobile Learning Path Repository 2">
    <figcaption><strong>Figure 8.38:</strong> Mobile Learning Path Repository 2</figcaption>
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

