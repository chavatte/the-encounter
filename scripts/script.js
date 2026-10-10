function setLanguage(lang) {
  document.getElementById("btn-pt").classList.remove("active");
  document.getElementById("btn-en").classList.remove("active");
  document.getElementById("content-pt").classList.remove("active");
  document.getElementById("content-en").classList.remove("active");
  document.getElementById("btn-" + lang).classList.add("active");
  document.getElementById("content-" + lang).classList.add("active");

  const heroImg = document.getElementById("hero-img");
  const ogImage = document.getElementById("og-image");
  const favicon = document.getElementById("favicon");
  const audioElement = document.getElementById("narration-audio");
  const audioSource = document.getElementById("audio-source");
  const audioLabel = document.getElementById("audio-label");
  const wasPlaying = !audioElement.paused;

  heroImg.style.opacity = 0;

  setTimeout(() => {
    heroImg.onload = () => {
      heroImg.style.opacity = 1;
    };

    if (lang === "pt") {
      document.getElementById("main-title").innerText =
        "O Pão, o Cão e o Menino";
      document.getElementById("main-subtitle").innerText =
        "Uma Epifania Secular sobre a Invisibilidade";
      document.title = "O Pão, o Cão e o Menino";
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute(
          "content",
          "O Pão, o Cão e o Menino | Uma Epifania Secular",
        );

      heroImg.src = "./assets/images/hero.png";
      heroImg.alt = "Ilustração de Vicente e o morador de rua";
      ogImage.setAttribute("content", "./assets/images/hero.png");
      favicon.href = "./assets/images/hero.png";
      audioLabel.innerText = "Ouça a narração desta crônica:";
      audioSource.src = "./assets/audio/audio_pt.mp3";
    } else {
      document.getElementById("main-title").innerText =
        "The Bread, the Dog, and the Boy";
      document.getElementById("main-subtitle").innerText =
        "A Secular Epiphany on Invisibility";
      document.title = "The Bread, the Dog, and the Boy";
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute(
          "content",
          "The Bread, the Dog, and the Boy | A Secular Epiphany",
        );

      heroImg.src = "./assets/images/hero-en.png";
      heroImg.alt = "Illustration of Vicente and the homeless man";
      ogImage.setAttribute("content", "./assets/images/hero-en.png");
      favicon.href = "./assets/images/hero-en.png";
      audioLabel.innerText = "Listen to the narration:";
      audioSource.src = "./assets/audio/audio_en.mp3";
    }
    audioElement.load();
    if (wasPlaying) {
      audioElement
        .play()
        .catch((e) => console.log("Autoplay prevented by browser policy"));
    }
    setTimeout(() => {
      heroImg.style.opacity = 1;
    }, 50);
  }, 150);
}
