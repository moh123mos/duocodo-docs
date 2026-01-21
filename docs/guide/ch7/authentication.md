# 7.1 Authentication Screens

This section presents the user authentication flow, including login, registration, OTP verification, password management, and username setup.

<div class="ui-gallery">

<div id="Figure71" class="ui-item">
    <img src="/assets/CH07/Figure_7.1_Desktop-login.png" alt="Login Screen">
    <p><strong>Figure 7.1:</strong> Login Screen</p>
</div>

<div id="Figure72" class="ui-item">
    <img src="/assets/CH07/Figure_7.2_Desktop-register.png" alt="Registration Screen">
    <p><strong>Figure 7.2:</strong> Registration Screen</p>
</div>

<div id="Figure73" class="ui-item">
    <img src="/assets/CH07/Figure_7.3_Desktop-OTP.png" alt="OTP Verification Screen">
    <p><strong>Figure 7.3:</strong> OTP Verification Screen</p>
</div>

<div id="Figure74" class="ui-item">
    <img src="/assets/CH07/Figure_7.4_Desktop-Password.png" alt="Password Entry Screen">
    <p><strong>Figure 7.4:</strong> Password Entry Screen</p>
</div>

<div id="Figure75" class="ui-item">
    <img src="/assets/CH07/Figure_7.5_Desktop-New-Password.png" alt="New Password Creation Screen">
    <p><strong>Figure 7.5:</strong> New Password Creation Screen</p>
</div>

<div id="Figure76" class="ui-item">
    <img src="/assets/CH07/Figure_7.6_Desktop-User-name.png" alt="Set Username">
    <p><strong>Figure 7.6:</strong> Set Username</p>
</div>

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
