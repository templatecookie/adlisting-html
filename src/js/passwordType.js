function showPassword(id, el) {
    let x = document.getElementById(id);
    if (x.type === 'password') {
        x.type = 'text';
        el.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 3.75012L19.5 20.2501" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5223 14.7749C13.7864 15.4438 12.8149 15.793 11.8215 15.7457C10.8281 15.6983 9.89422 15.2583 9.22524 14.5225C8.55626 13.7866 8.20698 12.8151 8.25424 11.8217C8.3015 10.8283 8.74142 9.89439 9.47724 9.22534" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.93698 6.43079C3.11486 8.36631 1.5 12.0001 1.5 12.0001C1.5 12.0001 4.5 18.7494 12 18.7494C13.7572 18.7634 15.4926 18.3587 17.0623 17.5687" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5571 15.8532C21.6011 14.0225 22.5 12.0001 22.5 12.0001C22.5 12.0001 19.5 5.24941 12 5.24941C11.3504 5.24834 10.7019 5.30115 10.061 5.40729" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.7056 8.31653C13.5026 8.46958 14.2285 8.87692 14.7745 9.47747C15.3204 10.078 15.6569 10.8394 15.7335 11.6473" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
    } else {
        x.type = 'password';
        el.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.24927C4.5 4.24927 1.5 12.0001 1.5 12.0001C1.5 12.0001 4.5 19.7493 12 19.7493C19.5 19.7493 22.5 12.0001 22.5 12.0001C22.5 12.0001 19.5 4.24927 12 4.24927Z" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        }
}
