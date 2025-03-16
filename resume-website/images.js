// images.js
const LOGO = {
    // Timeline logos:
    lehigh: "https://media.licdn.com/dms/image/v2/D4E0BAQHmhyMQACBQTQ/company-logo_100_100/company-logo_100_100/0/1691769642538/lehigh_university_logo?e=1750291200&v=beta&t=ow7QDDGpn3wNTO3HR8gKDw5Qp8ctaZZys6xKt4WkPZY",
    bmw: "https://media.licdn.com/dms/image/v2/D4E0BAQEJh5frNLQjtw/company-logo_100_100/company-logo_100_100/0/1716304127775/bmw_of_north_america_llc_logo?e=1750291200&v=beta&t=g6BwwesJT5JgUjppzdMi5nkH9JnHmesr1FAgoH8TzKc",
    reply: "https://media.licdn.com/dms/image/v2/D4E0BAQEkZRKKH0CczA/company-logo_100_100/company-logo_100_100/0/1736244419981/reply_logo?e=1750291200&v=beta&t=vUcGe1g5xzJhvTzCF29TA0HGOI2a8rnuDulvbWu-7yM",
    polito: "https://media.licdn.com/dms/image/v2/C4D0BAQGbyRTmgwi0uw/company-logo_100_100/company-logo_100_100/0/1630550785230/politecnico_di_torino_logo?e=1750291200&v=beta&t=ENl3JfaZz9cKEeJARnAeJz-FexINmK-As86xGwqbFpg",
  
    // Education logos:
    "lehigh-logo": "https://media.licdn.com/dms/image/v2/D4E0BAQHmhyMQACBQTQ/company-logo_100_100/company-logo_100_100/0/1691769642538/lehigh_university_logo?e=1750291200&v=beta&t=ow7QDDGpn3wNTO3HR8gKDw5Qp8ctaZZys6xKt4WkPZY",
    "polito-logo": "https://media.licdn.com/dms/image/v2/C4D0BAQGbyRTmgwi0uw/company-logo_100_100/company-logo_100_100/0/1630550785230/politecnico_di_torino_logo?e=1750291200&v=beta&t=ENl3JfaZz9cKEeJARnAeJz-FexINmK-As86xGwqbFpg"
  };
  
  // On DOM ready, we dynamically apply the image links:
  window.addEventListener("DOMContentLoaded", function () {
    // 1. For the timeline containers
    const containers = document.querySelectorAll(".container");
    containers.forEach((container) => {
      const brand = container.getAttribute("data-brand");
      if (brand && LOGO[brand]) {
        // We set a CSS variable for background-image in style.css
        container.style.setProperty("--bg-image", `url('${LOGO[brand]}')`);
      }
    });
  
    // 2. For the education logos (actual <img> tags)
    const eduImgs = document.querySelectorAll("[data-edu-logo]");
    eduImgs.forEach((img) => {
      const key = img.getAttribute("data-edu-logo");
      if (key && LOGO[key]) {
        img.src = LOGO[key];
      }
    });
  });
  