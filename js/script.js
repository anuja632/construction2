  const teamData = [
    {
      name: "Ralph Edwards",
      role: "Junior Worker",
      desc: "Ralph is a dedicated junior technician with 3 years of on-site experience. He focuses on structural inspections and team coordination.",
      image: "image/team1.avif"
    },
    {
      name: "John Carter",
      role: "Senior Engineer",
      desc: "John is a civil engineer specializing in foundation and structural design. He ensures every structure stands the test of time.",
      image: "image/team2.avif"
    },
    {
      name: "Ajay Kumar",
      role: "Architect",
      desc: "Ajay crafts efficient layouts and stunning building facades. His design philosophy combines function and beauty.",
      image: "image/team3.jpg"
    },
    {
      name: "David Lee",
      role: "Project Manager",
      desc: "David oversees end-to-end project execution, client communication, and milestone deliveries with precision.",
      image: "image/team4.jpg"
    }
  ];

  function setProfile(index) {
    const selected = teamData[index];
    document.getElementById("profile-name").textContent = selected.name;
    document.getElementById("profile-role").textContent = selected.role;
    document.getElementById("profile-desc").textContent = selected.desc;
    document.getElementById("profile-img").src = selected.image;

    // Update active image
    const thumbnails = document.querySelectorAll(".team-thumbnails img");
    thumbnails.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

