/** GENERAL FEEDBACK:
 * Great job getting all test cases to pass! Love the use of FormData! 
 */

const handleSubmit = () => {
  /** FEEDBACK: This line of code should be outside, or in a runner function! Hint: main() */
    const form = document.getElementById('new-user-form');
    /** FEEDBACK: The code in the callback function that is in the event handler should be inside of the function handleSubmit!  */
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
