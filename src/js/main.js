import { Bounce, Power1, TweenLite, gsap } from "gsap";

/** Parallax */
document.addEventListener("DOMContentLoaded", function () {
    const $app = document.getElementById("app");
    const $parallaxItems = $app.querySelectorAll(".parallax");
    const fix = 0.0008;

    let $parallax = [].map.call($parallaxItems, (item) => {
        return {
            item,
            speedX: item.getAttribute("data-speed-x"),
            speedY: item.getAttribute("data-speed-y"),
        };
    });

    $app.addEventListener("mousemove", (event) => {
        let pageX = event.screenX / 2 - $app.clientWidth * 0.5;
        let pageY = event.screenY / 2 - $app.clientHeight * 0.5;

        $parallax.forEach((item) => {
            TweenLite.set(item.item, {
                x: (item.item.offsetLeft + pageX * item.speedX) * fix,
                y: (item.item.offsetTop + pageY * item.speedY) * fix,
            });
        });
    });
});

window.addEventListener("resize", () => {
    document.querySelectorAll("[style]").forEach((el) => {
        if (!el.classList.contains("preload")) {
            el.removeAttribute("style");
        }
    });
});
window.addEventListener("load", (event) => {
    pageAnim();

    setInterval(() => {
        document.querySelector(".btn-yellow-big").classList.add("hover");
        setTimeout(() => {
            document.querySelector(".btn-yellow-big").classList.remove("hover");
        }, 1000);
    }, 10000);
});

function pageAnim() {
    let tl = gsap.timeline();
    tl.delay(1)
        .fromTo(
            ".preload .inner",
            1.5,
            { opacity: 1, scale: 1 },
            { opacity: 0, rotate: 360, scale: 0 },
            "start"
        )
        .fromTo(".preload", 0.5, { opacity: 1 }, { opacity: 0 }, "start+=0.8")
        .add("startPage")
        .from(".car", 0.8, { left: "-100%", opacity: 0.5 }, "start+=0.5")
        .from(".slogan", 1, { left: "-100%" }, "start+=1.2")
        .from(".rider", 0.5, { left: "-100%" }, "start+=1")
        .from(".dictor", 0.5, { right: "-100%" }, "start+=1")
        .from("nav .logo", 0.5, { left: "-100%" }, "start+=2")
        .from("nav .btn", 0.5, { right: "-100%" }, "start+=2")
        .fromTo(
            ".make-bet .btn",
            0.5,
            { scale: 0 },
            {
                scale: 1,
                ease: Bounce.easeOut,
                onComplete: function () {
                    document.querySelector(".preload").style.display = "none";
                },
            },
            "start+=2.5"
        )
        .fromTo(
            ".make-bet .bonus",
            0.5,
            { opacity: 0, y: -40 },
            { opacity: 1, y: 0, ease: Power1.easeInOut },
            "start+=3.5"
        )
        .fromTo(
            ".make-bet .rules",
            0.5,
            { opacity: 0, y: -40 },
            { opacity: 1, y: 0, ease: Power1.easeInOut },
            "start+=4"
        )
        .fromTo(
            ".look .btn",
            0.5,
            { scale: 0 },
            { scale: 1, ease: Bounce.easeOut },
            "start+=2.8"
        )
        .fromTo(
            ".look .bonus",
            0.5,
            { opacity: 0, y: -40 },
            { opacity: 1, y: 0, ease: Power1.easeInOut },
            "start+=3.8"
        )
        .from("footer", 0.5, { opacity: 0, bottom: "-100%" }, "start+=3");
}
