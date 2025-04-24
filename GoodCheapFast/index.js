const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
        const checkedToggles = [good, cheap, fast].filter(t => t.checked);

        if (checkedToggles.length > 2) {
            for (let t of [good, cheap, fast]) {
                if (t !== toggle && t.checked) {
                    t.checked = false;
                    break;
                }
            }
        }
        const afterChange = [good, cheap, fast].filter(t => t.checked);
        if (afterChange.length < 2) {
            toggle.checked = true;
        }
    });
});
