# 7.5 Theme Options

This section demonstrates the platform's theme customization capabilities, including dark mode support.

<div class="ui-gallery">

<figure id="Figure718" class="ui-item">
    <img src="/assets/CH07/Figure_7.18_Desktop-Dark-Mode.png" alt="Dark Mode Interface">
    <figcaption><strong>Figure 7.18:</strong> Dark Mode Interface</figcaption>
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

.ui-item p {
    padding: 1rem;
    margin: 0;
    text-align: center;
    background: var(--vp-c-bg-soft);
    font-size: 0.9rem;
}
</style>
