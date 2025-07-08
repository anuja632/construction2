(() => {
  const track = document.getElementById("track");
  const cards = Array.from(track.children);
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const dotsBox = document.getElementById("dots");

  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = () => activate(i, true);
    dotsBox.appendChild(dot);
  });
  const dots = Array.from(dotsBox.children);

  let current = 0;

  function center(i) {
    const card = cards[i];
    const start = card.offsetLeft;
    const wrapWidth = track.clientWidth;
    const cardWidth = card.clientWidth;
    track.scrollTo({
      left: start - (wrapWidth / 2 - cardWidth / 2),
      behavior: "smooth"
    });
  }

  function toggleUI(i) {
    cards.forEach((c, k) => c.toggleAttribute("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
    prev.disabled = i === 0;
    next.disabled = i === cards.length - 1;
  }

  function activate(i, scroll) {
    if (i === current) return;
    current = i;
    toggleUI(i);
    if (scroll) center(i);
  }

  function go(step) {
    activate(Math.min(Math.max(current + step, 0), cards.length - 1), true);
  }

  prev.onclick = () => go(-1);
  next.onclick = () => go(1);

  cards.forEach((card, i) => {
    card.addEventListener("click", () => activate(i, true));
  });

  toggleUI(0);
  center(0);
})();


  const teamData = [
    {
      name: "Ralph Edwards",
      role: "Junior Worker",
      desc: "Ralph is a dedicated junior technician with 3 years of on-site experience. He focuses on structural inspections and team coordination.",
      image: "https://starplatethemes.com/php/billdins/assets/images/team/team-v1-img4.png"
    },
    {
      name: "John Carter",
      role: "Senior Engineer",
      desc: "John is a civil engineer specializing in foundation and structural design. He ensures every structure stands the test of time.",
      image: "https://starplatethemes.com/php/billdins/assets/images/team/team-v1-img3.png"
    },
    {
      name: "Ajay Kumar",
      role: "Architect",
      desc: "Ajay crafts efficient layouts and stunning building facades. His design philosophy combines function and beauty.",
      image: "https://starplatethemes.com/php/billdins/assets/images/team/team-v1-img1.png"
    },
    {
      name: "David Lee",
      role: "Project Manager",
      desc: "David oversees end-to-end project execution, client communication, and milestone deliveries with precision.",
      image: "https://starplatethemes.com/php/billdins/assets/images/team/team-v1-img2.png"
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
