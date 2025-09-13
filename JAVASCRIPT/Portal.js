 // Application Form Navigation
    const steps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const form = document.getElementById("applicationForm");
    const modal = document.getElementById("successModal");
    const closeModal = document.getElementById("closeModal");

    let currentStep = 0;

    // Navigation buttons
    nextBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        steps[currentStep].classList.remove("active");
        currentStep--;
        steps[currentStep].classList.add("active");
      });
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Collect form data
      const formData = {
        fullname: form.fullname.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        course: form.course.value,
        startdate: form.startdate.value,
        experience: form.experience.value.trim(),
        goals: form.goals.value.trim(),
        reference: form.reference.value,
        date: new Date().toISOString().split("T")[0]
      };

      // Save application to localStorage
      let applications = JSON.parse(localStorage.getItem("applications")) || [];
      applications.push(formData);
      localStorage.setItem("applications", JSON.stringify(applications));

      // Show success modal
      modal.style.display = "flex";
    });

    // Close modal and reset form
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      form.reset();
      currentStep = 0;
      steps.forEach(step => step.classList.remove("active"));
      steps[0].classList.add("active");
    });

    // Admin Functions
    function showAdminLogin() {
      document.getElementById('loginContainer').style.display = 'block';
      document.querySelector('.application-form').style.display = 'none';
      document.querySelector('.hero').style.display = 'none';
    }

    function loginAdmin() {
      const username = document.getElementById('adminUser').value;
      const password = document.getElementById('adminPass').value;
      
      // Simple authentication
      if(username === "admin" && password === "1234") {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'block';
        loadApplications();
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }

    function logoutAdmin() {
      document.getElementById('adminDashboard').style.display = 'none';
      document.querySelector('.application-form').style.display = 'block';
      document.querySelector('.hero').style.display = 'block';
      document.getElementById('adminUser').value = '';
      document.getElementById('adminPass').value = '';
    }

    function loadApplications() {
      const applications = JSON.parse(localStorage.getItem('applications')) || [];
      const tableBody = document.getElementById('submissionsTable');
      
      tableBody.innerHTML = '';
      
      applications.forEach((app, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${app.fullname || ''}</td>
          <td>${app.email || ''}</td>
          <td>${app.phone || ''}</td>
          <td>${app.course || ''}</td>
          <td>${app.startdate || ''}</td>
          <td>${app.experience ? app.experience.substring(0, 50) + (app.experience.length > 50 ? '...' : '') : ''}</td>
          <td>${app.goals ? app.goals.substring(0, 50) + (app.goals.length > 50 ? '...' : '') : ''}</td>
          <td><button onclick="deleteApplication(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
      });
    }

    function deleteApplication(index) {
      let applications = JSON.parse(localStorage.getItem('applications')) || [];
      applications.splice(index, 1);
      localStorage.setItem('applications', JSON.stringify(applications));
      loadApplications();
    }