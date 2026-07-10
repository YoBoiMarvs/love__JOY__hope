window.onload = () => {
  const textbox1 = document.getElementById("message1");
  const text1 = "Wassup, ate Darlene! Are you Ready for a Party?!";
  let i = 0;
  function typeWriter(textbox, text) {
    if (i < text.length) {
      textbox.textContent += text.charAt(i);
      i++;
      setTimeout(() => typeWriter(textbox, text), 25);
    }
  }
  typeWriter(textbox1, text1);

  const noBtn = document.getElementById("no_btn");
  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";
    });
  }

  if (localStorage.getItem("play") === "true")
    { document.getElementById("chipi").play();
    localStorage.removeItem("play")}
}

function yesBtn_clicked() {
    localStorage.setItem("play","true")
    window.location.href="page2.html"
}

function nextBtn_clicked() {
    window.location.href="page3.html"
}

function updateTimer() {
  const birthday = new Date("2004-07-16T00:00:00");
  const now = new Date();
  const diff = now - birthday;

  let years = now.getFullYear() - birthday.getFullYear();
  let months = now.getMonth() - birthday.getMonth();
  let days = now.getDate() - birthday.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("ymd").textContent =
    `${years} Years | ${months} Months | ${days} Days`;
  document.getElementById("hms").textContent =
    `${hours} Hours | ${minutes} Minutes | ${seconds} Seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();

function heart_clicked() {
  const bird_container = document.getElementById("bird_container");
  const bird = document.createElement("img");
  bird.src = "bird.png";
  bird.id = "bird";
  bird.style.position = "absolute";
  bird.style.top = "50%";
  bird.style.left = "40%";
  bird.style.transform = "translate(-50%, -50%)";
  bird.style.width = "20vw";
  bird.style.zIndex = "3";
  bird.style.animation = "flyDown 3s linear forwards, wiggle 2s ease-in-out infinite";
  bird_container.appendChild(bird);


  setTimeout(() => {
    bird.remove();

    const letter_container = document.getElementById("letter_container");
    letter_container.style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }, 4000);

  const love_button = document.getElementById("love_button");
  love_button.disabled = true;
  }