/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = () => {
    const form = document.getElementById('new-user-form');

    form.addEventListener('submit', (stuff) => {
        stuff.preventDefault(); 

        const formData = new FormData(stuff.target);
        const { username, codingLevel, location, didLikeAssignment } = Object.fromEntries(formData);

        document.getElementById('results-username').textContent = username;
        document.getElementById('results-coding-level').textContent = codingLevel;
        document.getElementById('results-location').textContent = location;
        document.getElementById('results-did-like-assignment').textContent = didLikeAssignment === 'on' ? 'Yes' : 'No';

        stuff.target.reset();
    });
};

handleSubmit(); 
