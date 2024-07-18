        <!-- Content goes here -->

        <script>
            // JavaScript to toggle the mobile menu
            const toggleBtn = document.querySelector('.toggle_btn');
            const navLinks = document.querySelector('.links');

            toggleBtn.addEventListener('click', () => {
                navLinks.classList.toggle('open');
            });
        </script>
